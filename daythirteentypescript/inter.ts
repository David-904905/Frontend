type Employee = {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    nin: number;
    hobbies?: Array<string>
}

type Admin = {
    readonly adminId: string;
    password: string;
    permissions: Array<string>;
}

type EmployeeAndAdmin = Employee & Admin;

const Ukpong: EmployeeAndAdmin = {
    firstName: "Ukpong",
    lastName: "Nsikak",
    age: 32,
    nin: 6894224910,
    address: "Plot 4bc White Heart Lane",
    adminId: 'bdithwsa3131',
    password: "",
    permissions: ['']
}

console.log(Ukpong.firstName);