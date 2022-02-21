import "./App.css";
import "../src/component/Button/button.css"
import Button from "./component/Button/Button";
import RadioButton from "./component/RadioButton/RadioButton";

interface appProps {
  classes: Record<string, string>;
}

const App = (props: appProps): JSX.Element => {
  const { classes } = props;
  //put the radioOptions here
  let radioOptions = [
    { label: "10.00am", value: "10.00am" },
    { label: "10.00am", value: "10.00am" },
  ];
  return (
    <div className="App">
      <h1>Header</h1>
      {/* <Button value="Submit" variant="outlined" />

      <Button value="Cancel" variant="standard" /> */}
      <RadioButton
        data={radioOptions}
        variant="standard"
        checkChanged={() => console.log("changed")}
        classes={props.classes.dark}
      />
    </div>
  );
};

export default App;
