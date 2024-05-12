// // HOF
// function abc(fn) {

import NewsComponent from "./component/NewsComponent";

// }

// // HOF
// function abcd(params) {
//     return () => {}
// }

function HigherOrderComponent(props) {
  // Children prop you dont have to send it will Automatically infer itself
  const { children, date } = props;
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          background: "yellow",
        }}
      >
        <p>DAte: {date}</p>
        <p>Author: utkarsh</p>
        <img src="" width={20} height={20} alt="image" />

        {children}
        {/* <NewsComponent /> */}
      </div>
    </>
  );
}

export default HigherOrderComponent;
