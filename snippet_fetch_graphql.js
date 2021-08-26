(function() {

  const payload = {
    variables: {
      postSlug: 'vis-nobis-veritus-maluisset-id-nonumy-adversarium',
    },
    query: `
      fragment image on UploadFile {
        id
        alternativeText
        url
      }
      fragment cover on Post {
        cover {
          ...image
        }
      }
      fragment tag on Tag {
        id
        displayName
        slug
      }
      fragment author on Author {
        id
        displayName
        slug
      }
      fragment category on Category {
        id
        displayName
        slug
      }
      fragment tags on Post {
        tags {
          ...tag
        }
      }
      fragment authorPost on Post {
        author {
          ...author
        }
      }
      fragment categories on Post {
        categories {
          ...category
        }
      }
      fragment menuLink on ComponentMenuMenuLink {
        id
        link
        text
        newTab
      }
      fragment post on Post {
        id
        slug
        title
        excerpt
        content
        allowComments
        ...cover
        ...categories
        ...tags
        ...authorPost
      }
      fragment settings on Settings {
        id
        blogName
        blogDescription
        logo {
          ...image
        }
        menuLink {
          ...menuLink
        }
        text
      }
      query GET_POST_BY_SLUG(
        $postSlug: String!
      ) {
        setting {
          ...settings
        }
        posts(where: { slug: $postSlug }) {
          ...post
        }
      }
    `
  }

  fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
  })
  .then(r => r)
  .then(r => r.json())
  .then(r => console.log(r))
  .catch(e => console.log(e));


  })();
