"use client";

import { Blog } from "entity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { OpenEyeIcon, TagIcon } from "@/components/Icons";
import Typography from "@/components/Typography";
import { getPlainText } from "@/utils/html";

type TrendingCardProps = {
  blog: Blog;
};

const TrendingCard = ({ blog }: TrendingCardProps) => {
  const [plainText, setPlainText] = React.useState<string | null>("");
  const { thumbnailPath, title, slug, content, createdAt, user, tags, views } = blog;
  const tagList = React.useMemo(() => tags.map((tag) => tag.title).join(", "), [tags]);

  React.useEffect(() => {
    setPlainText(getPlainText(content));
  }, []);

  return (
    <Link href={`/blogs/${slug}`} className="w-full h-full grid lg:grid-cols-6 lg:gap-[3rem]">
      <div className="lg:col-span-2 max-h-[20rem]">
        <Image src={thumbnailPath} alt={`Thumbnail of ${title}`} width={400} height={400} className="w-full" />
      </div>

      <div className="lg:col-span-4 h-full flex flex-col justify-between">
        <div className="w-full">
          <Typography tag="h6" fontSize="sm" weight="bold">
            {user.fullName} - {createdAt}
          </Typography>

          <Typography tag="h4" fontSize="lg" weight="bold" noWrap>
            {title}
          </Typography>

          <Typography className="lg:line-clamp-4">{plainText}</Typography>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center flex-wrap gap-[.8rem]">
            <TagIcon className="w-[1.2rem] h-[1.2rem]" />

            <Typography tag="span" fontSize="xs">
              {tagList}
            </Typography>
          </div>

          <Typography fontSize="xs" className="flex gap-[.4rem] items-center">
            <OpenEyeIcon className="w-[1.2rem] h-[1.2rem]" /> {views}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
