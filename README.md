## Backend

- Go to backend folder.
- Run `pipenv install` to create the environment and install dependencies. _Note: you must have Pipenv installed_
- Run `pipenv run api` to start. Server will be served in http://localhost:5000
- <ins>Alternatively</ins>: you can run `pipenv run db` to populate the DB with some dummy data.
  
## Frontend

- Go to frontend folder.
- Run `npm install` to install all the dependencies. _Note: you must have Npm installed_
- Run `npm start` to start. Server will be served in http://localhost:3000


## Usage
- ### Create transactions
  - In http://localhost:5000/routes you will see all the available routes
  - POST /api/accounts/<account_id>/transactions/
    -   ```
            Body = {
                "value": int Money Value,
                "card_id": int Card Id
            }
        ```

