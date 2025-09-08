import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface ProductColorEntryMetaItem {
    title: string;
    slug: string;
    hex: string;
}

export interface ProductColorEntryMeta {
    en?: ProductColorEntryMetaItem;
}

export interface ProductColorEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductColorEntryMeta;
    content: BCMSEntryContentParsed;
}