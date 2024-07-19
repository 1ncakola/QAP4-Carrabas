const express = require('express');
const router = express.Router();
const { getMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem } = require('../dal/menuItems');

router.get('/menu_items', async (req, res) => {
    try {
        const items = await getMenuItems();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/menu_items', async (req, res) => {
    try {
        const newItem = await createMenuItem(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/menu_items/:id', async (req, res) => {
    try {
        const updatedItem = await updateMenuItem(req.params.id, req.body);
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.patch('/menu_items/:id', async (req, res) => {
    try {
        const updatedItem = await updateMenuItem(req.params.id, req.body);
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/menu_items/:id', async (req, res) => {
    try {
        await deleteMenuItem(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
