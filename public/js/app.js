$(document).ready(function(){
  var startbutton =$('#startbutton');
  var mins = $('#mins');
  var secs = $('#secs');
  var resetbutton = $('#resetbutton');

  startbutton.on('click', startCountup);

function startCountup(){
  var countup = setInterval(function(){
    var secondsVal = +secs.text();
    var minsVal = +mins.text();

    if (secondsVal != 59)
    {
      secs.text("0" + (secondsVal + 1));
    }
    if (secondsVal >= 9)
    {
      secs.text(secondsVal+1);
    }
    if (secondsVal > 59)
    {
      mins.text(minsVal +1);
      secs.text("00");
    }
    }, 1000);
  }
});
