interface Modifier {
	[key: string]: boolean;
}

export class ClassNames {
	private block: string;

	constructor(block: string) {
		this.block = block;
	}

	generate(element: string = '', modifiers: (string | Modifier)[] = []): string {
		let className = this.block;

		if (element) {
			className += `__${element}`;
		}

		modifiers.forEach(modifier => {
			if (typeof modifier === 'object') {
				const key = Object.keys(modifier)[0];
				if (modifier[key]) {
					className += ` ${this.block}${element ? `__${element}` : ''}--${key}`;
				}
			} else if (typeof modifier === 'string') {
				if (modifier) {
					className += ` ${this.block}${element ? `__${element}` : ''}--${modifier}`;
				}
			}
		});

		return className;
	}
}
