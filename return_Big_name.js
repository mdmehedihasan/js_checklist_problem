let name = ['mehedi', 'hasan', 'rubelkhanjony', 'hasin']
let biggerName = name[0];
for (let i = 0; i < name.length; i++) {
    if (name[i].length > biggerName.length) {
        biggerName = name[i];
    }

}
console.log(biggerName);


///only positive number in an array
function onlyPositive(arr) {
    let finalPositiveNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            finalPositiveNumber = finalPositiveNumber + arr[i];
        }
        else {
            break;
        }
    }
    console.log(finalPositiveNumber);
}
onlyPositive([23, 45, 98, 899, -34, -9, 34]);