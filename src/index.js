// ---------------------------
// Bangla Digits
// ---------------------------
const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// ---------------------------
// Default Options (No change)
// ---------------------------
const defaultOptions = {
  showCurrency: true,
  currency: "৳",
  showCommas: true,
  showTakaWord: true,
  trimLeadingZeros: true,
  showFraction: true,
  fractionPrecision: 2,
  fractionUnit: "পয়সা",
  negativeFormat: "minus",
  abbreviation: false,
  template: "{currency}{amount} ({text})",
  useTraditionalScale: false,
  showEnglishEquivalent: false,
};

// ---------------------------
// Units & Scales (No change)
// ---------------------------
const ones = ["", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়"];
const teens = [
  "দশ",
  "এগারো",
  "বারো",
  "তেরো",
  "চৌদ্দ",
  "পনেরো",
  "ষোল",
  "সতেরো",
  "আঠারো",
  "উনিশ",
];
const tens = [
  "",
  "",
  "বিশ",
  "ত্রিশ",
  "চল্লিশ",
  "পঞ্চাশ",
  "ষাট",
  "সত্তর",
  "আশি",
  "নব্বই",
];

// ---------------------------
// Traditional Scale: Extended English equivalents for larger numbers
// ---------------------------
const englishEquivalents = {
  অর্বুদ: "এক বিলিয়ন", // 10^9
  খর্ব: "দশ বিলিয়ন", // 10^10
  নিল: "একশ বিলিয়ন", // 10^11
  পদ্ম: "এক ট্রিলিয়ন", // 10^12
  শঙ্খ: "দশ ট্রিলিয়ন", // 10^13
  মহাশঙ্খ: "একশ ট্রিলিয়ন", // 10^14
  অন্ত্য: "এক কোয়াড্রিলিয়ন", // 10^15
  মধ্য: "দশ কোয়াড্রিলিয়ন", // 10^16
  পরার্ধ: "একশ কোয়াড্রিলিয়ন", // 10^17
  অপরার্ধ: "এক কুইন্টিলিয়ন", // 10^18
  উৎপল: "দশ কুইন্টিলিয়ন", // 10^19
  নিকুমুদ: "একশ কুইন্টিলিয়ন", // 10^20
};

// ---------------------------
// Helper: convert 0-99 to Bangla text (No change)
// ---------------------------
function convertBelowHundred(num) {
  // Input must be a regular number (0-99)
  if (num === 0) return "";
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];

  const t = Math.floor(num / 10);
  const o = num % 10;
  return tens[t] + (o > 0 ? " " + ones[o] : "");
}

// ---------------------------
// Helper: convert 0-999 to Bangla text (No change)
// ---------------------------
function convertBelowThousand(num) {
  // Input must be a regular number (0-999)
  if (num === 0) return "";

  const h = Math.floor(num / 100);
  const rem = num % 100;

  let text = "";
  if (h > 0) {
    text = ones[h] + " শত";
    if (rem > 0) text += " " + convertBelowHundred(rem);
  } else {
    text = convertBelowHundred(rem);
  }

  return text;
}

// ---------------------------
// Convert number using MODERN scale (Final Fix using BigInt)
// ---------------------------
function numberToBanglaModern(num) {
  if (num === 0) return "শূন্য";

  // Use BigInt for precise calculation of large numbers
  let remainingNum;
  try {
    remainingNum = BigInt(Math.floor(num));
  } catch (e) {
    return "সংখ্যাটি অনেক বড় (BigInt Error)";
  }

  // Modern Units (divisors as BigInts) - Extended for very large numbers up to 10^20
  const modernUnits = [
    [BigInt("100000000000000000000"), "দশ হাজার কোটি কোটি কোটি"], // 10^20
    [BigInt("10000000000000000000"), "হাজার কোটি কোটি কোটি"], // 10^19
    [BigInt("1000000000000000000"), "একশ কোটি কোটি কোটি"], // 10^18
    [BigInt("100000000000000000"), "দশ কোটি কোটি কোটি"], // 10^17
    [BigInt("10000000000000000"), "এক কোটি কোটি কোটি"], // 10^16
    [BigInt("1000000000000000"), "এক হাজার কোটি কোটি"], // 10^15
    [BigInt("100000000000000"), "কোটি কোটি"], // 10^14
    [BigInt("1000000000000"), "লাখ কোটি"], // 10^12
    [BigInt("10000000000"), "হাজার কোটি"], // 10^10
    [BigInt("10000000"), "কোটি"], // 10^7
    [BigInt("100000"), "লাখ"], // 10^5
    [BigInt("1000"), "হাজার"], // 10^3
  ];

  let parts = [];

  for (const [divisor, unit] of modernUnits) {
    if (remainingNum >= divisor) {
      // BigInt division (/) is used for integer division
      const val = Number(remainingNum / divisor);
      const convertedVal = convertBelowThousand(val);
      if (convertedVal) {
        parts.push(convertedVal + " " + unit);
      }
      remainingNum %= divisor;
    }
  }

  // Handle the remaining part (1-999)
  const finalRem = Number(remainingNum);

  // 100s
  if (finalRem >= 100) {
    const h = Math.floor(finalRem / 100);
    parts.push(ones[h] + " শত");
    remainingNum %= BigInt(100);
  }

  // 1-99
  if (Number(remainingNum) > 0) {
    parts.push(convertBelowHundred(Number(remainingNum)));
  }

  return parts.filter((p) => p && p.trim() !== "").join(" ");
}

