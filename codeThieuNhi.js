// let arrFibonacci = {
//     0: 0,
//     1: 1,
//     2: 2,
// }

// function fib(n) {
//     if(n <= 0) return 0;
//     if(n == 1) return 1;
//     if(n == 2) return 2;

//     if(arrFibonacci[n]) {
//         return arrFibonacci[n];
//     } else {
//         arrFibonacci[n] = fib(n - 1) + fib(n - 2);
//     }

//     return arrFibonacci[n];
// }

//Bai 2

// let arrFibonacci = {
//     0: 0,
//     1: 1,
//     2: 2,
// }

// function fib(n) {
//     if(n <= 0) return 0;
//     if(n == 1) return 1;
//     if(n == 2) return 2;

//     if(arrFibonacci[n]) {
//         return arrFibonacci[n];
//     } else {
//         arrFibonacci[n] = fib(n - 1) + fib(n - 2);
//     }

//     return arrFibonacci[n];
// }


//Bai 3

const MAX_NUMBER = 50;

function add(a, b) {
    maxLength = Math.max(a.length, b.length) + 1;

    maxA = a.length;
    maxB = b.length;

    let result = [];
    let nho = 0;

    for(let i = 1; i <= maxLength; i++) {
        let tempA = parseInt(a[maxA - i]) ;
        let tempB = parseInt(b[maxB - i]);

        if(isNaN(tempA)) tempA = 0;
        if(isNaN(tempB)) tempB = 0;
        
        let temp = tempA + tempB + nho;

        if(temp >= 10) {
            result[MAX_NUMBER - i] = temp % 10;
            nho = Math.floor(temp / 10);
        } else {
            result[MAX_NUMBER - i] = temp;
            nho = 0;
        }
    }

    return result.join("");
}

function multiplySingle(a, b) {
    tempB = parseInt(b);
    let result = "";
    for(let i = 0; i < b; i++) {
        result = add(result, a);
    }
    return  removeLeadingZero(result);
}

function multiply(a, b) {
    let tempNums = []

    for(let i = 1; i <= b.length; i++) {
        tempNums.push(multiplySingle(a, b[b.length - i]) + "0".repeat(i - 1));
    }

    let result = "0".repeat(MAX_NUMBER);
    tempNums.forEach(num => {
        result = add(result, num);
    });

    return removeLeadingZero(result);
}

function removeLeadingZero(string) {
    let i = 0;

    while(string[i] === '0') {
        i++
    }

    let result = "";
    while(i < string.length) {
        result += string[i];
        i++
    }

    return result;
}
