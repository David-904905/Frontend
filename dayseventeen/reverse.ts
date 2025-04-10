const reversePair = <T, U> (value1: T, value2: U): [U, T] =>
{
    return [value2, value1];
}


console.log(reversePair(1, 'water'));