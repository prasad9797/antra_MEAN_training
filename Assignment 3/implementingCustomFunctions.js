// Custom forEach

const arr = [3, 15, 2, 31, 51];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb.call(null, this[i], i);
  }
};

console.log("Elements from myForEach");
arr.myForEach(function (ele, i) {
  console.log(ele);
});

console.log("Elements from ForEach");

arr.forEach(function print(ele) {
  console.log(ele);
});

// Custom filter

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) result.push(this[i]);
  }
  return result;
};

const ages = [32, 33, 16, 40];

const myFilterResult = ages.myFilter(function checkAdult(age) {
  return age >= 18;
});

console.log("Elements from myFilterResult");
console.log(myFilterResult);

const filterResult = ages.filter(function checkAdult(age) {
  return age >= 18;
});

console.log("Elements from filterResult");
console.log(filterResult);

// Custom map

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }

  return result;
};

const numbers = [65, 44, 12, 4];

const myMapResult = numbers.myMap(function myFunction(num) {
  return num * 10;
});

console.log("Elements from myMapResult");
console.log(myMapResult);

const mapResult = numbers.map(function myFunction(num) {
  return num * 10;
});

console.log("Elements from mapResult");
console.log(mapResult);

// Custom includes

Array.prototype.myIncludes = function (find, startIndex = 0) {
  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === find) return true;
  }
  return false;
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Result from myIncludes");
console.log(fruits.myIncludes("Banana"));

console.log("Result from includes");
console.log(fruits.includes("Banana"));

// Custom indexOf

Array.prototype.myIndexOf = function (find, startIndex = 0) {
  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === find) return i;
  }
  return -1;
};

console.log("Result from myIndexOf");
console.log(fruits.myIndexOf("Banana", 3));

console.log("Result from indexOf");
console.log(fruits.indexOf("Banana", 2));

// Custom reduce

Array.prototype.myReduce = function (cb, initValue = this[0]) {
  let total = initValue;
  for (let i = 1; i < this.length; i++) {
    total = cb(total, this[i]);
  }
  return total;
};

const myReduceResult = arr.myReduce(function addition(total, num) {
  return total + num;
});

console.log("Elements from myReduceResult");
console.log(myReduceResult);

const reduceResult = arr.reduce(function addition(total, num) {
  return total + num;
});

console.log("Elements from reduceResult");
console.log(reduceResult);

//Custom Slice

Array.prototype.myslice = function (start = 0, end = this.length) {
  let result = [];
  start = start < 0 ? Math.max(this.length + start, 0) : start;
  end = end < 0 ? Math.max(this.length + end, 0) : end;

  for (let i = start; i < Math.min(end, this.length); i++) {
    result.push(this[i]);
  }

  return result;
};

console.log("Elements from myslice");
console.log(arr.myslice(0, 4));

console.log("Elements from slice");
console.log(arr.slice(0, 4));

// Custom Splice

Array.prototype.mySplice = function (start, count, ...items) {
  start = start < 0 ? this.length + start : start;
  start = Math.min(start, this.length);

  count =
    count === undefined
      ? this.length - start
      : Math.min(Math.max(Math.floor(count), 0), this.length - start);

  const removedElements = this.slice(start, start + count);
  const removedCount = this.length - start - count;

  if (removedCount > 0) {
    for (let i = 0; i < removedCount; i++) {
      this[start + items.length + i] = this[start + count + i];
    }
    this.length = start + items.length + removedCount;
  } else {
    this.length = start + items.length;
  }

  for (let i = 0; i < items.length; i++) {
    this[start + i] = items[i];
  }

  return removedElements;
};

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

console.log("Elements from mySplice");
console.log(fruits1.mySplice(2, 1, "Lemon", "Kiwi"));
console.log(fruits1);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

console.log("Elements from splice");
console.log(fruits2.splice(2, 1, "Lemon", "Kiwi"));
console.log(fruits2);
