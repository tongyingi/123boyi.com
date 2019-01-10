define(function(){
   
        var ajax1 = function(opts){
           
            var xhr = new XMLHttpRequest();            
            var urlStr = '';
            for(var key in opts.data){
                urlStr = key + '=' + opts.data[key] +'&';
            }
            urlStr = urlStr.substring(0,urlStr.length-1);
            if(opts.type.toLowerCase() === "get"){
                xhr.open(opts.type,opts.url + '?' + urlStr,true);
                xhr.send();
            }
            if(opts.type.toLowerCase() === 'post'){
                // console.log('post')
                xhr.open('post',opts.url,true);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencode");
                xhr.send(urlStr);               
            }
            xhr.onreadystatechange = function(){
               
                if(xhr.readyState === 4 && xhr.status == 200){
                    // console.log(JSON.parse(xhr.responseText))
                    opts.success(JSON.parse(xhr.responseText));
                } else if(xhr.readyState === 4 && xhr.status !== 200){
                    opts.error();
                }
            }
        }
        return{
            ajax : ajax1
        }


})