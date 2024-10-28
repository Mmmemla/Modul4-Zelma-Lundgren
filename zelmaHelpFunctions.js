function charRemove(charParameter, textParameter) {
  console.log(typeof charParameter);
  textParameter = textParameter.replace(charParameter, "");
  alert(textParameter);
}
