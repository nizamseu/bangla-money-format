# API Documentation

## Functions

### `toText(number, options)`

Converts a number to Bengali text representation with money formatting.

**Parameters:**

- `number` (Number): The number to convert
- `options` (Object, optional): Configuration options

**Returns:** String - Formatted Bengali text with currency

**Example:**

```javascript
toText(1000000);
// Returns: "৳১০,০০০০০ (দশ লাখ টাকা)"
```

### `toBanglaMoney(number, options)`

Formats a number as Bengali currency without text conversion.

**Parameters:**

- `number` (Number): The number to format
- `options` (Object, optional): Configuration options

**Returns:** String - Formatted Bengali currency

**Example:**

```javascript
toBanglaMoney(1000000);
// Returns: "৳১০,০০০০০"
```

## Options

### Basic Options

| Option         | Type    | Default                         | Description                |
| -------------- | ------- | ------------------------------- | -------------------------- |
| `showCurrency` | Boolean | `true`                          | Show currency symbol (৳)   |
| `currency`     | String  | `"৳"`                           | Currency symbol to use     |
| `showTakaWord` | Boolean | `true`                          | Include "টাকা" in the text |
| `template`     | String  | `"{currency}{amount} ({text})"` | Output template            |

### Number System Options

| Option                  | Type    | Default | Description                                         |
| ----------------------- | ------- | ------- | --------------------------------------------------- |
| `useTraditionalScale`   | Boolean | `false` | Use traditional Bengali scales (অর্বুদ, খর্ব, etc.) |
| `textInEnglish`         | Boolean | `false` | Convert Bengali text to English                     |
| `useShortForm`          | Boolean | `false` | Use K, M, B, T notation                             |
| `showEnglishEquivalent` | Boolean | `false` | Show English equivalents in parentheses             |

### Fraction Options

| Option              | Type    | Default   | Description                  |
| ------------------- | ------- | --------- | ---------------------------- |
| `showFraction`      | Boolean | `true`    | Include fraction part        |
| `fractionPrecision` | Number  | `2`       | Decimal places for fractions |
| `fractionUnit`      | String  | `"পয়সা"` | Unit for fraction part       |

### Negative Number Options

| Option           | Type   | Default   | Description                     |
| ---------------- | ------ | --------- | ------------------------------- |
| `negativeFormat` | String | `"minus"` | How to display negative numbers |

**Negative Format Values:**

- `"minus"`: Show minus sign (-5000)
- `"word"`: Show as word (ঋণ পাঁচ হাজার)
- `"parenthesis"`: Show in parentheses ((5000))

### Advanced Options

| Option             | Type    | Default | Description                      |
| ------------------ | ------- | ------- | -------------------------------- |
| `showCommas`       | Boolean | `true`  | Show comma separators in numbers |
| `trimLeadingZeros` | Boolean | `true`  | Remove leading zeros             |
| `abbreviation`     | Boolean | `false` | Use abbreviated form             |

## Template Variables

The `template` option supports these variables:

| Variable     | Description          | Example     |
| ------------ | -------------------- | ----------- |
| `{currency}` | Currency symbol      | ৳           |
| `{amount}`   | Formatted number     | ১০,০০০০০    |
| `{text}`     | Bengali/English text | দশ লাখ টাকা |

**Template Examples:**

```javascript
// Default template
"{currency}{amount} ({text})";
// Output: "৳১০,০০০০০ (দশ লাখ টাকা)"

// Text only
"{text}";
// Output: "দশ লাখ টাকা"

// Amount only
"{currency}{amount}";
// Output: "৳১০,০০০০০"

// Custom format
"Total: {currency}{amount} | In words: {text}";
// Output: "Total: ৳১০,০০০০০ | In words: দশ লাখ টাকা"
```

## Number Scale Reference

### Modern Scale (Default)

| Value | Bengali  | English       |
| ----- | -------- | ------------- |
| 10³   | হাজার    | Thousand      |
| 10⁵   | লাখ      | Lakh          |
| 10⁷   | কোটি     | Crore         |
| 10⁹   | একশ কোটি | Hundred Crore |
| 10¹²  | লাখ কোটি | Lakh Crore    |

### Traditional Scale

| Value | Bengali | English             |
| ----- | ------- | ------------------- |
| 10³   | হাজার   | Thousand            |
| 10⁵   | লাখ     | Lakh                |
| 10⁷   | কোটি    | Crore               |
| 10⁹   | অর্বুদ  | Billion             |
| 10¹⁰  | খর্ব    | Ten Billion         |
| 10¹¹  | নিল     | Hundred Billion     |
| 10¹²  | পদ্ম    | Trillion            |
| 10¹³  | শঙ্খ    | Ten Trillion        |
| 10¹⁴  | মহাশঙ্খ | Hundred Trillion    |
| 10¹⁵  | অন্ত্য  | Quadrillion         |
| 10¹⁶  | মধ্য    | Ten Quadrillion     |
| 10¹⁷  | পরার্ধ  | Hundred Quadrillion |
| 10¹⁸  | অপরার্ধ | Quintillion         |
| 10¹⁹  | উৎপল    | Ten Quintillion     |
| 10²⁰  | নিকুমুদ | Hundred Quintillion |

### Short Form Scale

| Value | Bengali | English |
| ----- | ------- | ------- |
| 10³   | K       | K       |
| 10⁶   | M       | M       |
| 10⁷   | Cr      | (10M)   |
| 10⁹   | B       | B       |
| 10¹²  | T       | T       |

## Error Handling

The library handles various edge cases:

- **Invalid input**: Returns empty string for non-numbers
- **NaN values**: Returns empty string
- **Very large numbers**: Uses BigInt for precision
- **Zero values**: Returns appropriate zero representation
- **Negative numbers**: Handles based on negativeFormat option

## Performance Notes

- **Large numbers**: Uses BigInt for numbers > Number.MAX_SAFE_INTEGER
- **Text conversion**: Optimized regex patterns for Bengali text
- **Memory usage**: Minimal memory footprint for typical use cases
- **Caching**: No internal caching (stateless functions)
