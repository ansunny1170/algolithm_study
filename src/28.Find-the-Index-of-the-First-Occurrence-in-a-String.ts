/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.


Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

function strStr(haystack: string, needle: string): number {
    let indexOfFirst: number = 0
    let notPartInHS: number = -1

    // 길이 확인하여 needle이 더 길 경우 -1 반환
    if(needle.length>haystack.length) return notPartInHS 

    // haystack을 needle 문자열 기준으로 구분하기
    // splits 배열에 needle 기준으로 잘린 문자열이 순서대로 입력된다.
    const splits = haystack.split(needle)
    console.log('splits: ',splits)

    // needle로 haystack이 구분 안 되면, 결과는 haystack 본인이 된다.
    if(splits[0].length === haystack.length) return notPartInHS

    // needle로 haystack이 구분되면, split의 첫 번째 배열에 haystack보다 짧은 문자열이 입력된다.
    indexOfFirst = splits[0].length
    console.log('index of first occurrence of `needle` in `haystack`: ',splits[0].length)
    
    return indexOfFirst
};

strStr('leetcode', 'le')
// console.log('result: ', 'leetcode'.indexOf('1231'))