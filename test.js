const { toBanglaMoney, toText } = require("./src/index");

console.log("=== Modern Scale (Default) ===");
console.log(toText(152007845125478970000));

console.log("\n=== Traditional Scale ===");
console.log(toText(152007845125478970000, { useTraditionalScale: true }));

console.log("\n=== Traditional Scale with English Equivalent ===");
console.log(
  toText(152007845125478970000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);

console.log("\n=== NEW: Bengali to English Text ===");
console.log(
  toText(152007845125478970000, {
    useTraditionalScale: true,
    textInEnglish: true,
  })
);

console.log("\n=== NEW: Short Form Examples ===");
console.log("1,500 (Bengali Short):", toText(1500, { useShortForm: true }));
console.log(
  "1,500 (English Short):",
  toText(1500, { useShortForm: true, textInEnglish: true })
);
console.log(
  "1,500,000 (Bengali Short):",
  toText(1500000, { useShortForm: true })
);
console.log(
  "1,500,000 (English Short):",
  toText(1500000, { useShortForm: true, textInEnglish: true })
);
console.log(
  "1,500,000,000 (Bengali Short):",
  toText(1500000000, { useShortForm: true })
);
console.log(
  "1,500,000,000 (English Short):",
  toText(1500000000, { useShortForm: true, textInEnglish: true })
);

console.log("\n=== Traditional Scale (Small Numbers) ===");
console.log("10,000,000 (১ কোটি):");
console.log(toText(10000000, { useTraditionalScale: true }));

console.log("\n100,000,000 (১ অর্বুদ):");
console.log(
  toText(100000000, { useTraditionalScale: true, showEnglishEquivalent: true })
);

console.log("\n1,000,000,000 (১০ অর্বুদ):");
console.log(
  toText(1000000000, { useTraditionalScale: true, showEnglishEquivalent: true })
);
console.log(
  "Same in English:",
  toText(1000000000, { useTraditionalScale: true, textInEnglish: true })
);

console.log("\n10,000,000,000 (১ খর্ব):");
console.log(
  toText(10000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);

console.log("\n100,000,000,000 (১ মহাপদ্ম):");
console.log(
  toText(100000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);

console.log("\n1,000,000,000,000 (১ নিখর্ব):");
console.log(
  toText(1000000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);
