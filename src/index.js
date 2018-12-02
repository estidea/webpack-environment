import style from "./scss/style.scss";
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

var tlLoader = new TimelineMax({repeat:1,onComplete:loadContent}),
	svg = $('#experiment-svg'),
	shelf = $('#shelf'),
	ball1 = $('#ball1'),
	ball2 = $('#ball2'),
	book1 = $('#book1'),
	book2 = $('#book2'),
	ball3 = $('#ball3'),
	dot = $('.dot'),
	loader = $('#loader');

// Loader TimeLine
tlLoader 
	.staggerFromTo(dot,0.3, 
		{y:0, autoAlpha:0},
		{y:20, autoAlpha:1, ease:Back.easeInOut},
		0.05
	)
	.fromTo(loader,0.3,
		{autoAlpha:1, scale:1.3},
		{autoAlpha:0, scale:1, ease:Power0.easeNone},
		0.9
	);

function loadContent() {
	let tlLoaderOut = new TimelineLite({onComplete: contentIn});
	tlLoaderOut
		.set(dot,{backgroundColor:'#2b4d66'})
		.to(loader, 0.3, {autoAlpha:1, scale:1.3, ease:Power0.easeNone})
		.staggerFromTo(dot,0.3, 
			{y:0, autoAlpha:0},
			{y:20, autoAlpha:1, ease:Back.easeInOut},
			0.05, 0
		)
		.to(loader,0.3,{y:-150,autoAlpha:0, ease:Back.easeIn}, '+=0.3')
		
}
	
function contentIn() {	
	let tlContent = new TimelineLite();
	tlContent
		.to(svg, .3, {autoAlpha:1})
		.from(shelf, 1, {x:-1000,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.3)})
		.from(ball1, 1, {y:-700, ease: Bounce.easeOut})
		.from(ball2, 1, {y:-700, ease: Bounce.easeOut})
		.from(book1, .5, {x:-1000, autoAlpha:0, ease: Power2.easeOut})
		.from(book2, .5, {x:1000, autoAlpha:0, ease: Power2.easeOut})
		.fromTo(ball3, 2, 
			{y:-700, autoAlpha:1, ease: Expo.easeOut},
			{y:700, ease: Expo.easeIn},
			2);
}
