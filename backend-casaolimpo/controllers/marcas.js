const pool = require('../database');

const getMarcas = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM marca');
        client.release();
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getMarcasById = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM marca WHERE id_marca = $1', [req.params.id]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Marca not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const insertMarca = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('INSERT INTO marca (nombre_marca, descripcion_marca) VALUES ($1, $2)', [nombre, descripcion]);
        client.release();
        res.json({
            message: 'Marca added successfully',
            body: {
                marca: {nombre}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const updateMarca = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('UPDATE marca SET nombre_marca = $1, descripcion_marca = $2 WHERE id_marca = $3', [nombre, descripcion, req.params.id]);
        client.release();
        res.json({
            message: 'Marca updated successfully',
            body: {
                marca: {nombre}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const deleteMarca = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('DELETE FROM marca WHERE id_marca = $1', [req.params.id]);
        client.release();
        res.json({
            message: 'Marca deleted successfully',
            body: {
                marca: {id: req.params.id}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

module.exports = {
    getMarcas,
    getMarcasById,
    insertMarca,
    updateMarca,
    deleteMarca
}
