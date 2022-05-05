var incomplete =[];
var complete=[];
function Add(){
  var p=  document.getElementById("newT").value;
  document.getElementById("newT").value='';
       
     incomplete.push(p);
     show();
     showComp();
     document.getElementById("add").innerHTML="Add";
      
}
function show(){
    let text='';
     for(let i=0;i<incomplete.length;i++)
      text+='<li><input type="checkbox" value='+incomplete[i]+' onchange=transfer(this.value) ><label>'+incomplete[i]+'</label><input type="text"><button class="edit" onclick=Edit(this.value) value='+incomplete[i]+'>Edit</button><button class="delete" onclick="Delete(this.value)" value='+incomplete[i]+'>Delete</button></li>';
     document.getElementById("incompleteT").innerHTML=text;
}

function Edit(E){
    document.getElementById("add").innerHTML="Update";
    document.getElementById("newT").value=E;
    Delete(E);
}


function Delete(D){
    let temp=[];
    for(let i=0;i<incomplete.length;i++){
        if(incomplete[i]!=D)
           temp.push(incomplete[i]);
    }
    incomplete=temp;
   
    let ttemp=[];
    for(let i=0;i<complete.length;i++){
        if(complete[i]!=D)
           ttemp.push(complete[i]);
    }
    complete=ttemp;
   
   
   
   
    show();
    showComp();



}

function transfer(C){
    let temp=[];
    for(let i=0;i<incomplete.length;i++){
        if(incomplete[i]!=C)
           temp.push(incomplete[i]);
        else
           complete.push(incomplete[i]);   
    }
    incomplete=temp;
    show();
    showComp();

}
function showComp(){
    let text='';
     for(let i=0;i<complete.length;i++)
      text+='<li><input type="checkbox" value='+complete[i]+' onchange=transferA(this.value) checked><label>'+complete[i]+'</label><input type="text"><button class="edit" onclick=Edit(this.value) value='+complete[i]+'>Edit</button><button class="delete" onclick="Delete(this.value)" value='+complete[i]+'>Delete</button></li>';
     document.getElementById("completedT").innerHTML=text;
}
function transferA(A){
    let temp=[];
    for(let i=0;i<complete.length;i++){
        if(complete[i]!=A)
           temp.push(complete[i]);
        else
           incomplete.push(complete[i]);   
    }
    complete=temp;
    show();
    showComp();

}