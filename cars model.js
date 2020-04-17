const cars = [
    {
        model: 'MERCEDES BENZ',
        year: 2020,
        owner: 0,
        service: 1,
    },
    {
        model: 'BMW',
        year: 2015,
        owner: 1,
        service: 1,
    },
    {
        model: 'AUDI',
        year: 2001,
        owner: 0,
        service: 0,
    },
    {
        model: 'LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];

/*
let result = service.map(function(item){
    let auto = cars.filter(function(){                     //1 
        
    });
    return auto ;
});
    console.log(result);
*/

/*
let NarekCar = owner.find(function(elem){
    return elem.index === 1                                  //2     
});
console.log(NarekCar);

let  hiscar = cars.filter(function(item){
    return NarekCar.index === item.owner;
 });
    console.log(hiscar);
*/

/*
 let YearCar = cars.filter(function(elem){
    return elem.year > 2010;                                 //3
 });
    console.log(YearCar);
*/


/* let addYear = cars.map(function (elem) {
    return elem.year + 1;                              //5
    }); 
    console.log(addYear);*/