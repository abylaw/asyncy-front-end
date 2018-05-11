# Linux Capacities

A service **MUST** list the Linux capacities that are required for the service to properly operate.

```yaml
cap:
  - chown
```

> Learn more about [Docker runtime privilege and linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).
