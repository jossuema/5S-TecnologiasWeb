const pool = require('../database');

const getCategorias = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM categoria');
        client.release();
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getCategoriaById = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM categoria WHERE id_cat = $1', [req.params.id]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Categoria not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const insertCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('INSERT INTO categoria (nombre_cat, descripcion_cat) VALUES ($1, $2)', [nombre, descripcion]);
        client.release();
        res.json({
            message: 'Categoria added successfully',
            body: {
                categoria: {nombre}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const updateCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('UPDATE categoria SET nombre_cat = $1, descripcion_cat = $2 WHERE id_cat = $3', [nombre, descripcion, req.params.id]);
        client.release();
        res.json({
            message: 'Categoria updated successfully',
            body: {
                categoria: {nombre, descripcion}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('DELETE FROM categoria WHERE id_cat = $1', [req.params.id]);
        client.release();
        res.json({
            message: 'Categoria deleted successfully',
            body: {
                categoria: {id: req.params.id}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

module.exports = {
    getCategorias,
    getCategoriaById,
    insertCategoria,
    updateCategoria,
    deleteCategoria
}