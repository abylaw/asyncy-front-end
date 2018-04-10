###
Start a new, paid, subscription to a service
###

# create the strip customer if it does not exist
unless organization.stripe
    # TODO include sources
    res = stripe createCustomer ...
    graphql '''
      mutation{
        update billing
      }
    '''
    organization.stripe.customer = res.data.id

graphql '''
  mutation{
    add subscription
  }
'''
