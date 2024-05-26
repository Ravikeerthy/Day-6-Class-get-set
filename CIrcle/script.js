class circle {
    constructor(radius, color) {
      this.color = color;
      this.radius = radius;
    }
    get Radius() {
      return this.radius;
    }
    set Radius(value) {
      this.radius = value;
    }
    get Color() {
      return this.color;
    }
    set Color(colors) {
      this.color = colors;
    }
    get toString() {
      return `Circle - Radius : ${this.radius}, Color : ${this.color}`;
    }
    get Area() {
      return Math.pow(this.radius, 2);
    }
    get Circumference() {
      return (2 * this.radius * 3.14).toFixed(2);
    }
  }
  
  let res = new circle(7,"Yellow");
  console.log(res.toString);
  
  let res1 = new circle(2.5, "Green");
  console.log("Updated Value: ", res1);
  
  // Using get and set method
  
  res1.Radius=5.5;
  res1.Color="Blue";
  
  console.log(res1.toString);
  
  console.log(`Area of Circle: ${res1.Area}`);
  
  console.log(`Area of Circumference: ${res1.Circumference}`);
  