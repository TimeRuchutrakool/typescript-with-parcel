type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// type Reserve1 = {
//   (
//     departureDate: Date,
//     returnDate: Date,
//     departingFrom: string,
//     destination: string
//   ): Reservation; //! มี 2 signature ละ // มันจะเอา 4 หรือ 3 ตอนไปสร้าง function -> มันเอา ตำแหน่งมา combine กัน คือ ตัวแรก โอเค ตัวที่ 2 คือ returnDate ที่เป็น string กับ departingForm ที่เป็น string -> ดังนั้นตัวที่ 2 ต้องเป็น Date | string
//   (
//    departureDate: Date,
//    departingFrom: string,
//    destination: string
//    ): Reservation
// };

// const reserve1: Reserve1 = (
//   departureDate,
//   returnDateOrDepartingFrom,
//   departingFromOrDestination,
//   destination
// ) => {
  
// }

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never; //บอกว่า can throw an error
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
