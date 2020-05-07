
class Employee {

  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }

}


// let id = 1;
//
// function Employee(name, role, email) {
//   name = name.strip();
//   name = name[0].toUpperCase() +
//     name.substring(1, name.length).toLowerCase();
//   email = email.strip();
//
//   this.id = id;
//   id++;
//
//   this.name = name;
//   this.role = role; // manager, engineer, or intern
//   this.email = email;
//
//   this.getId = function() {
//     return this.id;
//   }
//   this.getName = function() {
//     return this.name;
//   }
//   this.getRole = function() {
//     return this.role;
//   }
//   this.getEmail = function() {
//     return this.email;
//   }
//   this.setEmail = function(email) {
//     this.email = email;
//   }
//
//
// }

module.exports = Employee;
