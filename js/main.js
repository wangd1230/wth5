var start = document.querySelector('.start');
var next = document.querySelector('.next');
var one = document.querySelector('#one');
var score = 0;
var c = 0;
var status = 1;
var questions = [['img/q1.png','img/q1-a.png','img/q1-b.png','img/q1-c.png','img/q1-d.png','img/q1-b.png'],['img/q2.png','img/q2-a.png','img/q2-b.png','img/q2-c.png','img/q2-d.png','img/q2-b.png'],['img/q3.png','img/q3-a.png','img/q3-b.png','img/q3-c.png','img/q3-d.png','img/q3-c.png'],['img/q4.png','img/q4-a.png','img/q4-b.png','img/q4-c.png','img/q4-d.png','img/q4-c.png'],['img/q5.png','img/q5-a.png','img/q5-b.png','img/q5-c.png','img/q5-d.png','img/q5-b.png'],['img/q6.png','img/q6-a.png','img/q6-b.png','img/q6-c.png','img/q6-d.png','img/q6-b.png'],['img/q7.png','img/q7-a.png','img/q7-b.png','img/q7-c.png','img/q7-d.png','img/q7-a.png'],['img/q8.png','img/q8-a.png','img/q8-b.png','img/q8-c.png','img/q8-d.png','img/q8-a.png'],['img/q9.png','img/q9-a.png','img/q9-b.png','img/q9-c.png','img/q9-d.png','img/q9-d.png'],['img/q10.png','img/q10-a.png','img/q10-b.png','img/q10-c.png','img/q10-d.png','img/q10-c.png']]; 
next.addEventListener('click',next1);
function Question(question,a,b,c,d,correct){
	this.question = question;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.correct = correct;
}
function next1() {
	// body...
	start.style.backgroundImage = 'url(img/question-bg.jpg)';
	one.style.display = 'none';
	next.style.display = 'none';
	status = 0;
	create();
}
function create(){

	var gxy = new Question(questions[c][0],questions[c][1],questions[c][2],questions[c][3],questions[c][4],questions[c][5]);
	var img0 = document.createElement('img');
	var img1 = document.createElement('img');
	var img2 = document.createElement('img');
	var img3 = document.createElement('img');
	var img4 = document.createElement('img');
	var top = document.createElement('div');
	var bottom = document.createElement('div');
	img0.setAttribute('class','question');
	top.setAttribute('class','top');
	bottom.setAttribute('class','bottom');
	img0.src = gxy.question;
	img1.src = gxy.a;
	img2.src = gxy.b;
	img3.src = gxy.c;
	img4.src = gxy.d;
	img1.data = gxy.a;
	img2.data = gxy.b;
	img3.data = gxy.c;
	img4.data = gxy.d;
	start.appendChild(top);
	start.appendChild(bottom);
	top.appendChild(img0);
	bottom.appendChild(img1);
	bottom.appendChild(img2);
	bottom.appendChild(img3);
	bottom.appendChild(img4);
	img1.addEventListener('click',function(e){
		if (e.target.data == gxy.correct) {
			console.log(gxy.a);
			score += 1;
		}
		c += 1;	
		this.parentNode.parentNode.removeChild(top);
		this.parentNode.parentNode.removeChild(bottom);
		if (c < 10) {
			create();
		} else {
			result();
		}
	});
	img2.addEventListener('click',function(e){
		if (e.target.data == gxy.correct) {
			console.log(gxy.a);
			score += 1;
			
		}
		c += 1;	
		this.parentNode.parentNode.removeChild(top);
		this.parentNode.parentNode.removeChild(bottom);
		if (c < 10) {
			create();
		} else {
			result();
		}
	});
	img3.addEventListener('click',function(e){
		if (e.target.data == gxy.correct) {
			console.log(gxy.a);
			score += 1;
				
		}
		c += 1;	
		this.parentNode.parentNode.removeChild(top);
		this.parentNode.parentNode.removeChild(bottom);
		if (c < 10) {
			create();
		} else {
			result();
		}
	});
	img4.addEventListener('click',function(e){
		if (e.target.data == gxy.correct) {
			console.log(gxy.a);
			score += 1;
			
		}
		c += 1;	
		this.parentNode.parentNode.removeChild(top);
		this.parentNode.parentNode.removeChild(bottom);
		if (c < 10) {
			create();
		} else {
			result();
		}
	});

}
function result(){
	if (score <= 3) {
		start.style.backgroundImage = 'url(img/result1.jpg)';
	} else if(score <= 7) {
		start.style.backgroundImage = 'url(img/result2.jpg)';
	} else{
		start.style.backgroundImage = 'url(img/result3.jpg)';
	}
}
//滑动
 var startx, starty;  
    //获得角度  
  
    	function getAngle(angx, angy) {  
        return Math.atan2(angy, angx) * 180 / Math.PI;  
    };  
   
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动  
    function getDirection(startx, starty, endx, endy) {  
        var angx = endx - startx;  
        var angy = endy - starty;  
        var result = 0;  
   
        //如果滑动距离太短  
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {  
            return result;  
        }  
   
        var angle = getAngle(angx, angy);  
        if (angle >= -135 && angle <= -45) {  
            result = 1;  
        } else if (angle > 45 && angle < 135) {  
            result = 2;  
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
            result = 3;  
        } else if (angle >= -45 && angle <= 45) {  
            result = 4;  
        }  
   
        return result;  
    }  
    //手指接触屏幕  
    document.addEventListener("touchstart", function(e) {  
        startx = e.touches[0].pageX;  
        starty = e.touches[0].pageY;  
    }, false);  
    //手指离开屏幕  
    document.addEventListener("touchend", function(e) {  
        var endx, endy;  
        endx = e.changedTouches[0].pageX;  
        endy = e.changedTouches[0].pageY;  
        var direction = getDirection(startx, starty, endx, endy);  
        if (direction == 1) {
        	if (status == 1) {
        		next1();
        	}
        }
    }, false);  



