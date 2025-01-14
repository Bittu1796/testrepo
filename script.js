function temperature(){
    var celsius = document.getElementById("celsius").value;
    var farenheit = (celsius* 9/5) + 32;
    document.getElementById("fahrenheit").value = farenheit;
}

function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg*2.2;
    document.getElementById("pounds").value = p;
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}

function change_bg(){
    var btn = document.getElementById("distance");
    console.log(btn);
    btn.style.backgroundColor = white;
}

