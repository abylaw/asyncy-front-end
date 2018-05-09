# Lifecycle

A user-defined command may be provided to prepare the containers execution environment or clean-up workspace.

```yaml
lifecycle:
  startup: ./startup.sh
  shutdown: ./shutdown.sh
```

This command must exit with status 0. `stdout` is logged and not accessable in the Storyline.
