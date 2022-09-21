const TeamMember = require('./TeamMember');

class Manager extends TeamMember {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getTitle() {
        return "Manager"
    }
}

module.exports = Manager;