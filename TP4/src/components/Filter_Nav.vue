<template>
    <body class="body_filternav">
        Search Criteria : 
        <br>
        <label for="Search_Salary">Salary : </label>
        <input type="number" name="Search_Salary" id="" v-model="Criteria_infos[0]">
        <br>
        <br>
        <label for="Search_degree">Degree : </label>
        <select name="Search_degree" v-model="Criteria_infos[1]">
            <option v-for="Options in d" :value="Options">{{Options}}</option>
        </select>
        <br>
        <br>
        <label for="Search_Experience">experience_required : </label>
        <input type="number" name="Search_Experience" v-model="Criteria_infos[2]">

        <button @click="$emit('ApplyCriteria',Criteria_infos)">Apply criteria</button>

        

        <router-link to="/JobAdd"><button class="JobCardButton" >Add Job</button></router-link>
        
    </body>
</template>


<script>
export default {
  props: ['d'],
  data() {
    return {
        Criteria_infos:[]
    }
  },
}

</script>


<style scoped>
.body_filternav {
  width: 375px;
  height: fit-content;
  border: solid #2c3e50 5px ;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  box-shadow: 5px 5px 10px #888888; 
}
</style>