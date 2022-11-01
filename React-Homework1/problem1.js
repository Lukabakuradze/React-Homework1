
let Numbers = [3, -5 , 20, -12, 17, -1];

let Positivenumbers = Numbers.filter((x) => x > 0).reduce((total, current) => total + current, 0);

console.log(Positivenumbers);

