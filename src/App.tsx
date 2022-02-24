import "./App.css";
import "../src/component/Button/button.css"
import Button from "./component/Button/Button";
import RadioButton from "./component/RadioButton/RadioButton";
import ChangeDueDate from "./component/Button/changeduedate"

interface appProps {
  classes: Record<string, string>;
}

const App = (props: appProps): JSX.Element => {
  const { classes } = props;
  //put the radioOptions here

  return (
    <div className="App">
      <h1>Header</h1>
      <ChangeDueDate classes={{root: props.classes.btn}} />
      <Button value="Submit" variant="outlined" />

      <Button value="Cancel" variant="standard" />

    </div>
  );
};

export default App;
