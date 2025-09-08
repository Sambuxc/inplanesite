import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropMediaDataParsed } from '@thebcms/types';

export interface ProductCategoryEntryMetaItem {
    title: string;
    slug: string;
    gallery: PropMediaDataParsed[];
}

export interface ProductCategoryEntryMeta {
    en?: ProductCategoryEntryMetaItem;
}

export interface ProductCategoryEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: ProductCategoryEntryMeta;
    content: BCMSEntryContentParsed;
}