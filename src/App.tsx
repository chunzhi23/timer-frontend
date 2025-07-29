import { useEffect, useState } from "react";
import { TimeDivider, TimeElement } from "./components/TimeItem";
import { ProgressBox } from "./components/ProgressBox";
import { SpacerBox } from "./components/SpacerBox";
import { LabeledProgressBar } from "./components/LabeledProgressBar";
import { getCountdownData, type StatusType } from "./util/countdownUtils";
import { pad } from "./util/dateUtils";
import { DUE_DATE, MESSAGE, START_DATE } from "./properties";
import classes from "./App.module.css";
import icon from "./assets/img/flag_of_korea.jpg";
import { VisitorCountBox } from "./components/VisitorCountBox";

function App() {
  const [day, setDay] = useState("0");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [status, setStatus] = useState<StatusType>("PENDING");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { days, hours, minutes, seconds, percent, status } =
        getCountdownData(START_DATE, DUE_DATE);

      setDay(pad(days));
      setHour(pad(hours));
      setMinute(pad(minutes));
      setSecond(pad(seconds));
      setProgress(Number(percent.toFixed(2)));
      setStatus(status);
    };
    update();

    const timer = setInterval(() => {
      update();
      if (progress >= 100) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={classes.wrap}>
      {/* Screen-centered area */}
      <div className={classes.container}>
        {/* Left side of the entire screen that shows a countdown status */}
        <div className={classes.countdownBox}>
          {/* Timestamp */}
          <div className={classes.timeBox}>
            {/* Days */}
            <TimeElement title="Days" value={day} />
            <TimeDivider />
            {/* Hours */}
            <TimeElement title="Hours" value={hour} />
            <TimeDivider />
            {/* Minutes */}
            <TimeElement title="Minutes" value={minute} />
            <TimeDivider />
            {/* Seconds */}
            <TimeElement title="Seconds" value={second} />
          </div>
          {/* Progress */}
          <SpacerBox h="10px" />
          <ProgressBox progress={progress} status={status} dueDate={DUE_DATE} />
        </div>
        {/* Right side of the entire screen that shows a customized icon */}
        <div className={classes.iconBox}>
          <img className={classes.iconImg} src={icon} alt="Icon" />
        </div>
      </div>
      {/* Show a customized user message */}
      <div className={classes.msgBox}>{MESSAGE}</div>
      {/* Show a fixed right-side bar to show the labeled progress */}
      <LabeledProgressBar progress={progress} />
      {/* Total, today visitors count */}
      <VisitorCountBox />
    </div>
  );
}

export default App;
