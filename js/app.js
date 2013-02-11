$(document).ready(function(){

  // console.log(solveNQueens);
  window.chessboardView = new ChessboardView();
  $("body").append(chessboardView.render());
  
  solveNQueens(8);
  // note: you can switch this out for solveNQueens when you're ready!
  // setTimeout(function(){solveNQueens(8)}, 5000);
});
