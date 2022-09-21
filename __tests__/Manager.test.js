const Manager = require('../lib/Manager');
const manager = new Manager('chaz', '786876', 'chaz.chaz@gmail.com', '117');

test('test the constructor values for the manager object', () => {
    expect(manager.name).toBe('chaz');
    expect(manager.id).toBe('786876');
    expect(manager.email).toBe('chaz.chaz@gmail.com');
    expect(manager.officeNumber).toBe('117')
});

test('testing getName method', () => {
    expect(manager.getName()).toBe('chaz');
});

test('testing getID method', () => {
    expect(manager.getId()).Tobe('786876');
});

test('testing getEmail method', () => {
    expect(manager.getEmail()).toBe('chaz.chaz@gmail.com');
});

test('testing getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toBe('117');
});