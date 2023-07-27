// GithubAPI.ts
import { ApolloClient, InMemoryCache, gql, type NormalizedCacheObject } from '@apollo/client'
import type { NormalizedCacheObject } from '@apollo/client'

interface Repository {
  name: string
  description: string | null
  object: {
    text: string
  } | null
}

interface RepositoriesResponse {
  viewer: {
    repositories: {
      nodes: Repository[]
    }
  }
}

const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN || 'DEFAULT_VALUE'}`,
  },
  cache: new InMemoryCache(),
})

export const fetchRepos = async (): Promise<Repository[]> => {
  const query = gql`
    query {
      viewer {
        repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            name
            description
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  `

  const { data } = await client.query<RepositoriesResponse>({ query })
  return data.viewer.repositories.nodes
}
export default GithubAPI
