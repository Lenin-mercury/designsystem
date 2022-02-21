import React from "react";
import { StyleRules, Typography } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/styles";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

interface data {
  label: string;
  value: string;
}

interface radioIcon {
  checkedIcon: string;
  uncheckedIcon: string;
}

export interface RadioButtonProps {
  data?: data[];
  checkChanged: (selectedvalue: string, label: string) => void;
  value?: string;
  clearSelection?: boolean;
  classes: Record<string, string>;
  variant?: "standard" | "outlined";
  radioIcon?: radioIcon;
  className?: string;
  direction?: "row" | "column";
}

const styles = (): StyleRules =>
  createStyles({
    root: {
      color: "black",
    },
    labelStyle: {
      height: "17px",
      fontFamily: "san-seriff",
      fontSize: "14px",
      letterSpcaing: "normal",
      textAlign: "left",
      marginLeft: "3px",
      color: "black",
    },
    radio: {
      "&$checked": {
        color: "grey",
      },
    },
    checked: {},
    formControlRoot: { display: "flex", flexDirection: "row" },
    iconStyle: {
      width: "18px",
      marginLeft: "10px",
      marginRight: "-6px",
      marginTop: "-4px",
    },
    btn1: {
      borderRadius: "16px",
      border: "1px solid grey",
    },
  });

const RadioButton = (props: RadioButtonProps): JSX.Element => {
  const { data, checkChanged, variant } = props;
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <div>
      <FormControl
       component="fieldset"
       className= {props.classes.formControlRoot}
      >
          {data && Array.isArray(data) && data.map((item: data, i: number)=> {
              return(
                  <RadioGroup
                    key={"radio_key_" + i}
                    value={props.clearSelection ? "" : selectedValue}
                    onChange={(): void | undefined => {
                        checkChanged(item.value, item.value);
                        setSelectedValue(item.value);
                    }}
                    className={variant==="standard" ? props.classes.btn1 : "custbtn2"}
                  >
                      <FormControlLabel
                      value={item.value}
                      control={
                          <Radio
                          id={"radio_value_" + item.label}
                          color="default"
                          disableRipple
                          classes={{
                              root: props.classes.radio,
                              checked: props.classes.checked
                          }}
                          checkedIcon={
                              <img src={props.radioIcon ? props.radioIcon.checkedIcon : ""}
                              className={props.classes.iconStyle}
                              />
                          }
                          icon={
                              <img src={props.radioIcon ? props.radioIcon.unCheckedIcon : ""}
                              className={props.classes.iconStyle}
                              />
                            }
                            />
                          }
                  label={
                      <Typography
                      id={"radio_label_" + item.label}
                      className={props.classes.labelStyle}>
                          {item.label}
                      </Typography>
                  }
                  />

                  </RadioGroup>
              )
          })}

      </FormControl>
    </div>
  );
};

export default RadioButton;
