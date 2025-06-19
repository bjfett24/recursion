function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    } else {
        let leftArr = arr.slice(0, arr.length / 2);
        let rightArr = arr.slice(arr.length / 2, arr.length);

        let sortedLeft = mergeSort(leftArr);
        let sortedRight = mergeSort(rightArr);

        let mergeArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (sortedLeft.at(0) && sortedRight.at(0)) {
                if (sortedLeft.at(0) <= sortedRight.at(0)) {
                    mergeArr.push(sortedLeft.at(0));
                    sortedLeft.shift();
                } else {
                    mergeArr.push(sortedRight.at(0));
                    sortedRight.shift();
                }
            } else if (sortedLeft.at(0)) {
                mergeArr.push(sortedLeft.at(0));
                sortedLeft.shift();
            } else {
                mergeArr.push(sortedRight.at(0));
                sortedRight.shift();
            }
        }
        return mergeArr;
    }
} 

console.log(mergeSort([12, 13, 14, 2, 5, 3, 17, 16, 14, 5, 3]));