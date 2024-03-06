import { useAxios } from "@/requests";

export const SingleBlogComponent = ({ blog }) => {
  return (
    <section className="w-10/12 md:w-11/12 lg:w-4/5 mx-auto mb-20 blog">
      <div className="leading-8 font-medium font-Avenir-Medium">
        <div dangerouslySetInnerHTML={{ __html: blog?.fullContent }} />
      </div>
    </section>
  );
};
