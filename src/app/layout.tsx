import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'ID Brasil Sistemas',
	description: 'Aplicação para teste de Front-end',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
