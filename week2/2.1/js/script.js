/*
document.getElementById("image").onclick = function() {
myFunction()
};
*/
/*
 function changeImage(){
	document.getElementById('image').src == "img/cutecat.jpg";
	};
*/

function changeImage() {
    if(document.getElementById('image').src == 'http://i.stack.imgur.com/l9EOR.gif') {
        document.getElementById('image').src = 'http://i.stack.imgur.com/TnKyp.gif';
        
    } else if(document.getElementById('image').src == 'http://i.stack.imgur.com/TnKyp.gif') {
        document.getElementById('image').src = 'http://i.stack.imgur.com/l9EOR.gif';
    }
};