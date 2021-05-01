var alphaNums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

var ans = [];

var inputArr = process.argv.slice(2);

inputArr.join(" ");

for(var i=0; i < inputArr.length; i++){
    var num = inputArr[i]; //get number at current index in input
    num = "" + num; //convert number to string
    num = num.split(""); //split the string by each character
    var numInWords = "";
    for(var j=0; j < num.length;  j++){ // loop through digits in number at index
        numInWords += alphaNums[parseInt(num[j])]; //parse string back into int and get corressponding word from alphaNums array
    }
    ans.push(numInWords); //add word into answer array
}

console.log(ans);