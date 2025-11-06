# Backend - Transcripción IoT

Servidor Node.js con WebSocket para procesamiento de audio y transcripción en tiempo real.

## 🚀 Tecnologías

- Node.js + Express
- Socket.io (WebSocket)
- CORS
- dotenv

## 📦 Instalación

```bash
npm install
cp .env.example .env
```

## 🏃‍♂️ Ejecutar en Desarrollo

```bash
npm run dev
```

El servidor correrá en [http://localhost:3001](http://localhost:3001)

## 📡 Endpoints

### REST API

- `GET /` - Info del servidor
- `GET /api/health` - Health check

### WebSocket Events

**Cliente → Servidor:**
- `audio-data` - Enviar datos de audio para transcribir

**Servidor → Cliente:**
- `transcription` - Recibir texto transcrito

## 🔧 Configuración

Edita `.env` para configurar:

```bash
PORT=3001
FRONTEND_URL=http://localhost:3000
```

## 📝 Próximos Pasos

1. ✅ Servidor Express básico
2. ✅ WebSocket con Socket.io
3. 🚧 Integrar API de Speech-to-Text
4. 🚧 Procesamiento de audio
5. 🚧 Almacenamiento de transcripciones
6. 🚧 Autenticación (si es necesario)

## 🛠️ APIs de Transcripción Recomendadas

### Opción 1: Web Speech API (Gratis, en el navegador)
- No requiere backend complejo
- Funciona directamente en el cliente
- Limitado a navegadores compatibles

### Opción 2: Google Cloud Speech-to-Text
- Muy preciso
- 60 minutos gratis al mes
- [Documentación](https://cloud.google.com/speech-to-text)

### Opción 3: AssemblyAI
- Fácil de usar
- API moderna
- $0.00025 por segundo
- [Documentación](https://www.assemblyai.com/docs)

### Opción 4: Azure Speech Services
- Buen soporte de español
- 5 horas gratis al mes
- [Documentación](https://azure.microsoft.com/es-es/services/cognitive-services/speech-to-text/)

## 🧪 Testing

```bash
# Test de conexión WebSocket
npm install -g wscat
wscat -c ws://localhost:3001
```

## 📋 Estructura de Código

```
backend/
├── src/
│   ├── index.js           # Punto de entrada
│   ├── controllers/       # Lógica de negocio (por crear)
│   ├── services/          # Servicios (transcripción, etc.)
│   ├── middleware/        # Middleware de Express
│   ├── routes/            # Rutas adicionales
│   └── config/            # Configuración
└── package.json
```

