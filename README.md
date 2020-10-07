<h1 align="center">Orkeystore</h1>
<p align="center">Out-of-the-box solution for crypto-keys management, storing and rotation.</p>
<p align="center">
    <img src="https://img.shields.io/circleci/build/gh/Porisey/orkeystore/master" />
    <img src="https://img.shields.io/github/license/Porisey/orkeystore" />
    <img src="https://img.shields.io/david/Porisey/orkeystore" />
    <img src="https://img.shields.io/coveralls/github/Porisey/orkeystore" />
</p>

### Motivation

Modern microservices and cloud solutions require a more complex crypto-keys management process. The current software provides a codeless approach for the creation, storage, rotation and retrieve of your keys.

### Quick start

Orkeystore has an intuitive UI. To take a tour, you can run the server via docker, using the next command.

```
docker run \
    -p 4000:3000 \
    -e ADMIN_PASSWORD="password" \
    -e SWAGGER=1 \
    -e PRIVATE_HOST="http://localhost:4000" \
    porisey/orkeystore:latest
```

By default, the container will be available on `http://localhost:4000`. Default username - `admin`. You can change the password with the environment variable `ADMIN_PASSWORD`.

### Public and private ports

The container runs with two exposed ports. The first one is listened to by a private server (3000) and another one - by the public (3100).

The public port can be used without any encryption by third-party services to retrieve the public keys.

**SSL encryption for the private port is required.** The private server should work in a protected environment. You can take a look at the realizations in the _examples section (in progress)_.

### REST API

The private server provides REST interface documented by OpenAPI (Swagger). To start server with OpenAPI docs use environment variable `SWAGGER=1`. UI will be avail on `${your_host}:3000/swagger`.

### Environment variables

The configuration could be changed with listed environment variables.

| Variable name         | Description                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `ADMIN_PASSWORD`      | **Required**<br/> Defines a password for the admin user.                                                            |
| `DATABASE_PATH`       | Defines a directory for storing the database in filesystem. The solution uses the SQLite database for data storage. |
| `PRIVATE_HOST`        | Defines host for private server.                                                                                    |
| `PUBLIC_HOST`         | Defines host for public operations.                                                                                 |
| `SYSTEM_KEY_ROTATION` | Defines the rotation period for the system key, using the duration strings described below.                         |
| `GENERATE_KEYS`       | Defines the keys list for autogeneration during the server start. The keys generation section describes the format. |
| `GENERATE_REPOS`      | Defines the keys list for autogeneration during the server start. The keys generation section describes the format. |
| `SWAGGER`             | If variable defined as `1`, OpenAPI docs will be avail.                                                             |

### Key generation

The GENERATE_KEYS variable could specify the keys for an auto-generation. Required claim format: `key_code:rotation_period:access_token`.

Rotation period format: `value_unit`. Rotation units: `seconds, hours, days, weeks,months,years`.

Several keys are divided by comma. Example:

` env GENERATE_KEYS=first:5_days:8QZ7m#L$]RaC,second:5_months:g>qrq>AcSA5a`

### Repository generation

Repository provide ability to retrieve several keys per request. To generate repos while container starting, you can use GENERATE_REPOS variable. Required claim format:

`repo_code:access_token:key_code1,key_code2,…,key_codeN`

Several repos are divided by semicolon. Example:

`test:8QZ7m#L$]RaC:test;test2:sdkjfuerjfinksf:hest`
