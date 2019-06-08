CREATE TABLESPACE keycloak LOCATION '/var/lib/postgresql';
CREATE USER keycloak WITH PASSWORD '6CgR8n4wc0Pn';
CREATE DATABASE keycloak WITH OWNER keycloak TABLESPACE keycloak;
