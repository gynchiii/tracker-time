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
          v-model="description"
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
  emits: ['toSaveTasks'],
  components: {
    Timer
  },
  data () {
    return {
      description: ''
    }
  },
  methods: {
    finishTasks (elapsedTime: number) : void {
      this.$emit('toSaveTasks', {
        durationInSeconds: elapsedTime,
        description: this.description
      })
      this.description = ''
    }
  }
});
</script>
<style>
.Form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>