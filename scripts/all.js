const insertSortAsc = arr => {
    const n = arr.length;

    if(n === 0 || n === 1) {
        return arr;
    }

    for(let i = 1; i < arr.length; i++) {
        const key = arr[i]; 
        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1]  = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const insertSortDesc = arr => {
    const n = arr.length;

    if(n === 0 || n === 1) {
        return arr;
    }

    for(let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] < key) {
            arr[j + 1]  = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}