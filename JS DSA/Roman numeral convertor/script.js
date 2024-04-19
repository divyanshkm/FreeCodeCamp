const inputInt = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInput = () => {
  if (!inputInt.value || isNaN(parseInt(inputInt.value))) {
    output.innerText = "Please enter a valid number";
    return false;
  } else if (parseInt(inputInt.value) === -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  }
  else if (parseInt(inputInt.value) >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
};

convertBtn.addEventListener('click', () => {
    console.log(inputInt.value);
    if (checkInput()){
        output.classList.toggle('hidden')
    const num = parseInt(inputInt.value);
    output.innerText = convertToRoman(num);
}
});

const convertToRoman = (num) => {
  const ref = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const res = [];
  keys = Object.keys(ref).reverse(); 
  

  for ( i in keys ) {
    console.log(parseInt(keys[i]))
    
    while (num >= parseInt(keys[i])) {
        res.push(ref[parseInt(keys[i])]);
        num -= parseInt(keys[i]);

    }
  }
  console.log(typeof(res.join('')));
return res.join('');


};
