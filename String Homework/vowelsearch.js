let sentence = "I live in Brooklyn and enjoy coding"
let vowelsearch = 'aeiou'
let vowelcount = 0
let lowerCase = sentence.toLowerCase()

for (char = 0; char < lowerCase.length; char++) {
    for (let vowel = 0; vowel < vowelsearch.length; vowel++) {
        if (lowerCase[char] === vowelsearch[vowel]) {
            vowelcount++
            console.log(lowerCase[char]);
            break;
        }
    }
}
console.log(vowelcount);