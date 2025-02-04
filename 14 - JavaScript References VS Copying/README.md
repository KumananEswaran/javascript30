# 14 JAVASCRIPT REFERENCE VS COPYING


This project explores how primitive values (like numbers and strings) and reference values (like arrays and objects) behave when copied. It shows that changing a copied primitive value doesn’t affect the original, but copying an array or object just creates a reference, so changes affect both. I learned how to properly copy arrays using .slice(), concat(), and the spread operator ([...]), and how to copy objects using Object.assign() and JSON.parse(JSON.stringify(obj)) to avoid unwanted changes.
