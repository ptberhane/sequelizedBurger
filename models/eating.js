odule.exports = function(sequelize, DataTypes) {
    //create events model
    var burger = sequelize.define("burger", {
        //this model needs: eventName, eventDate, eventOfferDuration, eventDescription
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250],
            }
        },

        devoured: {
            type: DataTypes.DATE,
            allowNull: false
        },

        date_devoured: {
            type: DataTypes.DATE,
            allowNull: false,
        },

      

    }, 
    });

    return burger;
};


