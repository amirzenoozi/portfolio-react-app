export class ClassNames {
	private block: string;

	constructor(block: string) {
		this.block = block;
	}

	generate(element: string = '', modifiers: string[] = []): string {
		let className = this.block;

		if (element) {
			className += `__${element}`;
		}

		modifiers.forEach(modifier => {
			if (modifier) {
				className += ` ${this.block}${element ? `__${element}` : ''}--${modifier}`;
			}
		});

		return className;
	}
}
