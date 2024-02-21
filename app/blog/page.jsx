import { BsCardText } from "react-icons/bs";
// import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import PageHeading from "../components/shared/PageHeading";
import Slide from "../animation/Slide";

export const metadata = {
  title: "Blog - Abhi Varde",
  description: "Read latest stories from Abhi Varde's Blog",
  openGraph: {
    title: "Blog - Abhi Varde",
    description: "Read latest stories from Abhi Varde's Blog",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png",
  },
};

const BlogPage = () => {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-36 md:mt-32 mt-28">
      <PageHeading
        title="Blog Posts"
        description="Welcome to my corner of the internet! Here, you'll find personal stories about the lessons I've learned, projects I'm actively tinkering with, and interesting discoveries I've stumbled upon along the way. "
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BsCardText size={24} />
          <h2 className="text-xl font-semibold tracking-tight">
            Explore Publications
          </h2>
        </div>
        {/* <Posts /> */}
      </Slide>
    </main>
  );
};

export default BlogPage;
