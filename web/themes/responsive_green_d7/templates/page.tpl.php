<div id="header_wrapper">  <header id="header" role="banner">
	<div id="mobile-menu">
	</div>
    <?php if ($logo): ?>
	<div id="logo">
		<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
			<img src="<?php print $logo; ?>"/>
		</a>
	</div>
    <?php endif; ?>
      <?php if ($display): ?>
         
		
        <?php if ($page['top_right']): ?> 
				<div id="region-top-right-wrapper">
						<?php print render($page['top_right']); ?>       
						<?php if ($page['search_region']): ?>
							<div class="desktop-only">
								<?php print render($page['search_region']); ?>
							</div>
						<?php endif; ?>
        </div>
				<?php endif; ?>
		
         <?php if ($page['search_region']): ?>
					<div class="mobile-only" id="mobile-search">
								<?php print render($page['search_region']); ?>       
					</div>
         <?php endif; ?>
         
        <?php endif; ?>
        
          <h1 id="site-title"><div id="site-description"><?php print $site_slogan; ?></div></h1>
    <div class="clear"></div>
  </header>
  <div class="menu_wrapper">
      <nav id="main-menu"  role="navigation" class="<?php print $language->language ?>">
        <a class="nav-toggle" href="#"><img src="/sites/hkggacms/files/nav-icon.png" /></a>
        <div class="menu-navigation-container">
          <?php print drupal_render($main_menu_tree); ?>
        <div class="clear"></div>
      </nav><!-- end main-menu -->
  </div>
</div>
<div id="container">
    <?php //if ($is_front): ?>
    <?php if ($sdisplay): ?>
    <div id="home-slider">
      <div class="flexslider-container">
        <?php if ($page['slick_show']): ?>          
            <?php print render($page['slick_show']); ?>         
        <?php endif; ?>
        <!--
        <div id="single-post-slider" class="flexslider">
          <ul class="slides">
            <li class="slide" style="display:none;"><img src="<?php print $img1;?>"alt="Slide1"/></li>
            <li class="slide" style="display:none;"><img src="<?php print $img2;?>"alt="Slide2"/></li>
            <li class="slide" style="display:none;"><img src="<?php print $img3;?>" alt="Slide3"/></li>
          </ul>
		</div><!-- /slides -->
        <!-- /flexslider -->

      </div>
    </div>
    <?php endif; /*if $sdisplay*/ ?>
    <div class="Slideshow-region"><?php print render($page['slideshow']); ?></div>
    <?php if (!empty($page['top_first'])): $num1 = 1;  endif; ?>
    <?php if (!empty($page['top_second'])): $num2 = 1;  endif; ?>
    <?php if (!empty($page['top_third'])): $num3 = 1;  endif; ?>
    <?php
      $sum = (isset($num1) . isset($num2) . isset($num3));
      $result = strlen($sum);
      if ($result == 1):$value = "one"; endif;
      if ($result == 2):$value = "two"; endif;
      if ($result == 3):$value = "three"; endif;
      ?>
    <?php if ($page['top_first'] || $page['top_second'] || $page['top_third']): ?> 
      <div id="top-area" class="clearfix <?php print $value ?>">
		<?php if ($page['top_first']): ?>
        <div class="column"><?php print render($page['top_first']); ?></div>
        <?php endif; ?>
        <?php if ($page['top_second']): ?>
        <div class="column"><?php print render($page['top_second']); ?></div>
        <?php endif; ?>
        <?php if ($page['top_third']): ?>
        <div class="column"><?php print render($page['top_third']); ?></div>
		<?php endif; ?>
      </div>
    <?php endif; ?>
    <div>
			<div id="breadcrumbs"><?php if ($breadcrumb): print $breadcrumb; endif;?></div>
		<?php if ($page['breadarea']): ?>
		<div id="breadarea">  
			<?php print render($page['breadarea']); ?>
		</div> 
		<?php endif; ?> 
    </div>
	  
		
    <div class="content-sidebar-wrap">
    <?php if ($page['sidebar_first']): ?>
      <aside id="sidebar-first" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>
    <div id="content">
	    <?php /*<<div class = "page_title"><h1 class ="title2"><?php print ;?> </h2> </div>*/?>
    
      <section id="post-content" role="main">
        <?php print $messages; ?>
        <?php if ($page['content_top']): ?><div id="content_top"><?php print render($page['content_top']); ?></div><?php endif; ?>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
				<div id="sidebar-second-mobile"  role="complementary">
				</div>  <!-- /#sidebar-first -->

        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        <?php print render($page['content']); ?>
	<div class="last-update clearfix">
	<?php 
	if(!empty($node)) {
		
		if(in_array($node->type, array('page','events','news','resources','album'))) {
			echo t('Last Update Date: @changed', array('@changed'=>date('Y-m-d', ($node->changed)))); 
		}
	}
	?>
    </div>
      </section> <!-- /#main -->
    </div>
	
    </div>
    <?php if ($page['sidebar_second']): ?>
      <aside id="sidebar-second" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>
    
	
</div>
<div>
    <?php if ($page['content_bottom']): ?>
      <div id="content_bottom">
		<?php print render($page['content_bottom']); ?>
      </div> <!-- /.footer icons -->
    <?php endif; ?> 
 </div>

<div id="footer">
  <div id="footer_wrapper">
  <?php if (!empty($page['footer_first'])): $num01 = 1;  endif; ?>
      <?php if (!empty($page['footer_second'])): $num02 = 1;  endif; ?>
      <?php if (!empty($page['footer_third'])): $num03 = 1;  endif; ?>
      <?php
        $sum1 = (isset($num01) . isset($num02) . isset($num03));
        $result1 = strlen($sum1);
          if ($result1 == 1):$value1 = "one";endif;
          if ($result1 == 2):$value1 = "two";endif;
          if ($result1 == 3):$value1 = "three";endif;
      ?>
    <?php if ($page['footer_first'] || $page['footer_second'] || $page['footer_third']): ?> 
      <div id="footer-area" class="clearfix <?php print $value1 ?>">
        <?php if ($page['footer_first']): ?>
        <div class="column"><?php print render($page['footer_first']); ?></div>
        <?php endif; ?>
        <?php if ($page['footer_second']): ?>
        <div class="column"><?php print render($page['footer_second']); ?></div>
        <?php endif; ?>
        <?php if ($page['footer_third']): ?>
        <div class="column"><?php print render($page['footer_third']); ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="footer_credit">
    <div class="footer_inner_credit">
    <?php if ($page['footer']): ?>
       <div id="foot">
        <?php print render($page['footer']) ?>
       </div>
    <?php endif; ?>
	<!--
    <div id="copyright">
     <p class="copyright"><?php print t('Copyright'); ?> &copy; 版權均屬香港女童軍總會所有 不得轉載 <?php //echo date("Y"); ?><?php //print $site_name; ?> </p> 
    <div class="clear"></div>
    </div>
	-->
  </div>
  </div>
</div>
