<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<!-- <script src="/bootstrap/js/jquery-1.9.1.min.js"></script>
<script src="/bootstrap/js/boostrap.min.js"></script> -->
<script type="text/javascript"> $(document).ready(function () { $('.dropdown-toggle').dropdown(); }); </script>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <!-- LOGO/HOME LINK -->
      <a href="/">
        <img height="50" src="/images/logo/logo-sansbg.gif">
      </a>
    </div>

    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav">
        <li><a href="/about/">About</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products and Services<b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="/products/">Products and Services Home</a></li>
            <li class="divider"></li>
            <li><a href="/products/residential/">Residential</a></li>
            <li><a href="/products/commercial/">Commercial</a></li>
            <li><a href="/products/service/">Service</a></li>
            <li><a href="/products/fabrication/">Sheet Metal Fabrication</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Equipment<b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="/equipment/information/">Equipment Information</a></li>
            <li><a href="/equipment/forsale/">Equipment For Sale</a></li>
          </ul>
        </li>
      </ul>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/jobpostings/">Job Postings</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>
<!-- END NAVBAR -->