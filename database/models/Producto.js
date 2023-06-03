const { INTEGER } = require("sequelize");

module.exports = function(sequelize, dataTypes){
    let alias= "Producto";

    let cols={
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre:{ //del producto
            type: dataTypes.STRING,
            allowNull: false
        }, 
        descripcion:{
            type: dataTypes.STRING,
            allowNull: true
        }, 
        imagen:{
            type: dataTypes.STRING,
            allowNull: true
        }, 
        precio:{
            type: dataTypes.STRING,
            allowNull: true
        }, 
        //tenemos una foreign key
        FkUsuariosId:{
            type: dataTypes.INTEGER
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }

    }
    let conf = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
    }
    const Producto = sequelize.define(alias, cols, conf);


    Producto.associate = function(models){
        //Creo las relaciones con otros modelos
        Producto.belongsTo(models.Usuario, {
            as: "owner",
            foreignKey:"FkUsuariosId" //belongsTo siempre le ponemos Fk, no id solo
        });
        Producto.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey:"id"

        })
    }

    return Producto

    }
