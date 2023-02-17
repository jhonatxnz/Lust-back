select * from users
select * from cards
drop table users
drop table cards

create table users(
idUser int primary key,
name varchar(30) not null,
email varchar(30) not null,
password varchar(30) NOT NULL,
date date not null,
contact varchar(20),
imagem nvarchar(MAX) NULL,
)
create table Card(	
idCard int primary key,
title varchar(30) not null,
date date not null,
description varchar(30) not null,
ratting int not null,
fav int not null,
image nvarchar(MAX) NULL
)

select * from users where email = 'jw.jhonatan1711@gmail.com'

SELECT DATENAME(month, '12:10:30.123')  

CREATE PROCEDURE  delete_rows_links
As
    BEGIN
       DELETE FROM cards WHERE createdAt < GETDATE() -10;
     END

CREATE EVENT SESSION  myevent
ON SERVER EVERY 60 SECOND 
DO
	CALL delete_rows_links

EXECUTE delete_rows_links
BEGIN  
    WAITFOR TIME '12:50';  
    EXECUTE delete_rows_links
END;  
GO  