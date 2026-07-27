const user1 = {
  name: `Dmitry`,
  birthday: `2004-04-15`,
};

function ageValidations(user) {
  const birthday = new Date(user.birthday);
  birthday.setHours(0, 0, 0, 0);
  const now = new Date();
  const then = new Date(now.getFullYear() - 14, now.getMonth(), now.getDate());
  then.setHours(0, 0, 0, 0);

  return birthday <= then;
}

console.log(ageValidations(user1));
