export type Product = {
  brand: { id: number; nameKr: string; nameEn: string };
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};

export type Brand = {
  brand: { id: number; nameKr: string; nameEn: string };
  nameKr: string;
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};

export type ProductId = {
  id: number;
  name: string;
  brand: { id: number; nameKr: string; nameEn: string };
  brandId: number;
  deliveryType: string;
  imgSrc: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};
