/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/




function longestCommonPrefix(strs: string[]): string {
    let firstString : string = strs[0] // 배열의 첫 번째 문자열을 기준으로 공통 접두사를 찾습니다.
    let arrayOfFirstString : string[] = [...firstString] // 배열의 첫 번째 문자열을 각 char 별로 배열화 합니다. ['f','l','o',...]
    let result : string = ''
    let i : number = 0 // 첫 번째 문자열의 길이만큼 반복 합니다. flower 6회
    let j : number = 1 // 인풋 strs 배열 개수 만큼 반복 합니다. ["flower","flow","flight"] 3회
    
    for(;i<firstString.length; i++) { // 
        // strs.forEach(e => {
        //     if ( e.startsWith(arrayOfFirstString[i], i) === true ) {
        //         if (j == strs.length ) result += arrayOfFirstString[i]
        //     } else 
        //         j++
        // })
        for(;;) {
            
        }
        j = 1
    }
    return result
};

longestCommonPrefix(["flower","flow","flight"])
// longestCommonPrefix(["dog","racecar","car"])
