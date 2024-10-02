// adminConfig.mjs
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import User from './models/User.js'; // Ensure this is using ES module export
import Product from './models/Product.js'; // Ensure this is using ES module export
import Order from './models/Order.js'; // Ensure this is using ES module export

// Register the AdminJS Mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose);

// Initialize AdminJS with your resources
const adminJs = new AdminJS({
  resources: [
    { resource: User, options: { parent: { name: 'User Management' } } },
    { resource: Product, options: { parent: { name: 'Product Management' } } },
    { resource: Order, options: { parent: { name: 'Order Management' } } },
  ],
  rootPath: '/admin',
});

// Create the AdminJS router
const adminRouter = AdminJSExpress.buildRouter(adminJs);

// Export the router
export { adminRouter };
