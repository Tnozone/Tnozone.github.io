 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// language toggle
const translations = {
	en: {
		home_link: "Home",
		about_link: "About me",
		skill_link: "Skill",
		project_link: "Projects",
		intro_hello: "Hello!",
		intro_name: "I'm ",
		intro_title: "I am a Junior Full Stack Developer",
		intro_slide1: "I'm a ",
		intro_slide2: "Software Engineer",
		intro_slide3: " based in Paris",
		about_title: "About",
		about_intro: "About Me",
		about_text1: "As a former designer and animator, I have an eye for details and the skills to design a good-looking page.",
		about_text2: "I can apply my knowledge to elevate my web-development skills.",
		about_text3: "Today, I am transitioning into a career as a software engineer, with a particular interest in full-stack development. I am familiar with technologies such as Python, JavaScript, React, and Node.js, and I am driven to apply these skills to solve real-world problems and innovate.",
		about_text4: "I endeavor to do good work in this field, and I wish to expand my professional career as a Software Engineer.",
		name: "Name:",
		adress: "Adress:",
		github_repo: "Github repositories",
		resume_view: "View Resume Online",
		resume_download: "Dowload Resume (PDF)",
		specialization: "Full Stack Specialization",
		specialization_projects: "Frontend and Backend Projects.",
		certificate: "Certificate of Completion",
		certificate_detail: "Foundations of Computer Science",
		web_app: "Web applications",
		web_app_mobile: "Web mobile applications",
		app_dev: "App Developing",
		other_services: "Others services",
		skills_title: "My Skills",
		project_title: "My Projects",
		repos: "Repositories",
		contributions: "Contributions on Github",
		views: "Views",
		contact: "Contact Me",
		contact_adress: "Adress",
		contact_number: "Contact Number",
		contact_mail: "Email Adress",
		contact_website: "Website",
		website_link: "Tnozone's Github",
		links: "Links",
		web_design: "Web Design",
		web_dev: "Web Development",
		business_strat: "Business Strategy",
		data_analysis: "Data Analysis",
		graphic_design: "Graphic Design",
		question: "Have a Question?",
		maze1: "OpenGL Project",
		maze2: "Game Level",
		zoneimages1: "React Project",
		zoneimages2: "Image editing website"
	},
	fr: {
		home_link: "Accueil",
		about_link: "À propos",
		skill_link: "Compétences",
		project_link: "Projets",
		intro_hello: "Bonjour!",
		intro_name: "Je suis ",
		intro_title: "Je suis un Développeur Junior Full Stack",
		intro_slide1: "Je suis ",
		intro_slide2: "Ingénieur Logiciel",
		intro_slide3: " basé à Paris",
		about_title: "À Propos",
		about_intro: "À Propos de moi",
		about_text1: "En tant qu'ancien designer et animateur, j'ai un œil pour les détails et les compétences nécessaires pour concevoir une page attrayante.",
		about_text2: "Je peux appliquer mes connaissances pour améliorer mes compétences en développement web.",
		about_text3: "Aujourd'hui, je me dirige vers une carrière d'ingénieur logiciel, avec un intérêt particulier pour le développement full-stack. Je suis familier avec les technologies telles que Python, JavaScript, React et Node.js, et je suis motivé à appliquer ces compétences pour résoudre des problèmes concrets et innover.",
		about_text4: "Je m'efforce de bien faire dans ce domaine et je souhaite développer ma carrière professionnelle en tant qu'Ingénieur Logiciel.",
		name: "Nom:",
		adress: "Adresse:",
		github_repo: "Repositoires Github",
		resume_view: "Voir Resume en ligne",
		resume_download: "Télécharger Resume (PDF)",
		specialization: "Spécialisation Full Stack",
		specialization_projects: "Projets Frontend et Backend.",
		certificate: "Certificat de Complétion",
		certificate_detail: "Fondements de l'Informatique",
		web_app: "Applications web",
		web_app_mobile: "Applications web mobile",
		app_dev: "Développement App",
		other_services: "Autres services",
		skills_title: "Mes Compétences",
		project_title: "Mes Projets",
		repos: "Repositoires",
		contributions: "Contributions sur Github",
		views: "Vues",
		contact: "Contactez-Moi",
		contact_adress: "Adresse",
		contact_number: "Numéro de Contact",
		contact_mail: "Adresse Email",
		contact_website: "Site Web",
		website_link: "Github de Tnozone",
		links: "Liens",
		web_design: "Design Web",
		web_dev: "Développement Web",
		business_strat: "Stratégie d'Entreprise",
		data_analysis: "Analyse des Données",
		graphic_design: "Design Graphique",
		question: "Une Question?",
		maze1: "Projet OpenGL",
		maze2: "Niveau de Jeux",
		zoneimages1: "Projet React",
		zoneimages2: "Site d'édition d'images"
	}
};

function setLanguage(lang) {
	localStorage.setItem("lang", lang);

	document.querySelectorAll("[data-i18n]").forEach(el => {
		const key = el.dataset.i18n;
		el.textContent = translations[lang][key];
	});
}

// Load saved language
setLanguage(localStorage.getItem("lang") || "en");
