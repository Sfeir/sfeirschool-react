class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.init };
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <div>Hello {this.state.value}</div>
        <div>
          <input
            ref={this.inputRef}
            type="text"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

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
