module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols={
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER},
        email:{
            type: dataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false
        },
        contr:{
            type: dataTypes.STRING,
            allowNull: false
        },
        fotoDePerfil:{
            type: dataTypes.STRING,
            allowNull: true
        },
        fechaDeNacimiento:{
            type: dataTypes.DATE,
            allowNull: false
        },
        dni:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
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
}
