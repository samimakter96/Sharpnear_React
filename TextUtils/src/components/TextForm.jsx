import React, { useState } from 'react';
import Button from './Button';

export default function (props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase', 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase', 'success');

  };

  const handleClearText = () => {
    console.log('clear text');
    let newText = ' ';
    setText(newText);
    showAlert('Text cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>

        <Button btnName="Convert to Uppercase" handleClick={handleUpClick} />

        <Button btnName="Convert to Lowercase" handleClick={handleLoClick} />

        <Button btnName="Clear Text" handleClick={handleClearText} />
      </div>

      <div
        className="container mt-4"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(' ').length} words, {text.length} characters
        </p>
        <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
