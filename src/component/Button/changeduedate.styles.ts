import { createStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core";

export const styles = (): StyleRules =>
       createStyles({
           root: {
               background: "white",
               fontFamily: "san-seriff",
               width: "482px",
               height: "871px",
               borderRadius: "2px",
               border: "1.8px solid rgba(216,218,218",
               boxShadow: "0 1px 1px 0 rgb(0 0 0 / 50%)",

           },
           calendar: {
            border: "1.8px solid rgba(216,218,218",
            boxShadow: "0 1px 1px 0 rgb(0 0 0 / 50%)",
            width: "482px",
            height: "468.16px",
            display: "flex",
            justifyContent: "space-Between"
           },
           calendar1: {
               height: "22.12px",
               widht: "116.43px"
           },
           calendarHead: {display: "flex", flexDirection: "row"},
           list: {position: "relative"},
           installDate: {
               display: "flex",
               fontFamily: "san-seriff",
               marginLeft: "10px",
               fontSize: "12px",
               listStyle: "none",
               postion: "absolute",
               top: "-55px",
               left: "5px"
           }
       });
