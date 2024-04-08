import cn from "classnames";
import { Blog } from "entity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Typography from "@/components/Typography";

type NoDescriptionCardProps = {
  className?: string;
  blog: Blog;
};

const NoDescriptionCard = ({ blog, className = "" }: NoDescriptionCardProps) => {
  const { thumbnailPath, title, slug, createdAt, user, category } = blog;

  return (
    <Link href={`/blogs/${slug}`} className={cn("block w-full h-full max-h-max relative", className)}>
      <Image src={thumbnailPath} alt={`Thumbnail of ${title}`} fill />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

      <div className="absolute top-0 left-0 w-full h-full p-[1rem] flex flex-col justify-between">
        <Typography
          fontSize="sm"
          textColor="light"
          className="max-w-max lg:px-[1rem] lg:py-[.5rem] border border-solid border-white"
        >
          {category.title}
        </Typography>

        <div className="w-full">
          <Typography tag="h6" textColor="light" fontSize="sm" noWrap>
            {user.fullName} - {createdAt}
          </Typography>

          <Typography tag="h4" fontSize="xl" textColor="light" className="lg:line-clamp-2">
            {title}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default NoDescriptionCard;
