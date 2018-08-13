"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var summary = 0;
for (var name in salaries) {
    summary += salaries[name];
} 

alert(summary);