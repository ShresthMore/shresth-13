class Form {
    constructor(){
    this.input=createInput("name")
    this.button=createButton('play')
    this.greeting=createElement('h2')
    this.title= createElement('h2')
    }
hide()
{
this.greeting.hide()
this.button.hide()
this.input.hide()
this.title.hide()
}
    display()
{
//var title=createElement('h1') 
this.title.html("Car Racing Game");
this.title.position(130,5)

//var input = createInput("Name");
//var button = createButton('Play');

this.input.position(150,170)
this.button.position(250,200)

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
player.name = this.input.value();
playerCount+=1
player.index=playerCount
player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 160)
    });

}
}
