import Dropzone from '@c/elements/dropzone'
import Fetch from '@c/elements/fetch'
import Input from '@c/elements/input'
import VariableTable from '@c/elements/variableTable'

export default function Main() {
	return (
		<>
			<Dropzone />
			<Input />
			<VariableTable />
			<Fetch />
		</>
	)
}
