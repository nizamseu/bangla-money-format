# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-31

### Added

- Initial release of Bangla Money Format library
- Bengali number to text conversion with proper grammar
- Money formatting with Bengali digits and currency symbols
- Traditional Bengali number scale support (অর্বুদ, খর্ব, নিল, পদ্ম, etc.)
- Modern number scale support (কোটি, লাখ, হাজার)
- Bengali to English text conversion
- Short form notation support (K, M, B, T)
- Support for very large numbers (up to 10^20)
- Negative number formatting
- Fraction support with customizable precision
- Highly configurable options system
- Custom template support
- Comprehensive test suite
- Full documentation and examples

### Features

- `toText()` - Convert numbers to Bengali text with money formatting
- `toBanglaMoney()` - Format numbers as Bengali currency
- Traditional vs Modern scale switching
- Dual language output (Bengali/English)
- Multiple negative number formats
- Customizable currency symbols and units
- Template-based output formatting

### Options

- `showCurrency` - Show/hide currency symbol
- `currency` - Customizable currency symbol
- `showTakaWord` - Include "টাকা" in output
- `useTraditionalScale` - Use traditional Bengali scales
- `textInEnglish` - Convert Bengali text to English
- `useShortForm` - Use K, M, B, T notation
- `showEnglishEquivalent` - Show English equivalents in parentheses
- `showFraction` - Include fraction part
- `fractionPrecision` - Decimal places for fractions
- `fractionUnit` - Unit for fraction part
- `negativeFormat` - Negative number format style
- `template` - Custom output template

### Technical

- BigInt support for large number precision
- Efficient regex-based text conversion
- Comprehensive error handling
- Node.js 12+ compatibility
- Zero dependencies
- MIT licensed
