###
GitHub webhook server
###

github webhooks as request
    event = request.headers['X-GitHub-Event']

    # get the repo data
    repo = next `repo.story` --id=repository.id

    if event in ['create', 'push']
        async next `ci.story`

    else if event is 'delete'
        next `services/delete.story`
        exit

    next `services/update.story`
