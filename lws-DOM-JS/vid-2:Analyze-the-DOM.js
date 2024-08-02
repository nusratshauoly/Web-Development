// vid - 2: Analyze the DOM - 
console.log(document.title);
console.dir(document);
console.log(document.URL);
console.log(document.domain);
console.log(document);
console.log(document.body);
console.log(document.head);

console.log(document.title = 'DOM - Play with DOM');

console.log(typeof (document.all)); // (document.all) is not an array it is an object whose type is (HTMLAllCollection)
for (let element of document.all) {
    console.log(element);
}

console.log(document.all[5]);

console.log(document.forms);
console.log(document.links);