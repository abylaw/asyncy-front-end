###
Add a new service to the Hub
###


# https://developer.github.com/v3/repos/keys/#add-a-new-deploy-key
github post '/repos/{{slug}}/keys' {
    'title': 'Asyncy Hub',
    'key': env.github_clone_ssh_pem,
    'read_only': true
}

# https://developer.github.com/v3/repos/hooks/#create-a-hook
res = github post '/repos/{{slug}}/hooks' {
    'name': 'web',
    'config': {
        'url': env.webhook_url,
        'content_type': 'json',
        'secret': env.github_webhook_secret,
        'insecure_ssl': 0
    },
    'events': env.github_events,
    'active': 'true'
}

# [TODO] add to database
graphql '''
  mutation{
    hookid: {{res.hookid}}
  }
'''

next repos/ci
