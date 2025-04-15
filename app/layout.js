import '../styles/globals.css'

export const metadata = {
  title: '모바일 청첩장',
  description: '초대합니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#f5f0c8]">{children}</body>
    </html>
  )
}
