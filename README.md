<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ComprasOnline.com</title>
    <link rel="stylesheet" href="estilos.css"> <!-- Aquí puedes agregar tu archivo CSS -->
</head>
<body>
        <div class="logo">
            <h1>Tienda Maquillaje</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#categorias">Categorías</a></li>
                <li><a href="#carrito">Carrito</a></li>
            </ul>
        </nav>
    </header>
    <section id="productos" class="productos">
        <h2>Productos Destacados</h2>
        <div class="producto">
            <img src="base_maquillaje.jpg" alt="Base de Maquillaje">
            <h3>Base de Maquillaje</h3>
            <p>Descripción corta del producto.</p>
            <p>Precio: $25.00</p>
            <button>Agregar al carrito</button>
        </div>
        <div class="producto">
            <img src="labial.jpg" alt="Labial Rojo">
            <h3>Labial Rojo</h3>
            <p>Descripción corta del producto.</p>
            <p>Precio: $15.00</p>
            <button>Agregar al carrito</button>
        </div>
        <div class="producto">
            <img src="maquillaje_ojos.jpg" alt="Sombras de Ojos">
            <h3>Sombras de Ojos</h3>
            <p>Descripción corta del producto.</p>
            <p>Precio: $18.00</p>
            <button>Agregar al carrito</button>
        </div>
    </section>
    <section id="categorias" class="categorias">
        <h2>Categorías</h2>
        <ul>
            <li><a href="#">Bases y Fondos</a></li>
            <li><a href="#">Labiales</a></li>
            <li><a href="#">Sombras de Ojos</a></li>
            <li><a href="#">Máscara de Pestañas</a></li>
            <li><a href="#">Brochas y Herramientas</a></li>
        </ul>
    </section>
    <section id="carrito" class="carrito">
        <h2>Tu Carrito</h2>
        <ul>
            <li>Base de Maquillaje - $25.00</li>
            <li>Labial Rojo - $15.00</li>
        </ul>
        <p><strong>Total: $40.00</strong></p>
        <button>Proceder al pago</button>
    </section>
    <footer>
        <p>&copy; 2024 Tienda Online de Maquillaje | Todos los derechos reservados.</p>
    </footer>

    <script src="scripts.js"></script> <!-- Aquí puedes agregar tu archivo JavaScript -->
</body>
</html>
