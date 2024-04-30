<template>
  <div class="Jobview">
    <h1>{{ job.title }}</h1>
    <article>
      <b>Description :</b>
      {{ job.description }}
      <br>
      <br>
      <b>Creation date :</b>
      {{ job.date_of_creation }}
      <br>
      <br>
      <b>Salary : </b>
      {{ job.salary }}
      <br>
      <br>
      <b>Degree required :</b>
      {{ job.degree_required }}
      <br>
      <br>
      <b>Years of experience :</b> {{ job.experience_required }}
    </article>
    <router-link to="/"><button>Return</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'JobView',
  props: ['id'],
  data() {
    return {
      job: {}
    };
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      this.job = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
</script>

<style scoped>
.Jobview {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px #888888;
  width: 500px;
  height: fit-content;
  border-radius: 50px;
  padding: 20px;
  border: 1px white solid;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}
article {
  font-family: 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
  font-size: large;
}
</style>
  