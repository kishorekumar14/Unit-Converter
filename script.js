//length conversions
var feet = document.getElementById("feet")
var inch = document.getElementById("inch")
var yards = document.getElementById("yards")
var meters = document.getElementById("meters")

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    let y = f*(0.33);
    let m = f*(0.3048)
    inch.value = i;
    yards.value = y;
    meters.value = m;
});
inch.addEventListener('input', function(){
    let i = this.value;
    let f = i*(0.0833);
    let y = i*(0.0277);
    let m = i*(0.0254);
    feet.value = f;
    yards.value = y;
    meters.value = m;
});

yards.addEventListener('input', function(){
    let y = this.value;
    let f = y*3;
    let i = y*36;
    let m = y*0.9144;
    feet.value = f;
    inch.value = i;
    meters.value = m;
});


meters.addEventListener('input', function(){
    let m = this.value;
    let f = m*3.281;
    let y = m*1.094;
    let i = m*39.37;
    feet.value = f;
    yards.value = y;
    inch.value = i;
});

// temperature conversions
var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');
var kelvin = document.getElementById('kelvin');

celsius.addEventListener('input', function () {
    let c = this.value;
    let f = (c*1.8) + 32 ;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
});

fahrenheit.addEventListener('input', function () {
    let f = this.value;
    let c = (f-32)*0.55;
    let k = c+273.15;
    celsius.value = c;
    kelvin.value = k;
});

kelvin.addEventListener('input', function () {
    let k = this.value;
    let c = k - 273.15;
    let f = (k-273.15)*1.8 + 32;
    celsius.value = c;
    fahrenheit.value = f;
});

// weights conversions

var kilograms = document.getElementById('kilograms');
var ounces = document.getElementById('ounces');
var pounds = document.getElementById('pounds');

kilograms.addEventListener('input', function () {
    let k = this.value;
    let o = k*35.274;
    let p = k*2.205;
    ounces.value = o;
    pounds.value = p;
});

ounces.addEventListener('input', function () {
    let o = this.value;
    let k = o*0.0283;
    let p = o*0625;
    kilograms.value = k;
    pounds.value = p;
});

pounds.addEventListener('input', function () {
    let p = this.value;
    let o = p*0.4535;
    let k = p*16;
    ounces.value = o;
    kilograms.value = k;
});

// speed conversions

var kmph = document.getElementById('kmph');
var mph = document.getElementById('mph');
var mps = document.getElementById('mps');

kmph.addEventListener('input', function () {
    let km = this.value;
    let mi = km*0.621;
    let me = km*0.277;
    mph.value = mi;
    mps.value = me;
});

mph.addEventListener('input', function () {
    let mi = this.value;
    let km = mi*1.609;
    let me = mi*0.447;
    kmph.value = km;
    mps.value = me;
});

mps.addEventListener('input', function () {
    let me = this.value;
    let mi = me*3.6;
    let km = me*2.236;
    kmph.value = km;
    mph.value = mi;
});