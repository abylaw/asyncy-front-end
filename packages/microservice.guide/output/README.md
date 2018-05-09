# Output

## Static

## Streaming

Data written to `stdout` is considered the result of the containers operation and assigned to a variable in the Story.

Streaming containers (http connections, data yielding, etc.) write output to `stdout` with a newline character that distinguishes a new chunk of data.

Containers may also interface via a http server. Data could be `HTTP POST` to the container and the response from the container is provided back into the Story.
