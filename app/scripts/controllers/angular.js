angular.module('newticApp').controller(
	'TicTacCtrl', function ($scope, angularFire)  {

	var database = new Firebase("https://kevintictactoe.firebaseio.com/room2");
	$scope.room={};

	angularFire(database, $scope, "room").then(function () { 
	
	if ($scope.room.playerID==undefined) {
		$scope.room={
		ticTacToe: [['','',''],['','',''],['','','']],
		turnCount : 0,
		playerID:[]
		};
		$scope.room.playerID.push(Math.random());
	}

	else if ($scope.room.playerID.length==1) {
		$scope.room.ticTacToe = [['','',''],['','',''],['','','']]		
		$scope.room.playerID.push(Math.random());
	}

	else  {
		moreRooms();
	}


	EVERYTHING();
});

function moreRooms () {
		var roomPath = database.path.m[0];
		var roomNumber = database.path.m[0].charAt(database.path.m[0].length-1);
		database = new Firebase("https://kevintictactoe.firebaseio.com/"+(roomPath.replace(("room"+roomNumber),("room"+(parseInt(roomNumber)+1)))));
		angularFire(database, $scope, "room").then(function () { 
			$scope.room={
			ticTacToe: [['','',''],['','',''],['','','']],
			turnCount : 0,
			playerID:[]
			};
	});
};




function EVERYTHING () {
$scope.clickSquare = function (row,col) {
	if (this.room.ticTacToe[row][col]==""){
	if ($scope.room.turnCount%2==0){
		this.room.ticTacToe[row][col]="X";
		$scope.room.turnCount++;
	}

	else {
		this.room.ticTacToe[row][col]="O";
		$scope.room.turnCount++;
	};
	};
};

$scope.$watch("room.ticTacToe", function () {win("X")});

$scope.restart = function () {
	$scope.room.ticTacToe= [['','',''],['','',''],['','','']];
	document.getElementById("youWin").style.zIndex="-2";
	$scope.room.turnCount=0;
};

	function won () {
		document.getElementById("youWin").style.zIndex="99";
	}

	function win(checkHTML) {
	var winCount=0;
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if($scope.room.ticTacToe[i][d]==checkHTML){
				winCount++;
				if(winCount==3){
					won();
				}
			}
		}
		winCount=0;
		};

		for(var i=0; i<3; i++){
			for(var d=0;d<3;d++){
				if($scope.room.ticTacToe[d][i]){
				if($scope.room.ticTacToe[d][i]==checkHTML){
					winCount++;
					if(winCount==3){
						won();
					}
				}
			}
			}
					winCount=0;
			};

			var i =0;
			while(i<3) {
				if($scope.room.ticTacToe[i][i]) {
				if($scope.room.ticTacToe[i][i]==checkHTML){
					winCount++;
				}
				}
				i++;
			};
			if(winCount==3) {
				won();
			}
			else {
			winCount=0;
			};
			var i =2;
			var k =0;
			while(i>=0) {
				if($scope.room.ticTacToe[k][i]) {
				if($scope.room.ticTacToe[k][i]==checkHTML){
					winCount++;
				}
				}
				i--;
				k++;
			};
			if(winCount==3) {
				won();
			}
			else {
			winCount=0;
			};
		if(checkHTML=="X") {
				win("O");;
		}
};


// var circleArray = new Array(9);
// console.log(circleArray);




// ----------------------------ALTERNATIVE WIN LOGIC TARGETTING HTML DIV ELEMENTS ------------------
// 	win = function () {
// 		horiWin();
// 		vertiWin();
// 		LeftRDiaWin();
// 		RightLDiaWin();
// 	};
// 	horiWin = function () {
// 		var winCount=0;
// 		for (var i=0; i<3; i++){
// 			for (var d=0; d<3; d++){
// 				if(document.getElementsByClassName("box")[i*3+d].innerHTML==checkHTML) { 
// 				if(winCount==3) {winner=true; console.log("winner");};
// 				};
// 			}
// 			winCount=0;
// 		}
// 	};
// 	vertiWin = function () {		
// 		var winCount=0;
// 		for (var i=0; i<3; i++){
// 			for (var d=0; d<3; d++){
// 				if(document.getElementsByClassName("box")[i*3+d].innerHTML==checkHTML) { 
// 					winCount++;	
// 				if(winCount==3) {winner=true; console.log("winner");};
// 				};
// 			}
// 			winCount=0;
// 		}
// };
// 	LeftRDiaWin = function () {
// 		var winCount=0;
// 		for (var i=0; i<3; i++){
// 			for (var d=0; d<3; d++){
// 				if(document.getElementsByClassName("box")[i+d*4]){
// 				if(document.getElementsByClassName("box")[i+d*4].innerHTML==checkHTML) { 
// 					winCount++;
// 				if(winCount==3) {winner=true; console.log("winner");};
// 				};
// 				};
// 			}
// 			winCount=0;
// 		}
// 	};
// 	RightLDiaWin = function () {		
// 		var winCount=0;
// 		for (var i=0; i<3; i++){
// 			for (var d=0; d<3; d++){
// 				if(document.getElementsByClassName("box")[i+2+d*2].innerHTML==checkHTML) { 
// 					winCount++;
// 				if(winCount==3) {winner=true; console.log("winner");};
// 				};
// 			}
// 			winCount=0;
// 		}
// 	};
// };
// ------------------------------- END ----------------------------------------

};

});