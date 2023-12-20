type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// type Reserve = ()=>{} //ใช้ parameter เป็รน Reservation prop เพื่อที่จะเอามาสร้าง object

// type Reserve =  (
//     departureDate: Date,
//     returnDate: Date,
//     departingFrom: string,
//     destination: string
//   ) => Reservation; //จะให้ return Reservation มาให้เรา

// เป็น function call signature ที่ รับ parameter 4 ตัว แล้ว return Reservation type
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;
};
