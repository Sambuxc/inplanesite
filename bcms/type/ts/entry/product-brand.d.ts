import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface ProductBrandEntryMetaItem {
    title: string;
    slug: string;
}

export interface ProductBrandEntryMeta {
    en?: ProductBrandEntryMetaItem;
}

export interface ProductBrandEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductBrandEntryMeta;
    content: BCMSEntryContentParsed;
}