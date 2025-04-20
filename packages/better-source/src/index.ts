type Options = {
	key: string;
	secret: string;
	token: string;
	refreshToken: string;
};

export const betterSource = (options: Options) => {
	const { key, secret, token, refreshToken } = options;

	return {
		key,
		secret,
		token,
		refreshToken,
	};
};
