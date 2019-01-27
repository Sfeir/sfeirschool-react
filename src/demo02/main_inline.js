const Target = ({ onHit, children }) => (
  <div className="target" onClick={onHit}>
    {children}
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  render() {
    return (
      <>
        <div>score: {this.state.score}</div>
        <Target onHit={() => this.setState({ score: score + 1 })} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
