type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department { //cannot be instantiate //ได้แค่เป็นที่ inherit
    protected abstract holidays: Holidays;
    protected constructor(protected name: string) {}
}

class ItDepartment extends Department {
    protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
    protected holidays: Holidays = [];
}
