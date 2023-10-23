import React, { useState } from 'react';

import './tailwind-config.js';

export default function App() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(String(value));
    } else {
      setDisplay(display + String(value));
    }
  };

  const handleEquals = () => {
    setDisplay(parseFloat(eval(display)));
  };

  const handleClear = () => {
    setDisplay('0');
  };

  return (
    <div className="p-2">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl text-center">
        Calculadora Deivid
      </h1>
      <div id="calculator" className="w-64 mx-auto mt-6 bg-gray-100 p-4 rounded-lg">
        <div
          id="display"
          className="text-right mb-4 bg-blue-900 text-orange-500 text-4xl font-bold py-4 rounded-lg"
        >
          {display}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            id="seven"
            onClick={() => handleClick(7)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            7
          </button>
          <button
            id="eight"
            onClick={() => handleClick(8)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            8
          </button>
          <button
            id="nine"
            onClick={() => handleClick(9)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            9
          </button>
          <button
            id="divide"
            onClick={() => handleClick('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            /
          </button>
          <button
            id="four"
            onClick={() => handleClick(4)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            4
          </button>
          <button
            id="five"
            onClick={() => handleClick(5)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            5
          </button>
          <button
            id="six"
            onClick={() => handleClick(6)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            6
          </button>
          <button
            id="multiply"
            onClick={() => handleClick('*')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            *
          </button>
          <button
            id="one"
            onClick={() => handleClick(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            1
          </button>
          <button
            id="two"
            onClick={() => handleClick(2)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            2
          </button>
          <button
            id="three"
            onClick={() => handleClick(3)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            3
          </button>
          <button
            id="subtract"
            onClick={() => handleClick('-')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            -
          </button>
          <button
            id="decimal"
            onClick={() => handleClick('.')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            .
          </button>
          <button
            id="zero"
            onClick={() => handleClick(0)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg col-span-2"
          >
            0
          </button>
          <button
            id="add"
            onClick={() => handleClick('+')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            +
          </button>
          <button
            id="clear"
            onClick={handleClear}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg"
          >
            C
          </button>
          <button
            id="equals"
            onClick={handleEquals}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg col-span-2"
          >
            =
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/facebook-circled.png"
            alt="Facebook"
            className="mx-2 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/deivid1912_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src=""
            alt="Instagram"
            className="mx-2 h-8"
          />
        </a>
      </div>
    </div>
  );
}