Vue.component('modal', {
    data () {
        return {
            title: "Hola Leandro, esto es un modal."
        }
    },
    methods: {
        closeModal () {
            this.$emit('close')
        }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }}</h3>
            <div>
                <slot name="content"></slot>
            </div>
            <footer>
              <button v-on:click="closeModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data () {
        return {
            showModal: false
        }
    },
    methods: {
        toggleModal () {
            this.showModal = !this.showModal
        }
    }
  })