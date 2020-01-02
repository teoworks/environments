# PostgreSQL

## Create new database

1. Create tablespace folder: `docker exec -itu postgres postgres mkdir /var/lib/postgresql/data/[tablespace]`
2. Create tablespace: `CREATE TABLESPACE name LOCATION '/var/lib/postgresql/data/[tablespace]';`
3. Create user: `CREATE USER [user] WITH PASSWORD '[password]';`
4. Create database: `CREATE DATABASE [database] WITH OWNER [user] TABLESPACE [tablespace];`
