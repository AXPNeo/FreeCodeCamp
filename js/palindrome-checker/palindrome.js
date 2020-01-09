function palindrome(str) {
    var stringArr = str.toLowerCase().split("");
    var filteredArr = stringArr.filter(char => /[a-z]|[A-Z]|[0-9]/.test(char)); // /[a-zA-Z0-9]/ was matching _ for some reason

    for (var i = 0; i < filteredArr.length / 2; i++) {
        if (filteredArr[i] != filteredArr[filteredArr.length - 1 - i]) {
            return false
        }
    }
    return true;
}