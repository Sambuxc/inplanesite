import type { PropMediaDataParsed } from '@thebcms/types';
import type { ProductColorEntry } from '../entry/product-color';

export interface ProductImageGroup {
    image: PropMediaDataParsed;
    color: ProductColorEntry;
}
