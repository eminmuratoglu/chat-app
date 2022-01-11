## Chat App
In production, working on styling </br>
Current as of Jan, 11, 2022 --> Soon to be deployed after styling is done. </br>

## Install locally to test the app
* Pull the repo
* run npm install in the main directory and another npm install in client (cd client)
* set up the environment variables as shown in the sample.env
* create 2 tables in your postgres DB as below

CREATE TABLE users( <br/>
 id SERIAL PRIMARY KEY,<br/>
 username VARCHAR(50) NOT NULL,<br/>
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()<br/>
)<br/>

CREATE TABLE messages(<br/>
 id SERIAL NOT NULL,<br/>
 user_id SERIAL NOT NULL,<br/>
 username VARCHAR(50) NOT NULL,<br/>
 text VARCHAR(250),<br/>
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),<br/>
 PRIMARY KEY(id)<br/>
) <br/>
run npm run dev command and start the app on your browser localhost (e.g. http://localhost:3000/)
