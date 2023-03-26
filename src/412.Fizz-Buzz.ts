function fizzBuzz(n: number): string[] {
    let i: number = 1;
    let arr : string[] = ['']
    while(i<=n) {
        if(i%3 !== 0 && i%5 !== 0) arr[i-1] = (i).toString()
        else if(i%3 == 0 && i%5 !== 0) arr[i-1] = 'Fizz'
        else if(i%3 !== 0 && i%5 == 0) arr[i-1] = 'Buzz'
        else arr[i-1] = 'FizzBuzz'
        i += 1;
    }
    return arr
};

console.log(fizzBuzz(17));