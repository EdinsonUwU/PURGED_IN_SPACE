
// create svg element:
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var svg = d3.select("*").append("svg").attr("width",windowWidth).attr("height", windowHeight)

// Add the path using this helper function

var mouse_pos_x=Math.random()*windowWidth;
var mouse_pos_y=0;


var spaceship_width = 100;
var spaceship_height = 100;

svg.append("svg:image")
  .attr('x', windowWidth/2)
  .attr('y', windowHeight/2)
  .attr('width', 100)
  .attr('height', 100)
  .attr("xlink:href","purged_in_space/rocketcolour.svg");

var image1 = d3.select("image")
console.log()
setInterval(() => {
  get_closer_to_mouse()
}, 1) 

function get_closer_to_mouse(){
  var image1_pos_x = image1._groups[0][0].x.baseVal.value;
  var image1_pos_y = image1._groups[0][0].y.baseVal.value

  if(image1_pos_x< mouse_pos_x-spaceship_width/2){
    image1.attr("x",image1_pos_x+ 1)
  }else if(image1_pos_x >= mouse_pos_x-spaceship_width/2){
    image1.attr("x",image1_pos_x - 1)
  }else{
    image1.attr("x",1000)
  }
  
  if(image1_pos_y< mouse_pos_y-spaceship_height/2){
    image1.attr("y",image1_pos_y + 1)
  }else if(image1_pos_y >= mouse_pos_y-spaceship_height/2){
    image1.attr("y",image1_pos_y - 1)
  }else{
    image1.attr("y",1000)
  }
}
  

onmousemove = function(e){ mouse_pos_x = e.clientX; mouse_pos_y = e.clientY}

 svg.append('circle')
 .attr('cx', windowWidth/2)
 .attr('cy', windowHeight/2)
 .attr('r', 35)
 .attr('stroke', 'black')
 .attr('fill', '#69a3b2');

var circleh = d3.select("circle")
setInterval(() => {
   circleh.transition()
       .duration(140000)
       .attr("cx", Math.random()*windowWidth-Math.random()*windowWidth/8)
       //.attr("cx", 2*windowWidth-2*windowWidth/8)
       .attr("cy", Math.random()*windowHeight-Math.random()*windowHeight/8)
       //.attr("cy", 2*windowHeight-2*windowHeight/8)
      
       .ease(d3.easeElastic);
       //console.log(circleh.mouse_pos_x)
}, 1) 
 