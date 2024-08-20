document.addEventListener('DOMContentLoaded', () => {
    const iconsContainer = document.getElementById('icons-container');

    // List of programming languages you want to display
    const languages = ['javascript', 'python', 'html5', 'csharp', 'css3','json','github'];

    // Function to create icon elements
    const createIconElement = (language) => {
        const iconElement = document.createElement('i');
        iconElement.className = `devicon-${language}-plain colored`;
        iconElement.style.fontSize = '50px';
        iconElement.style.margin = '10px';
        return iconElement;
    };

    // Append icons to the container
    languages.forEach(language => {
        const iconElement = createIconElement(language);
        iconsContainer.appendChild(iconElement);
    });
});

const currentYear = new Date();document.getElementById("year").innerHTML = currentYear.getFullYear();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}