export interface Item {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    image?: string;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export const productss: Item[] = [
    {
      id: 1,
      name: "Armchair Morgen",
      category: "category 1",
      image: "../../assets/chair1.jpg",
      price: 100,
    },
    {
      id: 2,
      name: "Bright bowl",
      category: "category 2",
      image: "../../assets/kitchen1.jpg",
      price: 200,
    },
    {
      id: 3,
      name: "Product 2",
      category: "category 2",
      image: "../../assets/chair3.jpg",
      price: 200,
    },
    {
      id: 4,
      name: "Product 2",
      category: "category 2",
      image: "../../assets/chair2.jpg",
      price: 200,
    },
    {
      id: 5,
      name: "Product 3",
      category: "category 3",
      image: "../../assets/table2.jpg",
      price: 300,
    },
    {
      id: 6,
      name: "Product 6",
      category: "category 3",
      image: "../../assets/chair1.jpg",
      price: 600,
    },
  ];
  