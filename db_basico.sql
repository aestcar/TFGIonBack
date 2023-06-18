create database if not exists db_basico;

use db_basico;

SET foreign_key_checks = 0;

DROP TABLE IF EXISTS Book;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Error;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Reserva;
DROP TABLE IF EXISTS Disponibilidad;
DROP TABLE IF EXISTS ColaReservas;

CREATE TABLE Book (
    isbn VARCHAR(13) PRIMARY KEY,
    autor VARCHAR(255),
    categoria VARCHAR(20),
    disponible BOOLEAN,
    editorial VARCHAR(255),
    id VARCHAR(255),
    idioma VARCHAR(20),
    paginas INT,
    portadaImgPath VARCHAR(255),
    tipo VARCHAR(20),
    titulo VARCHAR(255)
);

CREATE TABLE User (
  email VARCHAR(255),
  uID VARCHAR(255) PRIMARY KEY,
  isAdmin BOOLEAN
);

CREATE TABLE Error (
    id VARCHAR(20) PRIMARY KEY,
    msg VARCHAR(255)
);

CREATE TABLE Event (
  fecha VARCHAR(255),
  descripcion VARCHAR(255),
  id VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255),
  portadaImgPath VARCHAR(255)
);

CREATE TABLE Reserva (
  id VARCHAR(255) PRIMARY KEY,
  fechaIni VARCHAR(255),
  fechaFin VARCHAR(255),
  isbn VARCHAR(255) NOT NULL,
  lectorId VARCHAR(255) NOT NULL,
  FOREIGN KEY (lectorId) REFERENCES User(uID),
  FOREIGN KEY (isbn) REFERENCES Book(isbn)
);

CREATE TABLE Disponibilidad (
  estado VARCHAR(20),
  isbn VARCHAR(13) PRIMARY KEY,
  localizacion VARCHAR(20)
);

CREATE TABLE ColaReservas (
  idUser VARCHAR(255),
  isbn VARCHAR(13),
  PRIMARY KEY (idUser, isbn),
  FOREIGN KEY (idUser) REFERENCES User(uID),
  FOREIGN KEY (isbn) REFERENCES Book(isbn)
);

