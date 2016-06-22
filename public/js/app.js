$(document).ready(function(){
  var startbutton =$('#startbutton');
  var mins = $('#mins');
  var secs = $('#secs');
  var resetbutton = $('#resetbutton');
  var ding = document.getElementById('ding');

  startbutton.on('click', startCountup);

  function playSound()
  {
    ding.play();
  }

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
      minsVal = (mins.text("0" + 5));
      return;
    }
    }, 1000);
  }
});
