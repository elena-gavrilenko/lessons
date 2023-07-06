class Person{
    constructor(firstName, lastName, age, gender){
        this.firstName=firstName||'Джон';
        this.lastName=lastName||'Доу';
        this.age=age||0;
        this.gender=gender||'мужской';
     } 
     sayFullName(){
        return `${this.firstName} ${this.lastName}`
     }
     static greetExtraTerrestrials(raceName){
        return `Добро пожаловать на планету Земля, ${raceName}`
     }
}
let person1=new Person('Иван','Иванов','27');
console.log(person1);
console.log(person1.sayFullName());
console.log(Person.greetExtraTerrestrials('марсианин'));
let person2=new Person();
console.log(person2);
console.log(person2.sayFullName());
