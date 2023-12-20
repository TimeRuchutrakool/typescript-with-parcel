
const mapT = <T>(array: T[], callback: (item: T) => T): T[] => { //ต้องมี another generic เพราะสมมติรับมาเป็น number เอามาแปลงเป็น string มันจะ returnเป็น type เดียวกันไม่ได้
  if(array.length===0) return array
  const newArray = []
  for (const item of array) {
    const newItem = callback(item)
    newArray.push(newItem)
  }
  return newArray
}

const map = <T, U>(array: T[], func: (item: T) => U) => {
  // check if the array is empty
  if (array.length === 0) {
    return array;
  }
  // Create a new array to collect values
  let result = [];
  // Loop through each item and call the func
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  // return new array
  return result;
};

let numbers = [4, 5, 6, 7, 8];

const converted = map(numbers, (num) => num.toString());

console.log(converted);
