window.onload=function(){
    var upbtn = document.querySelector('#up');
    var next = document.querySelector('#next');
    var viewbox = document.querySelector('.viewbox');
    var view_val = null;
    var select = 1;
    btnshow();
   

    next.addEventListener('click',function(){
        select+=1;
        view_val -= 310; 
        viewbox.style.left=view_val+'px';
        console.log(select);
        btnshow();
    })
    upbtn.addEventListener('click',function(){
        select-=1;
        view_val += 310; 
        viewbox.style.left=view_val+'px';
        btnshow();
        console.log(select);
    })
    function btnshow(){
        if(select<=1){
           upbtn.style.display='none'
        }else if(select>=4){
            next.style.display='none'
        }
        else{
            upbtn.style.display='inline-block'
            next.style.display='inline-block'
        }
    }
 


   

















}