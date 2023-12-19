// 
function multiByTwo(number: unknown) { //มันไม่รู้ว่า number ควรจะเป็น type อะไร //ก็คือเหมือน any นั่นแหล่ะ// ต่างกันตรง TS จะไม่ยอมให้เรา perform any operation จนกว่าจะแน่ใจแล้วว่ามัน type อะไร
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiByTwo(4));
console.log(multiByTwo("john"));
