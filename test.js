const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    rl.question('Enter the operation (add, sub, mul, div): ', (operation) => {
      let result;
      switch(operation) {
        case 'add':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case 'sub':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case 'mul':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case 'div':
          if(num2 != 0) {
            result = parseFloat(num1) / parseFloat(num2);
          } else {
            console.log('Error! Division by zero.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operation!');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});