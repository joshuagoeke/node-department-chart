const { Intern } = require('../lib');

const name = "Mike", email="junior@Zissou.edu", id = 747, school = 'Zissou Academy';
const intern = new Intern(name, id, email, school);
// .getRole() method should return 'Intern' for the Intern class
test('Testing .getRole() method', () => expect(intern.getRole()).toBe('Intern'));
// .getSchool() method should return the school string
test('Testing .getSchool() method', () => expect(intern.getSchool()).toBe(school));