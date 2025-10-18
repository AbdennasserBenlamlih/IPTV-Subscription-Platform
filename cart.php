<?php get_header(); 
/*
Template Name: cartt
*/
?>
<script type="text/javascript">
	document.getElementById('inde').id = 'cart';
</script>
<style type="text/css">
	.main {
		    grid-template-rows: 100vh auto auto;
		    grid-template-areas:
		        "navbar"
		        "cart"
		        "footer";
		}
</style>
<title>Cart – <?php bloginfo('name') ?></title>
<?php
if(have_posts()) {
			while ( have_posts()) {
				the_post();
				// the_title();
				the_content();
			}
		}
?>
<?php get_footer(); ?>