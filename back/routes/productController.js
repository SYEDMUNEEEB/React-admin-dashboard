const Product = require('../models/Product');

const ProductController = {
  uploadProduct: async (req, res) => {
    try {
      const { title, description, price } = req.body;
      const imagePath = req.file.path;

      const newProduct = new Product({
        title,
        description,
        price,
        imagePath,
      });

      await newProduct.save();

      res.status(201).json({ message: 'Product uploaded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload product' });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  updateProduct: async (req, res) => {
    // Implement updating a product based on productId
  },

  deleteProduct: async (req, res) => {
    // Implement deleting a product based on productId
  },
};

module.exports = ProductController;
