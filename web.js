
/*驅動skills 可以開關*/
/*const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((eL)=>{
    el.addEventListener('click', toggleSkills)
})*/

/*回到首頁的JQuery*/
/* $(function(){
    $('#BackTop').click(function(){  
        $('html,body').animate({scrollTop:0}, 1);
    }); 
});*/  
/*===當點擊這個按鈕時，自動捲動到網頁最上方，0.1秒完成捲動的動作===*/




function myfunction1(){
    document.getElementById("myDropdown1").classList.toggle("show");
}; /*案件觸發function ，檢索要開啟的內容，並且控制show*/

window.onclick = function(event){
    if (event.target.matches('.skills_arrow1')){  /*觸發按鈕*/
        var dropdowns = document.getElementbyClassname("skills_list1")/*檢索要開啟的內容*/
        var i;
        for (i = 0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    } 
}

function myfunction2(){
    document.getElementById("myDropdown2").classList.toggle("show");
} /*案件觸發function ，檢索要開啟的內容，並且控制show*/

window.onclick = function(event){
    if (event.target.matches('.skills_arrow2')){  /*觸發按鈕*/
        var dropdowns = document.getElementbyClassname("skills_list2")/*檢索要開啟的內容*/
        var i;
        for (i = 0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    } 
}

function myfunction3(){
    document.getElementById("myDropdown3").classList.toggle("show");
} /*案件觸發function ，檢索要開啟的內容，並且控制show*/

window.onclick = function(event){
    if (event.target.matches('.skills_arrow3')){  /*觸發按鈕*/
        var dropdowns = document.getElementbyClassname("skills_list3")/*檢索要開啟的內容*/
        var i;
        for (i = 0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    } 
}

