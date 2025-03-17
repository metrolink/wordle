import React from 'react';

function SVGGrid({letter}) {
  const characters = 5;
  const attempts = 5;


  const wordArray = letter.map((ar) => ar.char)
  const colorArray = letter.map((ar) => ar.color)
  console.log(wordArray);

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < characters; i++) {
      const row = [];
      for (let j = 0; j < attempts; j++) {
        row.push('lightgrey');
      }
      grid.push(row);
    }
    return grid;
  };

  const grid = generateGrid();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${attempts}, 100px)`, gap: '10px' }}>
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => 
          <svg key={`${rowIndex}-${colIndex}`} width="100px" height='100px'>
            
            <rect className='wordle-tile' data-testid={`${rowIndex}-${colIndex}`} width='100px' height='100px' rx='15px' color='lightgrey' fill={colorArray[colIndex] ?? 'lightgrey'} />
            
            <text x={40} y={50}>{wordArray[colIndex]}</text>
            
          </svg>
        )
      )}
    </div>
  );
}

export default SVGGrid