# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2025-11-02

### Changed

- **Breaking Change**: `toText()` function now returns only Bengali text without currency symbols or amount formatting
  - Previous: `toText(10000000)` → `"৳১,০০০০০০০ (এক কোটি টাকা)"`
  - Current: `toText(10000000)` → `"এক কোটি টাকা"`
  - Changed default template from `"{currency}{amount} ({text})"` to `"{text}"`

### Fixed

- **toBanglaMoney Comma Formatting**: Fixed comma placement to follow proper Indian number system
  - Now correctly formats: 1,000 → `৳১,০০০`, 1,000,000 → `৳১০,০০,০০০`, 10,000,000 → `৳১,০০,০০,০০০`
  - Implemented proper Bengali number grouping logic (after first 3 digits, then every 2 digits)

### Improved

- **API Clarity**: Clear separation between text conversion (`toText`) and currency formatting (`toBanglaMoney`)
- **Documentation**: Updated README.md with comprehensive examples for both functions
- **API Reference**: Enhanced documentation showing the distinct purposes of each function

### Migration Guide

For users upgrading from v1.2.1 or earlier:

- Use `toText()` for Bengali text conversion only
- Use `toBanglaMoney()` for currency formatting with proper commas
- To get the old combined format: `toBanglaMoney(amount) + " (" + toText(amount) + ")"`
- Or use custom template: `toText(amount, { template: "{currency}{amount} ({text})" })`

## [1.2.0] - 2025-10-31

### Improved

- **Traditional Scale System**: Enhanced traditional Bengali scale names for better accuracy
  - Updated to use proper traditional terms: "একশত কোটি" (অর্বুদ), "এক হাজার কোটি" (খর্ব), etc.
  - Improved scale progression: অর্বুদ→খর্ব→নিল→পদ্ম→শঙ্খ→মহাশঙ্খ→অন্ত্য→মধ্য→পরার্ধ→অপরার্ধ→উৎপল→নিকুমুদ
  - Better linguistic consistency for traditional number representation
- **Scale Display Logic**: Fixed display to show clean scale names (e.g., "একশত কোটি" instead of "এক একশত কোটি")

### Updated

- English equivalent mappings to match new traditional scale terms
- Documentation to reflect improved traditional scale system

## [1.1.0] - 2025-10-31

### Fixed

- **Bengali Compound Numbers**: Fixed incorrect representation of Bengali compound numbers (21-99)
  - Numbers like 75, 55, 99 now show correct forms: "পঁচাত্তর", "পঞ্চান্ন", "নিরানব্বই"
  - Previously showed incorrect concatenation: "সত্তর পাঁচ", "পঞ্চাশ পাঁচ", "নব্বই নয়"
- Added comprehensive `specialNumbers` mapping for all Bengali compound numbers
- Updated `convertBelowHundred()` function to prioritize special number forms

### Added

- Complete mapping of Bengali compound numbers (একুশ, বাইশ, তেইশ... নিরানব্বই)
- Linguistically accurate Bengali number representation
- Improved grammatical correctness for traditional Bengali number system

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
