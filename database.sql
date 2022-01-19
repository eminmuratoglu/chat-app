-- CREATE DATABASE chat_app; 

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
 	created_at TIMESTAMPTZ DEFAULT NOW()
 );

CREATE TABLE messages(
	id SERIAL NOT NULL,
	user_id SERIAL NOT NULL,
	username VARCHAR(50) NOT NULL,
	text VARCHAR(250),
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY(id)
);