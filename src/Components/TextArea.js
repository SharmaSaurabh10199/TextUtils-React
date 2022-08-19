import React, { useState } from "react";

export default function TextArea({ mode, showAlert }) {
  // using the states to change the values
  const [text, setText] = useState("");

  const [result, setResult] = useState("");

  // setting text to uppercase
  function toUpperCase() {
    setResult(text.toUpperCase());
    showAlert("converted to upper case", "success");
  }

  // onchange is must because react will not let you change the states then
  function handleOnChange(event) {
    setText(event.target.value);
  }

  // to change to lowercae
  function toLoweCase() {
    setResult(text.toLowerCase());
    showAlert("converted to lower case", "success");
  }

  // to clear the text
  function clear() {
    setResult("");

    showAlert("cleared all the text", "success");
  }

  // to remove the extra space
  function format() {
    let txt = text.split(/[ ]+/);
    setResult(txt.join(" "));
    showAlert("formating done", "success");
  }

  // to count the text:

  function textCount() {
    let obj = {};
    let Words = text.split(" ").filter(function (n) {
      return n != " ";
    }).length;
    let characters = text.length;
    let lines = text.split("\n").length;
    // why its not coming to the new line
    let summary = `lines: ${lines}  ,   words: ${Words} , characters: ${characters}`;
    setResult(summary);
    console.log(lines);
  }

  // function to reverse string:
  function reverse() {
    setResult(text.split("").reverse().join(""));
  }

  return (
    <div
      className={`container my-5 text-${mode == "light" ? "black" : "white"}`}
    >
      <h1>Enter text here </h1>
      <div className="form-floating">
        <textarea
          style={{
            backgroundColor: mode === "light" ? "white" : "grey",
            color: mode === "light" ? "black" : "white",
            height: "180px",
          }}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleOnChange}
          rows="99"
        ></textarea>
      </div>
      <div className="container my-3 ">
        <button
          type="button"
          className="  btn btn-primary "
          onClick={toUpperCase}
        >
          to uppercase
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3 my-1"
          onClick={toLoweCase}
        >
          to lowerCase
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3 my-1"
          onClick={clear}
        >
          clear text
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3 my-1"
          onClick={format}
        >
          format
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3 my-1"
          onClick={textCount}
        >
          Text Counter
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3 my-1"
          onClick={reverse}
        >
          Reverse String
        </button>
      </div>
      {/* the output section */}
      <div>
        <h2>Your Results</h2>
        <div
          className="contaier my-4"
          style={{
            border: "1px solid #cac3c3",
            borderRadius: "5px",
            padding: "1rem 0.75rem",
            height: "100px",
          }}
        >
          {/* <p>words: {text.split(/[ ]+/).length - 1}</p>
        <p>characters : {text.length}</p> */}
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
