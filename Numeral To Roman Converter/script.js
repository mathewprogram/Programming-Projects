const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function toRoman(num) {
  const numeralToRoman = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = "";

  for (let i = 0; i < numeralToRoman.length; i++) {
    while (num >= numeralToRoman[i].value) {
      result += numeralToRoman[i].numeral;
      num -= numeralToRoman[i].value;
    }
  }
  return result;
}

function convertToRoman() {
  const inputValue = numberInput.value.trim(); // Trim whitespace
  if (!inputValue) {
    output.textContent = "Please enter a valid number";
    return; // Exit the function early
  }
  
  const inputInt = parseInt(inputValue);
  if (isNaN(inputInt)) {
    output.textContent = "Invalid input!";
    return; // Exit the function early
  }

  if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return; // Exit the function early
  } else if (inputInt > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return; // Exit the function early
  }

  // Convert valid input to Roman numeral
  const romanNumeral = toRoman(inputInt);
  output.textContent = romanNumeral;

  // Clear the input value
  numberInput.value = '';
}

convertBtn.addEventListener("click", convertToRoman);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
  }
});
