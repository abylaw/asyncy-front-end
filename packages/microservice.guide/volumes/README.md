# Volumes

Depending on the implementation of the service it **MAY NOT** have access to any volume.

A container **MAY** require a service-specific volume that that is accessable to that service only.

```yaml
volumes:
  foobar:  # custom title
    target: /mnt/data
    persist: true
```
