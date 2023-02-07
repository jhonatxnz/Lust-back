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

select * from cards
where date >= (select dateadd(day, -6, max(date)) from cards);