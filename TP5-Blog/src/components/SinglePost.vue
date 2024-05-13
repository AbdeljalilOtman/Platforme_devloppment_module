<template>
  <div class="Jobview">
    <h1>{{ article.title }}</h1>
    <article>
      <b>Description :</b>
      {{ article.article }}
      <br>
      <br>
      <div v-for="item in article.tags ">
        {{ item }}
      </div>
    </article>
    <router-link to="/"><button>Return</button></router-link>
  </div>
</template>

<script>
import importArticleID from '@/Composables/getPost.js'

export default {
  name: 'SinglePost',
  props: ['desiredPostId'],
  data() {
    return {
      article: {}
    };
  },
  async mounted() {
    this.article =  await importArticleID(this.desiredPostId)
    console.log(this.article);
    
  }
}
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
  