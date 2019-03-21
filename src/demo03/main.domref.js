/*global React ReactDOM*/

const InputApp = () => {
  const [value, setValue] = React.useState("Sfeir");
  const changeValue = React.useCallback(e => setValue(e.target.value), []);
  const inputRef = React.useRef();

  return (
    <>
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <div>Hello {value}</div>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={changeValue}
        />
      </div>
    </>
  );
};

ReactDOM.render(<InputApp />, document.getElementById("root"));
