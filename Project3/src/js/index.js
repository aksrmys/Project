    // Function to make an AJAX request to the education.json file and update the education options
    function loadEducationOptions() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/Users/rumeysaakis/Downloads/Project1 2/src/json_files/education.json', true);

        xhr.onload = function() {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var options = response.options;

                var educationBoxes = document.getElementById('education-boxes');
                educationBoxes.innerHTML = '';

                options.forEach(function(option) {
                    var box = document.createElement('div');
                    box.className = 'box';
                    box.textContent = option.title;

                    box.addEventListener('click', function() {
                        document.querySelector('.suggest h1').textContent = option.title;
                        document.querySelector('.suggest img').src = option.image;
                        document.querySelector('.suggest h2').textContent = option.name;
                        document.querySelector('.suggest p').textContent = option.text;
                    });

                    educationBoxes.appendChild(box);
                });
            }
        };

        xhr.send();
    }

    // Load education options on page load
    document.addEventListener('DOMContentLoaded', function() {
        loadEducationOptions();
    });

