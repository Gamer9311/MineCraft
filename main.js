var canvas = new fabric.Canvas('myCanvas');
ctx = canvas.getContext("2d");

block_image_width = 30;
block_image_height = 30;

playerx = 200;
playery = 200;

var player_object = "";

function player_update()
{
     fabric.Image.fromURL("player.png", function(Img)
     {
          player_object = Img;
          player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({
               top:playery,
               left:playerx
          });

          canvas.add(player_object);

     });
}

function new_image(get_image)
{
     fabric.Image.fromURL(get_image, function(Img)
     {
          block_image_object = Img;

          block_image_object.scaleToWidth(block_image_width);
          block_image_object.scaleToHeight(block_image_height);
          block_image_object.set({
               top:playery,
               left:playerx
          });

          canvas.add(block_image_object);

     });
}

window.addEventListener("keydown", keydown);

function keydown(e)
{
     keyPressed = e.keyCode;
     console.log(keyPressed);

     if(e.shiftKey == true && keyPressed == '38')
     {
          console.log("Up And Shift Key Pressed together!");

          block_image_width = block_image_width + 10;
          block_image_height = block_image_height + 10;

          document.getElementById("current_width").innerHTML = block_image_width;
          document.getElementById("current_height").innerHTML = block_image_height;
     }

     if (e.shiftKey == true && keyPressed == '40')
     {
          console.log("Down And Shift Key Pressed together!");

          block_image_width = block_image_width - 10;
          block_image_height = block_image_height - 10;

          document.getElementById("current_width").innerHTML = block_image_width;
          document.getElementById("current_height").innerHTML = block_image_height;
     }

     if (e.shiftKey == true && keyPressed == '37')
     {
          console.log("Left And Shift Key Pressed together!");

          playerx = playerx - 10;
          playery = playery - 10;

          document.getElementById("currentx").innerHTML = playerx;
          document.getElementById("currenty").innerHTML = playery;
     }

     if (e.shiftKey == true && keyPressed == '39')
     {
          console.log("Right And Shift Key Pressed together!");

          playerx = playerx + 10;
          playery = playery + 10;

          document.getElementById("currentx").innerHTML = playerx;
          document.getElementById("currenty").innerHTML = playery;
     }

     if (keyPressed == '38')
     {
          up();
          console.log("UP!");
     }

     if (keyPressed == '40')
     {
          down();
          console.log("DOWN!");
     }

     if (keyPressed == '37')
     {
          left();
          console.log("LEFT!");
     }

     if (keyPressed == '39')
     {
          right();
          console.log("RIGHT!");
     }

     if (keyPressed == '87')
     {
          new_image('wall.jpg');
          console.log("W meaning a WALL BLOCK!");
     }

     if (keyPressed == '71')
     {
          new_image('ground.png');
          console.log("G meeaning a GROUND BLOCK!");
     }

     if (keyPressed == '76')
     {
          new_image('light_green.png');
          console.log("L meaning a LIGHT GREEN BLOCK!");
     }

     if (keyPressed == '84')
     {
          new_image('trunk.jpg');
          console.log("T meaning a TRUNK BLOCK!");
     }

     if (keyPressed == '82')
     {
          new_image('roof.jpg');
          console.log("R meaning a ROOF BLOCK!");
     }

     if (keyPressed == '89')
     {
          new_image('yellow_wall.png');
          console.log("Y meaning a YELLOW WALL BLOCK!");
     }

     if (keyPressed == '68')
     {
          new_image('dark_green.png');
          console.log("D meaning a DARK GREEN BLOCK!");
     }

     if (keyPressed == '85')
     {
          new_image('unique.png');
          console.log("U meaning a UNIQUE BLOCK!");
     }

     if (keyPressed == '67')
     {
          new_image('cloud.jpg');
          console.log("C meaning a CLOUD BLOCK!")
     }
}

function up()
{
     if (playery >= 0)
     {
          playery = playery - block_image_height;

          console.log("The Block Image Height IS " + block_image_height + " px!");
          console.log("When UP ARROW KEY is Pressed, The X AND Y COORDINATES are X = " + playerx + ", Y = " + playery + "!");

          canvas.remove(player_object);
          player_update();
     }
}

function down()
{
     if (playery <= 500)
     {
          playery = playery + block_image_height;

          console.log("The Block Image Height IS " + block_image_height + " px!");
          console.log("When DOWN ARROW KEY is Pressed, The X AND Y COORDINATES are X = " + playerx + ", Y = " + playery + "!");

          canvas.remove(player_object);
          player_update();
     }
}

function left()
{
     if (playerx >= 0)
     {
          playerx = playerx - block_image_width;

          console.log("The Block Image Width IS " + block_image_width + " px!");
          console.log("When LEFT ARROW KEY is Pressed, The X AND Y COORDINATES are X = " + playerx + ", Y = " + playery + "!");

          canvas.remove(player_object);
          player_update();
     }
}

function right()
{
     if (playerx <= 850)
     {
          playerx = playerx + block_image_width;

          console.log("The Block Image Width IS " + block_image_width + " px!");
          console.log("When RIGHT ARROW KEY is Pressed, The X AND Y COORDINATES are X = " + playerx + ", Y = " + playery + "!");

          canvas.remove(player_object);
          player_update();
     }
}
