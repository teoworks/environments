# Docker Registry Setup

## Create TLS certificate
`openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout osl.teoworks.com.key -out osl.teoworks.com.crt`