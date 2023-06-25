import bcrypt from 'bcryptjs'


const data = {
  users: [
    {
      name: 'Muneeb',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'Hadi@example.com',
      password: bcrypt.hashSync('123476'),
      isAdmin: false,
    },
  ],
  products: [
    {
     
      name: 'Mutton',
      slug: 'mutton',
      category: 'Food',
      image: '/images/ca1.jpg',
      price: 65,
      countInStock: 500,
      brand: 'Self',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality ',
    },
    {
     
      name: 'Biryani',
      slug: 'biryani',
      category: 'Food',
      image: '/images/ce1.jpg',
      price: 65,
      countInStock: 500,
      brand: 'Self',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality ',
    },
   
    {
   
      name: ' Dall-Cahaawal',
      slug: 'dall',
      category: 'Food',
      image: '/images/d3.jpg',
      price: 250,
      countInStock: 2000,
   
      brand: 'Self',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Dall Makhni',
      slug: 'makhni',
      category: 'food',
      image: '/images/dd1.jpg',
      price: 25,
      countInStock: 1500,
      brand: 'self',
      rating: '9.5',
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Dalleem',
      slug: 'daleem',
      category: 'food',
      image: '/images/dd2.jpg',
      price: 25,
      countInStock: 1500,
      brand: 'self',
      rating: '9.5',
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Mix sabzi',
      slug: 'mix',
      category: 'food',
      image: '/images/sa1.jpg',
      price: 25,
      countInStock: 1500,
      brand: 'self',
      rating: '9.5',
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Raita',
      slug: 'raita',
      category: 'food',
      image: '/images/r2.jpg',
      price: 25,
      countInStock: 1500,
      brand: 'self',
      rating: '9.5',
      numReviews: 14,
      description: 'high quality product',
    },

    {
      name:'headphone',
      slug:'boat',
      category:'phone',
      image:"/images/boatHeadfone.jpg",
      price:100,
      countInStock:20,
      brand:'well',
      rating:100,
      numReviews:500,
      description:'headphone',
    }
  ],
};
export default data;