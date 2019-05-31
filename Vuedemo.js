var app = new Vue({
    el:'#hello',
    data:{
        message:'Hello World!'
    }
})
var app1 = new Vue({
    el:'#see',
    data:{
        seen:true
    }
})
var turn = new Vue({
    el:'#turn',
    data:{
        words:'',
        aftermessage:''
    },
    methods: {
        reverseMessage: function () {
            this.aftermessage = this.words.split('').reverse().join('')
        }
    }
})
var app2 = new Vue({
    el:'#static',
    data:{
        isActive:true,
        hasError:false
    }
})
var app3 = new Vue({
    el:'#style',
    data:{
        styleObject:{
            color:'red',
            fontSize:'30px',
            judge:false
        }
    }
})
var app4 = new Vue({
    el:'#if',
    data:{
        judge:false
    }

})
var app5 = new Vue({
    el:'#vif',
    data:{
        type:'d'
    }
})
var app7 = new Vue({
    el: '#example-1',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})
new Vue({
    el: '#example-2',
    data: {
        checkedNames: []
    }
})
new Vue({
    el: '#example-3',
    data: {
        selected: ''
    }
})
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">点击我{{ count }}次.</button>'
})
new Vue({ el: '#components-demo' })
new Vue({ el: '#components-demo1' })