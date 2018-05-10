import gql from 'graphql-tag';

const INDEX_QUERY = gql`{
  featuredServices: viewer {
    allServices(first: 3) {
      edges {
        cursor
        node {
          alias
          topics
        }
      }
    }
  }
  recentServices: viewer {
    allServices(first: 6) {
      edges {
        cursor
        node {
          alias
          topics
        }
      }
    }
  }
}`;

const SERVICE_QUERY = gql`query ServiceByAlias($where: ServiceWhereArgs!) {
  viewer {
    allServices(where: $where) {
      edges {
        node {
          id
          alias
          topics
        }
      }
    }
  }
}`;

const SEARCH_QUERY = gql`query ServiceByAlias($after: String, $where: ServiceWhereArgs!) {
  viewer {
    allServices(first: 10, after: $after, where: $where) {
      aggregations {
        count
      },
      edges {
        cursor
        node {
          id
          alias
          topics
        }
      }
    }
  }
}`;

export default {
  INDEX_QUERY,
  SERVICE_QUERY,
  SEARCH_QUERY,
};
