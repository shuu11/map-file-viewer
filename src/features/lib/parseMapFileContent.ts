export const parseMapFileContent = (content: string): { variable: string; address: string }[] => {
	const lines = content.split('\n')
	const variablesAddresses: { variable: string; address: string }[] = []

	for (let i = 0; i < lines.length - 1; i += 2) {
		const variableName = lines[i].trim()
		if (variableName.startsWith('_')) {
			const addressLine = lines[i + 1].trim().split(/\s+/) // Trimming spaces and tabs from the beginning and end
			if (addressLine && addressLine[0]) {
				// Removing the underscore from the beginning of the variable name
				const cleanedVariableName = variableName.slice(1)

				// Extracting the last 4 characters of the address
				const address = addressLine[0].substring(4, 8) // Assuming the address starts from the 5th character

				variablesAddresses.push({ variable: cleanedVariableName, address })
			}
		}
	}

	return variablesAddresses
}
