const strToOption = (str) => {
  let options = [];
  str.split(",").map((option) => {
    let tempOption = { value: "", label: "" };
    const spOption = option.split(":");
    if (spOption.length) {
      tempOption["value"] = spOption[0];
      tempOption["label"] = spOption[1];
    } else {
      tempOption["value"] = spOption;
      tempOption["label"] = spOption;
    }
    options.push(tempOption);
  });
  return options;
};

export default strToOption;
