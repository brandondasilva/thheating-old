<html>
<head>
	<title>T&amp;H Heating | Residential</title>

	<!-- IMPORTING STYLESHEETS -->
	<link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="/bootstrap/css/customization.css">
</head>


<body>
	<div class="container">
		<!-- NAVBAR -->
		<?php include '../../layouts/header.php'; ?>

		<!-- PAGE HEADER -->
		<div class="page-header">
			<div class="hidden-xs">
				<div class="textbody2">
					<ul class="nav nav-tabs">
						<li><a href="/products/">Products</a></li>
						<li class="active"><a href="/products/residential/">Residential</a></li>
						<li><a href="/products/commercial/">Commercial</a></li>
						<li><a href="/products/service/">Service</a></li>
						<li><a href="/products/fabrication/">Sheet Metal Fabrication</a></li>
					</ul> <!-- End navbar -->
				</div> <!-- End textbody -->
			</div>

			<div class="visible-xs">
				<h1>Residential</h1>
			</div>
		</div> <!-- End page header -->

		<!-- PAGE BODY -->
		<div class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
					<div class="panel panel-default">
				        <div class="panel-body">
				        	<div class="textbody">
				        		T&amp;H Heating is currently working with the following residential and custom home builders shown below.<br>Click on the thumbnails below to view some of the work done on site.
				        	</div>
				        </div> <!-- END PANEL BODY -->
				    </div> <!-- END TOP PANEL -->
			</div>
		</div>

		<div class="row">
			<!-- CHRISVIEW -->
			<div class="col-md-4">
				<%= link_to products_residential_chrisview_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("residential/chrisview/chrisview.png")%>
				</div>
				<% end %>
			</div>

			<!-- DEERFIELD -->
			<div class="col-md-4">
				<%= link_to products_residential_deerfield_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("residential/deerfield/deerfield.jpg")%>
				</div>
				<% end %>
			</div>

			<!-- EASTFOREST -->
			<div class="col-md-4">
				<%= link_to products_residential_eastforest_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("residential/eastforest/eastforest.jpg")%>
				</div>
				<% end %>
			</div>
		</div> <!-- END ROW -->

		<div class="row">
			<!-- EDCARA -->
			<div class="col-md-4">
				<%= link_to products_residential_edcara_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("residential/edcara/edcara.jpg")%>
				</div>
				<% end %>
			</div>

			<!-- LAURENDALE -->
			<div class="col-md-4">
				<%= link_to products_other_laurendale_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("other/laurendale/laurendale.jpg")%>
				</div>
				<% end %>
			</div>

			<!-- LIDAMAC -->
			<div class="col-md-4">
				<%= link_to products_other_lidamac_path do %>
				<div class="thumbnail">
					<!-- INSERT IMAGE HERE -->
					<%= image_tag("other/lidamac/lidamac.png")%>
				</div>
				<% end %>
			</div>
		</div>
	</div> <!-- End container -->
	<?php include '../../layouts/footer.php'; ?>

</body>
</html>31