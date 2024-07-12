CREATE TABLE "prenda" (
  "id_prenda" SERIAL PRIMARY KEY,
  "id_cat" SERIAL,
  "id_marca" SERIAL,
  "nombre_prenda" varchar(100),
  "descripcion_prenda" varchar(250),
  "talla_prenda" varchar(10),
  "color_prenda" varchar(30),
  "precio_prenda" double,
  "img_prenda" text
);

CREATE TABLE "categoria" (
  "id_cat" SERIAL PRIMARY KEY,
  "nombre_cat" varchar(50),
  "descripcion_cat" varchar(255)
);

CREATE TABLE "marca" (
  "id_marca" SERIAL PRIMARY KEY,
  "nombre_marca" varchar(50),
  "descripcion_marca" varchar(255)
);

CREATE TABLE "cliente" (
  "id_cliente" SERIAL PRIMARY KEY,
  "id_usuario" SERIAL,
  "cedula_cliente" varchar(10),
  "primer_nombre_cliente" varchar(50),
  "segundo_nombre_cliente" varchar(50),
  "primer_apellido_cliente" varchar(50),
  "segundo_apellido_cliente" varchar(50),
  "direccion_cliente" varchar(100),
  "ciudad_cliente" varchar(50),
  "correo_cliente" varchar(100)
);

CREATE TABLE "venta" (
  "id_venta" SERIAL PRIMARY KEY,
  "id_cliente" SERIAL,
  "fecha_venta" date,
  "total_venta" double,
  "metodo_pago_venta" varchar(50)
);

CREATE TABLE "detalle_venta" (
  "id_detalle_venta" SERIAL PRIMARY KEY,
  "id_venta" SERIAL,
  "cantidad" integer,
  "total" double
);

CREATE TABLE "carrito" (
  "id_carrito" SERIAL PRIMARY KEY,
  "id_cliente" SERIAL,
  "cantidad" integer
);

CREATE TABLE "carrito_prenda" (
  "id_carrito" SERIAL,
  "id_prenda" SERIAL,
  "cantidad" int
);

CREATE TABLE "usuario" (
  "id_usuario" SERIAL PRIMARY KEY,
  "id_rol" integer,
  "username" varchar(50),
  "clave" varchar(50)
);

CREATE TABLE "rol" (
  "id_rol" SERIAL PRIMARY KEY,
  "nombre" varchar(50),
  "descripcion" varchar(255)
);

ALTER TABLE "prenda" ADD FOREIGN KEY ("id_cat") REFERENCES "categoria" ("id_cat");

ALTER TABLE "prenda" ADD FOREIGN KEY ("id_marca") REFERENCES "marca" ("id_marca");

ALTER TABLE "usuario" ADD FOREIGN KEY ("id_usuario") REFERENCES "cliente" ("id_usuario");

ALTER TABLE "venta" ADD FOREIGN KEY ("id_cliente") REFERENCES "cliente" ("id_cliente");

ALTER TABLE "detalle_venta" ADD FOREIGN KEY ("id_venta") REFERENCES "venta" ("id_venta");

ALTER TABLE "carrito_prenda" ADD FOREIGN KEY ("id_carrito") REFERENCES "carrito" ("id_carrito");

ALTER TABLE "carrito_prenda" ADD FOREIGN KEY ("id_prenda") REFERENCES "prenda" ("id_prenda");

ALTER TABLE "carrito" ADD FOREIGN KEY ("id_cliente") REFERENCES "cliente" ("id_cliente");

ALTER TABLE "usuario" ADD FOREIGN KEY ("id_rol") REFERENCES "rol" ("id_rol");
