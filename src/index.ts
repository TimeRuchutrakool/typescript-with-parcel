//ใช้ตอนที่ key ใน object มัน unknown to us -> เราไม่รู้ pattern ของ key prop

type Airplane = {
  // flightNumber: string;
  // airplaneModel: string;
  // dateOfDeparture: string;
  // timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [k: string]: string; //valid เมื่อ key เป็น string และ value เป็น string
  };
};

const airplane: Airplane = {
  from: 'A',
  to: 'B',
  seats: {
    a:'A',b:'B'
  }
}