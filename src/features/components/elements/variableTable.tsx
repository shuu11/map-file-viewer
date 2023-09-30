'use client'

import { useAtom } from 'jotai'

import { filterAtom } from '@s/jotai/filter'
import { variablesAtom } from '@s/jotai/variables'

export default function VariableTable() {
	const [filter, setFilter] = useAtom(filterAtom)
	const [variables, setVariables] = useAtom(variablesAtom)

	const filteredData = variables.filter((item) => item.variable.includes(filter))

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Variable</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item, index) => (
						<tr key={index}>
							<td>{item.variable}</td>
							<td>{item.address}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
