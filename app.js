const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// validate input
const validateName = (input) => {
  if(/^[a-zA-Z\s]+$/.test(input)) {
    return true;
  }
  console.log('\nCannot include numbers and special characters in the name.');
  return false;
}

const validateId = (input) => {
  if(/^[0-9\-\_]+$/.test(input)) {
    return true;
  }
  console.log('Please use numbers, underscores, and hyphens only.');
  return false;
}

const validateEmail = (input) => {
  if(/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+$/.test(input)) {
    return true;
  }
  console.log('Not a valid email');
  return false;
}

const validateSchool = (input) => {
  if(/^[a-zA-Z]+$/.test(input)) return true;

  console.log('Invalid School Name');
  return false;

}

const validateGit = (input) => {
  if(/^[a-zA-Z0-9]+$/.test(input)) return true;

  console.log('Cannot have spaces in a GitHub username');
  return false;

}

// const yn = (input) => {
//   return input.toLowerCase() === 'y' || input.toLowerCase() === 'n';
// }

const employees = [];

inquirer.prompt(
  [{
    message: 'What is your name?',
    type: 'input',
    validate: validateName,
    name: 'name'
  },
  {
    message: 'What is your office number?',
    type: 'input',
    name: 'officeNumber'
  },
  {
    message: 'What is your email address?',
    type: 'input',
    name: 'email',
    validate: validateEmail,
  },
  {
    message: 'Add a new team member:',
    type: 'list',
    choices: ['Intern', 'Engineer', 'That\'s my whole team'],
    name: 'role'
  }])
  .then(answers => {
    const {name, officeNumber, role, id, email} = answers;

    employees.push(new Manager(name, id, email, officeNumber));

    if(role !== "That's my whole team") ask(role);
    else console.log('done');// renderHtml

});

function ask(role) {
  const questions = [
    {
      message: 'What is the employee\'s name?',
      type: 'input',
      validate: validateName,
      name: 'name'
    },
    {
      message: 'What is the employee\'s ID?',
      type: 'input',
      validate: validateId,
      name: 'id'
    },
    {
      message: 'What is the employee\'s email?',
      type: 'input',
      validate: validateEmail,
      name: 'email'
    }];
  if(role === 'Intern') questions.push(
    {
      message: 'What is the employee\'s school?',
      type: 'input',
      name: 'extra',
      validate: validateSchool
    }
  );
  else if (role === 'Engineer') {
    questions.push({
      message: 'What is the employee\'s Github username?',
      type: 'input',
      name: 'extra',
      validate: validateGit
    });
  }
  questions.push({
    message: 'Add a new team member:',
    type: 'list',
    choices: ['Intern', 'Engineer', 'That\'s my whole team'],
    name: 'newRole'
  });

  console.log(questions);

  // create new employee
  return new Promise((resolve, reject) => { inquirer.prompt(questions).then(
    function(answers) {
      console.log(employees);
      const {name, id, email, extra, newRole} = answers;
      if(role === 'Engineer')
        employees.push(new Engineer(name, id, email, extra));
      else employees.push(new Intern(name, id, email, extra));

      if(newRole !== "That's my whole team") resolve(role);
      else console.log('that\'s it');// renderHtml

    });
  });
} // end function








// render the html




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
