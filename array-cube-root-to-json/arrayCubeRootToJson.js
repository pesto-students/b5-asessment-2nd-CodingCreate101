const arrayCubeRootToJson = arr => {
  const cubeRootObject = {};
  const numbersArray = convertToNumberOrReturnErrorMessage(arr);
  if (!Array.isArray(numbersArray)) {
    throw new Error(numbersArray);
  }

  numbersArray.map(num => (cubeRootObject[num] = Math.cbrt(num)));

  return cubeRootObject;
};

function convertToNumberOrReturnErrorMessage(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid array";
  }
  const numArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] === null) {
      return "Invalid array";
    }
    numArray.push(Number(arr[i]));
  }

  return numArray;
}

module.exports = { arrayCubeRootToJson };
