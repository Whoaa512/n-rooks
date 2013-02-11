var solveNRooks = function(n){
  //create empty n*n board
  var board = new Array(n);
  var takenCols = [];
  for(var i =0; i < n; i++){
    board[i] = new Array(n);
    var x = Math.floor(Math.random()*n);

    while ( takenCols.indexOf(x) !== -1 ){
      x = Math.floor(Math.random()*n);
    }

    if(takenCols.indexOf(x) === -1){
      board[i][x] = true;
      takenCols.push(x);
    } 
  }

  // window.chessboardView.model.setSimpleBoard(board);
  return board;


};
