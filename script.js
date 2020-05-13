    var lines;
    var randomNumber;
    var lastRandomNumber;

    
    $(document.body).ready(function () {
      
      // load the quotes from the server
      $.ajax({
        url: 'quotes.txt'
      }).done(function(content) {
        
        lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
        
        if (lines && lines.length) {
          $('#showQuote').on('click', function () {
            while (randomNumber === lastRandomNumber) {
              randomNumber = parseInt(Math.random() * lines.length);
              if (lines.length === 1) { break; }
            }
            lastRandomNumber = randomNumber;
            
            $('#quotes').text(lines[randomNumber]);
          });
        }
      });
    });

function display_random_image() 
{
     var theImages = [{
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fmike-5.jpg?v=1589331245206",
        width: "",
        height: ""
    },
       {
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fmike-4.png?v=1589331075378",
        width: "",
        height: ""
    },
       {
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fmike-2.jpg?v=1589331066537",
        width: "",
        height: ""
    },
       {
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fprison-mike.png?v=1589331061016",
        width: "",
        height: ""
    }, {
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fmike-1.png?v=1589331064398",
        width: "",
        height: ""
    }, {
        src: "https://cdn.glitch.com/7c90a22b-b8f7-46be-a87a-45a830a2ea1f%2Fmike-3.jpg?v=1589331070125",
        width: "",
        height: ""
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}
