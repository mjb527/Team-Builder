const Employee = require('./Employee');

class Engineer extends Employee {

  constructor(name, id, email, github) {
    // make use of Employee
    super(name, id, email);

    this.role = "Engineer";
    // get the github url based on username
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

}

module.exports = Engineer;
