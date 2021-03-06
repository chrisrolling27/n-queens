/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // create a new board with n rows/colums
  let newBoard = new Board({n: n});
  // let hasConflicts = true;
  // create random board
  let randomInteger = n - 1;

  // This breaks our computer:
  // while (hasConflicts) {
  // let randomColIndex = 0;
  for (let i = 0; i < n; i++) {
    let randomColIndex = Math.round(Math.random() * randomInteger);
    newBoard.togglePiece(i, randomColIndex);
    // check now if there are column conflicts
    if (newBoard.hasAnyRooksConflicts()) {
      newBoard.togglePiece(i, randomColIndex);
      // reset i
      i--;
    }
  }
  // hasConflicts = newBoard.hasAnyRooksConflicts();


  return newBoard.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = n; //fixme
  // use findrookssolutions, check if the board exists already, if it does, keep iterating, if it doesn't store the board and add to the count
  //
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
