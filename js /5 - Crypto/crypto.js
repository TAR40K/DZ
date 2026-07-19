function crypto(password) {
  let encryp = password.split(``);
  let reversed = encryp.reverse();
  return reversed.join("");
}
console.log(crypto(`password`));
function check(drowssap, password) {
  let crypen = drowssap.split('').reverse().join('');
  // let lego = crypen.reverse();
  // let joint = crypen.join('');
  if (crypen === password) {
    return true;
  } else {
    return false;
  }
}
console.log(check(`drowssap`, `password`));
