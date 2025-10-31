# 🇧🇩 Bangla Money Format

[![npm version](https://badge.fury.io/js/bangla-money-format.svg)](https://badge.fury.io/js/bangla-money-format)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive Bengali/Bangla money and number formatting library that supports traditional Bengali number scales, English text conversion, and modern short forms. Perfect for financial applications, e-commerce platforms, and any application dealing with Bengali number formatting.

## ✨ Features

- 🔢 **Accurate Bengali Number Formatting**: Convert numbers to Bengali text with proper compound number grammar (পঁচাত্তর, পঞ্চান্ন, নিরানব্বই)
- 💰 **Money Formatting**: Format currency with Bengali digits and text
- 🏛️ **Improved Traditional Scale Support**: Enhanced traditional Bengali number scales with proper terms (একশত কোটি, এক হাজার কোটি, এক লক্ষ কোটি)
- 🌍 **English Conversion**: Convert Bengali text to English equivalents
- ⚡ **Short Forms**: Modern K, M, B, T notation support
- 🔄 **Dual Language**: Support for both Bengali and English output
- 💡 **Highly Configurable**: Extensive options for customization
- 📏 **Large Numbers**: Support for numbers up to 10^20
- ✅ **Linguistically Accurate**: Proper Bengali compound numbers (21-99) with correct traditional forms

## 📦 Installation

```bash
npm install bangla-money-format
```

## 🚀 Quick Start

```javascript
const { toText, toBanglaMoney } = require("bangla-money-format");

// Basic usage
console.log(toText(1000000));
// Output: ৳১০,০০০০০ (দশ লাখ টাকা)

// Bengali compound numbers (accurate)
console.log(toText(75));
// Output: ৳৭৫ (পঁচাত্তর টাকা)

console.log(toText(555));
// Output: ৳৫৫৫ (পাঁচ শত পঞ্চান্ন টাকা)

// English output
console.log(toText(1000000, { textInEnglish: true }));
// Output: ৳১০,০০০০০ (ten lakh taka)

// Short form
console.log(toText(1500000, { useShortForm: true }));
// Output: ৳১৫,০০০০০ (1.5M টাকা)
```

## 📖 API Reference

### `toText(number, options)`

Converts a number to Bengali text representation with money formatting.

#### Parameters

- `number` (Number): The number to convert
- `options` (Object): Configuration options

#### Options

| Option                  | Type    | Default                         | Description                             |
| ----------------------- | ------- | ------------------------------- | --------------------------------------- |
| `showCurrency`          | Boolean | `true`                          | Show currency symbol (৳)                |
| `currency`              | String  | `"৳"`                           | Currency symbol to use                  |
| `showTakaWord`          | Boolean | `true`                          | Include "টাকা" in the text              |
| `useTraditionalScale`   | Boolean | `false`                         | Use traditional Bengali scales          |
| `textInEnglish`         | Boolean | `false`                         | Convert Bengali text to English         |
| `useShortForm`          | Boolean | `false`                         | Use K, M, B, T notation                 |
| `showEnglishEquivalent` | Boolean | `false`                         | Show English equivalents in parentheses |
| `showFraction`          | Boolean | `true`                          | Include fraction part                   |
| `fractionPrecision`     | Number  | `2`                             | Decimal places for fractions            |
| `fractionUnit`          | String  | `"পয়সা"`                       | Unit for fraction part                  |
| `negativeFormat`        | String  | `"minus"`                       | How to display negative numbers         |
| `template`              | String  | `"{currency}{amount} ({text})"` | Output template                         |

### `toBanglaMoney(number, options)`

Formats a number as Bengali currency without text conversion.

## 🎯 Usage Examples

### Basic Number Formatting

```javascript
const { toText } = require("bangla-money-format");

// Compound numbers (accurate Bengali)
console.log(toText(75));
// ৳৭৫ (পঁচাত্তর টাকা)

console.log(toText(55));
// ৳৫৫ (পঞ্চান্ন টাকা)

console.log(toText(99));
// ৳৯৯ (নিরানব্বই টাকা)

// Small numbers
console.log(toText(1500));
// ৳১৫০০ (এক হাজার পাঁচ শত টাকা)

// Large numbers
console.log(toText(1000000));
// ৳১০,০০০০০ (দশ লাখ টাকা)

console.log(toText(10000000));
// ৳১,০০০০০০০ (এক কোটি টাকা)
```

### 🎯 Accurate Bengali Compound Numbers

Version 1.1.0 introduces accurate representation of Bengali compound numbers (21-99):

```javascript
// Correct Bengali compound forms
console.log(toText(75));
// ৳৭৫ (পঁচাত্তর টাকা) ✅ Correct

console.log(toText(555));
// ৳৫৫৅ (পাঁচ শত পঞ্চান্ন টাকা) ✅ Correct

console.log(toText(99));
// ৳৯৯ (নিরানব্বই টাকা) ✅ Correct

// Previously showed incorrect forms like:
// "সত্তর পাঁচ টাকা" ❌ (now fixed)
// "পঞ্চাশ পাঁচ টাকা" ❌ (now fixed)
```

### Traditional vs Modern Scale

```javascript
// Modern scale (default)
console.log(toText(1000000000));
// ৳১,০০০০০০০০০ (এক শত কোটি টাকা)

// Traditional scale with improved terms
console.log(toText(1000000000, { useTraditionalScale: true }));
// ৳১,০০০০০০০০০ (একশত কোটি টাকা)

console.log(toText(1000000000000, { useTraditionalScale: true }));
// ৳১০,০০০০০০০০০০০ (এক লক্ষ কোটি টাকা)

// With English equivalents
console.log(
  toText(1000000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);
// ৳১০,০০০০০০০০০০০ (এক লক্ষ কোটি (এক ট্রিলিয়ন) টাকা)
```

### 🎯 Improved Traditional Scale System

Version 1.2.0 introduces enhanced traditional Bengali scale terms:

| Scale  | Value | Traditional Term | English Equivalent |
| ------ | ----- | ---------------- | ------------------ |
| অর্বুদ | 10⁹   | একশত কোটি        | One Billion        |
| খর্ব   | 10¹⁰  | এক হাজার কোটি    | Ten Billion        |
| নিল    | 10¹¹  | দশ হাজার কোটি    | Hundred Billion    |
| পদ্ম   | 10¹²  | এক লক্ষ কোটি     | One Trillion       |
| শঙ্খ   | 10¹³  | দশ লক্ষ কোটি     | Ten Trillion       |

### Bengali to English Conversion

```javascript
// Convert Bengali text to English
console.log(
  toText(75000000000, {
    useTraditionalScale: true,
    textInEnglish: true,
  })
);
// ৳৭৫,০০০০০০০০০০ (seventy five ten billion taka)
// ৳১,০০০০০০০০০ (এক অর্বুদ টাকা)
```

### English Text Conversion

```javascript
// Bengali text (default)
console.log(toText(125000));
// ৳১,২৫০০০ (এক লাখ বিশ পাঁচ হাজার টাকা)

// English text
console.log(toText(125000, { textInEnglish: true }));
// ৳১,২৫০০০ (one lakh twenty five thousand taka)

// Traditional with English equivalents
console.log(
  toText(1000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);
// ৳১,০০০০০০০০০ (এক অর্বুদ (এক বিলিয়ন) টাকা)
```

### Short Form Notation

```javascript
// Bengali short form
console.log(toText(1500, { useShortForm: true }));
// ৳১৫০০ (1.5K টাকা)

console.log(toText(1500000, { useShortForm: true }));
// ৳১৫,০০০০০ (1.5M টাকা)

console.log(toText(1500000000, { useShortForm: true }));
// ৳১,৫০০০০০০০০ (1.5B টাকা)

// English short form
console.log(toText(1500000, { useShortForm: true, textInEnglish: true }));
// ৳১৫,০০০০০ (1.5M taka)
```

### Negative Numbers

```javascript
console.log(toText(-5000, { negativeFormat: "word" }));
// ৳৫০০০ (ঋণ পাঁচ হাজার টাকা)

console.log(
  toText(-5000, {
    negativeFormat: "word",
    textInEnglish: true,
  })
);
// ৳৫০০০ (negative five thousand taka)
```

### Fractions

```javascript
console.log(toText(1500.75));
// ৳১৫০০ (এক হাজার পাঁচ শত টাকা সত্তর পাঁচ পয়সা)

console.log(toText(1500.75, { textInEnglish: true }));
// ৳১৫০০ (one thousand five hundred taka seventy five paisa)
```

### Custom Templates

```javascript
// Text only
console.log(toText(1000000, { template: "{text}" }));
// দশ লাখ টাকা

// Amount only
console.log(toText(1000000, { template: "{currency}{amount}" }));
// ৳১০,০০০০০

// Custom format
console.log(
  toText(1000000, {
    template: "Amount: {currency}{amount} | Text: {text}",
  })
);
// Amount: ৳১০,০০০০০ | Text: দশ লাখ টাকা
```

## 🏛️ Traditional Bengali Number System

This library supports the traditional Bengali number system with proper scales:

| Scale  | Bengali | English Equivalent | Value |
| ------ | ------- | ------------------ | ----- |
| হাজার  | হাজার   | Thousand           | 10³   |
| লাখ    | লাখ     | Lakh               | 10⁵   |
| কোটি   | কোটি    | Crore              | 10⁷   |
| অর্বুদ | অর্বুদ  | Billion            | 10⁹   |
| খর্ব   | খর্ব    | Ten Billion        | 10¹⁰  |
| নিল    | নিল     | Hundred Billion    | 10¹¹  |
| পদ্ম   | পদ্ম    | Trillion           | 10¹²  |
| শঙ্খ   | শঙ্খ    | Ten Trillion       | 10¹³  |

## ⚡ Short Form Reference

| Number            | Bengali Short | English Short |
| ----------------- | ------------- | ------------- |
| 1,500             | 1.5K          | 1.5K          |
| 15,000            | 15K           | 15K           |
| 1,500,000         | 1.5M          | 1.5M          |
| 15,000,000        | 1.5Cr         | 15M           |
| 1,500,000,000     | 1.5B          | 1.5B          |
| 1,500,000,000,000 | 1.5T          | 1.5T          |

## 🔧 Advanced Configuration

```javascript
const customOptions = {
  showCurrency: true,
  currency: "৳",
  showTakaWord: true,
  useTraditionalScale: false,
  textInEnglish: false,
  useShortForm: false,
  showEnglishEquivalent: false,
  showFraction: true,
  fractionPrecision: 2,
  fractionUnit: "পয়সা",
  negativeFormat: "minus", // "minus", "word", "parenthesis"
  template: "{currency}{amount} ({text})",
};

console.log(toText(1234567.89, customOptions));
```

## 🧪 Testing

Run the included test suite:

```bash
npm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you find any issues or have feature requests, please create an issue on [GitHub](https://github.com/nizamseu/bangla-money-format/issues).

## 🙏 Acknowledgments

- Inspired by the need for proper Bengali number formatting in financial applications
- Built with love for the Bengali/Bangla speaking community

---

Made with ❤️ for the Bengali community
