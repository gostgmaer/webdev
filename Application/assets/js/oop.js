/* const oops = async () => {
  const apicall = await axios.get("https://api.first.org/global-irt/v1");
  console.log(apicall.data);
};
const cllData = () =>{
    for (let index = 1; index <= 195; index++) {
        console.log(`"+${index}",`);
        const li = document.createElement('li');
        li.innerText = `"+${index}",`;
        document.body.appendChild(li);
        
    }
} */

/* String.prototype.newP= function (){
    return `OMG ${this.toUpperCase()} OK|||||`
}

Array.prototype.pop=function(){
    return 'no pop today'
} */

/* function rbg(r,g,b){
    return `rbg(${r},${g},${b})`
} */
/* 
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(33,23,189);
firstColor.hex();


function Color(r,g,b){
  this.r=r;
  this.g=g;
  this.b=b;
}
Color.prototype.rgb=function(){
  const{r,g,b}=this;
  return `rgb(${r},${g},${b})`;
}

Color.prototype.hex=function(){
  const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const color1= new Color(40,50,20);
const color2= new Color(4,5,210); */

/* class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = name;
    this.calcHSL()
    
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 0.3) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  hsl(){
    const { h, s, l } = this;
    return `hsl(${h},${s}%,${l}%)`;

  }
  oposite(){
    const { h, s, l } = this;
    const newHue=(h+180)%360 ;
    return `hsl(${newHue},${s}%,${l}%)`;

  }
  calcHSL() {
    let { r, g, b } = this;
    r /=255;
    g /=255;
    b /=255;
  
  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
  cmax = Math.max(r,g,b),
  delta = cmax - cmin,
  h = 0,
  s = 0,
  l = 0;
  if (delta == 0)
  h = 0;
  else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h=h;
    this.s=s;
    this.l=l;
  
    
  }
  
} 




const c1 = new Color(22, 33, 12, "Colasor");
 */




class Pet{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  eat(){
    return `${this.name} is Earting`;
  }
}


class Cat extends Pet{
 
  meow(){
    return `Meowww`;
  }
  
}

class Dog extends Pet{
  
  berk(){
    return `Burk`;
  }
}