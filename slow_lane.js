(function() {
      //create the element that's going to act as a _sl_shade to the entire page and set its properties
      console.log('starting it off');
      var _sl_shade = document.createElement('div');
      _sl_shade.id="_sl_shade_dF812x3a4";
      _sl_shade.style['z-index'] = 1000;
      _sl_shade.style.width = '10000px';
      _sl_shade.style.height = '10000px';
      _sl_shade.style['background-color'] = 'white';
      _sl_shade.style.background = 'white'; //Mozilla doesn't like background-color so we need this as well
      _sl_shade.style.position = 'fixed';
      _sl_shade.style.bottom = 0;
      var _sl_notifier = document.createElement('div');
      _sl_notifier.style.position='fixed'
      _sl_notifier.innerHTML="<a href='#' onclick='document.getElementById(\"_sl_shade_dF812x3a4\").style.display=\"none\";'>killIt!</a>";
      //insert the _sl_shade at the beginning of the DOM
      document.body.insertBefore(_sl_shade, document.body.childNodes[0]);
      _sl_shade.appendChild(_sl_notifier);
      //set the interval for how slow or fast you want the _sl_shade to reduce it's height
      var inter = setInterval(function(){
          //if the _sl_shade is less than 10px just clear the interval and hide the _sl_shade
          if(parseFloat(_sl_shade.style.height.split('px')[0]) < 10 ){
              _sl_shade.style.visibility = 'hidden';
              window.clearInterval(inter);
              alert("That's what life in the slow lane feels like.")
          }
          //reduce the _sl_shade to 90% of it's height each interval
          //_sl_shade.style.height = eval("'" + parseFloat(_sl_shade.style.height.split('px')[0]) * .98 + "px'");
          _sl_shade.style.height = parseFloat(_sl_shade.style.height.split('px')[0]) * .98 + "px";
      },100);

      //once the dom loads set the height of the _sl_shade to the actual body height
      window.onload = function(){
          _sl_shade.style.height = document.documentElement.scrollHeight+"px";
      }

}).call(this);
