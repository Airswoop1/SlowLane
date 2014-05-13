
//create the element that's going to act as a shade to the entire page and set its properties
var shade = document.createElement('div');

shade.style['z-index'] = 1000;
shade.style.width = '10000px';
shade.style.height = '10000px';
shade.style['background-color'] = 'white';
shade.style.background = 'white'; //Mozilla doesn't like background-color so we need this as well
shade.style.position = 'fixed';
shade.style.bottom = 0;

//insert the shade at the beginning of the DOM
document.body.insertBefore(shade, document.body.childNodes[0]);

//set the interval for how slow or fast you want the shade to reduce it's height
var inter = setInterval(function(){
    //if the shade is less than 10px just clear the interval and hide the shade
    if(parseFloat(shade.style.height.split('px')[0]) < 10 ){
        shade.style.visibility = 'hidden';
        window.clearInterval(inter);
        alert("That's what life in the slow lane feels like.")
    }
    //reduce the shade to 90% of it's height each interval
    shade.style.height = eval("'" + parseFloat(shade.style.height.split('px')[0]) * .9 + "px'");
},1000);

//once the dom loads set the height of the shade to the actual body height
window.onload = function(){
    shade.style.height = eval("\'"+document.documentElement.scrollHeight+"px\'");
}
