const pagesData=["Previous","First","2","3","4","5","6","7","8","9","10"];
var userData=[];

const apidata=fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
      .then(data=>data.json())
      .then(res=> {return res;})
      .catch((error)=>{
          console.log(error);   
       });
       

let activePage=1;
window.onload= async()=>{
    const pageno=document.createElement("p");
    pageno.setAttribute("class","pageno");
    const users=document.createElement("div");
    users.setAttribute("class","users");
    
    const user=document.createElement("div");
    user.setAttribute("class","user");
    const id=document.createElement("span");
    id.setAttribute("class","id");
    id.innerText=`1`;
    const person=document.createElement("div");
    person.setAttribute("class","person");
    const name=document.createElement("p");
    name.setAttribute("class","name");
    name.innerText=`Lura Senger`;
    const email=document.createElement("p");
    email.setAttribute("class","email");
    email.innerText=`Xander_collier@yahoo.com`;

    const pages=document.createElement("footer");
    pages.setAttribute("class","pages");    
    

    person.append(name,email);
    user.append(id,person);
    users.append(user);

    document.body.append(pageno,users,pages);
    getFooter();
    userData=await apidata;
    // console.log("Inside the onload",userData);
    getPage(activePage);
    
}

function getFooter(){
    pagesData.forEach(data=>{
        const pages=document.querySelector(".pages");
        const element=document.createElement("p");
        const index=pagesData.indexOf(data);
        element.innerHTML=`<button onclick="getPage(${index})" class="element" >${data}</button>`;
        pages.append(element);

    });
}
function getPage(data){
    // console.log("Get page called");
    if(data===0){
        if(activePage===1)
         {activePage=1} 
         else
       { activePage-=1;}
        
    }
    else{
        activePage=data;
    }
    
    const PageNumbers=document.querySelectorAll(".element");
    PageNumbers.forEach(data=>{
       data.style.cssText=`background-color:white;
        color:black;`;
    })
    PageNumbers[activePage].style.cssText=`background-color:rgb(153, 153, 255);
    color:white;`;
    console.log(activePage);
    createUsers(activePage);
    
}
function createUsers(pagenumber){
    // console.log("create users called");
    const users=document.querySelector(".users");
    users.innerHTML="";
    const pageno=document.querySelector(".pageno");
    pageno.innerHTML=`<h2>Page : ${activePage}</h2>`;
    pageno.style.cssText=`text-align:center;
    font-weight:bold;`;
    for(var i=0;i<10;i++)
    {  
        const candidate=userData[((pagenumber-1)*10)+i];
        console.log(candidate);
         const users=document.querySelector(".users");
        const user=document.createElement("div");
    user.setAttribute("class","user");
    const id=document.createElement("span");
    id.setAttribute("class","id");
    id.innerText=`${candidate.id}`;
    const person=document.createElement("div");
    person.setAttribute("class","person");
    const name=document.createElement("p");
    name.setAttribute("class","name");
    name.innerText=`${candidate.name}`;
    const email=document.createElement("p");
    email.setAttribute("class","email");
    email.innerText=`${candidate.email}`;
    person.append(name,email);
    user.append(id,person);
    users.append(user);
     
    }
     
}

