"use client";

import { getDate } from "@/actions/getDate";
import { blogData } from "@/data/blog";
import { BookmarkPlus, MinusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-screen max-w-6xl mx-auto relative flex py-12">
      {/* Blogs Routing */}
      <div className="w-[70%] mx-auto">
        {/* Blog Routing Card */}
        {blogData.map((blog) => {
          const { publisher } = blog;

          const { author } = publisher;

          return (
            <div className="py-8 border-b-2 border-b-gray-100 w-[90%] mx-auto">
              {/* Author Info & Post Date */}
              <div className="flex items-center gap-x-2 text-xs mb-4">
                <Image
                  src={author.profile_pic}
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                <Link
                  href={"#"}
                  className="font-medium text-primary hover:text-gray-700 transition-all"
                >
                  {author.name}
                </Link>
                <span>·</span>
                <span className="text-gray-500">
                  {getDate(blog.createdAt).split(",")[0]}
                </span>
              </div>

              {/* Blog Data */}
              <div
                className="flex flex-col justify-between group cursor-pointer"
                onClick={() => router.push(`/${publisher.slug}/${blog.slug}`)}
              >
                <div className="flex flex-row justify-between">
                  {/* Data */}
                  <div className="flex items-start flex-col gap-y-2 h-40 w-[80%]">
                    <h1 className="text-xl max-sm:text-lg font-extrabold text-primary group-hover:text-gray-700 transition-colors">
                      {blog.title}
                    </h1>
                    <p className="text-ellipsis line-clamp-2 max-sm:text-sm text-md font-serif text-gray-800">
                      {blog.content[1].values![1].value}
                    </p>
                  </div>

                  {/* Image */}
                  <img
                    src={blog.content[0].value!}
                    alt="image"
                    className="h-32 w-32"
                  />
                </div>
              </div>

              {/* Actions & Categories */}
              <div className="w-[80%] flex items-center justify-between gap-x-4">
                <Link
                  href={"#"}
                  className="p-2 rounded-2xl bg-gray-100 font-medium text-xs text-primary hover:bg-gray-200 transition-colors"
                >
                  {blog.category}
                </Link>
                <span className="text-xs text-gray-700 ml-0 mr-auto">
                  {blog.readingTime} min read
                </span>

                <div className="flex items-center gap-x-4">
                  <BookmarkPlus
                    size={20}
                    className="stroke-gray-400 hover:stroke-primary cursor-pointer"
                  />
                  <MinusCircle
                    size={20}
                    className="stroke-gray-400 hover:stroke-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sidebar */}
      {/* <div className="w-[30%]">Sidebar</div> */}
    </main>
  );
}
