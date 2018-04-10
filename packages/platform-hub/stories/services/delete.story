###
Delete a Service
###


###
Email subscribers/users that this project is being archived
###
res = graphql '''
  query{
    subscribers
  }
'''

async foreach res.data...
    mailgun ...

res = graphql '''
  mutation{
    state: archived
  }
'''
