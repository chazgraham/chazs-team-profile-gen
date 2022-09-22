const Engineer = require('../lib/Engineer');
const engineer = new Engineer('chaz', '786876', 'chaz.chaz@gmail.com', 'chazgraham')

test('testing the pulled constructor values for the engineer objective', () => {
    expect(engineer.name).toBe('chaz');
    expect(engineer.id).toBe('786876');
    expect(engineer.email).toBe('chaz.chaz@gmail.com');
    expect(engineer.github).toBe('chazgraham');
});

test('testing .get methods', () => {
    expect(engineer.getName()).toBe('chaz');
    expect(engineer.getId()).toBe('786876');
    expect(engineer.getEmail()).toBe('chaz.chaz@gmail.com');
    expect(engineer.getGithub()).toBe('chazgraham');
    expect(engineer.getTitle()).toBe('Engineer');
});



