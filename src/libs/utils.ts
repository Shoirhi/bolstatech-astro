import { load } from "cheerio";

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const year = utcDate.getFullYear();
  const month = String(utcDate.getMonth() + 1).padStart(2, "0");
  const day = String(utcDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}年${month}月${day}日`;
  return formattedDate;
};

export const adjustImageSizeAndFormat = (blogContent: string) => {
  const $ = load(blogContent);

  $("img").each((_, img) => {
    $(img).attr("src", $(img).attr("src") + "?fit=clip&w=560&fm=webp");
    $(img).attr("width", "560");
    $(img).attr("height", "560");
  });

  return $.html();
};

type TocItem = {
  id: string;
  text: string;
};