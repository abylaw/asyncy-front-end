# Metrics

Services **SHOULD** support metric delivery *or* scrapting via Prometheus, StatsD, or flat files.

## Namespacing

There are many ways to organize metrics. It is important to always properly namespace your collected data. This gives you the flexibility to easily slice and dice your metrics at a later date.

See [Prometheus Metric and Label Naming](https://prometheus.io/docs/practices/naming/) to get a better understanding of best practices.

## StatsD

> StatsD basic usage

```shell
echo "accounts.authentication.password.failure.no_email_found:1|c" | nc -u -w1 $MSG_STATSD_HOSTNAME $MSG_STATSD_PORT
```

> StatsD with tag support

```shell
echo "accounts.authentication.password.failure.no_email_found:1|c|#tag:value,another_tag:another_value" | nc -u -w1 $MSG_STATSD_HOSTNAME $MSG_STATSD_PORT
```

Containers can write metrics to StatsD.


| Endpoint | Port | Protocol |
| --- | --- | --- |
| `$MSG_STATSD_HOSTNAME` (typically `statsd`) | `$MSG_STATSD_PORT` (typically `8125`) | `tcp` + `udp` |


See [https://github.com/etsy/statsd](https://github.com/etsy/statsd) for usage details.

## Flat Files (Metrics 2.0)

> Flat Files (Metrics 2.0)

```shell
echo '
{
    what=github_response_time
    http_code=206
    http_method=GET
    host=api.github.com
    service=github-api
    stat=upper_90
    target_type=gauge
    unit=ms
}
meta: {
    env=production
}
' >> /var/lib/metrics.dat
```

Write [Metrics 2.0](http://metrics20.org/) output to `/var/lib/metrics.dat`

## Prometheus Exporters and Integrations
<!-- TODO -->
