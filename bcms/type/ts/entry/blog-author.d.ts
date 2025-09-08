import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface BlogAuthorEntryMetaItem {
    title: string;
    slug: string;
}

export interface BlogAuthorEntryMeta {
    en?: BlogAuthorEntryMetaItem;
}

export interface BlogAuthorEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: BlogAuthorEntryMeta;
    content: BCMSEntryContentParsed;
}