# Overview

*This guide assumes you're using the latest version of Docker*

Follow the [Docker Docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) for Dockerfile best practices

A container can accept input and write output (like a traditional function) or stream output (e.g., web servers, chatbots, social streams).

* Try to keep images to a bare minimum. Consider using a base image from `alpine`.
* Include an `EXPOSE` instruction for external access
* Include an `ENTRYPOINT`

A `microservice.yml` file should be provided which outlines the command structure and operations of the container as seen below in the documentation.


## Definitions

- **MUST**
- **SHOULD**
- **MAY**
