function getdata(){
    console.log("button clicked")
    //step 1:create an xhr object
    var xhr=new XMLHttpRequest();
    console.log("unsent",xhr.readyState);
    //step 2:request specification
    xhr.open("Get","https://jsonplaceholder.typicode.com/users",true);
    console.log("open",xhr.readyState);
    //step 3:sending the request
    xhr.send();
    //step 4:create an event listener
    xhr.onreadystatechange=function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
          //var data=this.responseText;
          var data=JSON.parse(this.responseText);

          console.log(data);
          var output=`<tr>
          <th>name</th>
          <th>email</th>
          </tr>`
          for(let i=0;i<data.length;i++){
            //output +=`<ul><li>${data[i].name}</li></ul>`
            //output +=`<table border=3><tr><th>name</th><th>email</th></tr><td>${data[i].name}</td><td>${data[i].email}</td></tr></table>`
            output +=`<tr>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            </tr>`
          }
          document.getElementById("tb").innerHTML=output;
        }
    }
}