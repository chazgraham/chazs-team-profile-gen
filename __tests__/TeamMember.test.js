const TeamMember = require('../lib/TeamMember')
const teamMember = new TeamMember('chaz', '768876', 'chaz.chaz@gmail.com');

test('testing the constructor values for the teamMembers object', () => {
    expect(teamMember.name).toBe('chaz');
    expect(teamMember.id).toBe('768876');
    expect(teamMember.email).toBe('chaz.chaz@gmail.com');
});

test('testing if we can get the values from .get methods', () => {
    expect(teamMember.getName()).toBe('chaz');
    expect(teamMember.getId()).toBe('768876');
    expect(teamMember.getEmail()).toBe('chaz.chaz@gmail.com');
});


