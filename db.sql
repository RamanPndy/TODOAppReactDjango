CREATE USER todoappuser WITH encrypted password 'todoapppassword';
ALTER USER todoappuser WITH SUPERUSER;

CREATE DATABASE todoappdb
    WITH
    OWNER = todoappuser
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE todoappdb IS 'TODO App DB';

GRANT ALL PRIVILEGES ON DATABASE todoappdb TO todoappuser;