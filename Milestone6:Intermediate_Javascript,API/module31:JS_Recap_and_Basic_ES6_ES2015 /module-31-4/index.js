const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trump`;


// this is not to write
const multiline = 'First line text \n' +
    'Second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string';
console.log(multiLine);
    
// another example
const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summary = 'sum of: ' + a + ' and ' + b + ' is:' + (a + b);
console.log(summary);


// using to write multiline : this is to write (``) template string
const newMultiLine = `First Line of text
Second Line of code
Third line of text
Fourth line of string
`;
console.log(newMultiLine);

// another example
const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const newSummary = `Sum of ${a} and ${b} and ${nums.length} is: ${a + b}`;
console.log(newSummary);

