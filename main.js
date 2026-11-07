
// question1

let num =Number(prompt('Enter the number:'));
for (let i = 1; i <= 10 ; i++){
 console.log(num + 'x' + i  + '=' + (num *i));
}

// // question2
for (let i= 1;  i<=50; i++ ){
    if (i%5===0) {
        console.log(i);
        
        
    }
}

// question3


let i =1;
while (i<=50) {
    if (i%2==0) {
           console.log(i); 
    }

    i++;
}

// question4

let b =10
do {
    console.log(b);
    b--;
} while (b >=1);
console.log('lift off');

// question5

const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Ahmed"));




// question6

let randomnumber = Math.random()  *10; +1 
console.log(randomnumber);

// question7

let c = [30, 40, 20, 50, 80, 100, 10];
let x = Math.max(c);
let y = Math.min(c);
console.log('Hight score:' , +  x);
console.log('Lowe score:' , +  y);

// question8
let temperature = -4.7
console.log(Math.abs(temperature));
console.log(Math.ceil(temperature));
console.log(Math.floor(temperature));
console.log(Math.round(temperature));


// question9

let fullname = prompt("Enter your full name:");
let clranname = fullname.trim()
console.log("name:" , clranname);
console.log("Lenght:" ,clranname.length);
console.log("Uppercase:" , clranname.toUpperCase());
console.log("lowercase:" , clranname.toLowerCase());
console.log('First Space' , clranname.indexOf(" "));
let firstName = clranname.split(" ")[0];
console.log("frist Name:" , firstName);


// question10

let names = ["Ahmed" , "Ali" , "Omar" , "mohammed" , "Osama"]
let randomIndex = Math.floor(Math.random() * names.length);
let randomName = names[randomIndex];
console.log("name:" , randomName);


// question11

let employees = [
    {
        name: "Ahmed",
        age: 20,
        salary: 5000
    },
    {
        name: "Ali",
        age: 25,
        salary: 6000
    },
    {
        name: "Omar",
        age: 22,
        salary: 5500
    }
];

for (let i = 0; i < employees.length; i++) {

    console.log("Employee Name:", employees[i].name);

    console.log("Employee Age:", employees[i].age);

    console.log("Employee Salary:", employees[i].salary);

    employees[i].salary += 500;

    console.log("Updated Salary:", employees[i].salary);

    console.log("-------------------------------------------");
}

