#!/bin/sh

echo "The application will start in ${CODE_NODE_SLEEP}s..." && sleep ${CODE_NODE_SLEEP}
exec java ${JAVA_OPTS} -noverify -XX:+AlwaysPreTouch -Djava.security.egd=file:/dev/./urandom -cp /app/resources/:/app/classes/:/app/libs/* "com.cstl.erpweb.ErpWebApplication"  "$@"
