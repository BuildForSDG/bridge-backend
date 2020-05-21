

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING,
    nationality: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    status: DataTypes.STRING,
    bio: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};


