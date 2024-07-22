# QAP4

## UI Tests

# Test Cases for QAP3

## UI Tests

1. **As a Carrabas customer, I can see a web page listing all the menu items from the database.**
   - **Test Steps**:
     1. Open the homepage.
     2. Verify that the list of menu items is displayed.

2. **As a Carrabas staff member, I can see a web page that will allow me to add a new item to the menu items of the database.**
   - **Test Steps**:
     1. Open the add item page.
     2. Fill in the item details.
     3. Submit the form.
     4. Verify that the new item is added to the database.

## API Tests

1. **As a Carrabas business partner, I can fetch all the menu items from the database from a REST API. The records will be returned as JSON data.**
   - **Test Steps**:
     1. Send a GET request to `/api/menu_items`.
     2. Verify that the response contains the list of menu items.

2. **As a Carrabas staff member, I can add a new item to the menu items of the database via the REST API.**
   - **Test Steps**:
     1. Send a POST request to `/api/menu_items` with the item details.
     2. Verify that the new item is added to the database.
