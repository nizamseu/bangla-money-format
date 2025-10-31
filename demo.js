// 🚀 Bangla Money Format Demo | বাংলা টাকা ফরম্যাট ডেমো
// Supports both CommonJS (require) and ES6 (import) modules

const { toBanglaMoney, toText } = require("./src/index");

console.log("🚀 Bangla Money Format Demo | বাংলা টাকা ফরম্যাট ডেমো");
console.log("=".repeat(70));

console.log("\n💡 Usage Examples | ব্যবহারের উদাহরণ:");
console.log("CommonJS: const { toText } = require('bangla-money-format');");
console.log("ES6:      import { toText } from 'bangla-money-format';");

console.log("\n═══════════════════════════════════════════════");
console.log("📊 BASIC EXAMPLES | মৌলিক উদাহরণ");
console.log("═══════════════════════════════════════════════");

// Basic examples
const basicNumbers = [100, 1000, 10000, 100000, 1000000, 10000000];
basicNumbers.forEach((num) => {
  console.log(`${num.toLocaleString().padEnd(12)} → ${toText(num)}`);
});

console.log("\n═══════════════════════════════════════════════");
console.log("🔢 COMPOUND NUMBERS | যৌগিক সংখ্যা (v1.1.0 Fix)");
console.log("═══════════════════════════════════════════════");

const compoundNumbers = [21, 55, 75, 99];
compoundNumbers.forEach((num) => {
  console.log(
    `${num.toString().padEnd(3)} → ${toText(num, { template: "{text}" })}`
  );
});

console.log("\n═══════════════════════════════════════════════");
console.log("�️ TRADITIONAL SCALE | ঐতিহ্যবাহী স্কেল (v1.2.0)");
console.log("═══════════════════════════════════════════════");

const traditionalNumbers = [
  { num: 1000000000, name: "অর্বুদ (10⁹)" },
  { num: 10000000000, name: "খর্ব (10¹⁰)" },
  { num: 1000000000000, name: "পদ্ম (10¹²)" },
];

traditionalNumbers.forEach(({ num, name }) => {
  console.log(
    `${name.padEnd(15)} → ${toText(num, { useTraditionalScale: true })}`
  );
});

console.log("\n═══════════════════════════════════════════════");
console.log("�🌍 BENGALI ↔ ENGLISH CONVERSION | বাংলা ↔ ইংরেজি");
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
  toText(customNum, { template: "Amount: {amount} | Text: {text}" })
);

console.log("\n" + "═".repeat(70));
console.log("✨ Demo completed! | ডেমো সম্পন্ন!");
console.log("📚 For more examples, check the README.md file");
console.log("═".repeat(70));

/* 
🚀 ES6 Import Usage Example | ES6 ইমপোর্ট ব্যবহারের উদাহরণ:
=====================================================================

// For ES6 modules, use this syntax instead:
import { toText, toBanglaMoney } from "bangla-money-format";

// Then use the same functions:
console.log(toText(1000));
console.log(toBanglaMoney(5000));

// All the same options work:
console.log(toText(1000000, { useTraditionalScale: true }));
console.log(toText(555, { textInEnglish: true }));
console.log(toText(1500000, { useShortForm: true }));

🔷 TypeScript Usage Example | TypeScript ব্যবহারের উদাহরণ:
=============================================================

import { toText, toBanglaMoney } from "bangla-money-format";

interface MoneyFormatOptions {
  useTraditionalScale?: boolean;
  textInEnglish?: boolean;
  useShortForm?: boolean;
  showEnglishEquivalent?: boolean;
}

const amount: number = 1000000;
const options: MoneyFormatOptions = { 
  useTraditionalScale: true,
  showEnglishEquivalent: true 
};
const result: string = toText(amount, options);
console.log(result);

🌐 Browser Usage | ব্রাউজার ব্যবহার:
=====================================

// In modern browsers with ES6 support:
<script type="module">
  import { toText } from './node_modules/bangla-money-format/src/index.js';
  document.getElementById('amount').textContent = toText(1000000);
</script>

📱 React/Vue/Angular Usage | React/Vue/Angular ব্যবহার:
=========================================================

// React Component
import { toText } from 'bangla-money-format';

function PriceDisplay({ amount }) {
  return <span>{toText(amount, { useShortForm: true })}</span>;
}

// Vue Component
import { toText } from 'bangla-money-format';

export default {
  methods: {
    formatPrice(amount) {
      return toText(amount, { textInEnglish: true });
    }
  }
}

*/
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
