const Intern = require('../lib/Intern');
const intern = new Intern ('chaz', '786876', 'chaz.chaz@gmail.com', 'utsa')

test('tests to see if pulling constuctor values', () => {
    expect(intern.name).toBe('chaz');
    expect(intern.id).toBe('786876');
    expect(intern.email).toBe('chaz.chaz@gmail.com');
    expect(intern.schoolName).toBe('utsa');
});

test('testing getName method', () => {
    expect(intern.getName()).toBe('chaz');
});

test('testing getId method', () => {
    expect(intern.getId()).toBe('786876');
});

test('testing getEmail mehtod', () => {
    expect(intern.getEmail()).toBe('chaz.chaz@gmail.com');
});

test('testing getSChoolName method', () => {
    expect(intern.getSchoolName()).toBe('utsa')
})