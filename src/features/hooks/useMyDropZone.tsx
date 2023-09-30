import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useAtom } from 'jotai'
import { variablesAtom } from '@s/jotai/variables'

import { parseMapFileContent } from '@l/parseMapFileContent'

export const useMyDropZone = () => {
	const [variables, setVariables] = useAtom(variablesAtom)

	const onFileUploaded = (content: string) => {
		const extractedData = parseMapFileContent(content)
		setVariables(extractedData)
	}

	const onDrop = useCallback(
		async (acceptedFiles: any) => {
			const file = acceptedFiles[0]
			const reader = new FileReader()
			reader.onload = () => {
				const content = reader.result as string
				onFileUploaded(content)
			}
			reader.readAsText(file)
		},
		[onFileUploaded],
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
		accept: {
			'.map': [],
		},
	})

	return { getRootProps, getInputProps, isDragActive }
}
