<?php get_header(); 
/*
Template Name: Checkout
*/
?>
<script type="text/javascript">
	document.getElementById('inde').id = 'checkout';
</script>
<style type="text/css">
	.main {
		    grid-template-rows: 100vh auto auto;
		    grid-template-areas:
		        "navbar"
		        "checkout"
		        "footer";
		}
</style>
<title>Checkout – <?php bloginfo('name') ?></title>
<div class="ev-pay">
	<h1 class="ev-pay-h1">Secure <span class="span-r">payment 🔒</span></h1>
</div>
<?php
if(have_posts()) {
			while ( have_posts()) {
				the_post();
				// the_title();
				the_content();
			}
		}
?>
<div class="ev-pay2">
	<a href="https://wa.me/+212702911615">Pay With : Credit Card</a>
</div>
<?php get_footer(); ?>