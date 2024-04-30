<template>
  <div class="home">
    <Filter_nav :d="Filter()" @ApplyCriteria="Applying_Search_Criteria" />
    <jobDetail/>

    <body class="body_jobs">
      <div v-if="Filter_Activation">
        <div v-for="item in Jobsdetails" class="jobCard">
          <span> title : </span>{{ item.title }}
          <span>description : </span>{{ item.description }}
          <br>
          <div class="buttons">
            <router-link :to="'/JobDetail/' + item.id"><button class="JobCardButton">More</button></router-link>
            <router-link :to="'/JobEdit/' + item.id"><button class="JobCardButton" >Edit</button></router-link>
            <button class="JobCardButton" @click="deletejob(item.id)">Delete Job</button>
          </div>

        </div>
      </div>
      <div v-else>
        <div v-for="item in Jobsdetails" >
          <div v-if="Criteria[0] >= item.salary && Criteria[1] === item.degree_required && Criteria[2] <= item.experience_required " class="jobCard">
            <span> title : </span>{{ item.title }}
            <span>description : </span>{{ item.description }}
            <br>
            <router-link :to="'/JobDetail/' + item.id"><button class="JobCardButton" @click=" Clicked_detail_job = item.id">More</button></router-link>
            <router-link :to="'/JobEdit/' + item.id"><button class="JobCardButton" >Edit</button></router-link>
            <button class="JobCardButton" @click="deletejob(item.id)">Delete Job</button>
          </div>
          
      </div>
    </div>
      
    
    </body>
  </div>
  
</template>

<script>
// @ is an alias to /src
import jobDetail from '@/components/jobDetail.vue'
import Filter_nav from '@/components/Filter_Nav.vue'

export default {
  name: 'HomeView',
  components: {
    jobDetail,
    Filter_nav
  },
  data() {
    return {
      Jobsdetails :[],
      Filter_Activation:true,
      Criteria:[],
      Clicked_detail_job:0
            }
},
  methods: {
    Filter(){
      let l= [];
      for (let index = 0; index < this.Jobsdetails.length; index++) {
        l.push(this.Jobsdetails[index].degree_required)
      }

      const unique = [...new Set(l)]
      return unique
      
    },
    Applying_Search_Criteria(C){
      this.Filter_Activation = false;
      this.Criteria[0] = C[0];
      this.Criteria[1] = C[1]
      this.Criteria[2] = C[2]
      console.log(typeof(C[0]));

      

    },
    deletejob(id){

        this.Jobsdetails = this.Jobsdetails.filter(job => job.id !== id);

        fetch('http://localhost:3000/jobs/' + id, {
          method: 'DELETE'
        })
        .catch(error => console.error('Error:', error));

        },
  },

  mounted() {
     fetch('http://localhost:3000/jobs')
    .then(response => response.json())
    .then(data => {
      this.Jobsdetails = data
    })
    .catch(error => {
      console.error(error);
    });
  },
}

</script>

<style>
.home{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1000px;
}
.body_jobs{
  width: 500px;
  height: fit-content;
  border: solid #2c3e50 5px ;
  border-radius: 5px;
}

.jobCard{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  border: 3px solid #2c3e50;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;

}
.jobCardButton{
  background-color: #77bbff;
  border: 2px solid #2c3e50;
  padding: 20px;
}
.buttons{
  display: flex;
  gap: 5px;
  justify-content: center;
}
button{
  background-color: #007bff;
  color: #fff;
    border: none;
    border-radius: 5px;
    padding: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>
