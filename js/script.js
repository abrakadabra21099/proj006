"use strict";

// let a = 5,
//     b = a;

// b += 5;
// console.log(`a = ${a}, b = ${b}`);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(`copy.a = ${copy.a}, obj.a = ${obj.a}`);

function copy(srcObj) {
    let dstObj = {};
    
    let key;
    for (key in srcObj) {
        dstObj[key] = srcObj[key];
    }

    return dstObj;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 3;
newNumbers.c.x = 10;

// console.log( newNumbers );
// console.log( numbers );

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 30;
// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'dfdasjhfkas';
console.log(`${oldArr} -> ${newArr}`);

const video = ['youtube', 'vimeo', 'tiktok'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(video);
console.log(blogs);
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6];
log(...num);

const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const qq = {...q};
