import Content from '@/components/general/content/Content'
import Sidebar from '@/components/general/sidebar/Sidebar'
import SplitScreen from '@/components/general/splitscreen/SplitScreen'
import '@/styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Challenges',
  description: 'Maded by Cengiz Ergun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SplitScreen>
          <Sidebar
            routeDefinitions={[
              {
                linkText: 'Main',
                path: '/',
              },
              {
                linkText: 'Multi-step-form',
                path: '/multi-step-form',
              },
            ]}
          />
          <Content>{children}</Content>
        </SplitScreen>
      </body>
    </html>
  )
}
