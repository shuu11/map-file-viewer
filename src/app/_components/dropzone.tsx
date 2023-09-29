import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
	onFileUploaded: (content: string) => void;
};

export default function Dropzone(props: Props) {
	const { onFileUploaded } = props;

	const onDrop = useCallback(
		async (acceptedFiles: any) => {
			const file = acceptedFiles[0];
			const reader = new FileReader();
			reader.onload = () => {
				const content = reader.result as string;
				onFileUploaded(content);
			};
			reader.readAsText(file);
		},
		[onFileUploaded]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
		accept: {
			'.map': [],
		},
	});

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
	);
}
