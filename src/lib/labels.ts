import type { MessageKey } from '@/i18n';
import type { AuthorisationStatus, Product } from '@/data/types';

export function productTypeKey(product: Product): MessageKey {
  if (product.category.kind === 'biocide') {
    return product.category.productType === 'PT18' ? 'category.PT18' : 'category.PT19';
  }
  switch (product.category.use) {
    case 'herbicide':
      return 'category.herbicide';
    case 'fungicide':
      return 'category.fungicide';
    case 'insecticide':
      return 'category.insecticide';
    case 'molluscicide':
      return 'category.molluscicide';
  }
}

export function kindKey(product: Product): MessageKey {
  return product.category.kind === 'biocide' ? 'category.biocide' : 'category.ppp';
}

export function statusKey(status: AuthorisationStatus): MessageKey {
  switch (status) {
    case 'authorised_amateur':
      return 'status.authorised_amateur';
    case 'restricted_amateur':
      return 'status.restricted_amateur';
    case 'withdrawn':
      return 'status.withdrawn';
    case 'not_authorised':
      return 'status.not_authorised';
    case 'unknown':
      return 'status.unknown';
  }
}

export function scoreBandKey(band: 'green' | 'yellow' | 'orange' | 'red'): MessageKey {
  switch (band) {
    case 'green':
      return 'score.green';
    case 'yellow':
      return 'score.yellow';
    case 'orange':
      return 'score.orange';
    case 'red':
      return 'score.red';
  }
}
