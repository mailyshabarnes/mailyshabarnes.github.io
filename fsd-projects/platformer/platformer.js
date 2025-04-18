$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(800,0,20,300);
createPlatform(1350,400,50,50, "black");
createPlatform(700,400,50,40, "black");
createPlatform(100,300,40,50, "black");
createPlatform(300,600,30,40, " black");


    // TODO 3 - Create Collectables
createCollectable("grace", 1000, 600);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("max", 300, 170, 0.5, 0.7);
createCollectable("kennedi", 1200, 550);
    // TODO 4 - Create Cannons
createCannon("top", 400, 1200);
createCannon("right", 400, 1000);
createCannon("bottom", 700, 900);    
createCannon("left", 400, 1000);    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
