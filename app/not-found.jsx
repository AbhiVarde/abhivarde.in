import Link from "next/link";
import { LuHome, LuRocket } from "react-icons/lu";

function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {statusCode ? (
        <h1 className="text-center font-medium text-lg sm:text-2xl md:text-3xl">
          {statusCode}
          {statusCode === 404
            ? " Page Not Found"
            : statusCode === 500
            ? " Server Error"
            : ""}
        </h1>
      ) : (
        <h1 className="text-center font-medium text-lg sm:text-2xl md:text-3xl">
          A client side error occured.
        </h1>
      )}
      <p className="text-center mt-2 font-light">{getPunchline(statusCode)}</p>
      <Link
        noHighlight
        noExternalLinkIcon
        noGradientUnderline
        href="/"
        className="my-4 sm:my-8 rounded-lg border-[1px] border-[#FF3B00] bg-[#FF3B00] px-4 py-2 flex items-center justify-center"
      >
        {getButtonText(statusCode)}
        {statusCode === 404 && (
          <LuHome size={18} className="ml-2" color="#FFFFFF" />
        )}
        {statusCode !== 404 && (
          <LuRocket size={18} className="ml-2" color="#FFFFFF" />
        )}
      </Link>
    </div>
  );
}

function getPunchline(statusCode) {
  if (statusCode === 404) {
    return "Oh no! It seems this page took a wrong turn.";
  } else if (statusCode === 500) {
    return "Oops! Seems like my server needs a chai break. Be back soon!";
  } else {
    return "The internet gremlins are at it again!";
  }
}

function getButtonText(statusCode) {
  if (statusCode === 404) {
    return "Take me Home";
  } else {
    return "Warp Speed to Homepage";
  }
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
