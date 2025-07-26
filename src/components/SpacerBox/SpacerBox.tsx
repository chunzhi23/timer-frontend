interface ISpacerBoxProps {
  w?: string;
  h?: string;
}

export function SpacerBox({ w: width, h: height }: ISpacerBoxProps) {
  const divStyle = { width, height };

  return <div style={divStyle} />;
}
