//console.log(process.argv);

var myArgs = process.argv.slice(2);
//var newArgs = myArgs.split(" ");
//console.log('myArgs: ', myArgs);

var alphaNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var ans = [];
var i;

for (i = 0 ; i < myArgs.length; i++ ){
    
    ans.push(alphaNums[myArgs[i]]);
    
}

console.log(ans);