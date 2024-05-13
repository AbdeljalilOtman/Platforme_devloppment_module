<template>
        <div class="kll">
        
        <div class="form-container">
          <h2>Modify Job</h2>
          <form id="jobForm" @submit.prevent="modifyjob">
            
            <div class="form-group">
            <label for="title">Title:</label>
            <input v-model="title" type="text" id="title" name="title" required>
    </div>
    <div class="form-group">
      <label for="company">Body :</label>
      <input v-model="body"  type="text" id="company" name="company" required>
    </div>
    <div class="form-group">
      <label for="Tags">Tags (Seperate them with ',' ):</label>
      <input v-model="Tags" type="text" id="tags" name="Tags" required>
    </div>

        <div class="op">
            <button type="submit" class="btn-submit ">Modify</button>
            <router-link to="/"><button>Return</button></router-link>

        </div>

          </form>
        </div>

    </div>
        
</template>
<script>
import { projectFirestore } from '../Firebase/Config';
import importArticleID from '@/Composables/getPost.js'

export default {
  name: 'ArticleEdit',
  props: ['id'],
  data() {
    return {
        article:{},
        title:'',
        body:'',
        Tags:''

    }
  },
  async mounted() {
    try {
      this.article =  await importArticleID(this.id)
      this.title = this.article.title
      this.body = this.article.article
      this.Tags = this.article.tags

    } catch (error) {
      console.error('Error:', error);
    }
  },
  methods: {
    modifyjob(){

    


    let a = {
      "title":this.title,
      "article": this.body,
      "tags": this.Tags.trim().split(/\s*,\s*/),
      id:this.id
    }
    let docRef = projectFirestore.collection("Articles").doc(this.id);
    docRef.update(a)
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document:", error);
    });

    // this.$router.push('/Home')
  },}
}
</script>


<style scoped>

.op{
    display: flex;
justify-content: space-between;}

.kll{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96vh;
}
 

  .form-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 400px;
  }

  .form-container h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    color: #555;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .btn-submit {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .bnt{
    background-color: red;


  }

  .btn-submit:hover {
    background-color: #0056b3;
  }



</style>    