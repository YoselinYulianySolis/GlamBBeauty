<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css"> 
    <link rel="icon" type="image/png" href="logo.png">
    <script src="script.js"></script> <!-- Enlace en el head -->
</head>
    <header>
        <center>
        <div class="logo.png">
            <h1>Glam Beauty</h1>
        </div>
    </center>
        <nav>
            <ul>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#categorias">Categorías</a></li>
                <li><a href="#carrito">Carrito</a></li>
            </ul>
        </nav>
    </header>
    <aside id="categorias">
        <h3>Filtrar por precio</h3>
        <form action="#" method="get">
            <label for="precio-bajo">Precio Bajo:</label>
            <input type="number" id="precio-bajo" name="precio-bajo" placeholder="Desde $">
            <label for="precio-alto">Precio Alto:</label>
            <input type="number" id="precio-alto" name="precio-alto" placeholder="Hasta $">
            <button type="submit">Aplicar filtro</button>
        </form>
    </aside>
    <section id="productos">
        <div class="producto">
            <h3>Base de Maquillaje</h3>
            <p>Base líquida para una piel perfecta.</p>
            <img src="base1.jpeg" alt="Base de Maquillaje">
            <img src="base2.jpeg" alt="Base de Maquillaje">
            <img src="base3.jpeg" alt="Base de Maquillaje">
            <p class="precio">$20.00</p>
            <button>Agregar al carrito</button>
        </div>
        <div class="producto">
            <h3>Gloss</h3>
            <p>Efecto Glowy</p>
            <img src="gloss1.jpeg" alt="Labial Rojo">
            <img src="gloss2.jpeg" alt="Labial Rojo">
            <img src="gloss3.jpeg" alt="Labial Rojo">
            <p class="precio">$12.00</p>
            <button>Agregar al carrito</button>
        </div>
        <div class="producto">
            <h3>Rubor</h3>
            <p>Alta pigmentacion vibrante.</p>
            <img src="rubor1.jpeg" alt="rosapimky">
            <img src="rubor2.jpeg" alt="rosapimky">
            <img src="rubor3.jpeg" alt="rosapimky">
            <p class="precio">$18.00</p>
            <button>Agregar al carrito</button>
        </div>
    </section>
    <section id="carrito" class="carrito">
        <h2>Tu Carrito</h2>
        <ul>
            <!-- El carrito comienza vacío -->
        </ul>
        <p><strong>Total: $0.00</strong></p>
        <button>Proceder al pago</button>
    </section>
    <div class="footer"
 
        <p>Calle Obrera #1106 Col.Santa Cecilia, CP.88962, Reynosa,Tamaulipas; 8991311347</p>
        <p>&copy; 2024 Tienda Online de Maquillaje | Todos los derechos reservados.</p>
    </footer>
</div>
    <script src="archivo.js"></script> <!-- Puedes agregar tu archivo JavaScript si lo necesitas -->
</body>
</html>
