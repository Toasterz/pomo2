//Pomo 2, by me
$(document).ready(function(){
  var startbutton =$('#startbutton');
  var mins = $('#mins');
  var secs = $('#secs');
  var ding = document.getElementById('ding');
  startbutton.on('click', startCountup);
  function startCountdown(){
    var countdown = setInterval(function(){
      var secondsVal = +secs.text();
      var minsVal =  +mins.text();
      if(secondsVal === 0 && minsVal === 0)
      {
        ding.play();
        alert("BREAK'S OVER, SHMUCK");
        startbutton.removeAttr('disabled');
        clearInterval(countdown);
        return;
      }
      if(secondsVal === 0)
      {
        secs.text(59);
        mins.text("0" + (4));
      }
      else
      {
        if(secondsVal <= 10)
        {
          secs.text("0" + (secondsVal-1));
        }
        else {
          secs.text(secondsVal-1);
        }
      }

      }, 1000);
    }
function startCountup(){
  startbutton.attr('disabled', true);
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
    if (secondsVal >= 59)
    {
      mins.text("0" + (minsVal +1));
      secs.text("00");
    }
    if (minsVal >= 9 && secondsVal === 59)
    {
      mins.text(minsVal+1);
    }
    if(minsVal === 24 && secondsVal === 59)
    {
      ding.play();
      alert("TAKE A BREAK YOU SHMUCK");
      clearInterval(countup);
      startCountdown();
      return;
    }
    }, 1000);
  }
});
