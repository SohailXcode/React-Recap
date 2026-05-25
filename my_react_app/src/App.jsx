import Button from "./components/Button";

function App() {
  const name = "Rahul"
  const isLoggedIn = true
  return (
    <>
      <div>
        App
        <Button />
      </div>
      
      <p>Hello,{name.toUpperCase()}</p>
      {isLoggedIn ? <p>welcome back</p> : <p>Please Login</p>}
    </>
  );
}

export default App;
