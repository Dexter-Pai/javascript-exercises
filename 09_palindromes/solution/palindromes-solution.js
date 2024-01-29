const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(processedString);
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;
