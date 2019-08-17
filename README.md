# **Version before 2.x.x is broken**
# EXCEL LIKE COLUMNS NAME GENERATOR.
    generates names like 'AAZ' in excel maner from count of columns

## Example.
```javascript
const genCols = require('excel-like-column-name-generator').genColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs  ['A'...'AZ'...'AAA']
```

## Memoized generator out of box.
```javascript
const genCols = require('excel-like-column-name-generator').memoizedGenColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs from ['A'...'AZ'...'AAA']
```

## Generate single value from index
```javascript
const genCol = require('excel-like-column-name-generator').genSingleValue;
genCol(676) // outputs 'AAA'
genCol(1) // outputs 'A'
```