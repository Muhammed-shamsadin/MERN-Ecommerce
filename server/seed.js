// seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path as necessary

const seedAdmin = async () => {
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create an admin user
    const adminUser = {
        name: 'Admin Name',
        email: 'admin@example.com', // Change this to a unique email
        password: 'adminPassword', // Change this to a secure password
        role: 'admin', // Ensure your User model supports a 'role' field
    };

    try {
        // Check if the admin already exists
        const existingAdmin = await User.findOne({ email: adminUser.email });

        if (existingAdmin) {
            console.log('Admin already exists.');
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(adminUser.password, 10);
        adminUser.password = hashedPassword;

        // Create the admin user
        const user = await User.create(adminUser);
        console.log('Admin user created:', user);
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};

seedAdmin();
