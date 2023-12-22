import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

if (!import.meta.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!import.meta.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// get blog list
export const getBlogList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries });
};

// get blog all ids
export const getBlogAllIds = async () => {
  return await client.getAllContentIds({ endpoint: "blogs" });
};

// get blog all contents
export const getBlogAllList = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<Blog>({ endpoint: "blogs", queries });
};

// get blog detail
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

// get tag list
export const getTagList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Tag>({ endpoint: "tags", queries });
};

// get tag detail
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Tag>({
    endpoint: "tags",
    contentId,
    queries,
  });
};

// get tag all contents
export const getTagAllList = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<Tag>({ endpoint: "tags", queries });
};
