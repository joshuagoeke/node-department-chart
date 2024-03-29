const { Engineer } = require('../lib');

const name = "Constantine", email="go@way.com", id = 747, gitHub = 'constip';
const engineer = new Engineer(name, id, email, gitHub);

describe('Engineer Tests:', () =>{
//getRole() should return 'Engineer' for Engineer class
    it('Testing .getRole() method', () => expect(engineer.getRole()).toBe('Engineer'));
//getGitHub() method should return 'GitHub handle string' for Engineer class
    it('Testing .getGitHub() method', () => expect(engineer.getGitHub()).toBe(gitHub));
});
