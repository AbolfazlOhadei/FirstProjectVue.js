var firstApp = new Vue({
    el: '#ChangeTitle',
    data: {
        Title: 'Hello Vue.js'
    },
    methods: {
        change: function (event) {
            this.Title = event.target.value;
        }
    }
});