type Options = {
	key: string;
};

export const betterSource = (options: Options) => {
	const { key } = options;

	return {
		key,
	};
};
