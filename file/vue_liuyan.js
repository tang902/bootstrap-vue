window.onload=function(){
	var myjson=[];
	new Vue({
		el:'#box',
		data:{
			myData:myjson,
			username:'',
			age:'',
			nowIndex:-100
		},
		methods:{
			add:function(){
				if(this.username=='' || this.age==''){
					return;
				}else if(this.myData.length==0){
					this.myData.push({
						name:this.username,
						age:this.age
					})
					this.username='';
					this.age=''
				}else{
					for(var i=0;i<this.myData.length;i++){
						if(this.username==this.myData[i].name){
							return;
						}
					}
					this.myData.push({
						name:this.username,
						age:this.age
					})
					this.username='';
					this.age=''
				}
			},
			deleted:function(n){
				if(n!='all'&&typeof(n)=='number'){
					this.myData.splice(n,1)
				}else{
					this.myData=[];
				}
			}
		}
	})	
}
 