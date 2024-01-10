import inquirer from 'inquirer';
//MULTIPLE CHOICE QUESTION ASSIGNMENT
let mcqs = async () => {
    let score = 0;
    let grade = 'F';
    const answers = await inquirer.prompt([{
            type: 'list',
            name: 'ans1',
            message: 'How to declare a paragraph in HTML?',
            choices: ['<p> </p>', '<pr> </pr>', '(p) (/p)', '<para> </para>']
        },
        {
            type: 'list',
            name: 'ans2',
            message: 'How to add a picture in HTML?',
            choices: ['<img src=>', '<i> </i>', '<image src:>', '<image> src </image>']
        },
        {
            type: 'list',
            name: 'ans3',
            message: 'What does HTML Stands for?',
            choices: ['Hypertext Markup Language', 'Hightext module lingo', 'hypertrains make loops', 'hurray the maths teacher is late']
        },
        {
            type: 'list',
            name: 'ans4',
            message: 'How many headings can be added in a page?',
            choices: ['8', '6', '12', 'infinity']
        }]);
    let correctAns = {
        'cAns1': '<p> </p>',
        'cAns2': '<img src=>',
        'cAns3': 'Hypertext Markup Language',
        'cAns4': 6
    };
    if (answers.ans1 === correctAns.cAns1) {
        score++;
    }
    else {
        console.log('Wrong! Correct answer is = ', correctAns.cAns1);
    }
    if (answers.ans2 === correctAns.cAns2) {
        score++;
    }
    else {
        console.log('Wrong! Correct answer is = ', correctAns.cAns2);
    }
    if (answers.ans3 === correctAns.cAns3) {
        score++;
    }
    else {
        console.log('Wrong! Correct answer is = ', correctAns.cAns3);
    }
    if (parseInt(answers.ans4) === correctAns.cAns4) {
        score++;
    }
    else {
        console.log('Wrong! Correct answer is = ', correctAns.cAns4);
    }
    if (score == 1) {
        grade = 'D';
    }
    else if (score == 2) {
        grade = 'C';
    }
    else if (score == 3) {
        grade = 'B';
    }
    else if (score == 4) {
        grade = 'A';
    }
    console.log('Total Score= ' + score, 'Grade = ', grade);
};
mcqs();
