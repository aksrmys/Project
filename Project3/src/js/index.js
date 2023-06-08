// Function to clear the main element
function clearMain() {
    var main = document.querySelector('main');
    main.innerHTML = '';
}

// Function to create HTML elements for the speaker data
function createSpeakerElements(data) {
    var main = document.querySelector('main');

    // Create container div
    var container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    // Create content div
    var content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    // Create title
    var title = document.createElement('h1');
    title.textContent = data.title;
    content.appendChild(title);

    // Create image
    var image = document.createElement('img');
    image.src = data.image;
    content.appendChild(image);

    // Create name
    var name = document.createElement('h2');
    name.textContent = data.name;
    content.appendChild(name);

    // Create text
    var text = document.createElement('p');
    text.textContent = data.text;
    content.appendChild(text);
}

// Click event handler for sidebar links
function linkClickHandler(event) {
    event.preventDefault();

    var link = event.target;
    var fileName = link.getAttribute('href');

    // Remove the '#' character from the filename
    fileName = fileName.slice(1) + '.json';

    // Retrieve the data from the JSON file
    fetch(fileName)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Clear the main element
            clearMain();

            // Create HTML elements for the speaker data
            createSpeakerElements(data.options[0]);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
}

// Add click event listeners to sidebar links
var links = document.querySelectorAll('.left-area a');
links.forEach(function(link) {
    link.addEventListener('click', linkClickHandler);
});
