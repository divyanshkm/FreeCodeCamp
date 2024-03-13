const textInput = document.getElementById('text-input');
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const resultClass = document.getElementsByClassName("result-div");
checkButton.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value");
        return ;
    }
    else {
        palindromeChecker();
        return ;
    }
});

function palindromeChecker() {
    const wordInput = textInput.value;
    const originalWord = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseWord = originalWord.split("").reverse().join("");
    if (originalWord === reverseWord) {
        result.textContent = `${wordInput} is a palindrome`;
        result.classList.remove("hidden");
    }
    else {
        result.textContent = `${wordInput} is not a palindrome`;
        resultClass.classList.remove("hidden");
    }
    return;
}