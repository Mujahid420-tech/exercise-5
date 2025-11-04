let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(" Number: ", numbers[i]);
}
let count = -5;
while (count >= 1) {
    console.log(" Countdown: ", count);
    count--;
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(" Even numbers: ", numbers[i]);
    }
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(" Sum of numbers: ", sum);