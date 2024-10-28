const Cat = {
  alive: true,
  name: "Gustav",
};

function printName() {
  alert(Cat.name);
}

function filter() {
  let string2 = document.getElementById("stringToFilter").value;
  let char2 = document.getElementById("charToFilter").value;
  charRemove(char2, string2);
}
