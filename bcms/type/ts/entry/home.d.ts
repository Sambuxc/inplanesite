import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { SeoGroup } from '../group/seo';
import type { PropMediaDataParsed } from '@thebcms/types';

export interface HomeEntryMetaItem {
    title: string;
    slug: string;
    seo?: SeoGroup;
    hero_title: string;
    hero_description: string;
    hero_cover_image: PropMediaDataParsed;
    cta_title: string;
    cta_description: string;
    cta_label: string;
    cta_link: string;
    cta_cover_image: PropMediaDataParsed;
}

export interface HomeEntryMeta {
    en?: HomeEntryMetaItem;
}

export interface HomeEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: HomeEntryMeta;
    content: BCMSEntryContentParsed;
}