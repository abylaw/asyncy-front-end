# Environment

Services **MUST** list environment variables that may be used to perform any commands the service exposes.

```yaml{2}
environment:
  access_token:
    type: string
    pattern: "^key_"
    required: true
    help: |
      Description of how the user should produce this variable
```

Services **SHOULD** only be exposed the environment variables it requests.

Environment variables are provided when the service first starts.
