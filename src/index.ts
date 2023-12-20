type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog = {
  name: string;
  barks: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat; //ต้องมี ทุก prop ของ Catกับ Dog //ต่างจาก union คือต้องให้ TS เข้าใจว่าเป็น type ใก type หนึ่ง

const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White",
  barks: true,
  purrs: false,
};
