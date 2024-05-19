function PrivateRooute(props) {
  const { children } = props;

  const isAuthenticated = true;

  return (
    <>
      {!isAuthenticated && <div>Not authenticated</div>}
      {isAuthenticated && <div> {children}</div>}
    </>
  );
}

export default PrivateRooute;
