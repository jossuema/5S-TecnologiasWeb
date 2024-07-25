const pool = require('../database');

const getHeroes = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM heroes');
        client.release();
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getHeroById = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM heroes WHERE id_hero = $1', [req.params.id]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Hero not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const getHeroByName = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('SELECT * FROM heroes WHERE nombre_hero LIKE $1', [`%${req.params.nombre}%`]);
        client.release();
        if (response.rows.length === 0) {
            res.status(404).send('Hero not found');
        } else {
            res.json(response.rows);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const insertHero = async (req, res) => {
    try {
        const { nombre, bio, slug, aparicion, casa} = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('INSERT INTO heroes ( nombre_hero, bio_hero, slug_hero, aparicion_hero, casa_hero) VALUES ($1, $2, $3, $4, $5, $6)', [ nombre, bio, slug, aparicion, casa]);
        client.release();
        res.json({
            message: 'Hero added successfully',
            body: {
                hero: { nombre, bio, slug, aparicion, casa }
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const deleteHero = async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('DELETE FROM heroes WHERE id_hero = $1', [req.params.id]);
        client.release();
        res.json(`Hero ${req.params.id} deleted successfully`);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}

const updateHero = async (req, res) => {
    try {
        const { nombre, bio, slug, aparicion, casa } = req.body;
        const client = await pool.connect();
        console.log('Connected to the database');
        const response = await pool.query('UPDATE heroes SET nombre_hero = $1, bio_hero = $2, slug_hero = $3, aparicion_hero = $4, casa_hero = $5 WHERE id_hero = $6', [nombre, bio, slug, aparicion, casa, req.params.id]);
        client.release();
        res.json(`Hero ${req.params.id} updated successfully`);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}