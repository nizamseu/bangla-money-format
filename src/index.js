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
  textInEnglish: false, // New: Convert Bengali text to English
  useShortForm: false, // New: Use short form like 1K, 1M, 1B, 1T
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

// Special compound numbers for Bengali (21-99)
const specialNumbers = {
  21: "একুশ",
  22: "বাইশ",
  23: "তেইশ",
  24: "চব্বিশ",
  25: "পঁচিশ",
  26: "ছাব্বিশ",
  27: "সাতাশ",
  28: "আটাশ",
  29: "ঊনত্রিশ",
  31: "একত্রিশ",
  32: "বত্রিশ",
  33: "তেত্রিশ",
  34: "চৌত্রিশ",
  35: "পঁয়ত্রিশ",
  36: "ছত্রিশ",
  37: "সাঁইত্রিশ",
  38: "আটত্রিশ",
  39: "ঊনচল্লিশ",
  41: "একচল্লিশ",
  42: "বিয়াল্লিশ",
  43: "তেতাল্লিশ",
  44: "চুয়াল্লিশ",
  45: "পঁয়তাল্লিশ",
  46: "ছেচল্লিশ",
  47: "সাতচল্লিশ",
  48: "আটচল্লিশ",
  49: "ঊনপঞ্চাশ",
  51: "একান্ন",
  52: "বায়ান্ন",
  53: "তিপ্পান্ন",
  54: "চুয়ান্ন",
  55: "পঞ্চান্ন",
  56: "ছাপ্পান্ন",
  57: "সাতান্ন",
  58: "আটান্ন",
  59: "ঊনষাট",
  61: "একষট্টি",
  62: "বাষট্টি",
  63: "তেষট্টি",
  64: "চৌষট্টি",
  65: "পঁয়ষট্টি",
  66: "ছেষট্টি",
  67: "সাতষট্টি",
  68: "আটষট্টি",
  69: "ঊনসত্তর",
  71: "একাত্তর",
  72: "বাহাত্তর",
  73: "তিয়াত্তর",
  74: "চুয়াত্তর",
  75: "পঁচাত্তর",
  76: "ছিয়াত্তর",
  77: "সাতাত্তর",
  78: "আটাত্তর",
  79: "ঊনআশি",
  81: "একাশি",
  82: "বিরাশি",
  83: "তিরাশি",
  84: "চুরাশি",
  85: "পঁচাশি",
  86: "ছিয়াশি",
  87: "সাতাশি",
  88: "আটাশি",
  89: "ঊননব্বই",
  91: "একানব্বই",
  92: "বিরানব্বই",
  93: "তিরানব্বই",
  94: "চুরানব্বই",
  95: "পঁচানব্বই",
  96: "ছিয়ানব্বই",
  97: "সাতানব্বই",
  98: "আটানব্বই",
  99: "নিরানব্বই",
};

