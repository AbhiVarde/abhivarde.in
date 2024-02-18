import Slide from "../../animation/Slide";
const PageHeading = ({ title, description, children }) => {
  return (
    <header className="mb-10">
      <Slide>
        <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
        {children}
      </Slide>
    </header>
  );
};

export default PageHeading;
