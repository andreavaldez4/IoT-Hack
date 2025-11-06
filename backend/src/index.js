import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'

// Cargar variables de entorno
dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// Middleware
app.use(cors())
app.use(express.json())

// Rutas básicas
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend de Transcripción IoT',
    status: 'running',
    version: '1.0.0'
  })
})

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  })
})

// WebSocket - Manejo de conexiones
io.on('connection', (socket) => {
  console.log('✅ Cliente conectado:', socket.id)

  // Escuchar audio del cliente
  socket.on('audio-data', (audioData) => {
    console.log('🎤 Audio recibido del cliente:', socket.id)
    
    // Aquí procesarías el audio y lo enviarías a un servicio de transcripción
    // Por ahora, solo simulamos una transcripción
    
    // Simular transcripción (reemplazar con API real)
    const mockTranscription = {
      text: 'Texto transcrito (simulado)',
      timestamp: Date.now(),
      confidence: 0.95
    }
    
    // Enviar transcripción de vuelta al cliente
    socket.emit('transcription', mockTranscription)
  })

  // Manejo de desconexión
  socket.on('disconnect', () => {
    console.log('❌ Cliente desconectado:', socket.id)
  })

  // Manejo de errores
  socket.on('error', (error) => {
    console.error('⚠️  Error en socket:', error)
  })
})

// Iniciar servidor
const PORT = process.env.PORT || 3001
httpServer.listen(PORT, () => {
  console.log('🚀 Servidor corriendo en puerto:', PORT)
  console.log('🔌 WebSocket server activo')
  console.log('📡 Frontend esperado en:', process.env.FRONTEND_URL || 'http://localhost:3000')
})

// Manejo de errores del servidor
process.on('unhandledRejection', (error) => {
  console.error('❌ Error no manejado:', error)
  process.exit(1)
})

