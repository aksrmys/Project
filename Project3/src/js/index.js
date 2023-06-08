$(document).ready(function() {
    $("#boxes a").click(function(event) {
      event.preventDefault(); 
  
      var optionTitle = $(this).attr("title");
      
      // Build the name of the JSON file based on the speaker's title
      var jsonFileName = "src/json_files/" + optionTitle + ".json";
      
      // Clear the elements 
      $("#suggest").empty();
  
      // Retrieve the JSON data for the speaker
      $.getJSON(jsonFileName, function(data) {
        var option = data.options[0]; 
        var optionHtml = '<h1>' + option.title + '</h1>';
        optionHtml += '<img src="' + option.image + '">';
        optionHtml += '<h2>' + option.speaker + '</h2>';
        optionHtml += '<p>' + option.text + '</p>';
  
        // Append the speaker HTML elements 
        $("suggest").append(optionHtml);
      });
    });
  });
