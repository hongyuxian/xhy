window.onload = function (){
      //获取数组的第一个
      var btn = document.getElementsByTagName("button")[0];
      var txt = document.getElementsByTagName("textarea")[0];
      var ul = document.createElement("ul");
      btn.parentNode.appendChild(ul); //添加子节点
      btn.onclick = function (){
 
        //1.需要判断文本中是否有内容
        if(txt.value == ""){
 
          alert("亲!内容不能为空哦!!");
 
          return false; //让操作就在这个地方终止
        }
 
        var newli = document.createElement("li"); //创建一个新的li标签
		//给新的标签添加内容，添加当前时间，并拼接删除已连接
        newli.innerHTML = txt.value +'&nbsp&nbsp&nbsp'+getNowFormatDate() +"<a href='javascript:;'>删除</a>" ; 
        ul.appendChild(newli);
		
		
		
        //清空输入框
        txt.value = "";
 
        var aa = document.getElementsByTagName("a");//获取所有的a标签
 
        for(var i = 0;i<aa.length;i++){ // 遍历点击删除
 
          aa[i].onclick = function () {
 
            this.parentNode.remove();
          }
        }
 
 
      }
 
    }
	var div=document.querySelector("#div");
	var ul=document.querySelector("ul");
	//获取当前时间
	function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + date.getSeconds();
	return currentdate;
}
	var body=document.querySelector("body")
	var h1=document.querySelector("h1");
	h1.onclick=function(){
		alert('删除？')
		body.className="ac"
	}