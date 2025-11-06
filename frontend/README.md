# Frontend - Transcripción IoT

Aplicación web Next.js para transcripción en tiempo real, diseñada para personas de la tercera edad con problemas auditivos.

## 🚀 Tecnologías

- Next.js 16
- React 19
- Tailwind CSS 4
- Socket.io Client (para WebSocket)
- Web Speech API

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
```

## 🏃‍♂️ Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build para Producción

```bash
npm run build
npm start
```

## 📁 Estructura

```
src/
├── app/
│   ├── layout.js       # Layout principal
│   ├── page.js         # Página principal
│   └── globals.css     # Estilos globales
├── components/         # Componentes reutilizables (por agregar)
├── hooks/             # Custom hooks (por agregar)
└── services/          # Servicios (WebSocket, Audio) (por agregar)
```

## 🎯 Próximos Pasos

1. Implementar captura de audio del micrófono
2. Conectar con WebSocket del backend
3. Integrar API de transcripción
4. Agregar más opciones de accesibilidad
5. Implementar historial de conversaciones

## 🔧 Variables de Entorno

- `NEXT_PUBLIC_API_URL`: URL del backend API
- `NEXT_PUBLIC_WS_URL`: URL del WebSocket server

