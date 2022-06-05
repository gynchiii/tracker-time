<template>
  <div class="box Form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form for a new Task"
      >
        <input
          type="text"
          class="input"
          placeholder="Wich task u wanna start?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <Timer @toTimerFinished="finishTasks"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from './Timer.vue'

export default defineComponent({
  name: "Form",
  emits: ['aoSalvarTasks'],
  components: {
    Timer
  },
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    finishTasks (elapsedTime: number) : void {
      this.$emit('aoSalvarTasks', {
        duracaoEmSegundos: elapsedTime,
        descricao: this.descricao
      })
      this.descricao = ''
    }
  }
});
</script>
<style>
.Form {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>