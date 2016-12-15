var game = new Phaser.Game(320,568);





class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }

  create() {
    this.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("Loading..");
  this.load.image("bg","assets/mybluenesswithnospaces.jpg")
  this.load.audio("Music","assets/Runninginthe90swithnospaces")  
  }
  create() {
    console.log("Loaded");
    this.state.start("Play");

  }
}


class Play {
  create() {
    console.log("Entered Play State");
    this.background = this.add.tileSprite(0,0,320,568,"bg");
    this.music = game.add.audio('Music')
    this.music.play()
    this.background.autoScroll(0,99999999999999999999);
  }
}









game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play",Play);
game.state.start("Boot");


/*
          ()   _______ 
         /!\  <  Lol |
          !    | Hey |
         / \   | Lol |
               |_____|

*/
