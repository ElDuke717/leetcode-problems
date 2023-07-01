function palindrome(string) {
  string = string.toLowerCase().replace(/\W/g, "");
  if (string.length === 0) return true;
  else if (string[0] === string[string.length - 1]) {
    string = string.slice(1, string.length - 1);
    return palindrome(string);
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal: Panama"));

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^\w]/g, "");
  console.log(str);
  const rev = [...str].reverse().join("");
  return str === rev;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
