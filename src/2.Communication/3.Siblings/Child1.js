function Child1(props) {
  const { pi, childCommunicator } = props;

  const info = "Hey parents I am fine";
  let marks = 20;

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Child 1 ...</h1>
      {pi}

      <button onClick={() => childCommunicator(info, 10)}>
        Pass INfo TO PARENT
      </button>
    </div>
  );
}

export default Child1;
