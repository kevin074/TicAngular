angular.module('newticApp').controller(
	'TicTacCtrl', function ($scope, angularFire)  {
$scope.room = [];
$scope.queue = {};
var playerTurn = 1;

var room = new Firebase("https://kevintictactoe.firebaseio.com/rooms");
angularFire(room, $scope, "room").then( function() {

  var queue = new Firebase("https://kevintictactoe.firebaseio.com/queue");
  angularFire(queue, $scope, "queue").then( function () {

    if ($scope.queue.roomId == undefined) {
      console.log("I'm player 1");
      $scope.player = "p1";

	var createRoom = {
		ticTacToe: [['','',''],['','',''],['','','']],
		// turnCount : 0,
		// playerID:[],
 	 	turn: "p1",
        somebodyWon: false,
        waiting: true
    };

    $scope.room=[createRoom];
    $scope.roomId = $scope.room.length - 1;
    $scope.queue.roomId = $scope.roomId;
    console.log("Player 1's game is: " + $scope.roomId);
    
    } else {
      console.log("I'm player 2");
      $scope.player = "p2";
      $scope.roomId = $scope.queue.roomId;
      $scope.queue = {};
      console.log("Player 2's game is: " + $scope.roomId);
      $scope.room[$scope.roomId].waiting = false;
    }

  });

// 	var rooms = new Firebase("https://kevintictactoe.firebaseio.com/room2");
// 	$scope.room={};
// 	$scope.rooms=[];

// 	angularFire(rooms, $scope, "rooms").then(function () { 

// 	if ($scope.rooms.length==0) {
// 		createRoom();
// 		$scope.room.playerID.push(Math.random());
// 		$scope.rooms.push($scope.room);
// 	}
// 	else {		
// 		for (var i = 0; i<$scope.rooms.length; i++) {
// 		if ($scope.rooms[i].playerID.length==0) {
// 			createRoom();
// 			$scope.rooms.playerID.push(Math.random());
// 			break;
// 		}

// 		if ($scope.rooms[i].playerID.length==1) {
// 			createRoom();
// 			$scope.room = $scope.rooms[i];
// 			$scope.room.playerID.push(Math.random())
// 			break;
// 		}
// 		if ($scope.rooms[i].playerID.length ==2 && $scope.rooms[i+1]==undefined) {
// 			createRoom(); 
// 			$scope.rooms.push($scope.room);
// 			$scope.room.playerID.push(Math.random());
// 			break;}
// 	}
// 	}
// 	console.log($scope.room.playerID);
// 	setInterval(sync(),300);

// function sync() {
// 	$scope.room = $scope.rooms[0]; 
// }


$scope.clickSquare = function (row,col) {
	if (!$scope.room[$scope.roomId].waiting) {
	if ($scope.room[$scope.roomId].ticTacToe[row][col]==""){
    console.log($scope.room[$scope.roomId]);
	// if ($scope.room.turnCount%2==0){
		if ($scope.room[$scope.roomId].turn == 'p1' && $scope.player=='p1') {
		$scope.room[$scope.roomId].ticTacToe[row][col]="X"
          $scope.room[$scope.roomId].turn = 'p2';

		// $scope.rooms[0].ticTacToe[row][col]="X"
		// $scope.room.turnCount++;
	}

	else if ($scope.room[$scope.roomId].turn == 'p2' && $scope.player=='p2'){
		$scope.room[$scope.roomId].ticTacToe[row][col]="O"
          $scope.room[$scope.roomId].turn = 'p1';

		// $scope.rooms[0].ticTacToe[row][col]="O"
		// $scope.room.turnCount++;
	};
	};

	// if ($scope.room[$scope.roomId].turn == 'p1') {
 //    	$scope.room[$scope.roomId].turn = 'p2';
 //    	} 
 //    else {
 //      $scope.room[$scope.roomId].turn = 'p1';
 //    }

};

// $scope.$watch("$scope.rooms", function () {
// 	win("X")
// 	// sync();
// });


$scope.restart = function () {
	$scope.room.ticTacToe= [['','',''],['','',''],['','','']];
	document.getElementById("youWin").style.zIndex="-2";
	$scope.room.turnCount=0;
};

	function won () {
		document.getElementById("youWin").style.zIndex="99";
	}

// 	function win(checkHTML) {
// 	var winCount=0;
// 	for(var i=0; i<3; i++){
// 		for(var d=0;d<3;d++){
// 			if($scope.room.ticTacToe[i][d]==checkHTML){
// 				winCount++;
// 				if(winCount==3){
// 					won();
// 				}
// 			}
// 		}
// 		winCount=0;
// 		};

// 		for(var i=0; i<3; i++){
// 			for(var d=0;d<3;d++){
// 				if($scope.room.ticTacToe[d][i]){
// 				if($scope.room.ticTacToe[d][i]==checkHTML){
// 					winCount++;
// 					if(winCount==3){
// 						won();
// 					}
// 				}
// 			}
// 			}
// 					winCount=0;
// 			};

// 			var i =0;
// 			while(i<3) {
// 				if($scope.room.ticTacToe[i][i]) {
// 				if($scope.room.ticTacToe[i][i]==checkHTML){
// 					winCount++;
// 				}
// 				}
// 				i++;
// 			};
// 			if(winCount==3) {
// 				won();
// 			}
// 			else {
// 			winCount=0;
// 			};
// 			var i =2;
// 			var k =0;
// 			while(i>=0) {
// 				if($scope.room.ticTacToe[k][i]) {
// 				if($scope.room.ticTacToe[k][i]==checkHTML){
// 					winCount++;
// 				}
// 				}
// 				i--;
// 				k++;
// 			};
// 			if(winCount==3) {
// 				won();
// 			}
// 			else {
// 			winCount=0;
// 			};
// 		if(checkHTML=="X") {
// 				win("O");;
// 		}
// };


// var circleArray = new Array(9);
// console.log(circleArray);
};
});
});