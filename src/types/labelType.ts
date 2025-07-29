export interface IDuration {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface ILabel {
  name: string;
  span: IDuration;
}

export { type ILabel };
