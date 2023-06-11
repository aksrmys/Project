$(document).ready(function () {
    $("#accordion").accordion({
        collapsible: true,
        active: false
    });
});



$(document).ready(function () {
    $("#accordion").accordion(); // Accordion'u etkinleştir

    $("#accordion").on("accordionactivate", function (event, ui) {
        var activeTabId = ui.newPanel.attr("id");

        // Sadece aktif tab açıldığında AJAX isteği yap
        switch (activeTabId) {
            case "education-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "education-contact");
                break;
            case "transport-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "transport-contact");
                break;
            case "meals-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "meals-contact");
                break;
            case "social_areas-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "social_areas-contact");
                break;
                
            case "building-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "building-contact");
                break;
            case "canteen-content":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "canteen-content");
                break;
            case "campus-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "campus-contact");
                break;
            case "students-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "students-contact");
                break;
            case "managers-content":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "managers-content");
                break;
            case "everything_else-contact":
                fetchContacts("https://jsonplaceholder.typicode.com/users", "everything_else-contact");
                break;
            default:
                break;
        }
    });
});

function fetchContacts(url, targetId) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var users = data;

            var userList = '<h2>Contact Information</h2>';
            userList += '<ul>';

            for (var i = 0; i < 3; i++) {
                var user = users[i];
                userList += '<li>' + user.name + '</li>';
                userList += '<li>Email: ' + user.email + '</li>';
                userList += '<li>Phone: ' + user.phone + '</li>';
                userList += '<li>Website: ' + user.website + '</li>';
                userList += '<li>City: ' + user.address.city + ' ' + user.address.street + ' ' + user.address.suite + '</li>';
                userList += '<br>';
            }

            userList += '</ul>';

            $("#" + targetId).html(userList); // Hedef tabı güncelle
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

