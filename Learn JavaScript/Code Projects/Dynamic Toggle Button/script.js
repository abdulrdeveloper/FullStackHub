const toggleButton = document.createElement('button');
toggleButton.id = "toggleButton";
toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
document.body.appendChild(toggleButton);

const heading = document.createElement('h1');
heading.id = "mainHeading";
heading.textContent = "Good Morning - Light Mode";
document.body.appendChild(heading);

const description = document.createElement('p');
description.id = "description";
description.textContent = "Wake up! The sun is shining bright ✨\nFeel the energy of a brand new day!\nTime to shine and make it happen! 🚀\nLet your spirit soar with endless possibilities!";
description.style.color = 'black';
document.body.appendChild(description);

toggleButton.addEventListener('click', () => {

    if (heading.style.color === 'white') {
        heading.style.color = 'black';
        document.body.style.background = 'white';
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        heading.textContent = "Good Morning - Light Mode";
        description.textContent = "Wake up! The sun is shining bright ✨\nFeel the energy of a brand new day!\nTime to shine and make it happen! 🚀\nLet your spirit soar with endless possibilities!";
        description.style.color = 'black';
        document.body.style.transition = 'all 0.5s ease';
    }

    else {
        heading.style.color = 'white';
        document.body.style.background = 'black';
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        heading.textContent = "Good Night - Dark Mode";
        description.textContent = "The night is calling softly,\nPeace and tranquility surround you,\nLet the stars guide your dreams,\nRest well, tomorrow brings new hope! 💫";
        description.style.color = 'white';
        document.body.style.transition = 'all 0.5s ease';
    }
});
