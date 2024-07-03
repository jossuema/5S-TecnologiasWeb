
const pool = require('../database');

const getActores = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM actores');
        client.release();
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};

const getActorById = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM actores WHERE id_act = $1', [req.params.id]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Actor not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getActorByName = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM actores WHERE nom_act LIKE $1', [`%${req.params.nombre}%`]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Actor not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const insertActor = async (req, res) => {
    try {
        const { codigo, nombre, nombre_rea, fecha_nac, fecha_mue, nacionalidad } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('INSERT INTO actores (cod_act, nom_act, nom_rea_act, fec_nac_act, fec_mue_act, naciona_act) VALUES ($1, $2, $3, $4, $5, $6)', [codigo, nombre, nombre_rea, fecha_nac, fecha_mue, nacionalidad]);
        client.release();
        res.json({
            message: 'Actor added successfully',
            body: {
                actor: {codigo, nombre, nombre_rea, fecha_nac, fecha_mue, nacionalidad}
            }
        });
    }catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const deleteActor = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('DELETE FROM actores WHERE cod_act = $1', [req.params.id]);
        client.release();
        res.json(`Actor ${req.params.id} deleted successfully`);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

module.exports = {getActores, getActorById, getActorByName, insertActor, deleteActor};