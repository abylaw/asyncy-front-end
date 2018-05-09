# Volumes

Depending on the implementation of the service it may not have access to any volume.
A container MAY request it's own persist volume.


```yaml
volumes:
  foobar:  # custom title
    dest: /mnt/data
    persist: true
```
