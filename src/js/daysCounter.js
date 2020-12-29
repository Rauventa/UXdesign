function GetCount(){

    dateNow = new Date();

    amount = dateFuture.getTime() - dateNow.getTime();
    delete dateNow;
    if(amount < 0){
        document.getElementById('countbox').innerHTML="Now!";
    }
    else{

        days=0;hours=0;mins=0;secs=0;out="";

        amount = Math.floor(amount/1000);

        days=Math.floor(amount/86400);
        amount=amount%86400;

        if (days === 1) {
            out+= " остался " + days + " день"
        } else if (days === 2 || days === 3 || days === 4) {
            out+= " осталось " + days + " дня"
        } else {
            out += " осталось " + days +" дней"
        }
        document.getElementById('countbox').innerHTML=out;

        setTimeout('GetCount()', 1000);
    }

}

// window.onload = function() {GetCount();}    
$(document).ready(GetCount());