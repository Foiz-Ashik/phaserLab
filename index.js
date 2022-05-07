var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    _parent: 'phaser-lab',
    backgroundColor: '#efefef',

    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    
    this.load.image('background', 'assets/images/Background.jpg');
    this.load.image('book', 'assets/images/book.png');
    this.load.image('plant', 'assets/images/plant.png');
    this.load.image('flower', 'assets/images/flower.png');
    this.load.image('candle', 'assets/images/candle.png');
    this.load.image('laptop', 'assets/images/laptop.png');
    this.load.image('frame', 'assets/images/frame.png');
    this.load.image('legos', 'assets/images/legos.png');
    this.load.image('car', 'assets/images/car.png');
}

function create ()
{
    this.add.image(960, 550, 'background');
    var plant = this.add.sprite(100, 1000, 'plant');
    var flower = this.add.sprite(200, 1000, 'flower');
    var book = this.add.sprite(300, 1000, 'book');
    var candle = this.add.sprite(400, 1000, 'candle');
    var laptop = this.add.sprite(500, 1000, 'laptop');
    var frame = this.add.sprite(600, 1000, 'frame');
    var legos = this.add.sprite(700, 1000, 'legos');
    var car = this.add.sprite(800, 1000, 'car');

    

    book.setInteractive();
    plant.setInteractive();
    flower.setInteractive();
    candle.setInteractive();
    laptop.setInteractive();
    frame.setInteractive();
    legos.setInteractive();
    car.setInteractive();


    this.input.setDraggable(book);
    this.input.setDraggable(plant);
    this.input.setDraggable(flower);
    this.input.setDraggable(candle);
    this.input.setDraggable(laptop);
    this.input.setDraggable(frame);
    this.input.setDraggable(legos);
    this.input.setDraggable(car);
    
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
