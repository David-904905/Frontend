// This is a generic function in typescript

function PrintInfo<T>(x: T): T {
    return x;
}

const str = PrintInfo<string>("Walter");
console.log(str);