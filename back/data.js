
import bcrypt from 'bcryptjs'

const data = {
  users: [
  
    {
      name: 'John',
      email: 'Hadi@example.com',
      password: bcrypt.hashSync('abc123'),
      isAdmin: true,
    },
  ],
  products: [
   

    {
      name:'headphone',
      slug:'boat',
      category:'headphone',
      image:"/images/boatHeadfone.jpg",
      price:100,
      countInStock:20,
      brand:'well',
      rating:100,
      numReviews:3,
      description:'headphone',
    },
    {
      name:'Iphone',
      slug:'phone',
      category:'phone',
      image:"/images/images.jpeg",
      price:100,
      countInStock:10,
      brand:'iphone',
      rating:9,
      numReviews:6,
      description:'iphone',
    },
    {
      name:'Shirt',
      slug:'cloth',
      category:'shirt',
      image:"/images/shirts.jpeg",
      price:100,
      countInStock:10,
      brand:'iphone',
      rating:9,
      numReviews:3,
      description:'shirt',
    },
   
    {
      name:' Shoes',

      slug:'shoes',
      category:'shoes',
      image:"/images/ever3.jpg",
      price:30,
      countInStock:10,
      brand:'shoes',
      rating:9,
      numReviews:7,
      description:'shoes',
    },
    {
      name:'Red shoes',
      slug:'shoes red',
      category:'shoes',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlNQ13WnapTT7rxdhCSbVFSoujTJo4TJYzg&usqp=CAU",
      price:100,
      countInStock:10,
      brand:'cloth',
      rating:9,
      numReviews:8,
      description:'T-branded',
    },
    {name:'E-1',
  slug:'e-1',
  category:'cloth',
  image:"/images/ever1.jpg",
  price:70,
  countInStock:12,
  brand:'ever',
  rating:4,
  numReviews:5,
  description:'T-shirt'
  },
  {name:'E-2',
  slug:'e-2',
  category:'cloth',
  image:"/images/ever2.jpg",
  price:70,
  countInStock:12,
  brand:'ever',
  rating:4,
  numReviews:5,
  description:'T-shirt'
  },
  {name:'E-3',
  slug:'e-3',
  category:'cloth',
  image:"/images/ever3.jpg",
  price:70,
  countInStock:12,
  brand:'ever',
  rating:4,
  numReviews:5,
  description:'T-shirt'
  },
  {name:'E-4',
  slug:'e-4',
  category:'cloth',
  image:"/images/ever4.jpg",
  price:70,
  countInStock:12,
  brand:'ever',
  rating:4,
  numReviews:5,
  description:'T-shirt'
  },
  {
    name:'E-5',
    slug:'e-5',
    category:'cloth',
    image:"/images/ever5.jpg",
    price:20,
    countInStock:100,
    brand:'clothes',
    rating:10,
    numReviews:10,
    description:'bra'
  },


  ],
};
export default data;