// ---------------------------
// Convert number using TRADITIONAL scale (Final Fix using BigInt)
// ---------------------------
function numberToBanglaTraditional(num) {
  if (num === 0) return "শূন্য";

  // Use BigInt for precise calculation of large numbers
  let remainingNum;
  try {
    remainingNum = BigInt(Math.floor(num));
  } catch (e) {
    return "সংখ্যাটি অনেক বড় (BigInt Error)";
  }

  // Traditional Units (divisors as BigInts) - Extended up to 10^20
  const traditionalUnits = [
    [BigInt("100000000000000000000"), "নিকুমুদ"], // 10^20
    [BigInt("10000000000000000000"), "উৎপল"], // 10^19
    [BigInt("1000000000000000000"), "অপরার্ধ"], // 10^18
    [BigInt("100000000000000000"), "পরার্ধ"], // 10^17
    [BigInt("10000000000000000"), "মধ্য"], // 10^16
    [BigInt("1000000000000000"), "অন্ত্য"], // 10^15
    [BigInt("100000000000000"), "মহাশঙ্খ"], // 10^14
    [BigInt("10000000000000"), "শঙ্খ"], // 10^13
    [BigInt("1000000000000"), "পদ্ম"], // 10^12
    [BigInt("100000000000"), "নিল"], // 10^11
    [BigInt("10000000000"), "খর্ব"], // 10^10
    [BigInt("1000000000"), "অর্বুদ"], // 10^9
    [BigInt("10000000"), "কোটি"], // 10^7
    [BigInt("100000"), "লাখ"], // 10^5
    [BigInt("1000"), "হাজার"], // 10^3
  ];

  let parts = [];

  for (const [divisor, unit] of traditionalUnits) {
    if (remainingNum >= divisor) {
      const val = Number(remainingNum / divisor);
      const convertedVal = convertBelowThousand(val);
      if (convertedVal) {
        parts.push(convertedVal + " " + unit);
      }
      remainingNum %= divisor;
    }
  }

  // Handle the remaining part (1-999)
  const finalRem = Number(remainingNum);

  // 100s
  if (finalRem >= 100) {
    const h = Math.floor(finalRem / 100);
    parts.push(ones[h] + " শত");
    remainingNum %= BigInt(100);
  }

  // 1-99
  if (Number(remainingNum) > 0) {
    parts.push(convertBelowHundred(Number(remainingNum)));
  }

  return parts.filter((p) => p && p.trim() !== "").join(" ");
}

// ---------------------------
// Add English equivalent, toBanglaMoney, toText, abbreviateNumber
// (Only minor changes for BigInt compatibility in toText/toBanglaMoney)
// ---------------------------
function addEnglishEquivalent(text) {
  let result = text;
  const scales = [
    ["নিকুমুদ", englishEquivalents["নিকুমুদ"]],
    ["উৎপল", englishEquivalents["উৎপল"]],
    ["অপরার্ধ", englishEquivalents["অপরার্ধ"]],
    ["পরার্ধ", englishEquivalents["পরার্ধ"]],
    ["মধ্য", englishEquivalents["মধ্য"]],
    ["অন্ত্য", englishEquivalents["অন্ত্য"]],
    ["মহাশঙ্খ", englishEquivalents["মহাশঙ্খ"]],
    ["শঙ্খ", englishEquivalents["শঙ্খ"]],
    ["পদ্ম", englishEquivalents["পদ্ম"]],
    ["নিল", englishEquivalents["নিল"]],
    ["খর্ব", englishEquivalents["খর্ব"]],
    ["অর্বুদ", englishEquivalents["অর্বুদ"]],
  ];
  for (const [bangla, english] of scales) {
    if (english) {
      // Check if english equivalent exists
      // Use simple string replacement with word boundaries for Bengali
      const regex = new RegExp(`(^|\\s)${bangla}(\\s|$)`, "g");
      result = result.replace(regex, `$1${bangla} (${english})$2`);
    }
  }
  return result;
}

