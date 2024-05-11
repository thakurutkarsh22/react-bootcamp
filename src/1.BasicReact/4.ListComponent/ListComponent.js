import ListItem from "./ListItem";

function ListComponent(props) {
  const { students } = props;
  console.log(students, "list of student ");

  return (
    <>
      <h1>List compoent</h1>

      {students.map((student) => {
        {
          /* const { id, name, age } = student; */
        }
        {
          /* return <ListItem id={id} name={name} age={age} />; */
        }
        return <ListItem {...student} />;
      })}
    </>
  );
}

export default ListComponent;
