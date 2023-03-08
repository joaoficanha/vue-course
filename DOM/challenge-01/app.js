new Vue({
    el: '#desafio',
    data: {
        name: 'João Pedro Ficanha',
        age: 22,
        imageSrc: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multiplyAgeBy3() {
            return this.age * 3
        },
        randomize() {
            return Math.random()
        }
    }
})