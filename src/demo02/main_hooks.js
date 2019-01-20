const Target = ({ onHit, children }) => (
  <div className="target" onClick={onHit}>
    {children}
  </div>
);

const App = () => {
  const [score, setScore] = React.useState(0);
  const incrementScore = React.useCallback(() => {
    console.count("hits");
    setScore(score => score + 1);
  }, []);

  return (
    <>
      <div>score: {score}</div>
      <Target onHit={incrementScore}>
        <Target onHit={incrementScore}>
          <Target onHit={incrementScore}>
            <Target onHit={incrementScore} />
          </Target>
        </Target>
      </Target>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
