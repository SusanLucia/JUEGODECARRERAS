class Form {
  constructor() { 
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.saludo = createElement('h2');
  }
    hide(){
    this.input.hide();
    this.button.hide();
    this.saludo.hide();

    }
  display(){
    var title = createElement('h2')
    title.html("Juego De Carreras De Autos");
    title.position(130, 0);

    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.saludo.html("Hola " + player.name)
      this.saludo.position(displayWidth/2-70,displayHeight/4);

    });
  }
}
