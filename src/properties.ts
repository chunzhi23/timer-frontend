import type { ILabel } from "./types/labelType";

export const START_DATE = new Date("2025-08-04T00:00:00");
export const DUE_DATE = new Date("2027-02-03T00:00:00");

export const MESSAGE =
  "Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever. — Daniel 12:3";
export const PREV_COUNT_MSG = "The countdown starts at 2025.08.04";

export const PROGRESS_LABEL_LIST: ILabel[] = [
  {
    name: "Private Second Class",
    span: { months: 2 },
  },
  {
    name: "Private First Class",
    span: { months: 6 },
  },
  {
    name: "Corporal",
    span: { months: 6 },
  },
  {
    name: "Sergeant",
    span: { months: 4 },
  },
];
