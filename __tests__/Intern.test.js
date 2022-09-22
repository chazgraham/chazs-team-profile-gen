const Intern = require('../lib/Intern');
const intern = new Intern ('chaz', '786876', 'chaz.chaz@gmail.com', 'utsa')

test('tests to see if pulling constuctor values', () => {
    expect(intern.name).toBe('chaz');
    expect(intern.id).toBe('786876');
    expect(intern.email).toBe('chaz.chaz@gmail.com');
    expect(intern.school).toBe('utsa');
});

test('testing .get methods', () => {
    expect(intern.getName()).toBe('chaz');
    expect(intern.getId()).toBe('786876');
    expect(intern.getEmail()).toBe('chaz.chaz@gmail.com');
    expect(intern.getSchool()).toBe('utsa');
    expect(intern.getTitle()).toBe('Intern');
});
