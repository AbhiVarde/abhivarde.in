const sanityClient = require("@sanity/client");

const config = {
  projectId: "qk37chfp",
  dataset: "production",
  apiVersion: "2024-02-17",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
};

const client = sanityClient.createClient(config);

async function sanityFetch({ query, qParams, tags }) {
  return client.fetch(query, qParams, {
    cache: "force-cache",
    next: { tags: tags },
  });
}

module.exports = {
  sanityFetch: sanityFetch,
};
