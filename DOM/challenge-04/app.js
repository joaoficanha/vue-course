new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		danger: true,
		class3: '',
		class4: '',
		backgroundColor: '',
		style1: {
			width: '100px',
			height: '100px'
		},
		progress: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 === 'destaque' ? 'encolher' : 'destaque'
			} , 1000)
		},
		iniciarProgresso() {
			let value = 0;
			const temporizer = setInterval(() => {
				value += 5;
				this.progress = `${value}%`

				if (value === 100) clearInterval(temporizer)
			}, 500)
		},
		setDanger(event) {
			const { target: { value } } = event;

			if (value === 'true') {
				this.danger = true;
			} else if (value === 'false') {
				this.danger = false;
			}
		}
	}
})
