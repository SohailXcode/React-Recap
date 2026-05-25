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
    </>
  );
}

export default App;
