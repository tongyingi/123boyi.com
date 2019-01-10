requirejs.config({
    // paths: {
    //     ajaxJSON: 'ajaxJson'
    // }

})

requirejs(['ajaxJSON'],function(ajaxJSON){
    // 获取课程信息并展示
    ajaxJSON.ajax({
        url:'/database/course.json',
        type:'get',
        success: function(data){
            var datalist = document.getElementsByClassName("course-box")[0];
            var html = '';
           
            for(var unit in data){
                var coursePrice = data[unit].COURSE_PRICE == "免费" ? '<span class="course-price course-free float-right">免费</span>' : '<span class="course-price float-right">'+data[unit].COURSE_PRICE+'</span>'; 
                var fagure = document.createElement("figure");
                fagure.classList.add("float-left");
                fagure.innerHTML += '<a class="course-img" href="#"><img src="img/module/course/'+data[unit].COURSE_IMG+'"/></a>'+
                            '<a class="figcaption" href="#">'+data[unit].COURSE_TITLE+'</a>'+
                            '<div class="course-description">'+
                                '<span class="course-people float-left">报名人数：<em>'+data[unit].ENROLMENT+'</em></span>'+
                                coursePrice+
                            '</div>';
                 datalist.appendChild(fagure);           
            }
            
        },error:function(){
            console.log('发生了错误...')
        }
    })


    // 
    function getFagure(datalist){
        var datalist = document.getElementsByClassName("datalist")[0];
    }
});