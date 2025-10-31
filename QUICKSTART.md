# Quick Start Guide

Get started with Bangla Money Format in under 2 minutes!

## 📦 Installation

```bash
npm install bangla-money-format
```

## 🚀 Basic Usage

```javascript
const { toText, toBanglaMoney } = require("bangla-money-format");

// Convert number to Bengali text
console.log(toText(1000000));
// Output: ৳১০,০০০০০ (দশ লাখ টাকা)

// Format as currency only
console.log(toBanglaMoney(1000000));
// Output: ৳১০,০০০০০
```

## ⚡ Common Use Cases

### 1. E-commerce Price Display

```javascript
const price = 25000;
console.log(toText(price));
// ৳২৫০০০ (বিশ পাঁচ হাজার টাকা)
```

### 2. Banking Applications

```javascript
const balance = 1500000;
console.log(toText(balance, { useTraditionalScale: true }));
// ৳১৫,০০০০০ (পনেরো লাখ টাকা)
```

### 3. Multilingual Support

```javascript
const amount = 500000;
console.log(toText(amount, { textInEnglish: true }));
// ৳৫,০০০০০ (five lakh taka)
```

### 4. Short Form for Mobile Apps

```javascript
const revenue = 1500000000;
console.log(toText(revenue, { useShortForm: true }));
// ৳১,৫০০০০০০০০ (1.5B টাকা)
```

### 5. Invoice Generation

```javascript
const invoiceAmount = 75000.5;
console.log(toText(invoiceAmount));
// ৳৭৫০০০ (পঁচাত্তর হাজার টাকা পঞ্চাশ পয়সা)
```

## 🎯 Pro Tips

### Text Only Output

```javascript
console.log(toText(100000, { template: "{text}" }));
// এক লাখ টাকা
```

### Amount Only Output

```javascript
console.log(toText(100000, { template: "{currency}{amount}" }));
// ৳১,০০০০০
```

### Custom Currency

```javascript
console.log(toText(100000, { currency: "$" }));
// $১,০০০০০ (এক লাখ টাকা)
```

## 📱 Ready-to-Use Examples

Copy and paste these examples into your project:

```javascript
const { toText } = require("bangla-money-format");

// For web applications
function displayPrice(amount) {
  return toText(amount, { template: "{currency}{amount}" });
}

// For mobile apps
function displayShortAmount(amount) {
  return toText(amount, {
    useShortForm: true,
    template: "{text}",
  });
}

// For receipts/invoices
function displayInvoiceAmount(amount) {
  return toText(amount, {
    showFraction: true,
    template: "Amount: {currency}{amount} ({text})",
  });
}

// For international users
function displayBilingualAmount(amount) {
  const bengali = toText(amount);
  const english = toText(amount, { textInEnglish: true });
  return `${bengali}\n${english}`;
}
```

## 🔧 Need Help?

- 📖 **Full Documentation**: [README.md](README.md)
- 🔗 **API Reference**: [API.md](API.md)
- 🎮 **Try the Demo**: `npm run demo`
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/nizamseu/bangla-money-format/issues)

## ⚡ Performance Tips

- Use `useShortForm: true` for large numbers in mobile apps
- Cache results for frequently used amounts
- Use `template: '{text}'` when you only need text output

That's it! You're ready to use Bangla Money Format in your project. 🎉
