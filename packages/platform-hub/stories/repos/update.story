###
Update repository data
###

res = github graphql `/assets/sync.graphql`
data = res.data.repository

# gather topics
topics = []
foreach data.repositoryTopics.edges as edge
    topics.append edge.node.topic.name

graphql '''
  mutation {
    update repository topics
  }
'''
