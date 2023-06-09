import './globals.css'
import Body from '@/components/layout/Body/Body'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Body>{children}</Body>
    </html>
  )
}
