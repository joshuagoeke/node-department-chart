const { Manager } = require('../lib');

const name = "Michael Scott", email="Michael99@hotmail.com", id = 7, officeNumber = '11';
const manager = new Manager(name, id, email, officeNumber);

describe("Manager Tests:", () => {
// .getRole() method should return 'Manager' for the Manager class
  it('Testing .getRole() method', () => expect(manager.getRole()).toBe('Manager'));
// .getOfficeNumber() method should return officeNumber 
  it('Testing .getOfficeNumber() method', () => expect(manager.getOfficeNumber()).toBe(officeNumber));  
});
