export const postField = `
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  featured,
  isPublished
`;

export const profileQuery = `
  *[_type == "profile"]{
    _id,
    fullName,
    headline,
    profileImage {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      alt,
    },
    shortBio,
    location,
    fullBio,
    email,
    "resumeURL": resumeURL.asset->url,
    socialLinks,
    usage
  }
`;

export const jobQuery = `
  *[_type == "job"] | order(_createdAt desc){
    _id,
    name,
    jobTitle,
    "logo": logo.asset->url,
    url,
    description,
    startDate,
    endDate,
  }
`;

export const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc){
    _id, 
    name,
    "slug": slug.current,
    tagline,
    "logo": logo.asset->url,
  }
`;

export const singleProjectQuery = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    projectUrl,
    coverImage {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      alt,
    },
    tagline,
    description
  }
`;

export const postsQuery = `
  *[_type == "Post"] | order(_createdAt desc){
    ${postField},
    date,
    "author": author-> {
      name, 
      photo, 
      twitterUrl
    },
    body,
  }
`;

export const featuredPostsQuery = `
  *[_type == "Post" && featured == true] | order(_createdAt desc) {
    ${postField}
  }
`;

export const singlePostQuery = `
  *[_type == "Post" && slug.current == $slug][0]{
    ${postField},
    _updatedAt,
    canonicalLink,
    date,
    tags,
    "author": author-> {
      name, 
      photo {
        "image": asset->url,
        alt
      }, 
      twitterUrl
    },
    body,
  }
`;

export const heroesQuery = `
  *[_type == "heroe"] | order(_createdAt asc) { _id, _createdAt, name, url, met }
`;
