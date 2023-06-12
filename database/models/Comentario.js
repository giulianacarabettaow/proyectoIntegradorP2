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
         FkUsuariosId:{
            type: dataTypes.INTEGER
         },
         FkProductosId:{
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
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
    }
    const Comentario = sequelize.define(alias, cols, config);
        // a Comentario (que le pasamos el sequelize), le agregamos una propiedad associate con las relaciones dentro
    Comentario.associate = function(models){
        //Creo las relaciones con otros modelos
        //relacion con usuario
        Comentario.belongsTo(models.Usuario, {
            as: "comentador",
            foreignKey:"FkUsuariosId"}),
        //relacion con producto
        Comentario.belongsTo(models.Producto, {
            as: "productoComentado",
            foreignKey:"FkProductosId"
        })
    }

    return Comentario
    }
