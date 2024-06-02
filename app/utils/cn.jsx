export function cn(...args) {
  return args
    .filter(Boolean) // Remove any falsy values
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg;
      }
      if (Array.isArray(arg)) {
        return arg.filter(Boolean);
      }
      if (typeof arg === "object") {
        return Object.keys(arg).filter((key) => arg[key]);
      }
      return [];
    })
    .join(" ");
}