function toBanglaMoney(num, options = {}) {
  const opt = { ...defaultOptions, ...options };
  if (typeof num !== "number" || isNaN(num)) return "";

  let number = opt.trimLeadingZeros ? +num : num;
  let prefix = "";

  if (number < 0) {
    number = Math.abs(number);
    if (opt.negativeFormat === "minus") prefix = "-";
    else if (opt.negativeFormat === "parenthesis") prefix = "(";
  }

  // Handle very large numbers by converting to string before toLocaleString
  let formatted = String(Math.floor(number)).replace(
    /(\d)(?=(\d{2})+\d{3}$)/,
    "$1,"
  ); // Simple manual comma for Indian style
  formatted = formatted.replace(/\d/g, (d) => banglaDigits[parseInt(d)]);

  if (opt.showCurrency) formatted = opt.currency + formatted;
  if (opt.negativeFormat === "parenthesis" && prefix === "(")
    formatted = prefix + formatted + ")";

  return formatted;
}

function toText(num, options = {}) {
  const opt = { ...defaultOptions, ...options };
  let number = opt.trimLeadingZeros ? +num : num;

  if (typeof number !== "number" || isNaN(number)) return "";

  if (number === 0) return opt.showTakaWord ? "শূন্য টাকা" : "শূন্য";

  let prefixText = "";
  if (number < 0) {
    number = Math.abs(number);
    if (opt.negativeFormat === "word") prefixText = "ঋণ ";
  }

  // Use BigInt for integer part if number is huge
  const integerPart = Math.floor(number);
  const fractionPart = Math.round(
    (number - integerPart) * Math.pow(10, opt.fractionPrecision)
  );

  let integerText;
  if (opt.abbreviation) {
    integerText = abbreviateNumber(integerPart, opt.useTraditionalScale);
  } else {
    integerText = opt.useTraditionalScale
      ? numberToBanglaTraditional(integerPart)
      : numberToBanglaModern(integerPart);
  }

  if (opt.useTraditionalScale && opt.showEnglishEquivalent) {
    integerText = addEnglishEquivalent(integerText);
  }

  if (opt.showTakaWord) integerText += " টাকা";

  let fractionText = "";
  if (opt.showFraction && fractionPart > 0) {
    const fractionWords = opt.useTraditionalScale
      ? numberToBanglaTraditional(fractionPart)
      : numberToBanglaModern(fractionPart);
    fractionText = fractionWords + " " + opt.fractionUnit;
  }

  let fullText = [prefixText, integerText, fractionText]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (opt.template) {
    const amountFormatted = toBanglaMoney(number, {
      ...opt,
      showCurrency: false,
    });
    fullText = opt.template
      .replace("{currency}", opt.showCurrency ? opt.currency : "")
      .replace("{amount}", amountFormatted)
      .replace("{text}", fullText);
  }

  return fullText;
}

function abbreviateNumber(num, useTraditional = false) {
  // ... (No change)
  if (useTraditional) {
    if (num >= 1e19)
      return (num / 1e19).toFixed(2).replace(/\.00$/, "") + " পদ্ম";
    if (num >= 1e17)
      return (num / 1e17).toFixed(2).replace(/\.00$/, "") + " শঙ্খ";
    if (num >= 1e15)
      return (num / 1e15).toFixed(2).replace(/\.00$/, "") + " নিখর্ব";
    if (num >= 1e13)
      return (num / 1e13).toFixed(2).replace(/\.00$/, "") + " মহাপদ্ম";
    if (num >= 1e11)
      return (num / 1e11).toFixed(2).replace(/\.00$/, "") + " খর্ব";
    if (num >= 1e9)
      return (num / 1e9).toFixed(2).replace(/\.00$/, "") + " অর্বুদ";
  }

  if (num >= 1e7) return (num / 1e7).toFixed(2).replace(/\.00$/, "") + " কোটি";
  if (num >= 1e5) return (num / 1e5).toFixed(2).replace(/\.00$/, "") + " লাখ";
  if (num >= 1000)
    return (num / 1000).toFixed(2).replace(/\.00$/, "") + " হাজার";

  return useTraditional
    ? numberToBanglaTraditional(num)
    : numberToBanglaModern(num);
}

// ---------------------------
// Export (No change)
// ---------------------------
module.exports = {
  toBanglaMoney,
  toText,
};
