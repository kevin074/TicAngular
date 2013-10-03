window.onload= function start() {
	var player1;
	var player2;
	var gameover=false;
	var clickID = "";
	var winner = false;


function randomStart() {
	var random = Math.random();
	if (random>0.5) {player2=true; player1=false;}
	else {player1=true; player2=false;}
}

randomStart();

	// var hash = {
	// 	"a":1,
	// 	"b":2,
	// 	"c":3,
	// 	"d":4,
	// 	"e":5,
	// 	"f":6,
	// 	"g":7,
	// 	"h":8,
	// 	"i":9,
	// };
	// var verticalLogic =[1,-1];
	// var horizontalLogic = [3,-3];
	// var leftDiaLogic = [4,-4];
	// var rightDiaLogic = [2,-2]

	//1=9
	//2=4=6=8
	//3=7
	//5

	// var leftToRightCornersLogic = [1,-1,3,-3,4,-4]; 	//1=9
	// var midLogic = [1,-1,2,-2,3,-3,4,-4];				//5
	// var RightToLeftCornersLogic = [1,-1,2,-2,3,-3]; 	//3=7
	// var othersLogic = [1,-1,3,-3]; 						//2=4=6=8

	

	var checkingID = ["a","b","c","d","e","f","g","h","i"];
	var array = [[],[],[]];
	var count = 0;
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
				array[i][d] = checkingID[i+d+i*2];
		}
	}



	function win() {
		var winCount=0;
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if(document.getElementById(array[i][d]).innerHTML){
			if(document.getElementById(array[i][d]).innerHTML==checkHTML){
				winCount++;
				if(winCount==3){
					winner=true;
				}
			}
		}
		}
		winCount=0;
	}
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if(document.getElementById(array[d][i]).innerHTML){
			if(document.getElementById(array[d][i]).innerHTML==checkHTML){
				winCount++;
				if(winCount==3){
					winner=true;
				}
			}
		}
		}
		winCount=0;
	}
		var i =0;
		while(i<3) {
			if(document.getElementById(array[i][i]).innerHTML) {
			if(document.getElementById(array[i][i]).innerHTML==checkHTML){
				winCount++;
			}
			}
			i++;
		}
		if(winCount==3) {
			winner=true;
		}
		else {
		winCount=0;
	}
		var i =2;
		var k =0;
		while(i>=0) {
			if(document.getElementById(array[k][i]).innerHTML) {
			if(document.getElementById(array[k][i]).innerHTML==checkHTML){
				winCount++;
			}
			}
			i--;
			k++;
		}
		if(winCount==3) {
			winner=true;
		}
		else {
		winCount=0;
	}
	if (winner==true) {document.getElementById("youWin").style.zIndex="999"; gameover=true;}

}

var checkHTML = "";
var turnCount =0;

// $(".box").click(function(){
// 	if (!gameover) {
// 	if (player1) {
// 		if ($(this).html()=="") {
// 			$(this).html("X");
// 			player1 = false;
// 			player2 = true;
// 			checkHTML="X";
// 			document.getElementById("playerCount").innerHTML="player1";
// 			turnCount++;
// 		};
// 	}

// 	else if (player2) {
// 			if ($(this).html()=="") {
// 				$(this).html("O");
// 				player1 = true;
// 				player2 = false;
// 				checkHTML="O";
// 				document.getElementById("playerCount").innerHTML="player2";
// 				turnCount++;
// 			};
// 	};

// 				}
// 	 win();
// 	 tie();
// 	 turnCircle(turnCount);
//  });

	function tie () {
		if (turnCount==9 && winner==false) {
			for(var i=0; i<document.getElementsByClassName("box").length; i++)
				document.getElementsByClassName("box")[i].innerHTML="";
			winner=false;
			gameover=false;
			randomStart();
			turnCount=0;
			circleRestart();	
		};
	};


	// function win() {
	// 	// var clickKey = hash[clickID]; 
	// 	// checkKey(clickKey,checkHTML);
	// 		alert("winner!");
	// 	}

	// };

	// function getID(id) {
	// 	return document.getElementById(id).innerHTML();
	// }

// 	function checkKey(clickKey,checkHTML) {
// 		var count=0;
// 		var checkKey;

// 		switch(clickKey) {

// 		case 0,8: 
// 			while (count<leftToRightCornersLogic.length) {
// 				checkKey = clickKey+leftToRightCornersLogic[count];
// 				checkID(checkKey,leftToRightCornersLogic[count],checkHTML);
// 				// checkKey.push(clickKey+leftToRightCornersLogic[count]);
// 				// direction = leftToRightCornersLogic;
// 				count++;
// 			}
// 			break;

