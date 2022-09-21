const TeamMember = require('./TeamMember');

class Intern extends TeamMember {
    constructor(name, id, email, schoolName) {
        super(name, id, email);
        this.schoolName = schoolName;
    }

    getSchoolName() {
        return this.schoolName;
    }

    getTitle() {
        return "Intern"
    }
}

module.exports = Intern;