import classes from "./VisitorCountBox.module.css";

export function VisitorCountBox() {
  return (
    <div className={classes.visitorBox}>
      <span className={classes.total}></span>
      <span className={classes.today}></span>
    </div>
  );
}
