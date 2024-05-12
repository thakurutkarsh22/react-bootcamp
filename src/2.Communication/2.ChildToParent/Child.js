function Child(props) {
  const { pi, childCommunicator } = props;

  const info = "Hey parents I am fine";
  let marks = 20;

  return (
    <>
      <h1>Child ...</h1>
      {pi}

      <button onClick={() => childCommunicator(info, 10)}>
        Pass INfo TO PARENT
      </button>
    </>
  );
}

export default Child;
