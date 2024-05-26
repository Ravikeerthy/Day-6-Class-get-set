//  Uber taxi calculator

class uber {
    constructor(carmodel, basicFare,  costperkilometer, costpermin) {
        this.carmodel = carmodel;
        this.basicFare = basicFare;
        this.costperkilometer = costperkilometer;
        this.costpermin = costpermin;
        
    }


calculate(distance, timeinmins) {
    let beforeFare = this.basicFare + (distance * this.costperkilometer) + (timeinmins * this.costpermin);

    let finalAmt = beforeFare * 1;

    return finalAmt;
}
}

let  example = new uber("Sedan",20, 10, 1);
console.log("Car details: ",example);
let distance = 15;
let time = 30;

let fare = example.calculate(distance, time);
console.log("The total fare is: ", fare);