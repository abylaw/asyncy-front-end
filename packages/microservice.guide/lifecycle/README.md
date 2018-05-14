# Lifecycle

A service **MAY** define custom lifecycle hooks for startup and shutdown.

```yaml
lifecycle:
  startup: ./startup.sh
  shutdown: ./shutdown.sh
```

*Lifecycle commands **MUST** exit status zero.*
