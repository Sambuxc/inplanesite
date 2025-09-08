import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { ProductImageGroup } from '../group/product-image';
import type { PropRichTextDataParsed } from '@thebcms/types';
import type { ProductSizeGroup } from '../group/product-size';
import type { ProductGenderEntry } from '../entry/product-gender';
import type { ProductCategoryEntry } from '../entry/product-category';
import type { ProductBrandEntry } from '../entry/product-brand';

export interface ProductEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    gallery: ProductImageGroup[];
    price: number;
    discounted_price?: number;
    description: PropRichTextDataParsed;
    sizes: ProductSizeGroup[];
    gender: ProductGenderEntry;
    categories: Array<ProductCategoryEntry>;
    brand: ProductBrandEntry;
    units_sold: number;
}

export interface ProductEntryMeta {
    en?: ProductEntryMetaItem;
}

export interface ProductEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductEntryMeta;
    content: BCMSEntryContentParsed;
}