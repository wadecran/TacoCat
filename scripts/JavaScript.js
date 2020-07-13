function CheckPalindrome(input) {
    //Modifies the input and outputs to HTML
    $("#userIn").text('Your text was ' + input);
    let word = input.replace(/\s|\'|\"|\,/g, '').toLowerCase();
    $("#modIn").text('After modification that becomes ' + word);

    //Reverses the input
    let reverse = word.toLowerCase().split("").reverse().join("");
    $("#modRev").text('Your modified text reveresed is ' + reverse);


    //Compares the input and the reversed input and outputs results to the HTML
    if (word == reverse) {
        $("#palOut").text('That means that ' + input + ' is a Palindrome!');
        return;
    }
    else {
        $("#palOut").text('That means that ' + input + ' is not a Palindrome!');
        return;
    }
}

function Clear() {
    $("#input").val("");
    $("#userIn").text("");
    $("#modIn").text("");
    $("#modRev").text("");
    $("#palOut").text("");
}