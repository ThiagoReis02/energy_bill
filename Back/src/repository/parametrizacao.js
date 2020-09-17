const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT * FROM parametrizacao;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    console.log(req.body);
    const { push, email, maximo_Energia } = req.body;

    const sql = `INSERT INTO parametrizacao
                (push, email, maximo_Energia)
                VALUES (?, ?, ?);`;

    const response = await sequelize.query(sql, {
        replacements: [push, email, maximo_Energia],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { push, email, maximo_Energia, id_Parametrizacao } = req.body;

    const sql = `UPDATE usuario
                SET push = ?, email = ?, maximo_Energia = ?
                WHERE id_Parametrizacao = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [push, email, maximo_Energia, id_Parametrizacao],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { id_Usuario } = req.body;

    console.log(req.body)

    const sql = `DELETE FROM parametrizacao
                WHERE id_Parametrizacao = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [id_Parametrizacao],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}