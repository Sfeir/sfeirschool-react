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
    this.incrementScore = this.incrementScore.bind(this);
  }

  incrementScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <>
        <div>score: {this.state.score}</div>
        <Target onHit={this.incrementScore} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
