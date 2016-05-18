        <!-- .nav-wrap -->
        <div class="nav-wrap">
          <nav class="nav" role="navigation">
            <div class="nav__links">
              <a class="nav__link nav__link--email" href="mailto:gary@cuga-moylan.com"></a>
              <a class="nav__link nav__link--github" href="https://github.com/gecugamo" target="_blank" rel="noopener noreferrer"></a>
              <a class="nav__link nav__link--codepen" href="https://codepen.io/gecugamo/" target="_blank" rel="noopener noreferrer"></a>
              <a class="nav__link nav__link--linkedin" href="https://www.linkedin.com/pub/gary-cuga-moylan/65/b40/a75" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </nav>
        </div>
        <!-- /.nav-wrap -->

        <!-- .footer -->
        <footer class="footer">
            Designed &amp; Developed by Gary Cuga-Moylan
        </footer>
        <!-- /.footer -->

        <!-- .modal__overlay -->
        <div class="modal__overlay">
        </div>
        <!-- /.modal__overlay -->

        <link rel="stylesheet" type="text/css" href="dist/css/app.min.css">
        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-73376786-1', 'auto');
          ga('send', 'pageview');
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>
            !function(a){"use strict";a("body").on("click",".project",function(c){c.preventDefault(),a("body").addClass("modal-open"),b.open(a(this))}),a("body").on("click",".modal__close",function(a){a.preventDefault(),b.close()}),a(document).on("keyup",function(a){27!=a.keyCode&&32!=a.keyCode||b.close()});var b={open:function(b){a.get("ajax/"+b.attr("href")+".php",function(b){a("body").addClass("modal-open"),a(".modal__overlay").append(b).show()})},close:function(){a("body").removeClass("modal-open"),a(".modal__overlay").hide().empty()}}}(jQuery),function(a){"use strict";a("[data-scroll]").on("click",function(b){b.preventDefault();var c=a(a(this).attr("data-scroll")),d=c.offset().top;a("html, body").animate({scrollTop:d+"px"},300)})}(jQuery);
        </script>
    </body>
</html>
