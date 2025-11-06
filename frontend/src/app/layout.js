import './globals.css'

export const metadata = {
  title: 'Transcripción IoT - Accesibilidad Auditiva',
  description: 'Aplicación de transcripción en tiempo real para personas de la tercera edad con problemas auditivos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}