# 🦻 Transcripción IoT - Accesibilidad para Personas Mayores

Aplicación web de transcripción en tiempo real diseñada para mejorar la comunicación de personas de la tercera edad con problemas auditivos.

## 📋 Descripción del Proyecto

Este proyecto fue desarrollado para un hackathon de IoT con el objetivo de resolver problemas de comunicación para personas de la tercera edad que no pueden escuchar bien. La aplicación captura audio del micrófono del dispositivo y lo transcribe en tiempo real, mostrando el texto en pantalla con tamaño ajustable y alta legibilidad.

## 🏗️ Estructura del Proyecto

```
IoT-Hack/
├── frontend/          # Aplicación Next.js (Puerto 3000)
│   ├── src/
│   │   ├── app/      # Páginas y componentes
│   │   └── ...
│   └── package.json
│
├── backend/          # API Node.js + WebSocket (Puerto 3001) - Por implementar
│   ├── src/
│   └── package.json
│
└── README.md
```

## 🚀 Tecnologías

### Frontend

- **Next.js 16** - Framework de React
- **React 19** - Biblioteca UI
- **Tailwind CSS 4** - Estilos
- **Socket.io Client** - WebSocket para comunicación en tiempo real
- **Web Speech API** - Transcripción de voz (próximamente)

### Backend (por implementar)

- **Node.js + Express** - Servidor API
- **Socket.io** - WebSocket server
- **Speech-to-Text API** - Google Cloud / Azure / AssemblyAI

## 🎯 Características

- ✅ Interfaz accesible con texto grande y legible
- ✅ Control de tamaño de texto ajustable
- ✅ Diseño responsive y moderno
- 🚧 Grabación de audio en tiempo real (en desarrollo)
- 🚧 Transcripción en tiempo real (en desarrollo)
- 🚧 Historial de conversaciones (planificado)
- 🚧 Modo alto contraste (planificado)

## 📦 Instalación

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Clonar el Repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd IoT-Hack
```

### Configurar Frontend

```bash
cd frontend
npm install
```

### Configurar Backend (próximamente)

```bash
cd backend
npm install
cp .env.example .env
```

## 🏃‍♂️ Ejecutar en Desarrollo

### Frontend (Puerto 3000)

```bash
cd frontend
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Backend (Puerto 3001) - Próximamente

```bash
cd backend
npm run dev
```

## 🌿 Estrategia de Branches

### Branches Principales

- `main` - Código estable y listo para producción
- `develop` - Branch de desarrollo principal

### Flujo de Trabajo

```bash
# 1. Crear una nueva feature desde develop
git checkout develop
git pull origin develop
git checkout -b feature/nombre-descriptivo

# 2. Desarrollar y hacer commits
git add .
git commit -m "feat: descripción del cambio"

# 3. Push y crear Pull Request
git push origin feature/nombre-descriptivo
```

### Ejemplos de Nombres de Branches

```bash
# Frontend
feature/audio-capture
feature/transcription-display
feature/text-size-control
feature/theme-toggle

# Backend
feature/websocket-server
feature/speech-to-text-api
feature/audio-processing

# Fixes
fix/audio-permissions
fix/responsive-layout
```

### Convención de Commits

```bash
feat:     # Nueva funcionalidad
fix:      # Corrección de bug
docs:     # Cambios en documentación
style:    # Formato, estilo de código
refactor: # Refactorización de código
test:     # Añadir tests
chore:    # Mantenimiento, configuración
```

## 🎨 Guía de Desarrollo

### Crear un Nuevo Componente (Frontend)

```bash
# Estructura recomendada
frontend/src/components/NombreComponente/
├── NombreComponente.jsx
├── NombreComponente.module.css (opcional)
└── index.js
```

### Crear un Nuevo Hook

```bash
frontend/src/hooks/useNombreHook.js
```

### Crear un Servicio

```bash
frontend/src/services/nombreService.js
```

## 📱 Características de Accesibilidad

- **Texto grande**: Tamaños desde 1.5rem hasta 3rem
- **Alto contraste**: Colores con suficiente contraste para visibilidad
- **Interfaz simple**: Botones grandes y claros
- **Responsive**: Funciona en móviles, tablets y desktop
- **Sin distracciones**: Diseño limpio y enfocado

## 🤝 Colaboradores

[Nombres del equipo del hackathon]

## 📄 Licencia

MIT License

## 🆘 Troubleshooting

### Error al instalar dependencias

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ya en uso

```bash
# Cambiar puerto en frontend
npm run dev -- -p 3001
```

### Problemas con Tailwind CSS

```bash
# Verificar que existe tailwind.config.js
npx tailwindcss init -p
```

## 📞 Soporte

Para preguntas o problemas, por favor abre un issue en GitHub.

---
