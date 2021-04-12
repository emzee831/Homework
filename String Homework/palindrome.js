let originalword = "racecar"
let backwardsword = ''

for (i = originalword.length - 1; i >= 0; i--) {
    console.log(originalword[i] + ' irterated word');
    backwardsword += originalword.charAt(i)
    console.log(backwardsword + ' inner loop');
}
if (originalword === backwardsword) {
    console.log(originalword + " is a palindrome");
} else {
    console.log(originalword + " not a palindrome");
}