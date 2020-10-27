<h1 align="center">Orkeystore</h1>
<p align="center">Out-of-the-box solution for crypto-keys management, storing and rotation.</p>
<p align="center">
    <a href="https://hub.docker.com/repository/docker/orkeystore/server">
        <img src="https://img.shields.io/docker/pulls/orkeystore/server" target="_blank" />
        <img src="https://img.shields.io/docker/image-size/orkeystore/server"/>
    </a>
    <a href="https://app.circleci.com/pipelines/github/orkeystore/server" target="_blank">
        <img src="https://img.shields.io/circleci/build/gh/orkeystore/server/master" alt="Build" />
    </a>
    <a>
    <img src="https://img.shields.io/github/license/orkeystore/server" alt="License" />
    </a>
    <img src="https://img.shields.io/david/orkeystore/server" alt="Dependencies"/>
    <a href="https://coveralls.io/github/orkeystore/server" target="_blank">
        <img src="https://img.shields.io/coveralls/github/orkeystore/server" alt="Coverage" />
    </a>
</p>

## Motivation

The current software provides a codeless approach for the creation, storage, rotation and retrieve of crypto-keys.

## Quick start

To take a tour, you can run the server via docker, using the next command. Open API (Swagger) docs will be avail on `http://HOSTNAME:4000/swagger`.

```
docker run \
    -p 4000:3000 \
    -e PRIVATE_HOST="http://HOSTNAME:4000" \
    -e ADMIN_PASSWORD="password" \
    -e SWAGGER=1 \
    porisey/orkeystore:latest
```

Default username - `admin`. You can change the password with the environment variable `ADMIN_PASSWORD`.

## Exposed ports

The container runs with two exposed ports. The first one is listened to by a private server (3000) and another one - by the public (3100).

The public port can be used without any encryption by third-party services to retrieve the public keys.

**SSL encryption for the published private host is required.** The private server should work in a protected environment. You can take a look at the realizations in the _examples section (in progress)_.

## Volumes

Server use sqlite database for data storage. By default it will be saved in `/opt/orkeystore` directory. Path could be redefined by `DATABASE_PATH` variable.

## Environment

The configuration could be changed with listed environment variables.

| Variable name         | Description                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ADMIN_PASSWORD`      | **Required**<br/> Defines a password for the admin user.                                                                                                                                                                                                |
| `DATABASE_PATH`       | Defines a directory for storing the database in filesystem. The solution uses the SQLite database for data storage.                                                                                                                                     |
| `PRIVATE_HOST`        | Defines host for private server.                                                                                                                                                                                                                        |
| `PUBLIC_HOST`         | Defines host for public operations.                                                                                                                                                                                                                     |
| `SYSTEM_KEY_ROTATION` | Defines the rotation period for the system key.                                                                                                                                                                                                         |
| `GENERATE_KEYS`       | Defines the keys list for autogeneration during the server start. Required claim format: `key_code:rotation_period:access_token`. Rotation units: `seconds, hours, days, weeks,months,years`.                                                           |
| `GENERATE_REPOS`      | Defines the keys list for autogeneration during the server start. Required claim format: `repo_code:access_token:key_code1,key_code2,…,key_codeN`. Several repos are divided by semicolon. Example: `test:8QZ7m#L$]RaC:test;test2:sdkjfuerjfinksf:hest` |
| `SWAGGER`             | If variable defined as `1`, OpenAPI docs will be avail.                                                                                                                                                                                                 |
