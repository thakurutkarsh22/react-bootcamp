function Child2(props) {
  const { brotherMarks } = props;

  const info = "Hey parents I am fine";
  let marks = 20;

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Child 2 ...</h1>
      {brotherMarks}
    </div>
  );
}

export default Child2;
