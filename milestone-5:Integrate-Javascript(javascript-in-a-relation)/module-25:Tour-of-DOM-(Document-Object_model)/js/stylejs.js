// Module: 25-6: Styling dom properties, add and remove css class using JS

// html file e kotogulo section ache ta ber korar jonno.
const sections = document.querySelectorAll('section');
// console.log(sections);
// using (for ... of)
for (const section of sections) {
    //console.log(section);

// we can also add / remove styles in section
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
//placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');

//**  jodi style element er moddhe direct boshe tahole tar priority high thakbe. r jodi pichone thake tahole priority low hobe.
//** 