// 		case 1,3,5,7:
// 			while (count<othersLogic.length) {
// \				checkKey = clickKey+othersLogic[count];
// 				checkID(checkKey,othersLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		case 2,6:
// 			while (count<RightToLeftCornersLogic.length) {
// 				checkKey = clickKey+RightToLeftCornersLogic[count];
// 				checkID(checkKey,RightToLeftCornersLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		case 4:
// 			while (count<midLogic.length) {
// 				checkKey = clickKey+midLogic[count];
// 				checkID(checkKey,midLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		default:
// 			break;
// 		};
// 	};


// 	refunction checkID(checkKey,increment,checkHTML) {
// 		var checkID='';
// 		if(checkingID[checkKey]){
// 			checkID=checkingID[checkKey];
// 			checkingHTML(checkID,increment,checkHTML);
// 		};
// 	};


// 	function checkingHTML(checkID, increment, checkHTML) {
// 		var count=0;
// 		var winner = false;
// 			if (document.getElementById(checkID).innerHTML == checkHTML) {
// 				var secCheckKey = hash[checkID];
// 				secCheckKey=secCheckKey + increment;
// 					if(checkingID[secCheckKey]){
// 						var secCheckID = checkingID[secCheckKey];
// 						if (document.getElementById(secCheckID).innerHTML == checkHTML) {
// 							alert("winner!");
// 						};
// 					};
// 				};
// 			};


var restart=false;

$("#restart").click(function(){
	$(".box").html("");
	winner=false;
	gameover=false;
	document.getElementById("youWin").style.zIndex="-1";
	randomStart();
	turnCount=0;
	circleRestart();
});

function circleRestart () {
	for (var i=0; i<circleArray.length; i++){
		document.getElementById(circleArray[i]).style.background=saveColor[circleArray[i]];
		document.getElementById(circleArray[i]).style.border="none";
		document.getElementById(circleArray[i]).style.color="blue";
	}
}

var yPosition = 450*Math.sin(Math.PI/4);
var xPosition = 450*Math.cos(Math.PI/4);

var circleArray =[
	"circle1",
	"circle2",
	"circle3",
	"circle4",
	"circle5",
	"circle6",
	"circle7",
	"circle8"
];
var tempArray=[];
	
	for(var i=0; i<document.getElementsByClassName("circle").length; i++){
		tempArray+=i;
	}

	for(var i=0; i<tempArray.length;i++){
		document.getElementById(circleArray[i]).style.top=300-300*Math.sin(Math.PI*1/4*i);
		document.getElementById(circleArray[i]).style.left=300-300*Math.cos(Math.PI*1/4*i);
	}

// document.getElementById("circle1").style.top=450-yPosition;

	var circleHash = {
		0:"circle3",
		1:"circle2",
		2:"circle1",
		3:"circle8",
		4:"circle7",
		5:"circle6",
		6:"circle5",
		7:"circle4"
	};
	
	var saveColor= { 
	"circle3":"rgba(255,129,129,1)",
	"circle2":"rgba(214,129,255,1)",
	"circle1":"rgba(129,134,255,1)",
	"circle8":"rgba(129,210,255,1)",
	"circle7":"rgba(129,255,248,1)",
	"circle6":"rgba(129,255,146,1)",
	"circle5":"rgba(222,255,129,1)",
	"circle4":"rgba(255,172,129,1)"
	}

function turnCircle (turnCount,restart) {

	var tempColor;
	var circleTemp = circleHash[turnCount-1];
	tempColor = saveColor[circleHash[turnCount-2]];
	if (turnCount-1>0) {
		document.getElementById(circleHash[turnCount-2]).style.background=tempColor;
		document.getElementById(circleHash[turnCount-2]).style.border="none";
		document.getElementById(circleHash[turnCount-2]).style.color="blue";
		document.getElementById(circleHash[turnCount-2]).style.fontSize="15px"
		document.getElementById(circleHash[turnCount-2]).style.lineHeight="70px"
	}
	document.getElementById(circleTemp).style.background="rgba(255,97,97,1)";
	document.getElementById(circleTemp).style.border="5px solid rgba(75,75,75,1)"
	document.getElementById(circleTemp).style.color="white"
	document.getElementById(circleTemp).style.lineHeight="60px"

}
// circle3=really1
// circle2=really2
// circle1=really3
// circle8=really4
// circle7=really5
// circle6=really6
// circle5=really7
// circle4=really8
};


