class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset')
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.message = createElement("h2");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth - 100, 50);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
  
    this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.update(0);
       this.reset.hide();
       Player.updatePlayerRank(0);


    })

    if(gameState === 2){
      textSize(50)
      this.message.html("You reached the destination with the rank : " + player.rank)
      
      this.message.position(displayWidth/3, displayHeight/15)
    }

  }
}
