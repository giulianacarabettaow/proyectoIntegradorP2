module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";  // es el nombre del modelo en el controlador

    let cols={
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER},
        email:{
            type: dataTypes.STRING,
            notNull: true,
            unique: true 
        },
        nombre:{
            type: dataTypes.STRING,
            notNull: true
        },
        contr:{
            type: dataTypes.STRING,
            notNull: true
        },
        fotoDePerfil:{
            type: dataTypes.STRING,
            notNull: true
        },
        fechaDeNacimiento:{
            type: dataTypes.DATE,
            notNull: true
        },
        dni:{
            type: dataTypes.INTEGER,
            notNull: true
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    const Usuario = sequelize.define(alias, cols, config); // Usuario podria ir en minuscula como lo son la mayoria de la declaracion de variable por convención

    //relaciones con comentarios y productos
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey:"id"}),
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey:"id"})
        }

    return Usuario
}
