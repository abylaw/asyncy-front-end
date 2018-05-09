# Logs

> Log format

```
service: [<level>] <message>
```

> Syslog Example

```python
#!/usr/bin/env python

import logging
import logging.handlers
import os

syslog_host = os.environ['MSG_LOG_HOST']
syslog_port = os.environ['MSG_LOG_PORT']

# define the logger and set the logging level
logger = logging.getLogger('root')
logger.setLevel(logging.INFO)

# add handler
handler = logging.handlers.SysLogHandler(address=(syslog_host, int(syslog_port)))

# add formatter
record_layout = '%(name)s: created=%(created)f [%(levelname)s] %(message)s'
formatter = logging.Formatter(record_layout)

handler.formatter = formatter
logger.addHandler(handler)

# log the message
logger.info("Logging some cool data")
```

> Log file Example

```shell
#!/usr/bin/env bash

LOGGER_NAME="foot"
LOGGER_LEVEL="INFO"
LOG_FILE="/var/log/microservice.log"

logMsg() {
  LOGGER_LEVEL="$1"
  LOGGER_MESSAGE="$2"
  TIMESTAMP=$(date +'%b %e %R:%S')
  echo "$TIMESTAMP $HOSTNAME $LOGGER_NAME: created=$(date +%s) source_file=$0 [$LOGGER_LEVEL] $LOGGER_MESSAGE" >> $LOG_FILE
}

logMsg "INFO" "Logging some data"
```

Write logs to `syslog` or to `/var/log/microservice.log`

Containers are passed the following environment variables to be used in logging:

- `MSG_APP_ID`
- `MSG_STORY_ID`
- `MSG_LOG_HASH`

Syslog environment variables:

- `MSG_LOG_HOST`
- `MSG_LOG_PORT`


### Logging Levels

Levels should be one of the following.

| Level    |
|----------|
| CRITICAL |
| ERROR    |
| WARNING  |
| INFO     |
| DEBUG    |
| NOTSET   |
