/* eslint-disable @next/next/no-img-element */
import { getDate } from "@/actions/getDate";
import ClapIcon from "@/components/clap-icon";
import { blogData } from "@/data/blog";
import { BookmarkPlus, MessageCircle, PlayCircle, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

interface BlogProps {
  params: {
    publisher: string;
    blog: string;
  };
}

// Dynamic Title and Description for Page
export async function generateMetadata(
  { params }: BlogProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = blogData.find(
    (data) =>
      data.slug === params.blog && data.publisher.slug === params.publisher
  );

  return {
    title: `${blog?.publisher.label} | ${blog?.title}`,
  };
}

const Blog: React.FC<BlogProps> = ({ params }) => {
  const blog = blogData.find(
    (data) =>
      data.slug === params.blog && data.publisher.slug === params.publisher
  );

  const { publisher } = blog!;
  const { author } = publisher;

  return (
    <main className="py-12 w-[680px] max-w-[96%] mx-auto">
      {/* Blog Title */}
      <h1 className="py-8 font-extrabold text-primary text-[40px] leading-snug tracking-tight">
        {blog?.title}
      </h1>

      {/* Publisher & Author */}
      <div className="w-full py-8">
        {/* Profile */}
        <div className="flex items-center gap-x-6">
          <div className="w-12 h-12 relative">
            {/* Author Picture */}
            <Image
              src={author.profile_pic}
              alt="profile"
              className="rounded-full aspect-square cursor-pointer hover:brightness-105 transition-all"
              title={`@${author.username}`}
            />

            {/* Publisher Picture */}
            <div className="w-8 h-8 absolute -bottom-3 -right-3">
              <Image
                src={publisher.profile_pic}
                alt="profile"
                className="rounded-full border-2 border-white cursor-pointer hover:brightness-105 transition-all"
                title={publisher.name}
              />
            </div>
          </div>
          {/* Info */}
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-1 text-md">
              <span className="font-medium cursor-pointer text-primary">
                {author.name}
              </span>
              <span>·</span>
              <span className="text-green-600 hover:text-green-800 cursor-pointer">
                Follow
              </span>
            </div>
            <div className="flex items-center text-gray-700 gap-x-1 text-sm">
              {/* Publisher Name */}
              <span>
                Published in{" "}
                <span className="font-medium text-primary cursor-pointer">
                  {publisher.label}
                </span>
              </span>

              <span>·</span>

              {/* Reading Time */}
              <span>{blog?.readingTime} min read</span>

              <span>·</span>

              {/* Posted At */}
              <span>{getDate(blog!.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactions */}
      <div className="flex items-center justify-between px-2 py-4 border-y-2 border-gray-100">
        {/* Clap & Respond */}
        <div className="flex items-center gap-x-4">
          {/* Clap Button */}
          <div className="text-gray-500 text-sm font-medium flex items-center gap-x-1">
            <ClapIcon className="stroke-gray-500 hover:stroke-primary cursor-pointer" />
            <span className="hover:text-primary cursor-pointer">
              {blog?.interactions.claps}
            </span>
          </div>

          {/* Response Button */}
          <div className="text-gray-500 text-sm font-medium flex items-center gap-x-1">
            <MessageCircle className="stroke-gray-500 hover:stroke-primary cursor-pointer" />
            <span className="hover:text-primary cursor-pointer">
              {blog?.interactions.responses.length}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-x-8">
          {/* Save Button */}
          {/* <div className="text-gray-500 text-sm font-medium flex items-center gap-x-1"> */}
          <BookmarkPlus className="stroke-gray-500 hover:stroke-primary cursor-pointer" />
          <PlayCircle className="stroke-gray-500 hover:stroke-primary cursor-pointer" />
          <Share className="stroke-gray-500 hover:stroke-primary cursor-pointer" />

          {/* </div> */}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-4 py-12">
        {blog?.content.map((item) => {
          if (item.type == "image") {
            return <img src={item.value} alt="" key={item.type} />;
          } else if (item.type == "section") {
            return (
              <section key={item.title} className="py-4 text-primary">
                <h2 className="font-extrabold text-2xl mb-4">{item.title}</h2>

                {/* Section Content */}
                <div className="flex flex-col gap-y-6">
                  {item.values?.map((data, index) => {
                    if (data.type == "plain-text") {
                      return (
                        <p
                          key={index}
                          className="font-serif text-xl leading-relaxed"
                        >
                          {data.value}
                        </p>
                      );
                    } else if (data.type == "unordered-list") {
                      return (
                        <ul className="font-serif text-xl leading-relaxed list-disc flex flex-col gap-y-4 px-8">
                          {data.values?.map((listData, index) => (
                            <li key={index}>{listData}</li>
                          ))}
                        </ul>
                      );
                    }
                  })}
                </div>
              </section>
            );
          }
        })}
        <hr className="my-4" />
        <span className="inline-block mx-auto text-sm font-medium">
          For more info,{" "}
          <Link
            href={blog!.link}
            className="border-b border-b-transparent hover:border-b-blue-600 text-blue-600"
            target="_blank"
          >
            Click Here
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Blog;
