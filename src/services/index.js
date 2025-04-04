import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const getPosts = async (first = 100) => {
  const query = gql`
    query MyQuery {
      postsConnection(first: 100) {
        edges {
          node {
            createdAt
            slug
            title
            description
            image {
              url
            }
            author {
              id
              name
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        description
        image {
          url
        }
        author {
          id
          name
          photo {
            url
          }
        }
        content {
          raw
        }
      }
    }
  `;
  try {
    const results = await request(graphqlAPI, query, { slug });
    if (results && results.post) {
      return results.post;
    } else {
      throw new Error("Post data not found or invalid response.");
    }
  } catch (error) {
    console.error("Error fetching post details:", error);
    throw error;
  }
};
