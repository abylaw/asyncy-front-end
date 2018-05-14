# Interfacing

Services **MUST** interface with one of the options below.

[[toc]]

## Docker Run / Exec

Docker run/exec can be used as an interface for execution and communication by passing data as shell arguments and receiving output

```bash
docker run --rm alpine echo 'Hello World'
# Hello World
```

Commands **MAY** provide a custom `format`. The default format is `{$} {*}` where `{$}` is replaced with the command keyword and `{*}` is replaced with the arguments.

Command arguments **MAY** provide a custom `format`. The placeholder (`{}`) is replaced with the value specified by the user.
| Format | Result | Default |
| ------ | ------ | ------- |
| `{}` | `result` | Default |
| `--foobar '{}'` | `--foobar 'result'` | |
| `-a` | `-a` | |


The default format is `--{name} '{value}'`.


```yaml{3}
commands:
  echo:
    format: '{$} {*} {data}'
    arguments:
      - name: data
        type: string
      - name: newline
        type: boolean
        help: Do not print the trailing newline character.
        default: false
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
# Hello World
```

## HTTP

```yaml{6}
commands:
  foobar:
    arguments:
      - name: data
        type: string
    http:
      method: post
      endpoint: "/foobar?data={data}"

http:
  ssl: false
  port: 8080
  entrypoint: ["/bin/server", "-p", "8080"]
```

The service **MUST** provide the method and endpoint used to call the given command.

The service **MUST** define how to start the HTTP server by providing the `http` configuration.


## RPC

[ TODO ]
