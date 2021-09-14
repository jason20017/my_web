
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
/*===當點擊這個按鈕時，自動捲動到網頁最上方，0.1秒完成捲動的動作===*/
/* $(function(){
    $('#BackTop').click(function(){  
        $('html,body').animate({scrollTop:0}, 1);
    }); 
});*/  

/*控制漢堡選單*/
let menuBtn = document.querySelector('.menu_button');
let open = document.querySelector('.open');
let Switch = false;

menuBtn.addEventListener('click', () =>{
    if(!Switch) {
    open.style.top='40px';
    open.style.transition='0.5s ease-in-out';
    Switch = true;
    } else {
    open.style.top='-100%';
    open.style.transition='0.5s ease-in-out';
    Switch = false;
    }
})


/*回到首頁的JavaScript*/
/*===當點擊這個按鈕時，自動捲動到網頁最上方===*/
 let backTop = document.getElementById("BackTop");
 backTop.addEventListener("click", e => {
     window.scrollTo({ top: 0});
 })


 /*skill 開關*/
function myfunction1(){
    document.getElementById("myDropdown1").classList.toggle("show");
}; /*案件觸發function ，檢索要開啟的內容，並且控制show*/

window.onclick = function(event){
    if (event.target.matches('.skills_header')){  /*觸發按鈕*/
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
    if (event.target.matches('.skills_header')){  /*觸發按鈕*/
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
    if (event.target.matches('.skills_header')){  /*觸發按鈕*/
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

/*Experience Modal pop-up*/
//modal1
    $(function(){
        let $modal1 = $('.modal1');
        let hideClass = 'hide';

        $('.exp_1').on('click',function(){
        $modal1.removeClass(hideClass);
        });
        
        $('.close').on('click',function(){
        $modal1.addClass(hideClass);
        });
    });
//modal2
    $(function(){
        let $modal2 = $('.modal2');
        let hideClass = 'hide';

        $('.exp_2').on('click',function(){
        $modal2.removeClass(hideClass);
        });
        
        $('.close').on('click',function(){
        $modal2.addClass(hideClass);
        });
    });
//modal3
    $(function(){
        let $modal3 = $('.modal3');
        let hideClass = 'hide';

        $('.exp_3').on('click',function(){
        $modal3.removeClass(hideClass);
        });
        
        $('.close').on('click',function(){
        $modal3.addClass(hideClass);
        });
    });
//modal4
    $(function(){
        let $modal4 = $('.modal4');
        let hideClass = 'hide';

        $('.exp_4').on('click',function(){
        $modal4.removeClass(hideClass);
        });
        
        $('.close').on('click',function(){
        $modal4.addClass(hideClass);
        });
    });


/*Porfolio image slideshow*/
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 4000);