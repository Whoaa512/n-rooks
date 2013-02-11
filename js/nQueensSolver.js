var solveNQueens = function(n){
  var  tooManyTries = true;

  var boardMaker = function(n){
    var board = new Array(n);
    for(var i=0; i <n; i++){
      board[i]= [];
    }
    _.map(board, function(val, key){
      board[key] = new Array(n);
      for(var i=0; i <n; i++){
      board[key][i]= false;
      }
    });
   return board;
  };

  // returns a random column index
  var columnPacifier = function(){
    var column = Math.floor(Math.random()*n);
    while( takenCols.indexOf(column) !== -1 ){
      column = Math.floor(Math.random()*n);
    }
    return column;
  };

  var diagonalPacifier = function(){
    var tryCount =  0,
      column = columnPacifier();

    while( _.contains(takenDiags, i+","+column) ){
      column = columnPacifier();
      tryCount++;
      if (tryCount >= 10000){
        tooManyTries = true;
        console.log('too many tries! Rerunning simulation!');
        debugger;
        break; 
      }      
    }
    if (tryCount < 10000) {tooManyTries = false;}
    return column;
  };

  do 
  {
    //create empty n*n board
    var board = boardMaker(n);

    var takenCols = [];
    var takenDiags = [];
    for(var i = n-1; i >= 0; i--){

      // var column = columnPacifier();
      var cleanDiag = diagonalPacifier();
      var columnclone = cleanDiag;
      var rowclone = i;

      board[i][cleanDiag] = true;
      takenCols.push(cleanDiag);


      for (var p = 0; p < n; p++){
        rowclone--; columnclone--;
        takenDiags.push(rowclone+","+columnclone);
      }

      var columnclone = cleanDiag;
      var rowclone = i;
      for (var p = 0; p < n; p++){
        rowclone--; columnclone++;
        takenDiags.push(rowclone+","+columnclone);
      }
    }
  }
  while (tooManyTries);

  window.chessboardView.model.setSimpleBoard(board);
  return board;
}
