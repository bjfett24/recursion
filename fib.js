function fibs(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        if (arr.length === 0) {
            arr.push(0)
        } else if (arr.at(-1) === 0) {
            arr.push(1);
        } else {
            arr.push(arr.at(-2) + arr.at(-1));
        }
    }

    return arr;

}

function fibsRec(num, arr = []) {
    if (arr.length == num) {
        return arr
    } else if (arr.length == 0) {
        arr.push(0);
        return fibsRec(num, arr);
    } else if (arr.length == 1) {
        arr.push(1);
        return fibsRec(num, arr);
    } else {
        arr.push(arr.at(-2) + arr.at(-1))
        return fibsRec(num, arr);
    }

}



const testNums = [0, 1, 2, 4, 8, 12, 24];
for (num of testNums) {
    console.log(fibs(num));
    console.log(fibsRec(num));
}

