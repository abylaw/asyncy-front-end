###
GitHub webhook server
###

github webhooks as request
    data = request.body

    # get the repo data
    repo = next repos/get --id data.repository.id
    if repo

        event = request.headers['X-GitHub-Event']
        if event in ['create', 'push']
            async next repos/test

        else if event is 'delete'
            next repos/delete
            exit

        next repos/update
