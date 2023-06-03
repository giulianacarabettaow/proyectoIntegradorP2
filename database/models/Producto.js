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
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        deleted_at:{
            type: dataTypes.DATE
        }

    }
    let conf = {
        //Si las tablas tienen los campos de auditoria con un nombre diferente a createdAt y updatedAt se lo indicamos así 👇
        createdAt: "created_at", //Le dice a la tabla cómo se llama el campo de auditoría en la tabla de la base de datos.
        updatedAt: "updated_at" //Le dice a la tabla cómo se llama el campo de auditoría en la tabla de la base de datos.
    }
    producto.associate = function(models){
        //Creo las relaciones con otros modelos
        producto.belongsTo(models.Usuario, {
            as: "id",
            foreignKey:"id"
        })
    }
    }
