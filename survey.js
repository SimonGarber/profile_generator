const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`);
    rl.question(`What's an activity you like doing? `, (answer2) => {
        console.log(`Thank you for your valuable feedback: ${answer1}`);
        rl.question(`What do you listen to while doing that? `, (answer3) => {
            console.log(`Thank you for your valuable feedback: ${answer1}`);
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
                console.log(`Thank you for your valuable feedback: ${answer1}`);
                rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
                    console.log(`Thank you for your valuable feedback: ${answer1}`);
                    rl.question(`Which sport is your absolute favourite? `, (answer6) => {
                        console.log(`Thank you for your valuable feedback: ${answer1}`);
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
                            console.log(`Thank you for your valuable feedback: ${answer1}`);
        let result =(`Hi There! My name is ${answer1}. One of my favorite things to do is ${answer2}. 
                    What keeps me going? Listening to ${answer3} (obviously). 
                    I love the first meal of the day so ${answer4} is how I power up. 
                    I'm a kid at heart so it's gotta be ${answer5}. 
                    I wish I was tall so I am always idolizing ${answer6} players. 
                    So to go along with my love of coding I realized my powers lie in ${answer7}.`)
        console.log(result);   
  

   rl.close();


                            })
                        })
                    })
                })
          })
    })
});


// rl.question(`What's an activity you like doing? `, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
//   answers.push(answer);
//     rl.close();
//   });
//    rl.question(`What do you listen to while doing that? `, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
  
//     rl.close();
//   });
//    rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
  
//     rl.close();
//   });
//    rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
  
//     rl.close();
//   });
//    rl.question(`Which sport is your absolute favourite? `, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
  
//     rl.close();
//   });
//    rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer1}`);
  
//     rl.close();
//   });