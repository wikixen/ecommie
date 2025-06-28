interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface Cart {
  id: number;
  userId: number;
  products: Product[];
}

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
