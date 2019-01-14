const timeId = setTimeout(
  () => console.log("You wil not see this one!"),
  0
);

clearTimeout(timeId);