export interface ProductProps {
  id: number;
  name: string;
  brand: string;
  brandImage: string | File;
  brandName: string;
  brandDescription: string;
  image: string | File;
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
  brandImage: string | File;
  brandDescription: string;
  image: string | File;
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
  image: string | File;
  brandImage: string | File;
}
