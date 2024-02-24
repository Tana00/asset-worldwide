import { Hero, News } from "@/components/blog";
import { Cta } from "@/components/why-us";

const BlogPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <News />
      <Cta />
    </div>
  );
};

export default BlogPage;
