import React from 'react';

function SVGGrid() {
  const gridSize = 5;

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push('lightgrey'); // Vi trenger bare en plassholder her
      }
      grid.push(row);
    }
    return grid;
  };

  const grid = generateGrid();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 50px)`, gap: '5px' }}>
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <svg key={`${rowIndex}-${colIndex}`} width="50" height='50'>
            <rect width='50px' height='50px' rx='15px' fill={row[colIndex]} />
          </svg>
        ))
      )}
    </div>
  );
}

export default SVGGrid