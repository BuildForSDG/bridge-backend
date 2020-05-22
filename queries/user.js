const db = require('../models');

 const { User,} = db;
  exports.getUserById = id => User.findOne({
    where: { id },
  });
 
  exports.getUserByEmail = email => User.findOne({
    where: { email },
  });