class User {
    constructor(name, email, status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }
    getUSerInfo() {
        console.log(`Name is:${this.name} status is:${this.status}`);
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    getEmail() {
        return this.email;
    }
}
class Admin extends User {
    constructor(name, email, status) {
        super(name, email, status);
    }
    getAdminInfo() {
        console.log(`${this.name} - ${this.status} `);
    }
    getEmailAccess() {
        console.log(this.getEmail());
    }
}
const user = new User('Saeed', 'Saeed@gmail.com', 'active');
user.getUSerInfo();
console.log(user.name);
console.log(user.email);
user.updateStatus('Inactive');
user.getUSerInfo();
export {};
//# sourceMappingURL=index.js.map