create table products
(
  id          SERIAL primary key,
  name        varchar(255) not null,
  price       decimal not null
);