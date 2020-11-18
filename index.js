// ADD all models
const db = require ('./models');

// Create a user inside of user table
// db.user.create({
//     firstName: 'Billy',
//     lastName : 'Bob',
//     age: 40,
//     email: 'BillyBob@billybob.com'

// }).then(createdUser => {
//     console.log(createdUser.get())
// });

// Read from the users table
// db.user.findOne({
//     where: {firstName: 'Billy'}
// }).then(foundUser => {
//     console.log(foundUser.get())
// })

// Find all users you can itterate through the list given to use functions such as .get
// db.user.findAll().then(allUsers => {
//     // allUsers.forEach(User => {
//     //     console.log(User.get())
//     // });
//     console.log(allUsers)
//     // console.log(allUsers[0].get())
// })

// // Update a user You cannot change ids to an id that was already used
// db.user.update({
//     lastName: 'Bobby'
// },{
//     where: {firstName: 'Billy'}
// }).then(numRowsChange => {
//     console.log(numRowsChange);
// })

// // Delete a user
// db.user.destroy({
//     where: {id: 3}
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted)
// })