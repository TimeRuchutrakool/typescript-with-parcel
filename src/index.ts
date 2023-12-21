enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const car: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.honda,
  colors: [AutomobileColors.black,AutomobileColors.blue],
  description:''
}