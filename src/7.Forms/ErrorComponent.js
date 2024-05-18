function Errorcomponent(props) {
  const { message } = props;

  return <>{<div style={{ color: "red" }}>{message}</div>}</>;
}

export default Errorcomponent;
