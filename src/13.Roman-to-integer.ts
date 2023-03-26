function romanToInt(s: string): number {
    let t : number = 0
    const logArrayElements = (e, i, a) => {
        // console.log('a[' + i + '] = ' + e);
        if((a[i] == 'V' || a[i] == 'X') && a[i-1] == 'I') t += 0
        else if((a[i] == 'L' || a[i] == 'C') && a[i-1] == 'X') t += 0
        else if((a[i] == 'D' || a[i] == 'M') && a[i-1] == 'C') t += 0
        else if(e == 'C' && a[i+1] == 'M') t += 900
        else if(e == 'C' && a[i+1] == 'D') t += 400
        else if(e == 'X' && a[i+1] == 'C') t += 90
        else if(e == 'X' && a[i+1] == 'L') t += 40
        else if(e == 'I' && a[i+1] == 'X') t += 9
        else if(e == 'I' && a[i+1] == 'V') t += 4
        else if(e == 'I') t += 1
        else if(e == 'V') t += 5
        else if(e == 'X') t += 10
        else if(e == 'L') t += 50
        else if(e == 'C') t += 100
        else if(e == 'D') t += 500
        else if(e == 'M') t += 1000
    }
    [...s].forEach(logArrayElements)

    return t
};

// console.log(romanToInt('CDLVIII'))