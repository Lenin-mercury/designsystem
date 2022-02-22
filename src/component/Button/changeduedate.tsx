import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import RadioButton from "../RadioButton/RadioButton";

interface changeDueDateProps {
  classes: Record<string, string>;
}

const changeDueDate = (props: changeDueDateProps): JSX.Element => {
  const { classes } = props;

  let radioOptions = [
    { value: "10.00am", label: "10.00am" },
    { value: "12.00pm", label: "12.00pm" },
    { value: "10.00am", label: "10.00am" },
  ];

  let radioOptions1 = [
    {
      value: "Customer requires a later date/time",
      label: "Customer requires a later date/time",
    },
    {
      value: "Lost access to customer premise",
      label: "Lost access to customer premise",
    },
  ];

  return (
    <div id="changeDueDateContainer" className={classes.root}>
      <div className={classes.calendar}></div>
      <div className={classes.list}>
        <ul className={classes.installDate}>
          <li className={classes.list1}>Current Install Date</li>
          <li className={classes.list2}>New Install Date</li>
        </ul>
      </div>
      <div className={classes.install}>
        <div className={classes.currentInsta}>
          <span className={classes.head}>Current Install Date</span>
          <h5 className={classes.duration1}>February 10,2022, 13:00</h5>
        </div>
        <div className={classes.newInsta}>
          <span className={classes.head}>Current Install Date</span>
          <h5 className={classes.duration2}>February 10,2022, 13:00</h5>
        </div>
      </div>
      <div className={classes.time}>
        <div className={classes.timeContent}>
          <span>Select Available Time</span>
        </div>
        <div className={classes.btn}>
          <RadioButton
           data={radioOptions}
           variant="standard"
           direction="row"
           checkChanged={()=>console.log("changed")}
          />
        </div>
      </div>
      <div className={classes.customer}>
          <div className={classes.span}>
              <span>Select Customer Reason</span>

          </div>
          <div className={classes.customerGrp}>
          <RadioButton
           data={radioOptions1}
           variant="outlined"
           direction="row"
           checkChanged={()=>console.log("changed")}
          />
          </div>
      </div>
      <div className={classes.funcBtn}>
          <Button variant="outlined" className={classes.btnCancel}>
              cancel

          </Button>
          <Button variant="outlined" className={classes.btnCancel}>
              Submit

          </Button>

      </div>
    </div>
  );
};


export default withStyles(styles) (changeDueDate)
