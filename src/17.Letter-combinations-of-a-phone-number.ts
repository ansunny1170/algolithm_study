/*
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

function letterCombinations(digits: string): string[] {
    if(digits == ""){
        return [];
    }
    let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let res =[];
    let que = [''];
     
    while(que.length>0){
        let str = que[0];
        console.log(str, que)
        que.shift();
         
        if(str.length == digits.length){
            console.log('if','str:',str, '  str.length:',str.length)
            console.log('digits:', digits,'   digits.length:' ,digits.length)
            res.push(str); // if all digits are replaced with char push to result
            console.log('res:',res,'\n\n')
        } else{ 
            // get the current number from the digits i.e if str.length = 2 , digits =123 s= 3
            let s= Number(digits.charAt(str.length));
            console.log('else','s:', s,'  str.length:', str.length,'\n\n')

            let val = table[s]; // get char from the table i.e def for s =3
             
            for(let i=0;i<val.length;i++){
                que.push(str+val.charAt(i));
            }
        }
    }
    // console.log(res)
    return res;
}

letterCombinations('2345'); 
