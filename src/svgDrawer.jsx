import {React, useState} from "react";
import ReactDom from 'react-dom'

// Usage in JSX
export function SvgDrawer() {
    const [color, setColor] = useState([]);

    const arrayHeight = 5;
    const arrayWidth = 5;

    // eslint-disable-next-line no-unused-vars
    const changeColor = (newColor) => setColor(newColor);


        const array = [[]];

        for(var i = 0; i < arrayHeight; i++){
            array.push([])
            for(var j = 0; j < arrayWidth; j++){
                array[i].push('lightgrey')
            }
        }
    

  return (
    <div>
    {array.map(
        <div>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill={'lightgrey'}>
                <rect width='100px' height='100px' rx='15' fill='lightgrey'/>
            </svg>
        </div>
    )}
    </div>
  );
};