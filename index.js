const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { getMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem } = require('./dal/menuItems');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Home route
app.get('/', async (req, res) => {
    try {
        const menuItems = await getMenuItems();
        res.render('index', { menuItems });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add item page
app.get('/add', (req, res) => {
    res.render('add');
});

// Edit item page
app.get('/edit/:id', async (req, res) => {
    try {
        const item = await getMenuItemById(req.params.id);
        res.render('edit', { item });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
