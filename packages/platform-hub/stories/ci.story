###
Hub CI to check service configuration
###

slug = webhook.data.repository.full_name
sha = webhook.data.head_commit.id
status_endpoint = '/repos/{{slug}}/statuses/{{sha}}'
target_url = '{{env.url}}/gh/{{slug}}/builds/{{__TBD__}}'

github post status_endpoint {
    'state': 'pending'
    'description': 'Running test suite...'
    'target_url': target_url
    'context': 'ci/asyncy'
}


try
    # clone the project
    github clone slug `/clone`

    # parse the yaml
    config = yaml parse `/clone/asyncy.yml`

    validate config `/assets/yaml-validation.json`

    state = 'success'
    description = 'Build success! :tada:'

catch as output
    # [TODO] store output
    state = 'failed'
    description = 'Build failed :frown:'

github post status_endpoint {
    'state': state
    'target_url': target_url
    'description': description
    'context': 'ci/asyncy'
}
