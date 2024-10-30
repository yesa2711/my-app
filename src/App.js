const App = () => {
  const hello = "Hello World";
  return (
    <div>
      <h1>{hello}</h1>
      <h2>Hello World 2</h2>
      <Hello />
    </div>
  );
};

const Hello = () => {
  return <h3>Component Hello</h3>;
};
export default App;
