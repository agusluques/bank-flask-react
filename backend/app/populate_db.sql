DELETE FROM [TRANSACTION];
DELETE FROM ACCOUNT;
DELETE FROM CARD;

INSERT INTO ACCOUNT (ID, USER_ID, BALANCE)
VALUES (1,1,100);


INSERT INTO CARD (ID, TYPE, ACCOUNT_ID)
VALUES (1, 'debit', 1);

INSERT INTO CARD (ID, TYPE, ACCOUNT_ID, MAX_CREDIT)
VALUES (2, 'credit', 1, 1000);

INSERT INTO CARD (ID, TYPE, ACCOUNT_ID, MAX_CREDIT)
VALUES (3, 'credit', 1, 900);