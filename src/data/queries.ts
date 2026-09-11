import { PRODUCTS } from '@/data/catalogue';
import type { Product } from '@/data/types';

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export function getProductByBarcode(barcode: string): Product | undefined {
  const normalised = barcode.replace(/\s/g, '');
  return PRODUCTS.find((product) => product.barcode === normalised);
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids
    .map((id) => getProductById(id))
    .filter((product): product is Product => product !== undefined);
}

function haystack(product: Product): string {
  const actives = product.actives.map((active) => `${active.name.en} ${active.name.fr}`).join(' ');
  const category =
    product.category.kind === 'biocide'
      ? `biocide ${product.category.productType}`
      : `ppp ${product.category.use} plant protection phytopharmaceutique`;

  return [
    product.barcode,
    product.name.en,
    product.name.fr,
    product.brand.en,
    product.brand.fr,
    actives,
    category,
  ]
    .join(' ')
    .toLowerCase();
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return [...PRODUCTS];
  }

  return PRODUCTS.filter((product) => haystack(product).includes(q));
}
