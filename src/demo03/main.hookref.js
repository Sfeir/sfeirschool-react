/*global React ReactDOM*/

const InputWithRef = ({ init }, ref) => {
  const [value, setValue] = React.useState(init);
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <div>Hello {value}</div>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

const Input = React.forwardRef(InputWithRef);

const InputApp = () => {
  const inputRef = React.useRef();

  return (
    <>
      <button onClick={() => inputRef.current.focusInput()}>focus</button>
      <Input ref={inputRef} init="Sfeir" />
    </>
  );
};

ReactDOM.render(<InputApp />, document.getElementById("root"));
