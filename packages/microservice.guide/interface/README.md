# Interfacing

[[toc]]

## Docker Run / Exec

Docker run/exec is a generic interface for communication.
Simply passing data as shell arguments and getting output.

```bash
docker run --rm alpine echo 'Hello World'
# Hello World
```

- Lists and objects are **ALWAYS** `JSON` encoded.
- Commands **MAY** include `format` otherwise the default format is `--{name} '{value}'`.

```yaml
commands:
  echo:
    format: 'echo {*} {data}'
    arguments:
      - name: data
        type: string
        format: null
      - name: newline
        default: false
        type: string
        help: Do not print the trailing newline character.
        format: '-n'
```

```json
{
  "data": "Hello World",
  "newline": true
}
```

```shell
docker run --rm alpine echo -n 'Hello World'
# >>> Hello World
```

## HTTP

```yaml
commands:
  foobar:
    arguments:
      - name: data
        type: string
    http:
      method: post
      path: /foobar?data={data}

interface:
  http:
    ssl: false
    port: 8080
    entrypoint: ["/bin/server", "-p", "8080"]
```

## RPC
