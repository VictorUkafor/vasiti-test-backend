'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    completed: DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};