# Lifecycle

A service **MAY** define it's own procedure for when the service is first started and when it is shutdown.

```yaml
lifecycle:
  startup: ./startup.sh
  shutdown: ./shutdown.sh
```

The `startup` command **MUST** exit with `0` status.
