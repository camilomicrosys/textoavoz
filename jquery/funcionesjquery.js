$(document).ready(function(){


$("#escucha").on('click',function(e){
e.preventDefault();
let texto=$("#texto").val();
   var myTimeout;
    function myTimer() {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
        myTimeout = setTimeout(myTimer, 10000);
    }
 
        window.speechSynthesis.cancel();
        myTimeout = setTimeout(myTimer, 10000);
        var toSpeak = texto;
        var utt = new SpeechSynthesisUtterance(toSpeak);
       
        utt.onend =  function() { clearTimeout(myTimeout); }
        window.speechSynthesis.speak(utt);
})



$("#continuar").on("click",function(e){
    e.preventDefault();
    window.speechSynthesis.resume();
})



$("#parar").on("click",function(e){
e.preventDefault();

 window.speechSynthesis.pause();
})

});