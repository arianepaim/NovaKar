create table carros (
    id serial primary key,
    nome varchar,
    marca varchar,
    modelo varchar,
	preco varchar,
	imagem varchar,
    date timestamp default now()
);