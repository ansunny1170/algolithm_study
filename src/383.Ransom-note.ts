/*ransomNote와 magazine이라는 두 개의 문자열이 주어지면, 
magazine의 문자를 사용하여 ransomNote를 구성할 수 있으면 true를 반환하고 
그렇지 않으면 false를 반환합니다. 
잡지의 각 문자는 랜섬노트에서 한 번만 사용할 수 있습니다.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
    const alphabet:string[] = [
        'a','b','c','d','e','f', 'g','h','i','j','k','l',
        'm','n','o','p','q','r', 's','t','u','v','w','x','y','z']
    let siever:[number, number][] = []
    let i: number = 0
    let result: boolean = true
    siever[0] = [0, 0] // ransomNote
    siever[1] = [0, 0] // magazine

    while(i <= 25){ // 
        siever[0][i] = ransomNote.split(`${alphabet[i]}`).length -1 // asdfasdf -> '_' a sdf a sdf -> ['', sdf, sdf]
        siever[1][i] = magazine.split(`${alphabet[i]}`).length -1

        console.log('current alphabet, 분해된 문자열의 배열화, 배열의 개수: ', alphabet[i], ransomNote.split(`${alphabet[i]}`), ransomNote.split(`${alphabet[i]}`).length)
        
        if(siever[1][i]-siever[0][i]<0) { // if magazine char < ransomNote char, return false
            result = false
            break
        }
        i++
    }

    console.log('거름망: ', siever)
    console.log('결과: ',result)

    return result
};

canConstruct('asdfasdf', 'asdfasd')

/*
interface와 type의 차이점
1. 공통점 type과 마찬가지로 객체 타입 선언 가능
interface PeopleInterface {
  name: string
  age: number
}

const me1: PeopleInterface = {
  name: 'yc',
  age: 34,
}

type PeopleType = {
  name: string
  age: number
}

const me2: PeopleType = {
  name: 'yc',
  age: 31,
}

2. 차이점
2-1 확장하는 방법
interface PeopleInterface {
  name: string
  age: number
}

interface StudentInterface extends PeopleInterface {
  school: string
}

type PeopleType = {
  name: string
  age: number
}

type StudentType = PeopleType & {
  school: string
}

2-2 선언적 확장
interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만, 
한 가지 중요한 차이점은 type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만, 
interface는 항상 선언적 확장이 가능하다는 것이다. 그 차이에 대한 예제가 바로 밑에 있는 것이다.
///////////////////////////////////////////////////////////////////////
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

// 같은 interface 명으로 Window를 다시 만든다면, 자동으로 확장이 된다.

const src = 'const a = "Hello World"'
window.ts.transpileModule(src, {})
///////////////////////////////////////////////////////////////////////
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

// Error: Duplicate identifier 'Window'.
// 타입은 안된다.
/////////////////////////////////////////////////////////////////////// 
*/