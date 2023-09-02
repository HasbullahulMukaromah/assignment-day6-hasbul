let user = [
    { id: 1, name: 'Parjo', password: 'parjo123' },
    { id: 2, name: 'Mamat', password: 'mamat007' },
    { id: 1, name: 'Salimen', password: 'salimen98' }
];

function getAllUsers() {
    return user;
}

function addUser(user) {
    const newUser = {
        id: user.length + 1,
        ...user
    };
    users.push(newUser);
    return newUser;
}

function updateUser(id, updatedUser) {
    const userIndex = user.findIndex(b => b.id === id);
    if (userIndex === -1) return null;

    user[userIndex] = { id, ...updatedUser };
    return user[userIndex];
}

function deleteUser(id) {
    const userIndex = user.findIndex(b => b.id === id);
    if (userIndex === -1) return false;

    user.splice(userIndex, 1);
    return true;
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};