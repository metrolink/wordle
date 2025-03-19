
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
      return arr.letter[(row*5)+(col)].char
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      return ''
    }
  }

  function colorUndefinedChecker(arr, row, col){
    try {
      return arr.letter[(row*5+(col))].color
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      return 'lightgrey'
    }
  }

  
 
  return (
    <div style={{width:'40%', display: 'grid', gridTemplateColumns: `repeat(${attempts}, 50%)`, gap: '5%' }}>
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => 
          <svg key={`${rowIndex}-${colIndex}`} width="60px" height='60px'>
            
            <rect className='wordle-tile' data-testid={`${rowIndex}-${colIndex}`} width='100%' height='100%' rx='15px' color='lightgrey' fill={colorUndefinedChecker(letter,rowIndex,colIndex) ?? 'lightgrey'} />
            
            <text x={'40%'} y={'60%'} fontSize={35}>{charUndefinedChecker(letter,rowIndex,colIndex) ?? ''}</text>
            
          </svg>
        )
      )}
    </div>
  );
}

export default SVGGrid