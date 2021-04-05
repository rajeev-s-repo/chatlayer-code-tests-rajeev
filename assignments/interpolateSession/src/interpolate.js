const interpolate = (value, session = {}, options = {}) => {
	//TODO
	var statement = value;
	if (!(isEmpty(session))) {
		var keys = Object.keys(session);
		keys.forEach(element => {
			var ToFind = options.leftDelimiter + element.trim() + options.rightDelimiter;
			var ToInsert = session[element.trim()];
			statement = statement.replaceAll(ToFind, ToInsert);
		});
	}
	else {
		var regex = new RegExp(`\\${options.leftDelimiter}(.*?)\\${options.rightDelimiter}`, 'g');
		var matched = regex.exec(statement);
		while (matched != null) {
			statement = statement.replaceAll(matched[0], "");
			matched = regex.exec(statement);
		}

	}
	return statement;
};
function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

module.exports = { interpolate }