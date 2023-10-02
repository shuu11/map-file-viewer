'use client'

import { useEffect } from 'react'

import { useAtom } from 'jotai'
import { variablesAtom } from '@s/jotai/variables'

import { parseMapFileContent } from '@l/parseMapFileContent'

export default function Fetch() {
	const [variables, setVariables] = useAtom(variablesAtom)

	const onFileUploaded = (content: string) => {
		const extractedData = parseMapFileContent(content)
		setVariables(extractedData)
	}

	useEffect(() => {
		fetch('/map/aaa.map')
			.then((response) => response.blob())
			.then((blob) => {
				const reader = new FileReader()

				reader.onload = () => {
					const content = reader.result as string
					onFileUploaded(content)
				}

				reader.readAsText(blob)
			})
	}, [])

	return (
		<div>
			<p>Fetch</p>
		</div>
	)
}
