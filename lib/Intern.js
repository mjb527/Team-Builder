const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    // make use of Employee
    super(name, "Intern", email);

    // set the intern's school
    this.school = school;
    this.role = "Intern";

  }

  getSchool() {
    return this.school;
  }

}

module.exports = Intern;
