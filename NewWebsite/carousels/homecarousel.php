<div class="carousel slide" data-ride="carousel" id="myCarousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-pause="hover" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-pause="hover" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-pause="hover" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <!-- FIRST IMAGE -->
    <div class="item active" id="slide1">
      <div class="center">
        <div class="carousel-caption">
          <h3>Over 25 years experience</h3>
          <p>Since 1988, we at T&H have prided ourselves<br>on offering the best HVAC knowledge and expertise</p>
          <%= button_to "Read More", about_path, :id => "button", :class => "btn btn-default", :method => :get %>
        </div> <!-- end centering -->
      </div> <!-- end slide 1 caption -->
    </div> <!-- end item -->

    <!-- SECOND IMAGE -->
    <div class="item" id="slide2">
      <div class="center">
        <div class="carousel-caption">
          <h3>Sheet Metal Fabrication</h3>
          <p>Our fully stocked and operational sheet metal fabrication shop<br>will manufacture your HVAC fitting needs.</p>
          <%= link_to products_sheetmetal_path do %>
            <button type="button" class="btn btn-default">Read More</button>
          <% end %>
          <!--<%= link_to "#" do %>
            <button type="button" class="btn btn-default">Place Order</button>
          <% end %> -->
        </div> <!-- end centering -->
      </div> <!-- end slide 1 caption -->
    </div> <!-- end item -->

    <!-- THIRD IMAGE -->
    <div class="item" id="slide3">
      <div class="center">
        <div class="carousel-caption">
          <h3>Equipment For Sale</h3>
          <p>From HVAC equipment to office supplies, T&H periodically has a variety of things for sale. Please click the button below for a list of everything we have for sale.</p>
          <%= link_to brands_forsale_path do %>
              <button type="button" class="btn btn-default">See More</button>
          <% end %>
        </div>
      </div>
    </div>
  </div> <!-- end carousel slides -->

  <!-- Controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>