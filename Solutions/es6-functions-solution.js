// 1.

const logStringThreeTimes = str => {
    console.log(str);
    console.log(str);
    console.log(str);
}

logStringThreeTimes("hello");

// 2.

const repeatManyTimes = (num, str) => {
    let result = "";

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}

console.log(repeatManyTimes(5, "Woah"));

// 3. 

const firstLetter = str => str[0];

console.log(firstLetter("banana"));
console.log(firstLetter("zimbabwe"));