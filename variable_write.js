//write 3 variables number string boolean

var num = 34;
console.log(num);

var person = 'mehedi';
console.log(person);

var isHot = true;
console.log(isHot);

//variable using let const
function sumNum(number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        result = result + i;
    }
    return result;
}

const number = 10;
console.log(sumNum(number));

//simple math operation

function mathOperation(num1, num2) {
    let sum = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    let mod = num1 % num2;

    console.log("the summation is", sum, "the sub is:", sub, "the mul is:", mul, "the div is: ", div, "the mod is:", mod);
}
mathOperation(30, 7);

// comparision between number
function comparisionNum(num1, num2) {
    if (num1 > num2) {
        console.log('the greatest number is:', num1)
    }
    else if (num2 > num1) {
        console.log('the greatest number is:', num2)
    }
    else if (num1 == num2) {
        console.log('the num1 and num2 is equal', num1);
    }
    else if (num1 < num2) {
        console.log('num1 is smallest', num1)
    }
    else if (num2 < num1) {
        console.log('num2 is smallest', num2);
    }
    else if (num1 != num2) {
        console.log('num1 and num2 is not equal');
    }
    else {
        console.log('please enter valid number');
    }
}

comparisionNum(3, 20);

// fulfill bothe condition  or two condition both conditon

let n1 = 344;
let n2 = 67;
if (n1 > n2 && typeof n1 == 'number') {
    console.log("all done");
}
else {
    console.log('valo');
}

// odd number between 7 to 19

for (let i = 7; i <= 19; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}

// array create data pop add selected index value change
let arrayName = [23, 45, 3, 35]

// push in an array
arrayName.push(99);
console.log('After pushing the array is: ', arrayName);
arrayName.pop();
console.log('After popping the array is: ', arrayName);

arrayName.shift();
console.log('After shifting the array is: ', arrayName);
arrayName.unshift(9999);
console.log('After unshifting the array is: ', arrayName);
console.log('Length of the array is: ', arrayName.length);


// check in an array
if (arrayName.indexOf(35) != -1) {
    console.log('esist');
}
else {
    console.log(' not esist');
}

//arry elemen print by loop
arr = ['mehedi', 89, 90, 20];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//show the number bigger than 80 that is exist in an Array
let bigNum = [90, 40, 89, 44, 20, 119];
for (let i = 0; i < bigNum.length; i++) {
    if (bigNum[i] >= 80) {
        console.log(bigNum[i]);
    }
}

//in a function we take 3 parameter and return the multiplication

function mulNum(num1, num2, num3) {
    let res = 1;
    res = num1 * num2 * num3;
    return res;
}
console.log(mulNum(3, 4, 2))

//create an object an change the property of any

let man = [
    nicName = 'mehedi',
    color = 'mix',
    height = 5.8,
    laptop = 1,
    phone = 1

];

man.phone = 20;
console.log(man);
