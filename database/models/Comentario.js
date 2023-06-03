module.exports = function(sequelize, dataTypes){
    let alias= "Comentario";

    let cols={
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        textoDelComentario:{
            type: dataTypes.STRING,
            allowNull: false
        },
        //tenemos dos Foreign Keys 
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
    comentario.associate = function(models){
        //Creo las relaciones con otros modelos
        //relacion con usuario
        comentario.belongsTo(models.Usuario, {
            as: "nombre",
            foreignKey:"nombre"}),
        //relacion con producto
        comentario.belongsTo(models.Producto, {
            as: "id",
            foreignKey:"id"
        })
    }
    }
