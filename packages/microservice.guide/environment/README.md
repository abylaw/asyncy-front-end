# Environment

Define required environment variables.

```yaml
env:
  access_token:
    type: string
    pattern: "^key_"
    required: true
    help: |
      Description of how the user should produce this variable
```

Containers will **only** get the environment variables that are requested.
Application and other container environment variables are strictly not provided.
