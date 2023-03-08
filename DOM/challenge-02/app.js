new Vue({
    el: '#desafio',
    data: {
        inputValue: ''
    },
    methods: {
        showAlert() {
            alert('The button has been clicked!');
        },
        handleInputChange(event) {
            const { target: { value } } = event;
            this.inputValue = value;
        }
    }
})