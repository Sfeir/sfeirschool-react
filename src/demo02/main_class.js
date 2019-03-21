/*global React ReactDOM*/

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
    console.count("hits");
    this.setState(({ score }) => ({ score: score + 1 }));
  }

  render() {
    return (
      <>
        <div>score: {this.state.score}</div>
        <Target onHit={this.incrementScore}>
          <Target onHit={this.incrementScore}>
            <Target onHit={this.incrementScore}>
              <Target onHit={this.incrementScore} />
            </Target>
          </Target>
        </Target>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
