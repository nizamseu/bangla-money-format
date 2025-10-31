# Bangla Money Format

[![npm version](https://badge.fury.io/js/bangla-money-format.svg)](https://badge.fury.io/js/bangla-money-format)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/bangla-money-format.svg)](https://www.npmjs.com/package/bangla-money-format)
[![GitHub stars](https://img.shields.io/github/stars/nizamseu/bangla-money-format.svg)](https://github.com/nizamseu/bangla-money-format)

A comprehensive **Bengali/Bangla money and number formatting library** with accurate compound numbers, traditional scales, English conversion, and modern short forms. Perfect for financial applications, e-commerce platforms, banking systems, and any application requiring Bengali number formatting.

## Features

- 🔢 **Accurate Bengali Number Formatting**: Convert numbers to Bengali text with proper compound number grammar
- 💰 **Money Formatting**: Format currency with Bengali digits and text
- 🏛️ **Traditional Scale Support**: Enhanced traditional Bengali number scales with proper terms
- 🌍 **English Conversion**: Convert Bengali text to English equivalents
- ⚡ **Short Forms**: Modern K, M, B, T notation support
- 🔄 **Dual Language**: Support for both Bengali and English output
- 💡 **Highly Configurable**: Extensive options for customization
- 📏 **Large Numbers**: Support for numbers up to 10^20
- ✅ **Linguistically Accurate**: Proper Bengali compound numbers with correct traditional forms
- 🎯 **ES6 & CommonJS**: Both import and require supported

## Installation

```bash
npm install bangla-money-format
```

```bash
yarn add bangla-money-format
```

```bash
pnpm add bangla-money-format
```

## Quick Start

### Using CommonJS (require)

```javascript
const { toText, toBanglaMoney } = require("bangla-money-format");

// Basic usage
console.log(toText(1000000));
// Output: দশ লাখ টাকা
```

### Using ES6 Modules (import)

```javascript
import { toText, toBanglaMoney } from "bangla-money-format";

// Basic usage
console.log(toText(1000000));
// Output: দশ লাখ টাকা
```

### Examples

```javascript
// Bengali compound numbers (accurate)
console.log(toText(75));
// Output: পঁচাত্তর টাকা

console.log(toText(555));
// Output: পাঁচ শত পঞ্চান্ন টাকা

// English output
console.log(toText(1000000, { textInEnglish: true }));
// Output: ten lakh taka

// Short form
console.log(toText(1500000, { useShortForm: true }));
// Output: 1.5M টাকা

// Traditional scale
console.log(toText(1000000000, { useTraditionalScale: true }));
// Output: একশত কোটি টাকা
```

## Use Cases

### Financial Applications

- **Banking Software**: Account statements, transaction records
- **Invoice Generation**: Professional invoices with Bengali amounts
- **Accounting Systems**: Financial reports and calculations
- **Payroll Management**: Salary slips and payment processing

### E-commerce & Retail

- **Online Shopping**: Product pricing in Bengali
- **Point of Sale (POS)**: Receipt generation
- **Inventory Management**: Stock valuation
- **Price Display**: Multi-language price formatting

### Government & Education

- **Tax Calculation**: Income tax and VAT calculations
- **Educational Software**: Mathematics and finance teaching
- **Government Forms**: Official document generation
- **Census Data**: Population and economic statistics

### Regional Applications

- **Bangladesh**: BDT currency formatting
- **West Bengal**: INR with Bengali text
- **Bengali Communities**: Worldwide Bengali diaspora applications

## API Reference

### `toText(number, options)`

Converts a number to Bengali text representation with money formatting.

#### Parameters

- `number` (Number): The number to convert
- `options` (Object): Configuration options

#### Options

| Option                  | Type    | Default    | Description                             |
| ----------------------- | ------- | ---------- | --------------------------------------- |
| `showCurrency`          | Boolean | `true`     | Show currency symbol (৳)                |
| `currency`              | String  | `"৳"`      | Currency symbol to use                  |
| `showTakaWord`          | Boolean | `true`     | Include "টাকা" in the text              |
| `useTraditionalScale`   | Boolean | `false`    | Use traditional Bengali scales          |
| `textInEnglish`         | Boolean | `false`    | Convert Bengali text to English         |
| `useShortForm`          | Boolean | `false`    | Use K, M, B, T notation                 |
| `showEnglishEquivalent` | Boolean | `false`    | Show English equivalents in parentheses |
| `showFraction`          | Boolean | `true`     | Include fraction part                   |
| `fractionPrecision`     | Number  | `2`        | Decimal places for fractions            |
| `fractionUnit`          | String  | `"পয়সা"`  | Unit for fraction part                  |
| `negativeFormat`        | String  | `"minus"`  | How to display negative numbers         |
| `template`              | String  | `"{text}"` | Output template for toText function     |

### `toBanglaMoney(number, options)`

Formats a number as Bengali currency without text conversion.

#### Parameters

- `number` (Number): The number to format as currency
- `options` (Object): Configuration options (same as toText)

#### toBanglaMoney Examples

```javascript
const { toBanglaMoney } = require("bangla-money-format");

// Basic usage - only currency formatting
console.log(toBanglaMoney(1000));
// ৳১,০০০

console.log(toBanglaMoney(50000));
// ৳৫০,০০০

console.log(toBanglaMoney(1000000));
// ৳১০,০০,০০০

console.log(toBanglaMoney(25000000));
// ৳২,৫০,০০,০০০

// Large numbers
console.log(toBanglaMoney(1000000000));
// ৳১,০০,০০,০০,০০,০০০

// Decimal numbers
console.log(toBanglaMoney(1500.75));
// ৳১,৫০০

// Negative numbers
console.log(toBanglaMoney(-5000));
// -৳৫,০০০

// Custom currency symbol
console.log(toBanglaMoney(1000, { currency: "BDT" }));
// BDT১,০০০

// No currency symbol
console.log(toBanglaMoney(1000, { showCurrency: false }));
// ১,০০০

// Different negative format
console.log(toBanglaMoney(-1000, { negativeFormat: "parenthesis" }));
// (৳১,০০০)
```

## Usage Examples

### Basic Number Formatting

```javascript
const { toText } = require("bangla-money-format");

// Compound numbers (accurate Bengali)
console.log(toText(75));
// পঁচাত্তর টাকা

console.log(toText(55));
// পঞ্চান্ন টাকা

console.log(toText(99));
// নিরানব্বই টাকা

// Small numbers
console.log(toText(1500));
// এক হাজার পাঁচ শত টাকা

// Large numbers
console.log(toText(1000000));
// দশ লাখ টাকা

console.log(toText(10000000));
// এক কোটি টাকা
```

### Traditional vs Modern Scale

```javascript
// Modern scale (default)
console.log(toText(1000000000));
// এক শত কোটি টাকা

// Traditional scale with improved terms
console.log(toText(1000000000, { useTraditionalScale: true }));
// একশত কোটি টাকা

console.log(toText(1000000000000, { useTraditionalScale: true }));
// এক লক্ষ কোটি টাকা

// With English equivalents
console.log(
  toText(1000000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);
// এক লক্ষ কোটি (এক ট্রিলিয়ন) টাকা
```

### Improved Traditional Scale System

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
// এক লাখ বিশ পাঁচ হাজার টাকা

// English text
console.log(toText(125000, { textInEnglish: true }));
// one lakh twenty five thousand taka

// Traditional with English equivalents
console.log(
  toText(1000000000, {
    useTraditionalScale: true,
    showEnglishEquivalent: true,
  })
);
// এক অর্বুদ (এক বিলিয়ন) টাকা
```

### Short Form Notation

```javascript
// Bengali short form
console.log(toText(1500, { useShortForm: true }));
// 1.5K টাকা

console.log(toText(1500000, { useShortForm: true }));
// 1.5M টাকা

console.log(toText(1500000000, { useShortForm: true }));
// 1.5B টাকা

// English short form
console.log(toText(1500000, { useShortForm: true, textInEnglish: true }));
// 1.5M taka
```

### Negative Numbers

```javascript
console.log(toText(-5000, { negativeFormat: "word" }));
// ঋণ পাঁচ হাজার টাকা

console.log(
  toText(-5000, {
    negativeFormat: "word",
    textInEnglish: true,
  })
);
// negative five thousand taka
```

### Fractions

```javascript
console.log(toText(1500.75));
// এক হাজার পাঁচ শত টাকা সত্তর পাঁচ পয়সা

console.log(toText(1500.75, { textInEnglish: true }));
// one thousand five hundred taka seventy five paisa
```

### Custom Templates

```javascript
// Text only
console.log(toText(1000000, { template: "{text}" }));
// দশ লাখ টাকা

// Amount only with toBanglaMoney
console.log(toBanglaMoney(1000000));
// ৳১০,০০,০০০

// Custom format using template
console.log(
  toText(1000000, {
    template: "Amount: {currency}{amount} | Text: {text}",
  })
);
// Amount: ৳১০,০০,০০০ | Text: দশ লাখ টাকা
```

## Traditional Bengali Number System

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

## Short Form Reference

| Number            | Bengali Short | English Short |
| ----------------- | ------------- | ------------- |
| 1,500             | 1.5K          | 1.5K          |
| 15,000            | 15K           | 15K           |
| 1,500,000         | 1.5M          | 1.5M          |
| 15,000,000        | 1.5Cr         | 15M           |
| 1,500,000,000     | 1.5B          | 1.5B          |
| 1,500,000,000,000 | 1.5T          | 1.5T          |

## Advanced Configuration

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

## Compatibility

- ✅ **Node.js**: 12.0.0+
- ✅ **Browser**: All modern browsers
- ✅ **React**: Full support
- ✅ **Vue.js**: Full support
- ✅ **Angular**: Full support
- ✅ **TypeScript**: Type definitions included
- ✅ **ES6/CommonJS**: Both module systems supported

## Regional Support

- 🇧🇩 **Bangladesh**: BDT (৳) currency formatting
- 🇮🇳 **West Bengal, India**: INR (₹) with Bengali text
- 🌐 **Global Bengali Communities**: Worldwide diaspora support

## Performance

- ⚡ **Fast**: Optimized for speed
- 🔄 **Lightweight**: Minimal dependencies
- 💾 **Memory Efficient**: Low memory footprint
- 🧮 **Accurate**: Precise BigInt calculations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find any issues or have feature requests, please create an issue on [GitHub](https://github.com/nizamseu/bangla-money-format/issues).

## Keywords

**Bengali/Bangla:** বাংলা টাকা ফরম্যাট, বাংলা সংখ্যা রূপান্তর, বাংলাদেশী টাকা, বাংলা অঙ্ক, কোটি লাখ হাজার, অর্বুদ খর্ব নিল পদ্ম

**English:** bangla money format, bengali number converter, bangladesh taka formatter, bengali currency, bengali digits, crore lakh thousand, bengali math, number to bengali text, bangla calculator, bengali financial, south asian currency, bengali localization

**Applications:** invoice generator bengali, bengali accounting software, bangladesh banking, bengali ecommerce, bengali fintech, bengali payment gateway, bengali pos system, bengali receipt generator

**Technical:** nodejs bengali, javascript bengali, bengali npm package, bengali api, bengali sdk, bengali library, bengali utility, bengali formatting

---

Made with ❤️ for the Bengali community
