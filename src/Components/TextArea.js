import React, { useState } from "react";

export default function TextArea({ mode, showAlert }) {
  // using the states to change the values
  const [text, setText] = useState("");

  // setting text to uppercase
  function toUpperCase() {
    setText(text.toUpperCase());
    showAlert("converted to upper case", "success");
  }

  // onchange is must because react will not let you change the states then
  function handleOnChange(event) {
    setText(event.target.value);
  }

  // to change to lowercae
  function toLoweCase() {
    setText(text.toLowerCase());
    showAlert("converted to lower case", "success");
  }

  // to clear the text
  function clear() {
    setText("");
    showAlert("cleared all the text", "success");
  }

  // to remove the extra space
  function format() {
    let txt = text.split(/[ ]+/);
    setText(txt.join(" "));
    showAlert("formating done", "success");
  }

  return (
    <div
      className={`container my-5 text-${mode == "light" ? "black" : "white"}`}
    >
      <h2>Enter text here </h2>
      <div className="form-floating">
        <textarea
          style={{
            backgroundColor: mode === "light" ? "white" : "grey",
            color: mode === "light" ? "black" : "white",
          }}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleOnChange}
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
          className="  btn btn-primary mx-3"
          onClick={toLoweCase}
        >
          to lowerCase
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3"
          onClick={clear}
        >
          clear text
        </button>
        <button
          type="button"
          className="  btn btn-primary mx-3"
          onClick={format}
        >
          format
        </button>
      </div>

      <div className="contaier my-4">
        <h1>Your text summary</h1>
        <p>words: {text.split(" ").length - 1}</p>
        <p>characters : {text.length}</p>
      </div>
    </div>
  );
}
