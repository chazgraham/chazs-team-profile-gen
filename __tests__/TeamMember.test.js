const TeamMember = require('../lib/TeamMember')
const teamMember = new TeamMember('chaz', '768876', 'chaz.chaz@gmail.com');

test('testing the constructor values for the teamMembers object', () => {
    expect(teamMember.name).toBe('chaz');
    expect(teamMember.id).toBe('768876');
    expect(teamMember.email).toBe('chaz.chaz@gmail.com');
});

test('testing if we can get the name from getName method', () => {
    expect(teamMember.getName()).toBe('chaz');
});

test('testing if we can get the ID from the getId method', () => {
    expect(teamMember.getId()).toBe('768876');
});

test('testing if we get can get the email from the getEmail method', () => {
    expect(teamMember.getEmail()).toBe('chaz.chaz@gmail.com')
});

