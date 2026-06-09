const hasLicense = true;
const age = 20;
const isDrunk = true;
const canDrive = hasLicense && age > 18 && !isDrunk;
const cantDrive = !hasLicense || age < 18 || isDrunk;

hasLicense && age > 18 && !isDrunk ? console.log(`Вы можете управлять автомобилем`) : console.log(`Вы не можете управлять автомобилем`);

// ТЕПЕРЬ Я ПОНЯЛ КАК ПОЛЬЗОВАТЬСЯ ТЕРНАРНЫМИ)))