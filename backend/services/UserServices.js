const db = require('../database/db')

module.exports.getAllUsers = async () => {
    const [records] = await db.query('SELECT * FROM users')
    return records;
}

module.exports.getUserById = async (id) => {
    const [[records]] = await db.query("SELECT * FROM users WHERE UserID = ?", [id])
    return records;
}

module.exports.deleteUserById = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM users WHERE UserID = ?", [id])
    return affectedRows;
}

module.exports.addOrEditUser = async (obj, UserID = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_user_add_or_edit(?,?,?,?,?,?,?)",
        [UserID, obj.UserFName, obj.UserLName, obj.Birthday, obj.Age, obj.UserEmail, obj.UserPassword])
    return affectedRows;
}