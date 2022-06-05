<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="StopWatchRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!StopWatchRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopWatch from './StopWatch.vue'

export default defineComponent({
  name: "Timer",
  emits: ['toTimerFinished'],
  components: {
    StopWatch
  },
  data () {
    return {
      tempoEmSegundos: 0,
      StopWatch: 0,
      StopWatchRodando: false
    }
  },
  methods: {
    iniciar () {
      // começar a contagem
      // 1 seg = 1000 ms
      this.StopWatchRodando = true
      this.StopWatch = setInterval(() => {
        this.tempoEmSegundos += 1        
      }, 1000)
    },
    finalizar () {
      this.StopWatchRodando = false
      clearInterval(this.StopWatch)
      this.$emit('toTimerFinished', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
    }
  }
});
</script>