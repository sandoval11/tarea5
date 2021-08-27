// Creamos la tercera coleccion "ventas"
db.createCollection("ventas")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "ventas"

db.ventas.insertMany( [ { id_venta: 101, nombre_cliente: "Maritza", sexo: "F", apellidos_cliente: "Rivas", nombre_producto: "Combo_premium", nombre_evento: "Boda", fecha : new Date(2021,05,21), precio_producto: 700, total_combo: 700, total_factura: 700 }, { id_venta: 102, nombre_cliente: "Pedro", apellidos_cliente: "Ramos", nombre_producto: "Combo_medium", nombre_evento: "Bautizmo", precio_producto: 600, total_combo: 600, total_factura: 600 },
 { id_venta: 103, nombre_cliente: "Raul", sexo: "M", apellidos_cliente: "Beltran", nombre_producto: "Combo_premium", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,27), precio_producto: 700, total_combo: 700, total_factura: 700 },
  { id_venta: 104, nombre_cliente: "Gloria", sexo: "F", apellidos_cliente: "De la O", nombre_producto: "Combo_familiar", nombre_evento:"Bautizmo", fecha : new Date(2021,05,23), precio_producto: 550, total_combo: 550, total_factura: 550 },
  { id_venta: 105, nombre_cliente: "Gerson", sexo: "M", apellidos_cliente: "Bairez", nombre_producto: "Combo_basico", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,08), precio_producto: 150, total_combo: 150, total_factura: 150 },
   { id_venta: 106, nombre_cliente: "Maria", sexo: "F", apellidos_cliente: "Guevara Paiz", nombre_producto: "Combo_personalizado", nombre_evento: "Baby shower", fecha : new Date(2021,05,21), precio_producto: 00, total_combo: 00, total_factura: 00 },
   { id_venta: 107, nombre_cliente: "Cesar", sexo: "M", apellidos_cliente: "Funes", nombre_producto: "Combo_premium", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,09), precio_producto: 700, total_combo: 700, total_factura: 700 },
    { id_venta: 108, nombre_cliente: "Jaime", sexo: "M", apellidos_cliente: "Penedo", nombre_producto: "Combo_familiar", nombre_evento: "Bautizmo", fecha : new Date(2021,05,12), precio_producto: 550, total_combo: 550, total_factura: 550 },
    { id_venta: 109, nombre_cliente: "Cristian", sexo: "M", apellidos_cliente: "Villalta", nombre_producto: "Combo_basico", nombre_evento: "boda", fecha : new Date(2021,05,18), precio_producto: 150, total_combo: 150, total_factura: 150 },
     { id_venta: 110, nombre_cliente: "Gisselle", sexo: "F", apellidos_cliente: "Barrios", nombre_producto: "Combo_familiar", nombre_evento: "Bautizmo", fecha : new Date(2021,05,10), precio_producto: 550, total_combo: 550, total_factura: 550 } ] )

// vemos los datos registrados en la coleccion "ventas"
db.ventas.find().pretty()