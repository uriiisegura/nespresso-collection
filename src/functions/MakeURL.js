function MakeURL(text) {
	if (Array.isArray(text)) {
		const url = [];
		text.forEach(w => {
			url.push(MakeURL(w));
		});
		return url;
	}
	if (typeof text !== 'string') return text;
	let url = text.normalize('NFD');

	url = url.replaceAll(/[\u0300-\u036f]/g, '');
	url = url.replaceAll(' ', '-');
	url = url.replaceAll('&', 'and');

	return url.toLowerCase();
}

export default MakeURL;
