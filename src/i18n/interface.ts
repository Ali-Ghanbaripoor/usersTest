export type Direction = "rtl" | "ltr";

// TODO: Change this props to system preferences reducer interface type
export interface LocaleProps {
  locale: string;
  direction: Direction;
}
