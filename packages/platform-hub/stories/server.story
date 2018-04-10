###
GitHub webhook server
###

github webhooks as request
    data = request.body

    # get the repo data
    repo = next repo --id data.repository.id
    if repo

        event = request.headers['X-GitHub-Event']
        if event in ['create', 'push']
            async next ci

        else if event is 'delete'
            next services/delete
            exit

        next services/update
