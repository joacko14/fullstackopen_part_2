const Header = (props) => <h1>{props.course}</h1>;

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
      <Total
        total={parts.reduce((acc, part) => {
          return acc + part.exercises;
        }, 0)}
      />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of Web apps",
        exercises: 6,
        id: 1,
      },
      {
        name: "UIntroduction to React",
        exercises: 14,
        id: 2,
      },
      {
        name: "Communicating with server",
        exercises: 20,
        id: 3,
      },
      {
        name: "Programming a server with NodeJS and Express",
        exercises: 22,
        id: 4,
      },
      {
        name: "Testing Express servers, user administration",
        exercises: 23,
        id: 5,
      },
      {
        name: "Testing React apps",
        exercises: 23,
        id: 6,
      },
      {
        name: "Advanced state management",
        exercises: 24,
        id: 7,
      },
      {
        name: "React router, custom hooks, styling app with CSS and webpack",
        exercises: 21,
        id: 8,
      },
      {
        name: "GraphQL",
        exercises: 26,
        id: 9,
      },
      {
        name: "TypeScript",
        exercises: 30,
        id: 10,
      },
      {
        name: "React Native",
        exercises: 27,
        id: 11,
      },
      {
        name: "CI/CD",
        exercises: 21,
        id: 12,
      },
      {
        name: "Containers",
        exercises: 22,
        id: 13,
      },
      {
        name: "Using relational databases",
        exercises: 24,
        id: 14,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
