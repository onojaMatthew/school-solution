// You can use an $or query to achieve the desired result.

// User.find({
//     $or: [
//         {schoolName: regex},
//         {city: regex},
//         {schoolRepresentativeName: regex},
//         {schoolRepresentativeTutorMentor: regex}
//     ]
// }, function (err, users) {
//     res.render('dashboard/index.hbs', {
//         pageTitle: 'Dashboard',
//         total: users.length,
//         users: users
//     });
// });