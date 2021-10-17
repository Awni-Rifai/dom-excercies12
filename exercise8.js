function initGrid() {
    // collect colors in an array
    const container=document.querySelector('#colors');
    const selected=document.querySelector('#selected');
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    counter=0;
    colors.forEach(color=>{

        const markup=`<div class="choice type--${counter}"></div>`
        container.insertAdjacentHTML('afterbegin',markup);
        const el=document.querySelector(`.type--${counter}`);
        el.style.backgroundColor=color;
        el.addEventListener('click',function(){
            const colorRgb=hexToRgb(color);
           const rgb= `rgb(${colorRgb.r},${colorRgb.g},${colorRgb.b})`;
           selected.innerText=rgb;
           selected.style.backgroundColor=rgb
        })
    })
}
//convert to rgb
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

window.onload = function () {
    initGrid();
}
