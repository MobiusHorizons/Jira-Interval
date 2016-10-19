(function(){
  var start = document.querySelector('#log-work-date-logged-date-picker');
  var output = document.querySelector('#log-work-time-logged');
  var end = new Date(window.prompt('Choose End time', new Date().toLocaleString()))
  var interval = end  - (new Date(start.value));
  var hours = interval / 1000 / 60 / 60;

  if (hours < .5){
    output.value = (hours * 60).toFixed(0) + 'm';
  } else {
    output.value = hours.toFixed(2) + 'h';
  }
  output.focus();
}())

