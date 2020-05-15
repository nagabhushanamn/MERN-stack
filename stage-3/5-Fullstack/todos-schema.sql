

create database todos_db;
use todos_db;


create table users (
    userId varchar(100) not null,
    name varchar(100) not null,
    email varchar(100) not null,
    primary key (userId)   
);

create table todos(
    id int not null auto_increment,
    title varchar(255) not null,
    completed boolean default false,
    userId varchar(100) not null,
    primary key (id),
    foreign key (userId) references users(userId)
);

insert into users(userId, name,email) values('nag', 'Nagabhushanam','nagabhushanamn@gmail.com')


