"use client";

import { usePathname } from "next/navigation";
import { Hero, SingleBlogComponent } from "@/components/blog/[id]";
import { Cta } from "@/components/why-us";
import { findBlogByLink } from "@/utils";

export default function SingleBlogPage() {
  const pathname = usePathname();

  const blog = findBlogByLink(pathname);

  return (
    <main className="">
      <Hero blog={blog} />
      <SingleBlogComponent blog={blog} />
      <Cta />
    </main>
  );
}
