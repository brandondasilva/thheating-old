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
      <a href=""><img src="images/logo/logo-sansbg.gif"></a>
    </div>

    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav">
        <li><%= link_to "About", about_path %></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products and Services <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><%= link_to "Products and Services Home", products_path %></li>
            <li class="divider"></li>
            <li><%= link_to "Residential", products_residential_path %></li>
            <li><%= link_to "Commercial", products_commercial_path %></li>
            <li><%= link_to "Service", products_service_path %></li>
            <li><%= link_to "Sheet Metal Fabrication", products_sheetmetal_path%></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Equipment <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><%= link_to "Equipment Information", brands_path %></li>
            <li><%= link_to "Equipment For Sale", brands_forsale_path %></li>
          </ul>
        </li>
      </ul>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><%= link_to "Job Postings", jobpostings_path %></li>
        <li><%= link_to "Contact", contact_path %></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>