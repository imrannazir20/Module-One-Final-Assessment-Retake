/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
    let outputArray =[]
    for(i =0; i<arr.length; i++){
        let currentWord =arr[i];
        let currentWordsSize =currentWord.length
        let lastCharacter= currentWord[currentWordsSize-1]
        if(lastCharacter != "!"){
            outputArray.push(currentWord)
        }
    }
return outputArray
}

module.exports = removeStringsEndingInBang
