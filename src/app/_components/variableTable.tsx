type Props = {
	data: { variable: string; address: string }[];
	filter: string;
};

export default function VariableTable(props: Props) {
	const { data, filter } = props;

	const filteredData = data.filter((item) => item.variable.includes(filter));

	return (
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
	);
}
