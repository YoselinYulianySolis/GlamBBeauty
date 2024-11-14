<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Online de Maquillaje</title>
    <link rel="stylesheet" href="estilos.css"> <!-- Vinculamos el archivo CSS -->
</head>
<body>
    <header>
        <div class="logo">
            <h1>Tienda de Maquillaje</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#categorias">Categorías</a></li>
                <li><a href="#carrito">Carrito</a></li>
            </ul>
        </nav>
    </header>
    <aside id="categorias">
        <h2>Clasificar por</h2>
        <ul>
            <li><a href="#">Bases</a></li>
            <li><a href="#">Labiales</a></li>
            <li><a href="#">Sombras</a></li>
            <li><a href="#">Máscaras de Pestañas</a></li>
        </ul>

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
        <h2>Productos Destacados</h2>
        <div class="producto">
            <img src="base_maquillaje.jpg" alt="Base de Maquillaje">
            <h3>Base de Maquillaje</h3>
            <p>Base líquida para una piel perfecta.</p>
            <p class="precio">$20.00</p>
            <button>Agregar al carrito</button>
        </div>

        <div class="producto">
            <img src="labial.jpg" alt="Labial Rojo">
            <h3>Labial Rojo</h3>
            <p>Labial de larga duración con acabado mate.</p>
            <p class="precio">$12.00</p>
            <button>Agregar al carrito</button>
        </div>

        <div class="producto">
            <img src="sombras_ojos.jpg" alt="Sombras de Ojos">
            <h3>Sombras de Ojos</h3>
            <p>Paleta de sombras con tonos vibrantes.</p>
            <p class="precio">$18.00</p>
            <button>Agregar al carrito</button>
        </div>
    </section>
    <section id="carrito" class="carrito">
        <h2>Tu Carrito</h2>
        <ul>
            <li>Base de Maquillaje - $20.00</li>
            <li>Labial Rojo - $12.00</li>
        </ul>
        <p><strong>Total: $32.00</strong></p>
        <button>Proceder al pago</button>
    </section>
    <footer>
        <p>&copy; 2024 Tienda Online de Maquillaje | Todos los derechos reservados.</p>
    </footer>

    <script src="scripts.js"></script> <!-- Puedes agregar tu archivo JavaScript si lo necesitas -->
</body>
</html>
