const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const originalText = input.value;
  
  if (originalText.trim() === "") {
    alert("Please input a value");
  } else {
    checkPalindrome(originalText);
  }
});

const cleanString = (str) => {
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
};

const checkPalindrome = (text) => {
  const cleanedStr = cleanString(text);
  const reversedStr = cleanedStr.split("").reverse().join("");
  const isPalindrome = cleanedStr === reversedStr;

  result.textContent = isPalindrome
    ? `${text} is a palindrome`
    : `${text} is not a palindrome`;
};
