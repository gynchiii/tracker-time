<template>
      <Form @aoSalvarTasks="salvarTasks"/>
      <div class="lista">
        <Tasks v-for="(Tasks, index) in Taskss" :key="index" :Tasks="Tasks"/>
            <Box v-if="listaEstaVazia">
              Hmmm... seems like u not so much productive today...
            </Box>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../components/Form.vue'
import Tasks from '../components/Tasks.vue'
import Box from '../components/Box.vue'
import ITasks from '../interfaces/ITasks'

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Tasks,
    Box
  },
  data () {
    return {
      Taskss: [] as ITasks[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.Taskss.length === 0
    }
  },
  methods: {
    salvarTasks (Tasks: ITasks) {
      this.Taskss.push(Tasks)
    },
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
