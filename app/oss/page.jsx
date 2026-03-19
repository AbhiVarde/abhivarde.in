import OSS from "../components/sections/oss/OSS";

export const metadata = {
  title: "Open Source",
  description:
    "Issues and pull requests Abhi Varde has opened across open source projects.",
  alternates: { canonical: "https://abhivarde.in/oss" },
};

const OSSPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-20 pb-16">
      <OSS />
    </main>
  );
};

export default OSSPage;
