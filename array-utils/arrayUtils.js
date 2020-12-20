// class List extends Array {
//   myForEach(callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   }
// }
// const list = new List(1, 2, 3, 4, 5);

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.customMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

Array.prototype.customFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

Array.prototype.customReduce = function (callback, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};