// ---------------------------
// Bengali to English Translation Mappings
// ---------------------------
const bengaliToEnglish = {
  // Numbers
  শূন্য: "zero",
  এক: "one",
  দুই: "two",
  তিন: "three",
  চার: "four",
  পাঁচ: "five",
  ছয়: "six",
  সাত: "seven",
  আট: "eight",
  নয়: "nine",
  দশ: "ten",
  এগারো: "eleven",
  বারো: "twelve",
  তেরো: "thirteen",
  চৌদ্দ: "fourteen",
  পনেরো: "fifteen",
  ষোল: "sixteen",
  সতেরো: "seventeen",
  আঠারো: "eighteen",
  উনিশ: "nineteen",
  বিশ: "twenty",
  একুশ: "twenty one",
  বাইশ: "twenty two",
  তেইশ: "twenty three",
  চব্বিশ: "twenty four",
  পঁচিশ: "twenty five",
  ছাব্বিশ: "twenty six",
  সাতাশ: "twenty seven",
  আটাশ: "twenty eight",
  ঊনত্রিশ: "twenty nine",
  ত্রিশ: "thirty",
  একত্রিশ: "thirty one",
  বত্রিশ: "thirty two",
  তেত্রিশ: "thirty three",
  চৌত্রিশ: "thirty four",
  পঁয়ত্রিশ: "thirty five",
  ছত্রিশ: "thirty six",
  সাঁইত্রিশ: "thirty seven",
  আটত্রিশ: "thirty eight",
  ঊনচল্লিশ: "thirty nine",
  চল্লিশ: "forty",
  একচল্লিশ: "forty one",
  বিয়াল্লিশ: "forty two",
  তেতাল্লিশ: "forty three",
  চুয়াল্লিশ: "forty four",
  পঁয়তাল্লিশ: "forty five",
  ছেচল্লিশ: "forty six",
  সাতচল্লিশ: "forty seven",
  আটচল্লিশ: "forty eight",
  ঊনপঞ্চাশ: "forty nine",
  পঞ্চাশ: "fifty",
  একান্ন: "fifty one",
  বায়ান্ন: "fifty two",
  তিপ্পান্ন: "fifty three",
  চুয়ান্ন: "fifty four",
  পঞ্চান্ন: "fifty five",
  ছাপ্পান্ন: "fifty six",
  সাতান্ন: "fifty seven",
  আটান্ন: "fifty eight",
  ঊনষাট: "fifty nine",
  ষাট: "sixty",
  একষট্টি: "sixty one",
  বাষট্টি: "sixty two",
  তেষট্টি: "sixty three",
  চৌষট্টি: "sixty four",
  পঁয়ষট্টি: "sixty five",
  ছেষট্টি: "sixty six",
  সাতষট্টি: "sixty seven",
  আটষট্টি: "sixty eight",
  ঊনসত্তর: "sixty nine",
  সত্তর: "seventy",
  একাত্তর: "seventy one",
  বাহাত্তর: "seventy two",
  তিয়াত্তর: "seventy three",
  চুয়াত্তর: "seventy four",
  পঁচাত্তর: "seventy five",
  ছিয়াত্তর: "seventy six",
  সাতাত্তর: "seventy seven",
  আটাত্তর: "seventy eight",
  ঊনআশি: "seventy nine",
  আশি: "eighty",
  একাশি: "eighty one",
  বিরাশি: "eighty two",
  তিরাশি: "eighty three",
  চুরাশি: "eighty four",
  পঁচাশি: "eighty five",
  ছিয়াশি: "eighty six",
  সাতাশি: "eighty seven",
  আটাশি: "eighty eight",
  ঊননব্বই: "eighty nine",
  নব্বই: "ninety",
  একানব্বই: "ninety one",
  বিরানব্বই: "ninety two",
  তিরানব্বই: "ninety three",
  চুরানব্বই: "ninety four",
  পঁচানব্বই: "ninety five",
  ছিয়ানব্বই: "ninety six",
  সাতানব্বই: "ninety seven",
  আটানব্বই: "ninety eight",
  নিরানব্বই: "ninety nine",

  // Units
  শত: "hundred",
  হাজার: "thousand",
  লাখ: "lakh",
  কোটি: "crore",

  // Traditional units
  অর্বুদ: "billion",
  খর্ব: "ten billion",
  নিল: "hundred billion",
  পদ্ম: "trillion",
  শঙ্খ: "ten trillion",
  মহাশঙ্খ: "hundred trillion",
  অন্ত্য: "quadrillion",
  মধ্য: "ten quadrillion",
  পরার্ধ: "hundred quadrillion",
  অপরার্ধ: "quintillion",
  উৎপল: "ten quintillion",
  নিকুমুদ: "hundred quintillion",

  // Currency
  টাকা: "taka",
  পয়সা: "paisa",

  // Other
  ঋণ: "negative",
};

