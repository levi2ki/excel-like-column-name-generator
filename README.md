# **Version before 2.x.x is broken**
# EXCEL LIKE COLUMNS NAME GENERATOR.
    generates names like 'AAZ' in excel maner from count of columns

## Example.
```javascript
const genCols = require('excel-like-column-name-generator').genColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs  ['A'...'AZ'...'YZ']
```

## Memoized generator out of box.
```javascript
const genCols = require('excel-like-column-name-generator').memoizedGenColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs from ['A'...'AZ'...'YZ']
```

## Generate single value from index
```javascript
const genCol = require('excel-like-column-name-generator').genSingleValue;
genCol(676) // outputs 'YZ'
genCol(1) // outputs 'A'
```

## Parse column name to number
```javascript
const parse = require('excel-like-column-name-generator').parse;
parse('YZ') // outputs 676
parse('A') // outputs 1
```