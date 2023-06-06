class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  #myPrivateProperty = "shh";

  static name = "Rectangle";

  get area() {
    return this.length * this.width;
  }
}

const myRectangle = new Rectangle(2, 4);

console.log(Rectangle.name);

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const mySquare = new Square(7);

console.log(mySquare);
console.log(mySquare.area);
