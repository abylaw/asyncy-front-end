# Overview

*This guide assumes you're using the latest version of Docker*

Follow the [Docker Docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) for Dockerfile best practices

A container can accept input and write output (like a traditional function) or stream output (e.g., web servers, chatbots, social media streams).

* Keep images to a bare minimum
    * Consider using a parent image from `alpine` or a base image `FROM scratch`
* Include an `EXPOSE` instruction for external access
* Include an `ENTRYPOINT`

A `microservice.yml` file should be provided which outlines the command structure and operations of the container as seen below in the documentation.

## Keywords

- **MUST** - Required for a service to contain this functionality
- **SHOULD** - Recommended for a service to contain this functionality
- **MAY** - Optional for a service to contain this functionality
