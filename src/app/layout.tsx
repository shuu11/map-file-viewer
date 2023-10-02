import 'windi.css' // eslint-disable-line import/no-unresolved
import 'styles/styles.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

// font
const roboto_normal = Roboto({ weight: '400', subsets: ['latin'] })
const roboto_bold = Roboto({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className={roboto_normal.className}>{children}</body>
		</html>
	)
}
