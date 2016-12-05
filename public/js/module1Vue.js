var app = new Vue({
  el: '#appVue',
  data: {
    toto: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.toto = this.toto.split('').reverse().join('')
    }
  }
})