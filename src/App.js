import useMain from "./MainContext";
import "./styles/primary/App.css"
import "./styles/primary/PageHeader.css"
import "./styles/primary/Reuseable.css"

function App() {
  const { user } = useMain();
  
  return (
    <div className="App">
      <h1 className="hi">asdasd</h1>
      <input />
      { user.username }
    </div>
  );
}

export default App;
