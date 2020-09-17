const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT * FROM gastoMensal;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    console.log(req.body);
    const { valor, mes } = req.body;

    const sql = `INSERT INTO gastoMensal
                (valor, mes)
                VALUES (?, ?);`;

    const response = await sequelize.query(sql, {
        replacements: [valor, mes],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { valor, mes, id_gastoMensal } = req.body;

    const sql = `UPDATE usuario
                SET valor = ?, mes = ?
                WHERE id_gastoMensal = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [valor, mes, id_gastoMensal],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { id_GastoMensal } = req.body;

    console.log(req.body)

    const sql = `DELETE FROM gastoMensal
                WHERE id_GastoMensal = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [id_GastoMensal],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}