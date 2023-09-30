'use client'

import { useAtom } from 'jotai'
import { filterAtom } from '@s/jotai/filter'

export default function Input() {
	const [filter, setFilter] = useAtom(filterAtom)

	return (
		<input
			type="text"
			placeholder="Search variable..."
			onChange={(e) => setFilter(e.target.value)}
		/>
	)
}
