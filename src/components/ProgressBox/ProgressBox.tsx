import type { CSSProperties } from "react";
import { SpacerBox } from "../SpacerBox";
import { pad } from "../../util/dateUtils";
import type { StatusType } from "../../util/countdownUtils";
import { PREV_COUNT_MSG } from "../../properties";
import classes from "./ProgressBox.module.css";

interface IProgressBoxProps {
  progress: number;
  status: StatusType;
  dueDate: Date;
}

export function ProgressBox({ progress, status, dueDate }: IProgressBoxProps) {
  const year = dueDate.getFullYear();
  const month = pad(dueDate.getMonth() + 1);
  const date = pad(dueDate.getDate());
  const dueText = `${year}.${month}.${date}.`;

  const progressBarStyle: CSSProperties = {
    backgroundColor: status === "COMPLETED" ? "#008000" : "#ffffff",
  };
  const progressStatStyle: CSSProperties = {
    width: `${progress}%`,
    backgroundColor: status === "COMPLETED" ? "transparent" : "#4d55cc",
  };
  const bottomMsgStyle: CSSProperties = {
    textAlign: status === "PENDING" ? "left" : "right",
  };

  return (
    <>
      <div className={classes.progressBar} style={progressBarStyle}>
        <div className={classes.progressStatus} style={progressStatStyle}>
          {status === "COMPLETED"
            ? "100% Completed"
            : `${progress.toFixed(2)}%`}
        </div>
      </div>
      <SpacerBox h="5px" />
      <div className={classes.bottomMsg} style={bottomMsgStyle}>
        {status === "PENDING" ? PREV_COUNT_MSG : dueText}
      </div>
    </>
  );
}
