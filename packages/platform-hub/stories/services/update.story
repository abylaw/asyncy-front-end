# Update repository data

res = github gql `./sync.graphql`
data = res.data.repository

# gather topics
topics = []
foreach data.repositoryTopics.edges as edge
    topics.append edge.node.topic.name
topics = json dumps topics

psql query `./update.psql`
