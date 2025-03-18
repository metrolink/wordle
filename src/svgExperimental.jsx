
import React from 'react';

function SVGGrid(letter) {
  const characters = 5;
  const attempts = 5;

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < characters; i++) {
      const row = [];
      for (let j = 0; j < attempts; j++) {
        row.push('');
      }
      grid.push(row);
    }
    return grid;
  };

  const grid = generateGrid();

  function charUndefinedChecker(arr, row, col){
    try {
      return arr.letter[0].attempt[row][col].char
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      return ''
    }
  }

  function colorUndefinedChecker(arr, row, col){
    try {
      return arr.letter[0].attempt[row][col].color
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      return 'lightgrey'
    }
  }

  
 
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${attempts}, 100px)`, gap: '10px' }}>
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => 
          <svg key={`${rowIndex}-${colIndex}`} width="100px" height='100px'>
            
            <rect className='wordle-tile' data-testid={`${rowIndex}-${colIndex}`} width='100px' height='100px' rx='15px' color='lightgrey' fill={colorUndefinedChecker(letter,rowIndex,colIndex) ?? 'lightgrey'} />
            
            <text x={40} y={50}>{charUndefinedChecker(letter,rowIndex,colIndex) ?? ''}</text>
            
          </svg>
        )
      )}
    </div>
  );
}

export default SVGGrid