function TicTacCtrl ($scope) {
	$scope.ticTacToe= [['','',''],['','',''],['','','']];

	var turnCount =0;
	var gameover=false;
	var winner = false;


	// var ticTacToe = [[],[],[]];
	// var count = 0;
	// for(var i=0; i<3; i++){
	// 	for(var d=0;d<3;d++){
	// 			ticTacToe[i][d] = checkingID[i+d+i*2];
	// 	}
	// }

		// console.log(this.ticTacToe[0][0]);


	$scope.clickSquare = function (row,column) {
		if(turnCount%2==0){
			event.target.innerHTML="x";
			turnCount++;
		}
		else {
			event.target.innerHTML="o";
			turnCount++;
		};
		win();
	};

	var boardArray = [[],[],[]];
	for (var i=0; i<3;i++) {
		for (var a=0; a<3;a++){
			for(var b=0; b<3;b++){
				boardArray
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

	};

};
