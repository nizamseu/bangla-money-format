const { toBanglaMoney, toText } = require("./src/index");

console.log("🇧🇩 Bangla Money Format - Demo\n");

console.log("═══════════════════════════════════════════════");
console.log("📊 BASIC EXAMPLES");
console.log("═══════════════════════════════════════════════");

// Basic examples
const basicNumbers = [100, 1000, 10000, 100000, 1000000, 10000000];
basicNumbers.forEach((num) => {
  console.log(`${num.toLocaleString().padEnd(12)} → ${toText(num)}`);
});

console.log("\n═══════════════════════════════════════════════");
console.log("🌍 BENGALI ↔ ENGLISH CONVERSION");
console.log("═══════════════════════════════════════════════");

const testNum = 1250000;
console.log("Bengali:", toText(testNum));
console.log("English:", toText(testNum, { textInEnglish: true }));

console.log("\n═══════════════════════════════════════════════");
console.log("⚡ SHORT FORM EXAMPLES");
console.log("═══════════════════════════════════════════════");

const shortFormNumbers = [1500, 15000, 1500000, 15000000, 1500000000];
console.log("Number\t\tBengali Short\t\tEnglish Short");
console.log("──────\t\t─────────────\t\t─────────────");

shortFormNumbers.forEach((num) => {
  const bengaliShort = toText(num, { useShortForm: true, template: "{text}" });
  const englishShort = toText(num, {
    useShortForm: true,
    textInEnglish: true,
    template: "{text}",
  });
  console.log(
    `${num.toLocaleString()}\t\t${bengaliShort}\t\t\t${englishShort}`
  );
});

console.log("\n═══════════════════════════════════════════════");
console.log("🏛️ TRADITIONAL vs MODERN SCALE");
console.log("═══════════════════════════════════════════════");

const bigNumbers = [1000000000, 10000000000, 100000000000];
bigNumbers.forEach((num) => {
  console.log(`\n${num.toLocaleString()}:`);
  console.log(
    "Modern    :",
    toText(num, { useTraditionalScale: false, template: "{text}" })
  );
  console.log(
    "Traditional:",
    toText(num, { useTraditionalScale: true, template: "{text}" })
  );
  console.log(
    "English   :",
    toText(num, {
      useTraditionalScale: true,
      textInEnglish: true,
      template: "{text}",
    })
  );
});

console.log("\n═══════════════════════════════════════════════");
console.log("💰 FRACTION EXAMPLES");
console.log("═══════════════════════════════════════════════");

const fractionalNumbers = [1500.25, 2750.75, 10000.5];
fractionalNumbers.forEach((num) => {
  console.log(`${num} → ${toText(num)}`);
});

console.log("\n═══════════════════════════════════════════════");
console.log("➖ NEGATIVE NUMBERS");
console.log("═══════════════════════════════════════════════");

console.log("Bengali:", toText(-5000, { negativeFormat: "word" }));
console.log(
  "English:",
  toText(-5000, { negativeFormat: "word", textInEnglish: true })
);
console.log("Short  :", toText(-5000, { useShortForm: true }));

console.log("\n═══════════════════════════════════════════════");
console.log("🎨 CUSTOM TEMPLATES");
console.log("═══════════════════════════════════════════════");

const customNum = 500000;
console.log("Default   :", toText(customNum));
console.log("Text Only :", toText(customNum, { template: "{text}" }));
console.log(
  "Amount Only:",
  toText(customNum, { template: "{currency}{amount}" })
);
console.log(
  "Custom    :",
  toText(customNum, { template: "Total: {currency}{amount} ({text})" })
);

console.log("\n═══════════════════════════════════════════════");
console.log("🔥 EXTREME LARGE NUMBER");
console.log("═══════════════════════════════════════════════");

const extremeNum = 152007845125478970000;
console.log("Number:", extremeNum.toExponential());
console.log(
  "Traditional Bengali:",
  toText(extremeNum, { useTraditionalScale: true, template: "{text}" })
);
console.log(
  "Traditional English:",
  toText(extremeNum, {
    useTraditionalScale: true,
    textInEnglish: true,
    template: "{text}",
  })
);

console.log("\n✅ Demo completed! Try your own numbers with the API.");
