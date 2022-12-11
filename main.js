const carrito = [];

const listaProductos = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });    
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'));
    listaDeCompra(listaOrdenada);
};

const listaDeCompra = (lista) => {
    do {
        productoNombre = prompt('Que producto desea comprar'+'\n\n'+lista.join('\n'));
        productoCantidad = parseInt(prompt('¿Cuántos queres comprar?'));

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
        
        if (producto) {
            producto.cantidad = productoCantidad;
            agregarAlCarrito(producto, productoCantidad);
        } else {
            alert('El producto no se encuentra en el catálogo!');           
        }
        
        seguirComprando = confirm('¿Desea agregar otro producto?')
        
    } while (seguirComprando);
    
    sumaTotal(carrito);
}


const agregarAlCarrito = (producto, productoCantidad) => {
    carrito.push(producto);  
    console.log(carrito);    
}

const sumaTotal = (carrito) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);

    alert('Detalle de tu compra:'        
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de la compra es: '+precioTotal
        +'\n\nGracias por su compra!'
    );
}

listaProductos();







