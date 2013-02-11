var solveNQueens = function(n){
  //create empty n*n board
  var board = new Array(n);
  var takenCols = [];
  var takenDiags = [];
  for(var i = n-1; i >= 0; i--){
    board[i] = new Array(n);
    for(var j in board[i]){
      board[i][j] = false;
    }
    var x = Math.floor(Math.random()*n);

    while ( takenCols.indexOf(x) !== -1 ){
      x = Math.floor(Math.random()*n);
    }

    var i2 = i; var x2 = x;
    
    if(takenCols.indexOf(x) === -1){
      // console.log( 'before while DiagsCheck', takenDiags);
      debugger;
      while(takenDiags.indexOf(i2+","+x2) !== -1 ){
        x2 = Math.floor(Math.random()*n);
      }
      if( (takenDiags.indexOf(i2+","+x2) === -1)  ){
        board[i2][x2] = true;
        takenCols.push(x2);
        var i3 = i2; var x3 = x2;
        for (var p = 0; p < n; p++){
          i3--; x3--;
          takenDiags.push(i3+","+x3);
        }
        var i3 = i2; var x3 = x2;
        for (var p = 0; p < n; p++){
          i3--; x3++;
          takenDiags.push(i3+","+x3);
        }
      }
    }

  }
  // debugger;


  console.log(takenDiags);
  // window.chessboardView.model.setSimpleBoard(board);
  return board;
}
var b = solveNQueens(8);
//   console.log(b);

  // var solution = [
  //   [false, true,  false, false],
  //   [false, false, false, true ],
  //   [true,  false, false, false],
  //   [false, false, true,  false]
  // ];

  // // the above is a pre-baked solution for when n = 4.
  // // Write code here that will find solutions for any n
  // // hint: you'll want to start by building your own matrix to put in the solution variable

  // // this line hooks into the visualizer
  // window.chessboardView.model.setSimpleBoard(solution);
  // return solution;
