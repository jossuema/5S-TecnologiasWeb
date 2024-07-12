const pool = require('../database');

const getPrendas = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM prenda');
        client.release();
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getPrendaById = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM prenda WHERE id_prenda = $1', [req.params.id]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Prenda not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const insertPrenda = async (req, res) => {
    try {
        const {categoria, marca, nombre, descripcion, talla, color, precio, img} = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('INSERT INTO prenda (id_cat, id_marca, nombre_prenda, descripcion_prenda, talla_prenda, color_prenda, precio_prenda, img_prenda) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [categoria, marca, nombre, descripcion, talla, color, precio, img]);
        client.release();
        res.json({
            message: 'Prenda added successfully',
            body: {
                prenda: {nombre, descripcion, precio, stock, id_marca, id_categoria}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const updatePrenda = async (req, res) => {
    try {
        const {categoria, marca, nombre, descripcion, talla, color, precio, img} = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('UPDATE prenda SET id_cat = $1, id_marca = $2, nombre_prenda = $3, descripcion_prenda = $4, talla_prenda = $5, color_prenda = $6, precio_prenda = $7, img_prenda = $8 WHERE id_prenda = $9', [categoria, marca, nombre, descripcion, talla, color, precio, img, req.params.id]);
        client.release();
        res.json({
            message: 'Prenda updated successfully',
            body: {
                prenda: {nombre, descripcion, precio, stock, id_marca, id_categoria}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const deletePrenda = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('DELETE FROM prenda WHERE id_prenda = $1', [req.params.id]);
        client.release();
        res.json({
            message: 'Prenda deleted successfully',
            body: {
                prenda: {id}
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

module.exports = {
    getPrendas,
    getPrendaById,
    insertPrenda,
    updatePrenda,
    deletePrenda
};