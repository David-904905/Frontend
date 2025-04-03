const numbers: number[] = [1, 2, 3, 4];

const names: Array<string> = ["Alice", "Bob", "Charlie"];

console.log(numbers);

// this code has multiple types, it can hold a string, a number or a boolean value, it also takes a callback function.
function user(): string
{
    return ''
}
function testfunc(): void
{

}
const normal: (string | number | boolean | (() => string) | (() => void))[] = ["user", 2, true, "true", user];
normal.push('maria');
normal.push(testfunc);
normal.push(1);