<template>
    <div class="body_TagList">
        <span class="h"><strong>Tags : </strong></span>
        <div v-for="item in Tags" :key="item.id" >
            <router-link :to="'/tags/' + item"><button class="tag" @click="$emit('TagsApplied', item)">{{ item }}</button></router-link>
        </div>
    </div>
</template>
<script>
import { projectFirestore } from '../Firebase/Config';

export default {
    name: 'TagCloud',
    data() {
        return {
            Tags:[]
        }
    },
    async mounted() {
        let res = await projectFirestore.collection('Articles').get()
        res.docs.map(doc=> {
            return {...doc.data(),id:doc.id }}).forEach(element=>{
                element.tags.forEach(t=>{
                    this.Tags.push(t)
                })
            })
            this.Tags = [...new Set(this.Tags)]
        
    },
    

}
</script>
<style>
.body_TagList{
  width: 375px;
  height: 40%;
  border: solid #2c3e50 5px ;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 15px;
  align-items: stretch;
  box-shadow: 5px 5px 10px #888888; 
  padding: 10px;
}
.tag{
    background-color: #007bffc0;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 6px;
    font-size: 16px;
}
</style>