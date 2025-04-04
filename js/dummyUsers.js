const dummyUsers = [
    {
        name: "Sumit Kumar",
        class: "12-A",
        email: "sumitkumar042006@gmail.com",
        password: "sumit@10042006",
        mobile: "9229923377"
    },
    {
        name: "pritish kumar",
        class: "12-A",
        email: "pritishoffical123@gmail.com.com",
        password: "password456",
        mobile: "9876543210"
    }
];

function validateUser(email, password) {
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    return user ? { success: true, user } : { success: false, message: "Invalid credentials" };
}

function registerUser(userData) {
    if (dummyUsers.some(u => u.email === userData.email)) {
        return { success: false, message: "Email already registered" };
    }
    dummyUsers.push(userData);
    return { success: true, user: userData };
}
