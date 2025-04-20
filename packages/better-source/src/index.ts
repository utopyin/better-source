type Options = {
	key: string;
	secret: string;
};

export const betterSource = (options: Options) => {
	const { key, secret } = options;

	return {
		key,
		secret,
	};
};
