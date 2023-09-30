'use client'

import { useMyDropZone } from '@h/useMyDropZone'


export default function Dropzone() {
	const { getRootProps, getInputProps, isDragActive } = useMyDropZone()

	return (
		<div {...getRootProps()}>
			<div className="border border-t-2 border-r-2 border-b-2 border-l-2 border-dashed border-gray-400 p-10 text-center">
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
		</div>
	)
}
