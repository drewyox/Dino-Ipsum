$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let input = $('#dino1').val();
    let input2 = $('#dino2').val();
    $('#dino1').val("");
    $('#dino2').val("");
    $('#showErrors').val("");
    $.get("http://dinoipsum.herokuapp.com/api/?format=json").then(function(response) {
      let inputObj = response;
      let inputNxt = response[input];
      let inputDino = inputNxt[input2];
      $('.showHumidity').text(`${inputNxt[input2]}`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response} degrees.`);
      console.log(response."0"[5]);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
