const Engineer = require('../lib/Engineer');
const engineer = new Engineer('chaz', '786876', 'chaz.chaz@gmail.com', 'chazgraham')

test('testing the pulled constructor values for the engineer objective', () => {
    expect(engineer.name).toBe('chaz');
    expect(engineer.id).toBe('786876');
    expect(engineer.email).toBe('chaz.chaz@gmail.com');
    expect(engineer.github).toBe('chazgraham');
});

test('testing getName method', () => {
    expect(engineer.getName()).toBe('chaz');
});

test('testing getId method', () => {
    expect(engineer.getId()).toBe('786876');
});

test('testing getEmail method', () => {
    expect(engineer.getEmail()).toBe('chaz.chaz@gmail.com');
});

test('testing getGithub method', () => {
    expect(engineer.getGithub()).toBe('chazgraham');
});

test('testing getTile method', () => {
    expect(engineer.getTitle()).toBe('Engineer')
})