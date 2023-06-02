const { Employee } = require('../lib');

const name ="John", email="test@test.com", id=235;
const employee = new Employee(name,id,email);
describe('Employee Object Constructor', () => {
    it('Testing object', () => expect(typeof(employee)).toBe('object'));

// the getName method returns the name of the employee
    it('Testing .getName() method', () => expect(employee.getName()).toBe(name));
// the getId method returns the id of the employee
    it('Testing .getId() method', () => expect(employee.getId()).toBe(id));
// the getEmail method returns the email of the employee
    it('Testing .getEmail() method', () => expect(employee.getEmail()).toBe(email));
// the getEmail method returns the email of the employee NOT USED for Parent Class
    it('Testing .getRole() method', () => expect(employee.getRole()).toBe('Employee'));

});

