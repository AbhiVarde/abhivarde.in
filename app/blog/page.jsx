import { BiDetail } from "react-icons/bi";
// import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import PageHeading from "../components/shared/PageHeading";
import Slide from "../animation/Slide";

export const metadata = {
  title: "Blog | Abhi Vaarde",
  description: "Read latest stories from Abhi Varde's Blog",
  openGraph: {
    title: "Blog | Abhi Varde",
    url: "https://victoreke.com/blog",
    description: "Read latest stories from Abhi Varde's Blog",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png",
  },
};

const BlogPage = () => {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-36 md:mt-32 mt-28">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings. I also write for other publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        {/* <Posts /> */}
      </Slide>
    </main>
  );
};

export default BlogPage;
