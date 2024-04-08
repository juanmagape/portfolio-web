<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechSolve | Empleados</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../estilos/estilosav.css">
    <link rel="icon" type="images/x-icon" href="../img/logo.png" />
</head>
<body>

<nav class="naveg1">
        <ul>
            <li><a href="../index.html#princi">Inicio</a></li>
            <li><a href="../sobren.html">Sobre Nosotros</a></li>
            <li><a href="http://192.168.109.142/pagina/osticket/upload/open.php">Contáctanos</a></li>
            <li><a href="../blog.html">Recambios ▼</a>
                <ul>
                    <li><a href="../subpaginasrec/1torres.html">Torres</a></li>
                    <li><a href="../subpaginasrec/2fuenteali.html">Fuentes alimentación</a></li>
                    <li><a href="../subpaginasrec/3placabase.html">Placa Base</a></li>
                    <li><a href="../subpaginasrec/4cpu.html">CPU's</a></li>
                    <li><a href="../subpaginasrec/5ram.html">Nuestras RAM</a></li>
                    <li><a href="../subpaginasrec/6disco.html">Discos (SSD)</a></li>
                    <li><a href="../subpaginasrec/7refrigeracion.html">Refrigeración</a></li>
                    <li><a href="../subpaginasrec/8monitor.html">Monitores</a></li>
                    <li><a href="../subpaginasrec/9mouse.html">Ratónes</a></li>
                    <li><a href="../subpaginasrec/10teclado.html">Teclados</a></li>
                    <li><a href=""></a></li>
                </ul>
            </li>
            <li><a href="../index.html#extras" class="active">Extras ▼</a>
                <ul>
                    <li><a href="averia-redes.html">Averias Redes</a></li>
                    <li><a href="averia-linux.html">Averias Linux</a></li>
                    <li><a href="averia-windows.html">Averias Windows</a></li>
                    <li><a href="averia-hardware.html" >Averias Hardware</a></li>
                    <li><a href="faqs-office.html">Faqs sobre Office</a></li>
                    <li><a href="faqs-correo.html">Faqs sobre Correo</a></li>
                    <li><a href="bios.html">Aprende sobre tu bios</a></li>
                    <li><a href="bdd.php">Empleados</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <section id="inicioa">
            <img src="../img/solve-removebg-preview2.png" alt="Foto logo techsolve">
    </section>
<?php

// Conexión a la base de datos
$servername = "localhost"; // Nombre del servidor
$username = "root"; // Usuario de la base de datos
$password = ""; // Contraseña de la base de datos (en este caso, vacía)
$dbname = "pagina_techsolve"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

?>
<div>
  <?php
// Consulta 1: Número de empleados en la empresa
$sql1 = "SELECT COUNT(*) AS NumeroEmpleados FROM Empleados";
$result1 = $conn->query($sql1);

  // Consulta 2: Dinero pagado a los empleados hasta este momento
$sql2 = "SELECT SUM(salario_neto) AS DineroPagado FROM nominas";
$result2 = $conn->query($sql2);

// Consulta 3: Cantidad de IRPF pagado en el último mes
$sql3 = "SELECT SUM(irpf) AS IRPF_Pagado_ultimo_mes FROM nominas WHERE mes = (SELECT MAX(mes) FROM nominas)";
$result3 = $conn->query($sql3);

// Consulta 4: Listado de los empleados de la empresa ordenados por el primer apellido
$sql4 = "SELECT Nombre, Apellido FROM Empleados ORDER BY Apellido";
$result4 = $conn->query($sql4);

// Consulta 5: Cantidad de dinero pagado a la SS
$sql5 = "SELECT SUM(seguridad_social) AS SeguridadSocial_pagada FROM nominas";
$result5 = $conn->query($sql5);
?>

<section class="phpconsult">
</div>

<div class="consulta">
  <?php
  if ($result1 === false) {
    echo "Error en las consultas: " . $conn->error;
  } else {
        // Consulta 1
        $row1 = $result1->fetch_assoc();
        echo "Número de empleados en la empresa: " . $row1["NumeroEmpleados"] . "<br>";
  }
  ?>
</div>

<div class="consulta">
  <?php
  if ($result1 === false) {
    echo "Error en las consultas: " . $conn->error;
  } else {
    // Consulta 2
    $row2 = $result2->fetch_assoc();
    echo "Dinero pagado a los empleados hasta este momento: " . $row2["DineroPagado"] . "<br>";
  }
  ?>
</div>

<div class="consulta">
  <?php
  if ($result1 === false) {
    echo "Error en las consultas: " . $conn->error;
  } else {
    // Consulta 3
    $row3 = $result3->fetch_assoc();
    echo "Cantidad de IRPF pagado en el último mes: " . $row3["IRPF_Pagado_ultimo_mes"] . "<br>";
  }
  ?>
</div>

<div class="consulta">
  <?php
  if ($result1 === false) {
    echo "Error en las consultas: " . $conn->error;
  } else {
    // Consulta 4
    echo "Listado de los empleados de la empresa ordenados por el primer apellido:<br>";
    if ($result4->num_rows > 0) {
        while ($row4 = $result4->fetch_assoc()) {
            echo $row4["Nombre"] . " " . $row4["Apellido"] . "<br>";
        }
    } else {
        echo "No hay empleados registrados";
    }
  }
  ?>
</div>

<div class="consulta">
  <?php
  if ($result1 === false) {
    echo "Error en las consultas: " . $conn->error;
  } else {
        // Consulta 5
        $row5 = $result5->fetch_assoc();
        echo "Cantidad de dinero pagado a la SS: " . $row5["SeguridadSocial_pagada"] . "<br>";
    }
  ?>
</div>


    
<?php
// Cerrar conexión
$conn->close();


?>
</section>
<footer>
        <a href="../index.html">TechSolve 2024</a>
    </footer>
</body>
</html>