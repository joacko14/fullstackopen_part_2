const Header = (props) => <h3>{props.course}</h3>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => {
  const { id, name, exercises } = part;
  return (
    <p>
      {id} - {name}, has {exercises} exercises
    </p>
  );
};

const Total = (props) => (
  <b>
    <p>Total of exercises {props.total}</p>
  </b>
);

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total total={parts.reduce((acc, part) => acc + part.exercises, 0)} />
    </>
  );
};

export default Course;
