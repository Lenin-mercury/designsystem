import './App.css';
import Button from "./component/Button/Button"

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <Button value='Submit' variant='outlined'/>

      <Button value='Cancel' variant='standard'/>
    </div>
  );
}

export default App;
