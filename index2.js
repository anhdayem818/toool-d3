function drawDagiacwithOffset(d, r, c, e, g, f, i, unit){
  f = 10;
  h0=10;
  i = 1;
  var o = 20;
  if(unit){
    switch(unit) {
      case 'mm':
        d = milimeterToPixel(d)
        r = milimeterToPixel(r)
        c = milimeterToPixel(c)
        e = milimeterToPixel(e)
        g = milimeterToPixel(g)
        f = milimeterToPixel(f)
        i = milimeterToPixel(i)
        // d = milimeterToPixel(d)
        break;
      default:
        // code block
    }
  }
  var a = e;
  var j = f/(Math.tan(30*(Math.PI/180)));

  var a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a12,a14,a15,a16,a17,a18,a19;

  a0 = { x: o+r+3*a,     y: o+f+a }
  a1 = { x: o+2*r+3*a,   y: o+f+a }
  a2 = { x: o+2*r+3*a,   y: o+f+a+d }
  a3 = { x: o+3*a+r,     y: o+f+a+d }
  
  a4 = { x: o+2*a+r,     y: o+f }
  a5 = { x: o+4*a+2*r,   y: o+f}
  a6 = { x: o+4*a+2*r,   y: o+f+2*a+d }
  a7 = { x: o+2*a+r,     y: o+f+2*a+d }
  
  a8 = { x: o+2*a+r+i,   y: o+f+2*a+d+i }
  a9 = { x: o+4*a+2*r-1,   y: o+f+2*a+d+i }
  a10 = { x: o+4*a+2*r-1,  y: o+2*a+f+d+i+c+g }
  a11 = { x: o+2*a+r+i,  y: o+2*a+f+d+i+c+g }

  a12 = { x: o,     y: o+f+2*a+d }
  a13 = { x: o+h0,   y: o+f+2*a+d }
  a14 = { x: o,     y: o+f }
  a15 = { x: o+h0,   y: o+f }
  
  a16 = { x: o+h0+j,     y: o }
  a17 = { x: o+2*a+r-j,  y: o }
  a18 = { x: o+h0+j,     y: o+2*a+2*f+d }
  a19 = { x: o+2*a+r-j,  y: o+2*a+2*f+d }


  d3.select("#svgcontainer2 svg").remove(); 

  var width = 2*r+4*a+2*o;
  var height = 2*o+2*f+2*a+d+c+g;
  var svg = d3.select("#svgcontainer2")
      .append("svg")
      .attr("width", width)
      .attr("id", "demo2")
      .attr("height", height);

  // draw line

  drawLine(a0,a1, svg)
  drawLine(a1,a2, svg)
  drawLine(a2,a3, svg)
  drawLine(a3,a0, svg)

  drawLine(a4,a5, svg)
  drawLine(a5,a6, svg)
  drawLine(a6,a7, svg)
  drawLine(a7,a4, svg)

  drawLine(a8,a9, svg)
  drawLine(a9,a10, svg)
  drawLine(a10,a11, svg)
  drawLine(a11,a8, svg)
  drawLine(a7,a8, svg)
  drawLine(a6,a9, svg)


  drawLine(a7,a19, svg)
  drawLine(a19,a18, svg)
  drawLine(a18,a13, svg)
  drawLine(a13,a12, svg)
  drawLine(a12,a14, svg)
  drawLine(a14,a15, svg)
  drawLine(a15,a16, svg)
  drawLine(a16,a17, svg)
  drawLine(a17,a4, svg)


}