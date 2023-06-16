$(document).ready(function() {
    $("#boxes a").click(function(event) {
      event.preventDefault(); 
  
      var optionTitle = $(this).attr("title");
      
      // Build the name of the JSON file based on json file name
      var jsonFileName = "../src/json_files/" + optionTitle + ".json";
      
      // Clear the elements 
      $("#suggest").empty();
  
      
      $.getJSON(jsonFileName, function(data) {
        var option = data.options[0]; 
        var optionHtml = '<h1>' + option.title + '</h1>';
        optionHtml += '<img src="' + option.image + '">';
        optionHtml += '<h2>' + option.name + '</h2>';
        optionHtml += '<p>' + option.text + '</p>';
  
        // Append 
        $("#suggest").append(optionHtml);
      });
    });
  });



