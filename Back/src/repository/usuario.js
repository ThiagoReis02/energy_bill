const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT * FROM usuario;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    console.log(req.body);
    const { nome, email, senha, dt_nascimento } = req.body;

    const sql = `INSERT INTO usuario
                (nome, email, senha, dt_nascimento)
                VALUES (?, ?, ?, ?);`;

    const response = await sequelize.query(sql, {
        replacements: [nome, email, senha, dt_nascimento],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { nome, email, senha, id_Usuario } = req.body;

    const sql = `UPDATE usuario
                SET nome = ?, email = ?, senha = ?
                WHERE id_Usuario = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [nome, email, senha, id_Usuario],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { id_Usuario } = req.body;

    console.log(req.body)

    const sql = `DELETE FROM usuario
                WHERE id_Usuario = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [id_Usuario],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}