<template>
        <div class="kll">
        
        <div class="form-container">
          <h2>Modify Job</h2>
          <form id="jobForm" @submit.prevent="modifyjob">
            
        <div class="form-group">
          <label for="title">Job Title:</label>
          <input v-model="a" type="text" id="title" name="title" required>
        </div>
        <div class="form-group">
          <label for="company">description:</label>
          <input v-model="c"  type="text" id="company" name="company" required>
        </div>

        <div class="form-group">
          <label for="location">degre requred:</label>
          <input v-model="d" type="text" id="location" name="location" required>
        </div>

        
        <div class="form-group">
          <label for="salaire">Salaire:</label>
          <input v-model="b" type="text" id="location" name="location" required>
        </div>

        <div class="form-group">
          <label for="creationdate">Creation Date:</label>
          <input v-model="e" type="text" id="location" name="location" required>
        </div>
        <div class="form-group">
          <label for="creationdate">experience_requirede:</label>
          <input v-model="f" type="text" id="location" name="location" required>
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


export default {
  name: 'JobEdition',
  props: ['id'],
  data() {
    return {
        dataJobViewInstance:[],
        a:'',
        b:0,
        c:'',
        d:'',
        e:'',
        f:0

    }
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      let dataJobViewInstance = await response.json();
      this.a = dataJobViewInstance.title
      this.b = dataJobViewInstance.salary
      this.c = dataJobViewInstance.description
      this.d = dataJobViewInstance.degree_required
      this.e = dataJobViewInstance.date_of_creation
      this.f= dataJobViewInstance.experience_required

    } catch (error) {
      console.error('Error:', error);
    }
  },
  methods: {
    modifyjob(){

    


  let a = {
      "title":this.a,
      "salary": this.b,
      "date_of_creation": this.e,
      "description": this.c,
      "degree_required": this.d,
      "experience_required": this.f,
      "id":this.id
    }

  this.$router.push('/Home')

  fetch('http://localhost:3000/jobs/'+this.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(a)
      })
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
    this.$router.push('/')}
  },
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