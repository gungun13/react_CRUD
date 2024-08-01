import { user } from "../model/user";

export const userOperation = {
    users: [],

    addUser(name, email, phoneNo) {
        const userObject = new user(name, email, phoneNo);
        this.users.push(userObject);
        return userObject;
    },

    getUsers() {
        return this.users;
    },

    deleteUser(index) {
        if (index >= 0 && index < this.users.length) {
            this.users.splice(index, 1); // Remove user at the given index
        }
    },
};



