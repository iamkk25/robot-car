class Car{
    #brand;
    #modal;
    #year;
    constructor(_brand,_modal,_year){
        this.#brand=_brand;
        this.#modal=_modal;
        this.#year=_year;
    }
    getWholeDetails(){
        return `Details:
        Brand: ${this.#brand}
        Modal: ${this.#modal}
        Year: ${this.#year}`;
    }
    getBrand(){
        return this.#brand;
    }
    getModal(){
        return `Modal of your Car is ${this.#modal}`;
    }
    getYear(){
        return this.#year;
    }
}

let dodge = new Car('Dodge','Challenger Hellcat', 2019);
let bmw = new Car('BMW', 'M4', 2020);

console.log(dodge.getWholeDetails());

console.log(bmw.getModal());

class User{
    #name;
    constructor(name){
        this.#name=name;
    }

    getname(){
        return this.#name;
    }
}

let kk = new User('karthik');
// console.log(kk.getname());