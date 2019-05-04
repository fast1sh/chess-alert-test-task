//UI
const resultButton = document.getElementById('result-button');
const squareInput = document.getElementById('square');

//event listeners
resultButton.addEventListener('click', function() {
  const square = squareInput.value;

  getPossibleKnightMoves(square);
});

const squares = {
    A8:   0, B8:   1, C8:   2, D8:   3, E8:   4, F8:   5, G8:   6, H8:   7,
    A7:  16, B7:  17, C7:  18, D7:  19, E7:  20, F7:  21, G7:  22, H7:  23,
    A6:  32, B6:  33, C6:  34, D6:  35, E6:  36, F6:  37, G6:  38, H6:  39,
    A5:  48, B5:  49, C5:  50, D5:  51, E5:  52, F5:  53, G5:  54, H5:  55,
    A4:  64, B4:  65, C4:  66, D4:  67, E4:  68, F4:  69, G4:  70, H4:  71,
    A3:  80, B3:  81, C3:  82, D3:  83, E3:  84, F3:  85, G3:  86, H3:  87,
    A2:  96, B2:  97, C2:  98, D2:  99, E2: 100, F2: 101, G2: 102, H2: 103,
    A1: 112, B1: 113, C1: 114, D1: 115, E1: 116, F1: 117, G1: 118, H1: 119
};

/**
 * 
 * @param {Object} obj 
 * @param {Array} values 
 */
const getKeysByValues = (obj, values) => {
  const objectKeys = Object.keys(obj);

  //map array with numbers to find needed squares
  const result = values.map((el) => {
    return objectKeys.find((key) => obj[key] === el);
  });

  //filter result to get rid of 'undefined' squares
  const filtered = result.filter(key => key);
  
  return filtered;
}

/**
 * 
 * @param {String} square 
 */
const getPossibleKnightMoves = (square) => {
  const currentSquare = squares[square];

  if (!currentSquare) {
    alert('Uncorrect square');
  }

  //all possible knight moves
  const possibleMoves = [currentSquare + 31, currentSquare + 33, 
                         currentSquare + 18, currentSquare - 14, 
                         currentSquare - 31, currentSquare - 33, 
                         currentSquare + 14, currentSquare - 18];

  const resultSquares = getKeysByValues(squares, possibleMoves).join(' ');
  
  alert(resultSquares);
};