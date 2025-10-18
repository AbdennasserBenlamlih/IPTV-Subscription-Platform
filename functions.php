<?php

	function add_style(){
		wp_enqueue_style("my-css", get_template_directory_uri() . '/css/css.css');
		wp_enqueue_style("pay-css", get_template_directory_uri() . '/css/pay.css');
	}

	add_theme_support('post-thumbnails');

	// function add_script(){
	// 	wp_enqueue_script("ando-javascript", get_template_directory_uri() . '/js/javascript.js',array(),false,true);
	// }


	add_action('wp_enqueue_scripts', 'add_style');
	// add_action('wp_enqueue_scripts', 'add_script');	