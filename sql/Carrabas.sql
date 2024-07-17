CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    available BOOLEAN DEFAULT TRUE
);

SELECT * FROM menu_items;

INSERT INTO menu_items (name, description, price, available) VALUES
('Spaghetti Bolognese', 'Classic Italian pasta dish', 12.99, true),
('Caesar Salad', 'Fresh romaine lettuce with Caesar dressing', 8.99, true);

UPDATE menu_items SET price = 13.99 WHERE name = 'Spaghetti Bolognese';

DELETE FROM menu_items WHERE id = 1;
