# Linux Capacities

All capacities are stripped from the containers.
It's required to list linux capacities in the configuration.
Learn more about [Docker runtime privilege and linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

```yaml
cap:
  - chown
```
> The configuration above will designate `chown` to be included in the capabilities.
