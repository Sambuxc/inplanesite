import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface ProductGenderEntryMetaItem {
    title: string;
    slug: string;
}

export interface ProductGenderEntryMeta {
    en?: ProductGenderEntryMetaItem;
}

export interface ProductGenderEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductGenderEntryMeta;
    content: BCMSEntryContentParsed;
}