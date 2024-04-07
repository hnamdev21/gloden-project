import React from "react";

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Typography from "@/components/Typography";
import { mockupBlogs } from "@/constants/mockup-data";

import NoDescriptionCard from "./NoDescriptionCard";
import TrendingCard from "./TrendingCard";

const BlogsModule = () => {
  return (
    <section>
      <Container>
        <Typography tag="h3" fontSize="2xl" weight="bold" className="lg:mb-[.8rem]">
          Trending News
        </Typography>

        <div className="w-full flex">
          <div className="flex-1 grid lg:grid-cols-1 lg:gap-[1.5rem]">
            {mockupBlogs.slice(0, 3).map((blog, index) => {
              const isLast = index === mockupBlogs.length - 1;

              return (
                <React.Fragment key={blog.slug}>
                  <TrendingCard blog={blog} />
                  {!isLast && <Divider />}
                </React.Fragment>
              );
            })}
          </div>

          {/* Gutter */}
          <div className="hidden lg:flex justify-center items-center w-[3rem] min-h-full">
            <Divider vertical />
          </div>

          <div className="hidden flex-1 lg:grid lg:grid-rows-2 lg:gap-[3rem]">
            <div className="h-full grid grid-cols-6 lg:gap-[3rem]">
              {mockupBlogs.slice(3, 5).map((blog, index) => {
                const className = index === 0 ? "col-span-4" : "col-span-2";

                return <NoDescriptionCard key={blog.slug} blog={blog} className={className} />;
              })}
            </div>

            <div className="h-full grid grid-cols-3 lg:gap-[3rem]">
              {mockupBlogs.slice(5, 8).map((blog) => (
                <NoDescriptionCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogsModule;
