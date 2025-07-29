import { DUE_DATE, PROGRESS_LABEL_LIST, START_DATE } from "../../properties";
import {
  calculateLabelPositions,
  getCurrentLabel,
} from "../../util/labelProgressUtils";
import classes from "./LabeledProgressBar.module.css";

interface ILabeledProgressBarProps {
  progress: number;
}

export function LabeledProgressBar({ progress }: ILabeledProgressBarProps) {
  const labels = calculateLabelPositions(
    START_DATE,
    DUE_DATE,
    PROGRESS_LABEL_LIST
  );

  const currentLabel = getCurrentLabel(labels, progress) ?? "unknown";

  return (
    <div className={classes.bar}>
      {labels.map((lbl, idx) => (
        <div
          key={idx}
          className={classes.label}
          style={{ top: `${lbl.topPercent}%` }}
          data-tooltip={lbl.name}
        >
          <div
            className={classes.point}
            style={{
              opacity: currentLabel === lbl.name ? 1 : 0.5,
              backgroundColor: "#3b3d5a",
            }}
          />
        </div>
      ))}

      <div
        className={classes.progressLabel}
        style={{
          top: `${progress}%`,
        }}
      >
        <div
          className={classes.progressPoint}
          style={{
            backgroundColor: "#4d55cc",
          }}
        />
      </div>
    </div>
  );
}
