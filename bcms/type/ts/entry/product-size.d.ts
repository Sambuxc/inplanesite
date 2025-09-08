import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface ProductSizeEntryMetaItem {
    title: string;
    slug: string;
}

export interface ProductSizeEntryMeta {
    en?: ProductSizeEntryMetaItem;
}

export interface ProductSizeEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductSizeEntryMeta;
    content: BCMSEntryContentParsed;
}