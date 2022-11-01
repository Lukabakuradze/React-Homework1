let cars = [
    'BMW',
    'MERCEDES',
    'FERRARI',
    'PORSCHE',
    'BMW',
    'TESLA',
    'TOYOTA',
    'VOLVO',
    'MAZDA',
    'BMW',
    'MAZDA',
 ];
 let Newcarnames = cars.reduce((total, current) => {
    total[current] ??= 0;
    total[current]++;
    return total;
 }, {});
 console.log(Newcarnames);



 