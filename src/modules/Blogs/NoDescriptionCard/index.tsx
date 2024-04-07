import cn from "classnames";
import { Blog } from "entity";
import Image from "next/image";
import React from "react";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

type NoDescriptionCardProps = {
  className?: string;
  blog: Blog;
};

const NoDescriptionCard = ({ blog, className = "" }: NoDescriptionCardProps) => {
  const { thumbnailPath, title, slug, createdAt, user } = blog;

  return (
    <div className={cn("h-full max-h-max relative", className)}>
      <Image src={thumbnailPath} alt={`Thumbnail of ${title}`} fill />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

      <div className="absolute top-0 left-0 w-full h-full p-[1rem] flex flex-col justify-between">
        <Button href={`/blogs/${slug}`} variant="outlined" fontSize="sm" color="light" className="max-w-max">
          Read More
        </Button>

        <div className="w-full">
          <Typography tag="h6" textColor="light" fontSize="sm" noWrap>
            {user.fullName} - {createdAt}
          </Typography>

          <Typography tag="h4" fontSize="xl" textColor="light" className="lg:line-clamp-2">
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NoDescriptionCard;
