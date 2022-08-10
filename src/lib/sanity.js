import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "b3qqlkc9",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
