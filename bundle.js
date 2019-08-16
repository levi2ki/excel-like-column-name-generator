"use strict";function memoize(t){var m={};return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(m.hasOwnProperty(n[0]))return m[n[0]];var o=t.apply(void 0,n);return m[n[0]]=o}}Object.defineProperty(exports,"__esModule",{value:!0});var a={},memoized=!1;function genSymbols(){if(memoized)return a;for(var e=0;e<26;e++)a[e]=String.fromCharCode(e+65);return memoized=!0,a}var symbols=genSymbols();function generateSingleValue(e){return e.toString(26).split("").reverse().map(function(e){return parseInt(e,26)}).map(function(e,n){return e*Math.pow(26,n)}).map(function(e){return e%26}).reverse().map(function(e){return symbols[e]}).join("")}function generateColumnNames(o){return function(e){for(var n=[],r=0;r<=e;r++)n[r]=o(r);return n}}var genColumns=generateColumnNames(generateSingleValue),memoizedGenColumns=generateColumnNames(memoize(generateSingleValue));exports.genColumns=genColumns,exports.memoizedGenColumns=memoizedGenColumns;