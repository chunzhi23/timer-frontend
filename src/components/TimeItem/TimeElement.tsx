import type { CSSProperties } from "react";

interface ITimeElementProps {
  title: string;
  value: string;
}

export function TimeElement({ title, value }: ITimeElementProps) {
  const wrapperStyle: CSSProperties = {
    flex: 1,
  };

  const titleStyle: CSSProperties = {
    display: "block",
    color: "#9799c1",
    fontSize: "1em",
    fontWeight: 300,
    textAlign: "center",
  };

  const valueStyle: CSSProperties = {
    display: "block",
    color: "#3b3d5a",
    fontSize: "3.2em",
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: "-2.88px",
  };

  return (
    <div style={wrapperStyle}>
      <span style={titleStyle}>{title}</span>
      <span style={valueStyle}>{value}</span>
    </div>
  );
}
