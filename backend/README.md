# BACKEND

To start and test the Ruby on Rails backend for the FoodieSnap application, follow these steps:

---

### **1. Navigate to the Backend Directory**
```bash
cd backend
```

---

### **2. Install Dependencies**
Make sure you have Ruby (3.1.2) and Bundler installed. Then run:
```bash
bundle install
```
This installs all required gems listed in the `Gemfile`.

---

### **3. Set Up the Database**
```bash
rails db:create      # Creates the database
rails db:migrate     # Runs migrations
rails db:seed        # Loads seed data (sample photos)
```

- **Verify seed data**:  
  You can check if data was loaded correctly by running:
  ```bash
  rails console
  > Photo.count
  ```
  (Should return the number of seeded photos.)

---

### **4. Start the Rails Server**
```bash
rails server -p 3000
```
- The API will run at:  
  **`http://localhost:3000`**

---

### **5. Test API Endpoints**
Use **Postman**, **cURL**, or a browser to test the endpoints:

#### **1. List All Photos**
```bash
curl http://localhost:3000/photos
```
- **Expected Response**: Array of all photos in JSON format.

#### **2. Get Photo Details**
```bash
curl http://localhost:3000/photos/1
```
- **Expected Response**: Details of the photo with ID 1.

#### **3. List Categories**
```bash
curl http://localhost:3000/categories
```
- **Expected Response**: Array of unique categories (e.g., `["Breakfast", "Lunch"]`).

#### **4. Filter Photos by Category**
```bash
curl http://localhost:3000/category/Breakfast
```
- **Expected Response**: All photos in the "Breakfast" category.

---

### **6. Verify CORS (Cross-Origin Requests)**
The backend is configured to allow requests from any origin (for development). Test with:
```bash
curl -I http://localhost:3000/photos
```
- **Check Headers**:  
  Response should include:
  ```
  Access-Control-Allow-Origin: *
  ```

---

### **7. Connect the Mobile App**
Update the `API_BASE_URL` in the React Native app (`mobile/screens/*.js`) to:
```javascript
const API_BASE_URL = 'http://YOUR_LOCAL_IP:3000';  // e.g., 'http://192.168.1.5:3000'
```
- **Why?**  
  Android emulator/iOS simulator cannot access `localhost` directly. Use your machine's local IP address.

---

### **Troubleshooting**
1. **Port Conflict?**  
   Change the port:
   ```bash
   rails server -p 3001
   ```

2. **Missing Dependencies?**  
   Ensure Ruby and Node.js are installed:
   ```bash
   ruby -v  # Should show 3.1.2
   node -v  # Required for some Rails dependencies
   ```

3. **Database Issues?**  
   Reset the database:
   ```bash
   rails db:reset
   rails db:seed
   ```

4. **Solution: Recreate the Database Properly**

   1.  **First, check if you have a migration file**:
       
       bash
       
       ls db/migrate/
       
       *   You should see at least one file like `XXXXXXXXXXXXXX_create_photos.rb`
           
   2.  **If no migration exists**, create one:
       
       bash
       
       rails generate migration CreatePhotos title:string image\_url:string category:string description:text likes:integer
       
   3.  **Reset your database completely** (run these commands one by one):
       
       bash
       
       rails db:drop           \# Drops existing database
       rails db:create         \# Creates new database
       rails db:migrate        \# Runs all migrations
       rails db:seed           \# Loads seed data
       
   4.  **Verify the table was created**:
       
       bash
       
       rails dbconsole
       .tables                 \# Should list 'photos'
       .schema photos          \# Shows table structure
       .quit
       

   ### Alternative Quick Fix

   If you're still having issues, try this nuclear option:

   bash

   rm \-rf db/\*.sqlite3 db/schema.rb  \# Remove all database files
   rails db:setup                    \# Creates DB, loads schema, seeds data

---

### **Next Steps**
1. Start the Expo app (`mobile` directory):
   ```bash
   npm start
   ```
2. Scan the QR code with the **Expo Go** app (Android/iOS) or run on an emulator.

The backend is now ready to serve data to your mobile app! 🚀
