# EXCEL LIKE COLUMNS NAME GENERATOR.
    generates names like 'AAZ' in excel maner from count of columns

## Example.
```
const genCols = require('excel-like-column-name-generator').genColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs  ['A'...'AZ'...'AAA']
```

## Memoized generator out of box.
```
const genCols = require('excel-like-column-name-generator').memoizedGenColumns;
genCols(1) // outputs ['A']
genCols(676) // outputs from ['A'...'AZ'...'AAA']
```

## Generate single value from index
```
const genCol = require('excel-like-column-name-generator').genSingleValue;
genCol(676) // outputs 'AAA'
genCol(1) // outputs 'A'
```