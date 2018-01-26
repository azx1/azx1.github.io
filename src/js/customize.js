/*
	// async load function 
    function async(c) {
      var d = document, t = 'script',
          o = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
      //o.src = u; //document.createElement('script').src
      if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
      s.parentNode.insertBefore(o, s);
    }
  */


/*
     Because of the native support for backtick-style fenced code blocks 
     right within the Markdown is landed in Github Pages, 
     From V1.6, There is no need for Highlight.js, 
     so Huxblog drops it officially.

     - https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0  
     - https://help.github.com/articles/creating-and-highlighting-code-blocks/    
*/
/*
    <script>
        async("http://cdn.bootcss.com/highlight.js/8.6/highlight.min.js", function(){
            hljs.initHighlightingOnLoad();
        })
   
    <link href="http://cdn.bootcss.com/highlight.js/8.6/styles/github.min.css" rel="stylesheet">
*/


// jquery.tagcloud.js -->

    // only load tagcloud.js in tag.html
 $(function(){ 
    if($('#tag_cloud').length !== 0){
     
            $.fn.tagcloud.defaults = {
                //size: {start: 1, end: 1, unit: 'em'},
                color: {start: '#bbbbee', end: '#0085a1'},
            };
            $('#tag_cloud a').tagcloud();
   
    }
  });


// fastClick.js 

 $(function(){
        var $nav = document.querySelector("nav");
        if($nav) FastClick.attach($nav);
 });


// 鼠标悬停动画效果 

$(function(){
		//标题动画
		$('#animation-title').mouseover(function(){
				$(this).addClass("animated rubberBand");
		});
		$('#animation-title').on("webkitAnimationEnd",function(){
               
				   $(this).removeClass("animated rubberBand");
            
		});
        //brand动画
		$('#animation-brand').mouseover(function(){
				$(this).addClass("{% if site.brand-animation %}{% if site.brand-animation-type %}{{ site.brand-animation-type }} {{ site.brand-animation }}{% else %}animated {{ site.brand-animation }}{% endif %}{% endif  %}");
		});
		$('#animation-brand').on("webkitAnimationEnd",function(){
              
				$(this).removeClass("{% if site.brand-animation %}{% if site.brand-animation-type %}{{ site.brand-animation-type }} {{ site.brand-animation }}{% else %}animated {{ site.brand-animation }}{% endif %}{% endif  %}");
            
		});
		//翻页动画
        $('.next a').mouseover(function(){
            $(this).addClass("animated pulse");
        });
        $('.next a').on("webkitAnimationEnd",function(){
           
                $(this).removeClass("animated pulse");
            
        });

        $('.previous a').mouseover(function(){
            $(this).addClass("animated pulse");
        });
        $('.previous a').on("webkitAnimationEnd",function(){
            
               $(this).removeClass("animated  pulse");
            
        });

}); 

// 导航栏切换
$(function(){
    // Drop Bootstarp low-performance Navbar
    // Use customize navbar with high-quality material design animation
    // in high-perf jank-free CSS3 implementation
    var $body   = document.body;
    var $toggle = document.querySelector('.navbar-toggle');
    var $navbar = document.querySelector('#customize_navbar');
    var $collapse = document.querySelector('.navbar-collapse');

    $toggle.addEventListener('click', handleMagic)
    function handleMagic(e){
        if ($navbar.className.indexOf('in') > 0) {
        // CLOSE
            $navbar.className = " ";
            // wait until animation end.
            setTimeout(function(){
                // prevent frequently toggle
                if($navbar.className.indexOf('in') < 0) {
                    $collapse.style.height = "0px"
                }
            },400)
        }else{
        // OPEN
            $collapse.style.height = "auto"
            $navbar.className += " in";
        }
    }
});
/* resize header to fullscreen keynotes 
<script>
    var $header = document.getElementsByTagName("header")[0];
    function resize(){
         *
         * leave 85px to both
         * - told/imply users that there has more content below
         * - let user can scroll in mobile device, seeing the keynote-view is unscrollable
         *
        $header.style.height = (window.innerHeight-85) + 'px';
    }
    document.addEventListener('DOMContentLoaded', function(){
        resize();
    })
    window.addEventListener('load', function(){
        resize();
    })
    window.addEventListener('resize', function(){
        resize();
    })
    resize();

*/

 $(function(){
        anchors.options = {
          visible: 'hover',
          placement: 'left',
        };
        anchors.add().remove('.intro-header h1').remove('.subheading').remove('.sidebar-container h5');
 });



// Handle Language Change 
/*
    var $zh = document.querySelector(".zh");
    var $en = document.querySelector(".en");
    function onLanChange(index){
        if(index == 0){
            $zh.style.display = "block";
            $en.style.display = "none";
        }else{
            $en.style.display = "block";
            $zh.style.display = "none";
        }
    }
    onLanChange(0);
*/

// tooltip
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});


//  回到顶部脚本 
$(function(){
    $('#scroll-to-top').click(function(){
        $(document).scrollTop(0);
    });
    $('#scroll-to-top').mouseover(function(){
            $(this).addClass("animated pulse");
    });
    $('#scroll-to-top').on("webkitAnimationEnd",function(){
          
               $(this).removeClass("animated pulse");
                  
    });
});

//启动图片懒加载
$(function(){
   $("img").lazyload({effect: "show",threshold: 300});
});