// ---------------------------
// Short Form Mappings (Bengali and English)
// ---------------------------
const shortFormMappings = {
  bengali: {
    1000: "K", // হাজার -> K (সহজ করার জন্য)
    1000000: "M", // লাখ -> M
    10000000: "Cr", // কোটি -> Cr
    1000000000: "B", // অর্বুদ -> B
    1000000000000: "T", // পদ্ম -> T
  },
  english: {
    1000: "K",
    1000000: "M",
    1000000000: "B",
    1000000000000: "T",
  },
};

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
// Helper: convert 0-99 to Bangla text (Updated with special numbers)
// ---------------------------
function convertBelowHundred(num) {
  // Input must be a regular number (0-99)
  if (num === 0) return "";
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];

  // Check for special compound numbers first
  if (specialNumbers[num]) {
    return specialNumbers[num];
  }

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
// Convert Bengali text to English
// ---------------------------
function convertBengaliToEnglish(text) {
  let result = text;

  // Replace Bengali words with English equivalents
  for (const [bengali, english] of Object.entries(bengaliToEnglish)) {
    // Use word boundary approach for Bengali text
    const regex = new RegExp(`(^|\\s)${bengali}(\\s|$)`, "g");
    result = result.replace(regex, `$1${english}$2`);
  }

  return result;
}

// ---------------------------
// Generate Short Form for numbers
// ---------------------------
function generateShortForm(num, useEnglish = false) {
  const mappings = useEnglish
    ? shortFormMappings.english
    : shortFormMappings.bengali;

  // Sort by value descending to check largest units first
  const sortedUnits = Object.entries(mappings)
    .map(([value, suffix]) => [parseInt(value), suffix])
    .sort((a, b) => b[0] - a[0]);

  for (const [unitValue, suffix] of sortedUnits) {
    if (num >= unitValue) {
      const value = num / unitValue;
      // Format to remove unnecessary decimals
      const formatted = value % 1 === 0 ? value.toString() : value.toFixed(1);
      return formatted + suffix;
    }
  }

  return num.toString();
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

  if (number === 0)
    return opt.showTakaWord
      ? opt.textInEnglish
        ? "zero taka"
        : "শূন্য টাকা"
      : opt.textInEnglish
      ? "zero"
      : "শূন্য";

  // Handle short form if requested
  if (opt.useShortForm) {
    const shortForm = generateShortForm(Math.abs(number), opt.textInEnglish);
    let result = shortForm;

    if (number < 0) {
      result = (opt.textInEnglish ? "negative " : "ঋণ ") + result;
    }

    if (opt.showTakaWord) {
      result += opt.textInEnglish ? " taka" : " টাকা";
    }

    if (opt.template && opt.showCurrency) {
      const amountFormatted = toBanglaMoney(number, {
        ...opt,
        showCurrency: false,
      });
      result = opt.template
        .replace("{currency}", opt.showCurrency ? opt.currency : "")
        .replace("{amount}", amountFormatted)
        .replace("{text}", result);
    }

    return result;
  }

  let prefixText = "";
  if (number < 0) {
    number = Math.abs(number);
    if (opt.negativeFormat === "word")
      prefixText = opt.textInEnglish ? "negative " : "ঋণ ";
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

  // Convert to English if requested
  if (opt.textInEnglish) {
    integerText = convertBengaliToEnglish(integerText);
  }

  if (opt.showTakaWord) integerText += opt.textInEnglish ? " taka" : " টাকা";

  let fractionText = "";
  if (opt.showFraction && fractionPart > 0) {
    const fractionWords = opt.useTraditionalScale
      ? numberToBanglaTraditional(fractionPart)
      : numberToBanglaModern(fractionPart);

    let fractionUnit = opt.fractionUnit;
    if (opt.textInEnglish) {
      fractionUnit = convertBengaliToEnglish(fractionUnit);
      fractionText =
        convertBengaliToEnglish(fractionWords) + " " + fractionUnit;
    } else {
      fractionText = fractionWords + " " + fractionUnit;
    }
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
