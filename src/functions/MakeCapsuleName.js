function MakeCapsuleName(capsule) {
	let name = '';
	if (capsule.collection) {
		if (capsule.collection.includes('Festive'))
			name += 'Festive';
		else
			name += capsule.collection;
		name += ' ';
	}
	name += capsule.name;
	return name;
}

export default MakeCapsuleName;
