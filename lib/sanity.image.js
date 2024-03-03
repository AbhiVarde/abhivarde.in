import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder({
  projectId: "qk37chfp",
  dataset: "production",
});

export function urlFor(source) {
  return imageBuilder.image(source).auto("format").fit("max");
}
