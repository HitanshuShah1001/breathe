interface Labels {
  label: String;
  value: Number;
}

let Label: Labels[] = [];

for (let i = 1; i < 11; i++) {
  Label.push({
    label: i.toString() + " " + "mins",
    value: i,
  });
}
export const Labels: Labels[] = Label;
