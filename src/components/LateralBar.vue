<template>
  <header>
      <h1 class="flex flex-center mb-4 mt-3">
        <img width="70" src="../assets/logo.png" alt="">  
      </h1>
      <button class="button" @click="alterarTema">
        {{ textBotao }}
      </button>
      <nav class="panel mt-5"> 
          <ul>
            <li>
              <router-link to="/" class="links">
                <i class="fas fa-tasks"></i>
                Tasks
              </router-link>
            </li>
            <li>
              <router-link to="/projects" class="links">
                <i class="fas fa-project-diagram"></i>
                Projects
              </router-link>
            </li>
          </ul>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LateralBar',
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textBotao () {
      if (this.modoEscuroAtivo) {
        return 'Turn Off Darkmode'
      }
      return 'Turn On Darkmode'
    }
  },
  methods: {
    alterarTema () {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
  background-color: beige;
}
.link.router-link-active {
  color: #FAF0CA;
}
.button:hover { 
  background-color: #0d3b66;
  color: #fff;
  border-radius: 40;
}
</style>
