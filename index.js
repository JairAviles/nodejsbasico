const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q = [
  "Cual es tu primer nombre? ",
  "Cual es tu primer apellido? ",
  "Cual es tu edad? "
];

const AskQuestion = (rl, question) => {
  return new Promise((res, err) => {
    rl.question(question, answer => {
      res(answer);
    });
  });
}

const AskForm = function(questions) {
  return new Promise(async (res) => {
    let results = [];
    for (let i=0; i < questions.length; i++) {
      const result = await AskQuestion(rl, questions[i]);
      results.push(result);
    }
    rl.close();
    res(results);
  })
}

AskForm(q).then(q => {
  console.log(`Hi ${q[0]} ${q[1]}, you are ${q[2]} years old`);
});
