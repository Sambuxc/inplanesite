import type { ProductSizeEntry } from '../entry/product-size';

export interface ProductSizeGroup {
    size: ProductSizeEntry;
    available?: boolean;
}
