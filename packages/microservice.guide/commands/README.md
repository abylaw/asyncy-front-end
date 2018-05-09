# Commands

[[toc]]


## Overview

```yaml
commands:
  foobar:
    help: Do something great
    arguments:
      - name: foo
        type: string
        required: false
        help: Short description
      - name: bar
        type: json
    result:
      type: json
```

Defining commands outline container operations and assist service discovery during Storyscript development.

In addition to the basics above, there are advanced configurations.



## Validation

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


## Entrypoint

```yaml
commands:
  entrypoint:  # reserved keyword
    # ...
```

Container may not a need a command and operate through the entrypoint.
