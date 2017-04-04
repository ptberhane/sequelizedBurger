'use strict';
//use umodel export to
module.exports = function(sequelize, DataTypes) {
    //create events model
    var burgers = sequelize.define("burgers", {
        //this model needs: eventName, eventDate, eventOfferDuration, eventDescription
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250],
            }
        },

        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        },

        devouredDate: {
            type: DataTypes.DATE,
            allowNull: false
        },

  
    return burgers;
};
