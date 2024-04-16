export interface ProductProps {
  id: number;
  name: string;
  brand: string;
  brandImage: null | File;
  brandName: string;
  brandDescription: string;
  image: null | File;
  features: string[];
  tag: string[];
  mass: string;
  price: number;
  category: string;
  code: string;
  description: string;
  created_at: Date;
}

export interface NewProductProps {
  name: string;
  brand: string;
  brandImage: null | File;
  brandDescription: string;
  image: null | File;
  features: string[];
  tag: string[];
  mass: string;
  price: number;
  category: string;
  code: string;
  description: string;
}

export interface UpdateProductProps {
  id: number;
  name: string;
  brand: string;
  brandDescription: string;
  mass: string;
  price: number;
  category: string;
  code: string;
  description: string;
  image: null | File;
  brandImage: null | File;
}
