# Commands

Services **SHOULD** define commands and the arguments that can be provided in the command.

[[toc]]


## Overview

```yaml
commands:
  foobar:
    arguments:
      - name: foo
        type: string
      - name: bar
        type: json
```

Defining commands outline container operations and assist service discovery during Storyscript development.

In addition to the basics above, there are advanced configurations.

## Types

Arguments **MUST** provide a data type.

| Types     | Encoding        |
| --------- | --------------- |
| `int`     | literal         |
| `float`   | literal         |
| `string`  | literal         |
| `list`    | JSON            |
| `object`  | JSON            |
| `boolean` | `true`, `false` |


## Help

Arguments **SHOULD** provide a short description of the command and arguments can provide clarity to end users.

```yaml{3}
commands:
  fly:
    help: "Jump on a spaceship."
    arguments:
      - name: dest
        type: int
        help: "Choose a destination."
```

## Checks

Arguments **SHOULD** provide variable checks.

### Patterns

```yaml{6}
commands:
  foobar:
    arguments:
      - name: color
        type: string
        pattern: '^\#?\w{6}$'
```

### Enums

```yaml{6}
commands:
  foobar:
    arguments:
      - name: choose
        type: string
        enum:
        - thing_one
        - thing_two
```

### Range

```yaml{6}
commands:
  foobar:
    arguments:
      - name: choose
        type: number
        range:
        - 10
        - 100
```

## Required

```yaml{6}
commands:
  foobar:
    arguments:
      - name: choose
        type: string
        required: true
```

By default, arguments are **optional**.


## Entrypoint

```yaml
commands:
  entrypoint:
    arguments:
      # ...
```

Services **MAY** use the reserved keyword `entrypoint` which is used when no command is provided.
