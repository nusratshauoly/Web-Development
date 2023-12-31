// if we click the button it will show button and hidden content and if we click the content again it will hide

// DOM Manipulation





// Reveal Event
const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');


// if (reveal more) button shudhu thake etate (click) korbo jate(reveal button) shore jay {and content show kore} [else] jodi {content show kora thake} tahole (reveal button) e click korle jeno(reveal button) show kore.
function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn'))
    {
        hiddenContent.classList.remove('reveal-btn');
    }
    else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);