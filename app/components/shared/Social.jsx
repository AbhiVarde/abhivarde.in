import { socialLinks } from "../../constant/social";

const Social = ({ type }) => {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-5">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <a
              href={value.url}
              rel="noreferer noopener"
              target="_blank"
              className="flex items-center group relative "
            >
              <value.icon
                className="flex-shrink-0 h-5 w-5 duration-300 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800"
                aria-hidden="true"
              />
              &nbsp;
              {value.name}
              <span className="absolute left-0 w-full h-[1.5px] bg-zinc-700 dark:bg-[#e0e0e0] bottom-0 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-300"></span>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Social;
