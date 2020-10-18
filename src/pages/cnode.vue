<template>
    <div class="cnode">
        <ul>
            <li v-for='i in topics' :key="i.id">
                 <img :src='i.author.avatar_url' alt="" class="aut">
                 <p>{{i.title}}</p>
                 <div class="p">
                 <img :src='i.author.avatar_url' alt="">
                 <span>{{i.last_reply_at | time()}}</span>
                 </div>
            </li>
        </ul>
   
    </div>
</template>

<script>
export default {
    data() {
        return {
          topics:{}
        };
    },
    created() {
    myAjax({
        url:"https://cnodejs.org/api/v1/topics"
    }).then(res=>{
        let topics=JSON.parse(res).data
        this.topics=topics
    })
    function  myAjax({type='GET',url,data={}}){
        return new Promise((resolve,reject)=>{
           let xml=new XMLHttpRequest()
           if(type=='GET'){
             xml.open('GET',url)
        xml.send()  
           }else{
               xml.open('POST',url)
               xml.setRequestHeader('content-type','application/x-www-form-urlencoded')
               xml.send(data)
           }
        xml.onreadystatechange=function(){
            if(xml.readyState==4){
                if(xml.status==200){
                    resolve(xml.responseText)
                }
            }
        }  
        })
       
    }

    },
    mounted() {

    },
    methods: {
      
    },
    filters:{
       time(val){
           let now=new Date()
           let tar=new Date(val)
           let newtime=parseInt((now-tar)/1000)
           let m=parseInt(newtime/(86400*30))
           let d=parseInt(newtime/86400)
           let h=parseInt(newtime%86400/3600)
           let mm=parseInt(newtime%3600/60)
           if(m>0){
               return m+'月前'
           }else if(d>0){
               return d+'天前'
           }else if(h>0){
               return h+'小时前'
           }else if(mm>0){
               return mm+'分钟前'
           }
       }
    }
};
</script>

<style scoped>

.cnode{
    padding: 0;
    margin: 0;
    background: white;
}
ul{
  padding: 0;
  margin: 0; 

}
 li{
     display: flex;
     width: 100%;
     list-style: none;
     height: 40px;
     align-items: center;
 }
 img{
     width: 20px;
     height: 20px; 
     margin: 0 10px 0 0;
 }
 p{
  
     width: 70%;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
 }
 .p{
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
 } 
</style>
