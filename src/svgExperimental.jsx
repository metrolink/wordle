import React from 'react';

function SVGGrid({letter}) {
  const characters = 5;
  const attempts = 5;

  /*const testArray = {
  '0':[{char:'o', color: 'lightgrey'},{char: 't', color: 'yellow'},{char: 't', color: 'green'},{char: 'e', color: 'green'},{char: 'r', color: 'green'}],
  '1':[{char: 'f', color: 'lightgrey'},{char: 'g', color: 'lightgrey'},{char: 'h', color: 'lightgrey'},{char: 'j', color: 'lightgrey'},{char: 'k', color: 'lightgrey'}],
  '2':[{char:'a', color: 'lightgrey'},{char: 'b', color: 'lightgrey'},{char: 'c', color: 'lightgrey'},{char: 'd', color: 'lightgrey'},{char: 'e', color: 'lightgrey'}],
  '3':[{char: 'f', color: 'lightgrey'},{char: 'g', color: 'lightgrey'},{char: 'h', color: 'lightgrey'},{char: 'j', color: 'lightgrey'},{char: 'k', color: 'lightgrey'}],
  '4':[{char: 'f', color: 'lightgrey'},{char: 'g', color: 'lightgrey'},{char: 'h', color: 'lightgrey'},{char: 'j', color: 'lightgrey'},{char: 'k', color: 'lightgrey'}]
  }*/

  const wordArray = letter.map((ar) => ar.char)
  const colorArray = letter.map((ar) => ar.color)
  //console.log('wordarray is:' + wordArray);

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

 // <rect className='wordle-tile' data-testid={`${rowIndex}-${colIndex}`} width='100px' height='100px' rx='15px' color='lightgrey' fill={testArray[rowIndex][colIndex].color ?? 'lightgrey'} />
            
  //          <text x={40} y={50}>{testArray[rowIndex][colIndex].char ?? ''}</text>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${attempts}, 100px)`, gap: '10px' }}>
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => 
          <svg key={`${rowIndex}-${colIndex}`} width="100px" height='100px'>
            
            <rect className='wordle-tile' data-testid={`${rowIndex}-${colIndex}`} width='100px' height='100px' rx='15px' color='lightgrey' fill={colorArray[colIndex] ?? 'lightgrey'} />
            
            <text x={40} y={50}>{wordArray[colIndex] ?? ''}</text>
            
          </svg>
        )
      )}
    </div>
  );
}

export default SVGGrid