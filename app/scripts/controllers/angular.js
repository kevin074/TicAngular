function TicTacCtrl ($scope) {
	console.log("hi");
	$scope.ticTacToe= [['X','','O'],['','X',''],['','O','']];

	$scope.clickSquare = function (row,column) {
		event.target.innerHTML="x";
	};
}
