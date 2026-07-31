# EXSIM — Landing de promocion

Sitio estatico de una sola pagina para promocionar **EXSIM (Executive Simulation)**, el simulador de negocios de IPADE Business School, IESE Business School y Eureka Simulations.

## Stack

- HTML estatico (`index.html`)
- Tailwind CSS v4 via `@tailwindcss/cli`
- Formulario de contacto via Formspree (AJAX, sin redireccion)
- Deploy automatico a GitHub Pages via GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev     # Compila CSS con watch
npm run build   # Compila CSS minificado para produccion
```

Abre `index.html` en el navegador. El CSS compilado se genera en `dist/output.css`.

## Deploy

Cada push a `main` dispara el workflow de GitHub Actions que:

1. Instala dependencias (`npm ci`)
2. Compila CSS (`npm run build`)
3. Despliega a GitHub Pages

## Estructura

```
index.html              # Pagina principal
src/input.css            # Estilos base y componentes Tailwind
tailwind.config.js       # Sistema de diseno (colores, tipografia)
package.json             # Scripts y dependencias
.github/workflows/       # Deploy automatico
assets/                  # Logos, iconos, placeholders
```

---

## PENDIENTES

Todos los items marcados como `TODO` en el codigo. Ruta y linea para localizarlos:

### Branding y assets visuales

| Pendiente | Archivo | Linea |
|-----------|---------|-------|
| Confirmar azul institucional contra logo IPADE | `tailwind.config.js` | 11 |
| Sustituir por logo IPADE oficial en SVG (header) | `index.html` | 57 |
| Logo IPADE en blanco/claro (footer) | `index.html` | 858 |
| Logos oficiales AACSB, AMBA, EQUIS | `index.html` | 157 |
| Crear imagen OG 1200x630 con branding EXSIM/IPADE | `index.html` | 15 |
| Sustituir por video/captura real de la plataforma | `index.html` | 121 |
| Capturas reales de la plataforma (galeria) | `index.html` | 444 |
| Logos reales de empresas participantes | `index.html` | 607 |

### Datos del coordinador

| Pendiente | Archivo | Linea |
|-----------|---------|-------|
| Foto real del coordinador | `index.html` | 631 |
| Datos reales del coordinador (nombre, cargo) | `index.html` | 637 |
| Correo real del coordinador | `index.html` | 642 |
| Telefono real del coordinador | `index.html` | 649 |
| URL de Calendly o sistema de agenda real | `index.html` | 659 |
| Numero de WhatsApp real y mensaje preescrito | `index.html` | 661 |

### Contenido por confirmar

| Pendiente | Archivo | Linea |
|-----------|---------|-------|
| Testimonios reales (3 testimonios) | `index.html` | 558 |
| Nombre, cargo y empresa de cada testimonio | `index.html` | 568, 570, 574 |
| Tamano de grupo recomendado y numero de equipos | `index.html` | 424 |
| Confirmar disponibilidad de version en ingles | `index.html` | 813 |
| Confirmar criterios de formacion de equipos | `index.html` | 826 |
| Confirmar tiempos de organizacion | `index.html` | 839 |

### Integraciones y configuracion

| Pendiente | Archivo | Linea |
|-----------|---------|-------|
| URL real del dominio (meta og:url) | `index.html` | 13 |
| Insertar script de GA4 o GTM | `index.html` | 46 |
| Endpoint real de Formspree | `index.html` | 685 |
| Enlazar PDF real de ficha tecnica | `index.html` | 114 |
| Enlace a terminos y condiciones | `index.html` | 882 |
