/*global React ReactDOM*/

const InputApp = () => {
  const value = "Sfeir";

  return (
    <>
      <div>Hello {value}</div>
    </>
  );
};

ReactDOM.render(<InputApp />, document.getElementById("root"));
