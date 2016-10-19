(function(){
  var start = document.querySelector('#log-work-date-logged-date-picker');
  var startDate = new Date(start.value);

  var output = document.querySelector('#log-work-time-logged');

  var promptDate =  new Date();
  promptDate.setFullYear(startDate.getFullYear());
  promptDate.setMonth(startDate.getMonth());
  promptDate.setDate(startDate.getDate());


  var endTime = window.prompt('Choose End time', promptDate.toLocaleString());
  if (endTime){
    var end = new Date(endTime);
    var interval = end  - startDate;
    var hours = interval / 1000 / 60 / 60;

    if (hours < 1){
      output.value = (hours * 60).toFixed(0) + 'm';
    } else {
      output.value = hours.toFixed(2) + 'h';
    }
    output.focus();
  }
}())

