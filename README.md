# Los Patricios Gourmet — piloto UI/UX

Piloto navegable de la futura tienda gourmet para Perú y Chile. Es una demostración visual: las fotografías generadas, nombres de selección, presentaciones, precios, stock y pedidos administrativos son provisionales. No registra pedidos, procesa pagos ni envía los datos del checkout.

## Stack

- Next.js App Router con exportación estática, React y TypeScript.
- Tailwind CSS y estilos editoriales propios.
- Motion para entradas sutiles; se respeta `prefers-reduced-motion`.
- Carrito de prueba en `localStorage`, separado por país.
- Datos de muestra tipados en `src/data/markets.ts`.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada y selección de país. |
| `/pe`, `/cl` | Home editorial por mercado. |
| `/pe/catalogo`, `/cl/catalogo` | Catálogo y filtros por país. |
| `/[country]/producto/[slug]` | Producto y selección de peso fijo. |
| `/[country]/carrito` | Variantes, cantidades y subtotal. |
| `/[country]/checkout` | Datos, delivery y confirmación simulada. |
| `/admin-demo` | Resumen, productos, inventario, pedidos y delivery ficticios. |

Perú muestra únicamente caviar y trufas. Chile muestra caviar, trufas, Wagyu y foie gras.

## Ejecutar

```sh
npm ci
npm run dev
```

Para generar el sitio estático: `npm run build`. El resultado queda en `out/`.

## Recursos visuales

El logotipo se recortó de una página del manual de marca entregado por la clienta y se eliminó su fondo blanco. Se usa una versión de tinta oscura en superficies claras y otra de tinta clara en superficies oscuras. Cuando estén disponibles los archivos originales del logo, conviene sustituir estos PNG por el SVG autorizado. Las cuatro fotografías son imágenes provisionales generadas para el piloto con la herramienta integrada de generación de imágenes. Los prompts y el uso previsto constan en [ASSETS.md](ASSETS.md).

## Pendiente antes de producción

Catálogo, fotos, presentaciones, precios y stock reales; zonas y tarifas de delivery; cuentas y modalidad de Mercado Pago; backend y protección administrativa; hosting definitivo, hoy pendiente de validación con TI.
