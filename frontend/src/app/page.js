'use client'

import { useState } from 'react'

export default function Home() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [fontSize, setFontSize] = useState('text-2xl')

  const handleStartRecording = () => {
    setIsRecording(true)
    setTranscription('Grabación iniciada... (funcionalidad de transcripción por implementar)')
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const fontSizes = {
    'text-xl': 'Pequeño',
    'text-2xl': 'Mediano',
    'text-3xl': 'Grande',
    'text-4xl': 'Extra Grande'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-900 mb-2">
            🦻 Transcripción en Tiempo Real
          </h1>
          <p className="text-xl text-gray-700">
            Ayudando a personas de la tercera edad a comunicarse mejor
          </p>
        </header>

        {/* Controles */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Controles</h2>
            
            {/* Control de tamaño de texto */}
            <div className="flex gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Tamaño:</label>
              <select 
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Object.entries(fontSizes).map(([size, label]) => (
                  <option key={size} value={size}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de grabación */}
          <div className="flex justify-center">
            {!isRecording ? (
              <button
                onClick={handleStartRecording}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all transform hover:scale-105"
              >
                🎤 Iniciar Grabación
              </button>
            ) : (
              <button
                onClick={handleStopRecording}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all transform hover:scale-105 animate-pulse"
              >
                ⏹️ Detener Grabación
              </button>
            )}
          </div>
        </div>

        {/* Área de transcripción */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transcripción</h2>
          <div className="min-h-[300px] bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            {transcription ? (
              <p className={`${fontSize} leading-relaxed text-gray-900`}>
                {transcription}
              </p>
            ) : (
              <p className="text-xl text-gray-400 text-center mt-20">
                Presiona el botón de grabación para comenzar...
              </p>
            )}
          </div>
        </div>

        {/* Información */}
        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">
            💡 Proyecto de hackathon IoT - Accesibilidad para personas mayores
          </p>
        </div>
      </div>
    </main>
  )
}