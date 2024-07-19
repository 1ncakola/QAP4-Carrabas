const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Carrabas',
    password: 'Caliente1084@',
    port: 5432,
});

const getMenuItems = async () => {
    const res = await pool.query('SELECT * FROM menu_items');
    return res.rows;
};

const getMenuItemById = async (id) => {
    const res = await pool.query('SELECT * FROM menu_items WHERE id = $1', [id]);
    return res.rows[0];
};

const createMenuItem = async (item) => {
    const { name, description, price, available } = item;
    const res = await pool.query('INSERT INTO menu_items (name, description, price, available) VALUES ($1, $2, $3, $4) RETURNING *', [name, description, price, available]);
    return res.rows[0];
};

const updateMenuItem = async (id, item) => {
    const { name, description, price, available } = item;
    const res = await pool.query('UPDATE menu_items SET name = $1, description = $2, price = $3, available = $4 WHERE id = $5 RETURNING *', [name, description, price, available, id]);
    return res.rows[0];
};

const deleteMenuItem = async (id) => {
    await pool.query('DELETE FROM menu_items WHERE id = $1', [id]);
};

module.exports = {
    getMenuItems,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
};
