class Worker {
  constructor(name, surname, rate, days){
      this.name= name
      this.surname = surname
      this.rate = rate
      this.days = days
  }
  getSalary() {
        return (this.rate * this.days)
  }
}

const nurbek = new Worker('nurbek', 'alimov', '3000', '15');
const alina = new Worker('alina', 'alimova', '2800', '20');

let nurbekTable = nurbek.getSalary();
let alinaTable = alina.getSalary();

console.log(nurbekTable + alinaTable);


