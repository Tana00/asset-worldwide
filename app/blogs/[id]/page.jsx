"use client";

import { Hero, SingleBlogComponent } from "@/components/blog/[id]";
import { Cta } from "@/components/why-us";

export default function SingleBlogPage() {
  return (
    <main className="">
      <Hero />
      <SingleBlogComponent />
      <Cta />
    </main>
  );
}
