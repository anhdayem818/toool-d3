function drawBox2D(d,r,c, o){

  var x1,x2, y1, y2;
  var o = 20;
  d3.select("svg").remove(); 

  var svg = d3.select("#svgcontainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

     
    
  // draw d1
  x1= o+c;
  x2= o+c+d ;
  y1= o;
  y2= o;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);

  // draw d2
  x1= o;
  x2= o+2*c+d ;
  y1= o+c;
  y2= o+c;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);

  // draw d3
  x1= o;
  x2= o+2*c+d ;
  y1= o+c+r;
  y2= o+c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);
  
  // draw d4
  x1= o+c;
  x2= o+c+d ;
  y1= o+2*c+r;
  y2= o+2*c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);
  // dash
  // x1= o+c;
  // x2= o+c+d ;
  // y1= o+2*c+r;
  // y2= o+2*c+r;
  // svg.append("line")
  //   .attr("x1", x1)
  //   .attr("y1", y1)
  //   .attr("x2", x2)
  //   .attr("y2", y2)
  //   .style("stroke", "rgb(255,0,0)")
  //   .style("stroke-dasharray", ("3, 3"));

  // draw c1
  x1= o;
  x2= o ;
  y1= o+c;
  y2= o+c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);

  // draw c2
  x1= o+c;
  x2= o+c;
  y1= o;
  y2= o+2*c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);

  // draw c3
  x1= o+c+d;
  x2= o+c+d ;
  y1= o;
  y2= o+2*c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);
  // draw c4
  x1= o+2*c+d;
  x2= o+2*c+d;
  y1= o+c;
  y2= o+c+r;
  svg.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);
  
  
  // draw dd
  

}


function drawBox2DwithOffset(d,r,c,e,unit){

  if(unit){
    switch(unit) {
      case 'mm':
        d = milimeterToPixel(d)
        r = milimeterToPixel(r)
        c = milimeterToPixel(c)
        e = milimeterToPixel(e)
        // d = milimeterToPixel(d)
        break;
      default:
        // code block
    }
  }
  var a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a12,a14,a15,a16,a17,a18,a19;
  var o = 20;
  a0 = { x: o,       y: o+c }
  a1 = { x: o+c,     y: o+c }
  a2 = { x: o+c+d,   y: o+c }
  a3 = { x: o+2*c+d, y: o+c }
  a4 = { x: o,       y: o+c+r }
  a5 = { x: o+c,     y: o+c+r }
  a6 = { x: o+c+d,   y: o+c+r }
  a7 = { x: o+2*c+d, y: o+c+r }
  a8 = { x: o+c,     y: o }
  a9 = { x: o+c+d,   y: o }
  a10 = { x: o+c,  y: o+2*c+r }
  a11 = { x: o+c+d,  y: o+2*c+r }

  a12 = { x: o+c-e,     y: o }
  a13 = { x: o+c+d+e,   y: o }
  a14 = { x: o+c-e,     y: o+c }
  a15 = { x: o+c+d+e,   y: o+c }
  a16 = { x: o+c-e,     y: o+c+r }
  a17 = { x: o+c+d+e,   y: o+c+r }
  a18 = { x: o+c-e,     y: o+2*c+r }
  a19 = { x: o+c+d+e,   y: o+2*c+r }


  d3.select("#svgcontainer svg").remove(); 

  var width = d+2*c+40;
  var height = r+2*c+40;
  var svg = d3.select("#svgcontainer")
      .append("svg")
      .attr("width", width)
      .attr("id", "demo1")
      .attr("height", height);

  // draw line
  drawLine(a0,a14, svg)
  drawLine(a14,a12, svg)
  drawLine(a12,a13, svg)
  drawLine(a13,a15, svg)
  drawLine(a15,a3, svg)
  drawLine(a3,a7, svg)
  drawLine(a7,a17, svg)
  drawLine(a17,a19, svg)
  drawLine(a19,a18, svg)
  drawLine(a18,a16, svg)
  drawLine(a16,a4, svg)
  drawLine(a4,a0, svg)

  // draw dashed
  drawLine(a14, a15, svg, true)
  drawLine(a16, a17, svg, true)
  drawLine(a1, a2, svg, true)
  drawLine(a5, a6, svg, true)
  drawLine(a1, a5, svg, true)
  drawLine(a2, a6, svg, true)

}

function drawLine(a1, a2, svg, style){
  if(style){
    svg.append("line")
    .attr("x1", a1.x)
    .attr("y1", a1.y)
    .attr("x2", a2.x)
    .attr("y2", a2.y)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-dasharray", ("3, 3"));
  }else{
    svg.append("line")
    .attr("x1", a1.x)
    .attr("y1", a1.y)
    .attr("x2", a2.x)
    .attr("y2", a2.y)
    .style("stroke", "rgb(255,0,0)")
    .style("stroke-width", 2);
  }
  
}

function milimeterToPixel(mm){
  return mm*3.7795275591
}

function exportSVG(domId){
  var svg = document.getElementById(domId);

  //get svg source.
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  //add name spaces.
  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  //set url value to a element's href attribute.
  console.log(url)
  document.getElementById("d-svg-1-"+ domId).href = url;
}

$(document).ready(function(){
  $('#drawBox').on('submit', function(e){
    var d,r,c,e,f;
    d = $('#dai').val()
    r = $('#rong').val()
    c = $('#cao').val()
    e = $('#do_day').val()
    g = $('#gap').val()

    drawBox2DwithOffset(d, r, c, e, 'mm')
    drawDagiacwithOffset(d, r, c, e, g, 10, 1, 'mm')
    exportSVG("demo1")
    exportSVG("demo2")
    return false;
  })
})