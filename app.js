Vue.component('CoinDetail', {
    props: ['coin'],

    data () {
        return {
            showPrices: false,
            value: 0,
        }
    },

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D')
        }
    },

    computed: {
        title () {
            return `${this.coin.name} - ${this.coin.symbol}`
        },

        convertedValue () {
            if (!this.value) {
                return 0
            }
            return this.value / this.coin.price
        }
    },

    template: `
    <div>
        <img v-on:mouseover="toggleShowPrices"
            v-on:mouseout="toggleShowPrices" 
            v-bind:src="coin.img" 
            v-bind:alt="coin.name"
        >
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
            {{ title }}
            <span v-if="coin.changePercent > 0">👍</span>
            <span v-else-if="coin.changePercent < 0">👎</span>
            <span v-else="coin.changePercent == 0">🤞</span>
            <span v-on:click="toggleShowPrices">
                {{ showPrices ? '🙈' : '🙉' }}
            </span>
        </h1>

        <input type="number" v-model="value">
        <span>{{ convertedValue }}</span>

        <slot name='text'></slot>
        <slot name='link'></slot>

        <ul v-show=showPrices>
            <li v-for="(p, i) in coin.pricesWithDays" 
                v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
                v-bind:key="p.day"
                class="uppercase">
                {{ i }} - {{ p.day }} - {{ p.value }}
            </li>
        </ul>
    </div>
    `
})

new Vue({
    el: '#app',
    data(){
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 100,
                price: 8500,
                pricesWithDays: [
                    {day: 'Lunes', value: 5200},
                    {day: 'Martes', value: 8700},
                    {day: 'Miercoles', value: 10000},
                    {day: 'Jueves', value: 5100},
                    {day: 'Viernes', value: 8500},
                    {day: 'Sabado', value: 6500},
                    {day: 'Domingo', value: 7900},
                ],
            },
            color: 'f4f4f4',
        }
    },

    methods: {
        updateColor(color) {
            this.color = color || this.color.split('').reverse().join('')
        }
    }
})