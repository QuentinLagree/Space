let checkfields = (fields) => {
	let end = {
		errors: {},
		values: []
	};
	let error = false
	let completed = []
	for (let key in fields) {
		let field = fields[key]
		if (field === '' || field === undefined) {
			return end = {error: true, field: key, fieldvalue: field, values: completed}
		} else {
			completed.push(field)
		}
		end = {values: completed}
	}
	return end

}

module.exports = checkfields
