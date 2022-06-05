<template>
  <section class="projects">
    <h1 class="title">project</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName">
          Project Name
        </label>
        <input type="text" class="input" v-model="projectName" id="projectName">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Save
        </button>
      </div>

    </form>
  </section>
</template>

<script lang="ts">
import IProject from "../interfaces/IProject";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      projectName: '',
      projects: [] as IProject[]
    }
  },
  methods: {
    save() {
      const project: IProject = {
        name: this.projectName,
        id: new Date().toISOString()
      }
      this.projects.push(project);
      this.projectName = ''
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
