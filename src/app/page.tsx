import Main from '@c/layout/main'
import Header from '@c/layout/header'
import Hr from '@c/layout/hr'

export default function Home() {
	return (
		<>
			<div className="max-w-[1920px] mx-auto px-[2rem] mb-[10rem]">
				<Header />
				<Hr />
				<Main />
			</div>
		</>
	)
}
