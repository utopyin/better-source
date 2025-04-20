type Options = {
	key: string;
	secret: string;
	token: string;
};

export const betterSource = (options: Options) => {
	const { key, secret, token } = options;

	return {
		key,
		secret,
		token,
	};
};
