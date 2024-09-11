//-------------------------------------------------Horas em js------------------------------------------------------------
function hora(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18){
        greeting = "Good evening!";
    }else if (hourNow > 12){
        greeting = "Good Afternoon!";
    }else if (hourNow > 0){
        greeting = "Good morning!";
    }else{
        greeting = "Welcome!";
    }

    var el = document.getElementById("hora");
    el.textContent = greeting;
}

hora();

//-----------------------------------------------------------------------------------------------------------------------
