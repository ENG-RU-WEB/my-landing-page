import './globals.css'
import { Sarabun } from 'next/font/google'

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '700'], // ใช้เท่าที่จำเป็น
  display: 'swap',
})

export const metadata = {
  title: 'ระบบลงทะเบียนนักศึกษา',
  description: 'เว็บไซต์ช่วยอาจารย์ในการตรวจสอบการลงทะเบียน',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={sarabun.className}>
      <body>{children}</body>
    </html>
  )
}
