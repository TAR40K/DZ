const quest = prompt("Your language?");
switch (quest) {
  case quest == `Русский`:
  case quest == `русский`:
  case quest == `ru`:
    console.log(`Здравствуйте!`);
    break;
  case quest == "English":
  case quest == "english":
  case quest == "en":
    console.log(`Good man!`);
    break;
  case quest == "German":
  case quest == "german":
  case quest == "de":
    console.log(`Guten Tag!`);
    break;
  case quest == "Chinese":
  case quest == "chinese":
  case quest == "ch":
  case quest == "JackieChan":
    console.log(`Ni Hao!`);
    break;
  default:
    console.log(`Hello!`);
}
