import type { CSSProperties } from "react";

export function TimeDivider() {
  const style: CSSProperties = {
    color: "#3b3d5a",
    fontSize: "3.2em",
    fontWeight: 500,
    letterSpacing: "-2.88px",
  };

  return <span style={style}>:</span>;
}
