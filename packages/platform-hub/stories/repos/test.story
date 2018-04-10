###
Hub CI to check service configuration
###

slug = data.repository.full_name
sha = data.head_commit.id
status_endpoint = '/repos/{{slug}}/statuses/{{sha}}'

build = graphql '''
      query{
          insert new build
          return id
      }
      '''

target_url = '{{env.url}}/gh/{{slug}}/builds/{{build.__}}'


###
Post a pending build status
###
github post status_endpoint {
    'state': 'pending'
    'description': 'Running test suite...'
    'target_url': target_url
    'context': 'ci/asyncy'
}

###
Run Tests
###
try
    git clone data.repository.git_url `/clone`

    assert (file exists `/clone/asyncy.yml`)

    yaml `/clone/asyncy.yml` `/assets/yaml.json`

    state = 'success'
    description = 'Build success! :tada:'

    graphql '''
      mutation{
        ...
      }
    '''

catch as output
    graphql '''
      mutation{
        ...
      }
    '''

    state = 'failed'
    description = 'Build failed :frown:'


###
Finally, post resulting status
###

github post status_endpoint {
    'state': state
    'target_url': target_url
    'description': description
    'context': 'ci/asyncy'
}
