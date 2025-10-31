# Contributing to Bangla Money Format

Thank you for your interest in contributing to Bangla Money Format! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Search existing issues** before creating a new one
2. **Use clear, descriptive titles** for your issues
3. **Provide detailed information** including:
   - Node.js version
   - Operating system
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Code examples

### Suggesting Features

1. **Check if the feature already exists** or is planned
2. **Provide a clear use case** for the feature
3. **Include examples** of how it would work
4. **Consider backward compatibility**

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `main`
3. **Make your changes**
4. **Add tests** for new functionality
5. **Update documentation** if needed
6. **Ensure all tests pass**
7. **Submit a pull request**

## 🏗️ Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/bangla-money-format.git
cd bangla-money-format

# Install dependencies (if any)
npm install

# Run tests
npm test

# Run demo
npm run demo
```

## 📝 Code Guidelines

### Code Style

- Use **2 spaces** for indentation
- Use **semicolons** at the end of statements
- Use **camelCase** for variable and function names
- Use **descriptive variable names**
- Add **comments** for complex logic

### Function Guidelines

- Keep functions **small and focused**
- Use **pure functions** when possible
- Handle **edge cases** properly
- Validate **input parameters**

### Testing

- **Test all new features**
- **Include edge cases** in tests
- **Test with various number formats**
- **Verify Bengali text accuracy**

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Test Categories

1. **Basic number conversion** tests
2. **Bengali to English** conversion tests
3. **Traditional scale** tests
4. **Short form** tests
5. **Edge case** tests (negative numbers, fractions, large numbers)

### Adding Tests

When adding new features, please include tests in the `test.js` file or create specific test files.

## 📚 Documentation

### README Updates

- Update the **API Reference** for new options
- Add **usage examples** for new features
- Update the **feature list**
- Keep examples **simple and clear**

### Code Documentation

- Add **JSDoc comments** for functions
- Document **parameter types** and **return values**
- Include **usage examples** in comments

## 🌍 Internationalization

### Bengali Text

- Ensure **accurate Bengali grammar**
- Use **proper Bengali numerals**
- Follow **traditional Bengali** number naming conventions
- **Test with native speakers** when possible

### English Translations

- Provide **accurate English equivalents**
- Use **commonly understood** English terms
- Maintain **consistency** in translations

## 🐛 Bug Fixes

### Reporting Bugs

1. **Verify the bug** with the latest version
2. **Check if it's already reported**
3. **Provide minimal reproduction** example
4. **Include error messages** if any

### Fixing Bugs

1. **Create a test** that reproduces the bug
2. **Fix the issue**
3. **Ensure the test passes**
4. **Verify no regression** in other tests

## 📈 Performance

### Guidelines

- **Optimize for common use cases**
- **Avoid unnecessary computations**
- **Use efficient algorithms** for large numbers
- **Consider memory usage** for large-scale applications

### Benchmarking

- **Test with various number sizes**
- **Measure conversion time**
- **Profile memory usage**

## 🔄 Version Management

### Semantic Versioning

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Changelog

- **Update CHANGELOG.md** for all changes
- **Follow the existing format**
- **Include migration notes** for breaking changes

## 📋 Checklist for Contributors

Before submitting a pull request:

- [ ] Code follows the style guidelines
- [ ] All tests pass
- [ ] New features have tests
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated
- [ ] No breaking changes (unless intended)
- [ ] Bengali text is accurate
- [ ] English translations are correct

## 🤔 Questions?

If you have questions about contributing:

1. **Check the documentation** first
2. **Search existing issues** for similar questions
3. **Create a new issue** with the "question" label
4. **Contact the maintainers** directly if needed

## 🙏 Recognition

All contributors will be:

- **Listed in the contributors** section
- **Credited in release notes**
- **Appreciated by the community**

Thank you for helping make Bangla Money Format better! 🇧🇩