INSERT INTO Book (isbn, autor, categoria, disponible, editorial, id, idioma, paginas, portadaImgPath, tipo, titulo)
VALUES 
    ('9788408260486', 'mar petryk', 'nuevo-15', true, 'planeta', '2022-08-12 08:32:18', 'espanol-0', 510, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fel%20pecador.jpg?alt=media&token=a0c5d90f-cbb7-4b16-a12f-d023b1438347', 'libro-0', 'el pecador de oxford'),
    ('9788408261896', 'Bego La Ordenatriz', 'autoayuda-2', true, 'planeta', '2022-08-16 08:58:57', 'espanol-0', 256, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Flimpieza%20orden.jpg?alt=media&token=723d9faf-1017-4024-9a74-950e913e74eb', 'libro-0', 'limpieza, orden y felicidad'),
    ('9788411017992', 'vv.aa.', 'accion-90', true, 'panini', '2022-08-12 08:23:43', 'espanol-0', 0, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fmarvel%20fortnite.jpg?alt=media&token=f5be25b4-1cf3-4e9e-ad80-a654b2347b01', 'comic-4', 'marvel/fortnite conflicto cero 03 de 05'),
    ('9788413141220', 'jon krakauer', 'literatura-14', true, 'b de bolsillo', '2022-08-20 17:40:21', 'espanol-0', 304, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fhacia%20rutas%20salvajes?alt=media&token=a761500e-9453-4579-b091-7a66c72240a1', 'libro-0', 'hacia rutas salvajes'),
    ('9788417694692', 'susan cain', 'autoayuda-2', true, 'urano', '2022-08-12T08:37:26.041Z', 'espanol-0', 336, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fagridulce.jpg?alt=media&token=8b0a3e28-9d62-40e1-a9ce-5b5fc5ee2818', 'libro-0', 'agridulce (bittersweet)'),
	('9788418483448', 'joana marcus', 'juveniles-13', true, 'montena', '2022-08-12T08:28:52.539Z', 'espanol-0', 496, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fantes%20de%20diciembre.jpg?alt=media&token=1d44347c-1980-4348-a3ab-2fcbd38bb8e9', 'libro-0', 'antes de diciembre'),
	('9788420461052', 'juan jose millas , juan luis arsuaga', 'científicos-3', true, 'alfaguara', '2022-08-16T08:42:29.437Z', 'espanol-0', 312, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fla%20muerte%20contada%20por.jpg?alt=media&token=150be936-a70b-4183-8771-c7e3f00e6ae9', 'libro-0', 'la muerte contada por un sapiens a un neandertal'),
	('9788420462134', 'joël dicker', 'nuevo-15', true, 'alfaguara', '2022-08-12T08:39:32.157Z', 'espanol-0', 592, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fel%20caso%20de%20alaska.jpg?alt=media&token=f692a408-6c0f-4d16-bb39-b14bf48ad2d6', 'ebook-3', 'el caso alaska sanders'),
    ('9788425361791', 'ildefonso falcones', 'historia-11', true, 'grijalbo', '2022-09-16T17:28:15.495Z', 'espanol-0', 624, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fesclava%20de%20la%20libertad?alt=media&token=eb75d9cb-c442-4bb3-bcde-a5b57d9a787e', 'libro-0', 'esclava de la libertad'),
    ("9788441546110", "ruben córdoba schwaneberg", "humor-12", true, "anaya multimedia", "2022-08-16T08:49:08.835Z", "espanol-0", 120, "https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2FcronicasPostpandemicas.jpg?alt=media&token=37dd6a78-5117-495c-a671-4ca0823a92aa", "libro-0", "cronicas pospandemicas"),
	("9788466356718", "ray bradbury", "ciencia-ficción-4", true, "debolsillo", "2022-09-16T17:56:55.375Z", "espanol-0", 192, "https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Ffahrenheit%20451?alt=media&token=53cea939-0905-4be8-9c46-17aed2fccff4", "libro-0", "fahrenheit 451"),
	("9788466367844", "george r.r. martin , doug wheatley", "literatura-14", true, "debolsillo", "2022-09-04T10:47:02.642Z", "espanol-0", 888, "https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Ffuego%20y%20sangre%20(canci%C3%B3n%20de%20hielo%20y%20fuego)?alt=media&token=a0c3a422-10ee-4678-a75b-53626b226dc6", "libro-0", "fuego y sangre (canción de hielo y fuego)"),
	('9788466428828', 'empar moliner', 'nuevo-15', true, 'columna edicions', '2022-08-12T08:41:32.737Z', 'valencia-1', 232, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fbenvolguda.jpg?alt=media&token=ae609db7-28f9-4786-af33-2c762babc5ab', 'libro-0', 'benvolguda'),
	('9788467951219', 'juan diaz canales , teresa valero , antonio lapone', 'comic-5', true, 'norma editorial', '2022-08-16T08:51:33.975Z', 'espanol-0', 176, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fgentlemind.jpg?alt=media&token=62cc9817-2914-4417-9b31-90d5351f95e1', 'libro-0', 'gentlemind'),
	('9788491295976', 'elisabet benavent', 'romance-18', true, 'suma', '2022-08-12T08:11:14.712Z', 'espanol-0', 504, 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Ftodas.jpg?alt=media&token=1e0896de-fd9b-4114-88ff-1d554a022d69', 'libro-0', 'todas esas cosas que te dire mañana');
    
INSERT INTO User (email, uID, isAdmin) 
VALUES 
	('aestevec01@gmail.com', 'D8Qov6gJwVWdE6f4LzrHGKDXd1t1', true),
	('eso11314ae04@gmail.com', '0ustFIrEbkfQbtNvDGEgvjDSjhp2', false),
	('albertpatata110@gmail.com', 'YVaOr5nqova1gu4Do7r47S2m8Do1', false);
    
INSERT INTO Error (id, msg) 
VALUES 
	("-NEjNMlHyJSDavNvGMOS", "Prueba de errores"),
	("-NFNpIBY0CgS5mffH1DP", "Segundo error"),
	("-NGW0P8_US5050iDEIap", "Tercer error");
    
INSERT INTO Event (fecha, descripcion, id, nombre, portadaImgPath)
VALUES 
	('2022-08-29 10:20:14.781', 'Lo sentimos, estamos cerrados por vacaciones. Nos vemos el 1 de septimbre. Más información en nuestras redes sociales', '2022-08-29T10:20:14.781Z', 'cerrados', 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fcerrados?alt=media&token=c626e65a-134b-4fd8-95b8-a7b203af79aa'),
	('2022-08-22 18:34:52.142', '¡Tomad asiento que despegamos! Bienvenidos a Bibliotecapp. El mejor sitio para reservar tus libros favoritos de la biblioteca.', '2022-08-22T18:34:52.142Z', 'primer evento', 'https://firebasestorage.googleapis.com/v0/b/bibliotecapp-4cf6b.appspot.com/o/images%2Fprimer%20evento?alt=media&token=b0b7b7a4-0286-454b-ab96-3a27a4e8f59f');
    
INSERT INTO Reserva (id, fechaIni, fechaFin, isbn, lectorId) 
VALUES 
('NGQrSf2NjV3c1HgYM37', '11/09/2022', '11/24/2022', '9788417694692', 'D8Qov6gJwVWdE6f4LzrHGKDXd1t1'),
('NGQv5vTv1pda_tisN8l', '11/09/2022', '11/24/2022', '9788425361791', 'D8Qov6gJwVWdE6f4LzrHGKDXd1t1');
    
INSERT INTO Disponibilidad (estado, isbn, localizacion) 
VALUES
('Disponible', '9788408260486', 'En Biblioteca'),
('Disponible', '9788408261896', 'En Biblioteca'),
('Disponible', '9788411017992', 'En Biblioteca'),
('Disponible', '9788413141220', 'En Biblioteca'),
('Disponible', '9788413927480', 'En Biblioteca'),
('Disponible', '9788417694692', 'En Biblioteca'),
('Disponible', '9788418483448', 'En Biblioteca'),
('Disponible', '9788420461052', 'En Biblioteca'),
('Disponible', '9788420462134', 'En Biblioteca'),
('Disponible', '9788441546110', 'En Biblioteca'),
('Disponible', '9788466356718', 'En Biblioteca'),
('Disponible', '9788466367844', 'En Biblioteca'),
('Disponible', '9788466428828', 'En Biblioteca'),
('Disponible', '9788467951219', 'En Biblioteca'),
('Disponible', '9788425361791', 'En Biblioteca'),
('Disponible', '9788491295976', 'En Biblioteca');   

INSERT INTO ColaReservas (idUser, isbn) 
VALUES
('D8Qov6gJwVWdE6f4LzrHGKDXd1t1','9788408260486');
    
SET foreign_key_checks = 1;