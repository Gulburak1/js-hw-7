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

class MyString {
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }
}
let str = new MyString();
console.log(str.reverse('Taalaibek kyzy Gulburak'));
console.log(str.ucFirst('i want to get more points'));
console.log(str.ucWords('excuse me, I'm Gulburak'));
