import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { PropValueDateData, PropMediaDataParsed } from '@thebcms/types';
import type { BlogAuthorEntry } from '../entry/blog-author';

export interface BlogEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    date: PropValueDateData;
    author: BlogAuthorEntry;
    media_image: PropMediaDataParsed;
}

export interface BlogEntryMeta {
    en?: BlogEntryMetaItem;
}

export interface BlogEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: BlogEntryMeta;
    content: BCMSEntryContentParsed;
}