type NewType = string | number;

const performOperation = (value: NewType): void =>
{
    if(typeof value === 'string')
    {
        console.log(value.toUpperCase());
    }
    else
    {
        console.log(value.toFixed(3));
    }
}

const myName: NewType = 'David';
performOperation(myName);
