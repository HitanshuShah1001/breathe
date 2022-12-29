interface Types {
  Background: Array<String>;
  Text: String;
  Breathe: String;
  Breathetext: String;
  Buttoncolor: String;
  Playcolor: String;
}

export const Light: Types = {
  Background: ["#c2e59c", "#64b3f4"],
  Text: "#0D1936",
  Breathe: "#6495ED",
  Breathetext: "red",
  Buttoncolor: "#90EE90",
  Playcolor: "#303a52",
};

export const Dark: Types = {
  Background: ["#380036", "#0CBABA"],
  Text: "#FFFFFF",
  Breathe: "#90EE90",
  Breathetext: "white",
  Buttoncolor: "#6495ED",
  Playcolor: "#C2E59C",
};
