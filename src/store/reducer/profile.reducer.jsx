export const profileReducer = (profileData, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FETCH_PROFILE':
			return profileData;
			break;
		default:
			break;
	}
};
