import './index.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

function FoodPage() {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    useEffect(function () {
        axios.get()
            .then((result) => {
                setFood(result.data);
            }).catch((error) => {
                console.error(error);
            })
    }, [])


    return (<h1>{id}번 째 서브 페이지</h1>)
}












export default FoodPage;

// <head>
// 	<title>エリアから探す-北海道</title>
// 	<meta charset="utf-8" />
// 	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
// 	<link rel="stylesheet" href="assets/css/main.css" />
// 	<noscript>
// 		<link rel="stylesheet" href="assets/css/noscript.css" />
// 	</noscript>
// </head>

// <body className="is-preload">
// 	<!-- Wrapper -->
// 	<div id="wrapper">

// 		<!-- Header -->
// 		<header id="header">
// 			<div className="inner">

// 				<!-- Logo -->
// 				<a href="Hokkaido.html" className="logo">
// 					<span className="symbol"><img src="images/utensils-solid.svg" alt="" /></span><span className="title">SEARCH
// 						IN AREA > Hokkaido</span>
// 				</a>

// 				<!-- Nav -->
// 				<nav>
// 					<ul>
// 						<li><a href="#menu">Menu</a></li>
// 					</ul>
// 				</nav>

// 			</div>
// 		</header>

// 		<!-- Menu -->
// 		<nav id="menu">
// 			<h2>Menu</h2>
// 			<ul>
// 				<li><a href="index.html">Home</a></li>
// 				<li><a href="Menu1">Menu1</a></li>
// 				<li><a href="Menu2">Menu2</a></li>
// 				<li><a href="Menu3">Menu3</a></li>
// 				<li><a href="Menu4">Menu4</a></li>
// 			</ul>
// 		</nav>

// 		<!-- Main -->
// 		<div id="l_main">
// 			<div className="l_inner">
// 				<span className="l_image"><img src="images/Hokkaido.jpg" alt="" /></span>
// 				<span className="location"><strong>北海道</strong><br></span>
// 			</div>
// 			<div id="ranking">
// 				<span className="ranking">ランキングTOP3</span><br>
// 				<spad id="r_image">
// 					<span className="r_image"><img src="images/rank1.jpg" alt="" /></span>
// 					<span className="r_image"><img src="images/rank2.jpg" alt="" /></span>
// 					<span className="r_image"><img src="images/rank3.jpg" alt="" /></span>
// 				</spad>
// 			</div>
// 			<hr />
// 			<span className="l_title"><strong>北海道のお店、レストラン</strong></span>
// 			<ul>
// 				<li className="item">
// 					<img src="images/French kitchen.jpg" alt="">
// 					<div className="info">
// 						<span className="name">フレンチキッチン</span><br>
// 						<span className="kind">六本木駅 408m / ビストロ、ビアガーデン、バイキング</span><br>
// 						<span className="info">幻想的なテラス席で南フランスのバカンス気分を堪能するプロヴァンス風BBQ テラス</span><br>
// 						<span className="hashtags">
// 							<button>個室</button><button>テイクアウト</button>
// 							<button>飲み放題</button><button>禁煙</button>
// 						</span><br>
// 						<button className="love"><i className="fas fa-thumbs-up"></i></button>
// 					</div>
// 				</li>
// 				<li className="item">
// 					<img src="images/shimazu.jpg" alt="">
// 					<div className="info">
// 						<span className="name">黒豚しゃぶしゃぶ 島津</span><br>
// 						<span className="kind">新宿三丁目駅 191m / しゃぶしゃぶ、居酒屋、和食</span><br>
// 						<span className="info">★個室の掘りごたつ席でゆったりと★ IKEA新宿すぐ近く！お食事に是非お越しください。</span><br>
// 						<span className="hashtags">
// 							<button>個室</button><button>テイクアウト</button>
// 							<button>飲み放題</button><button>食べ放題</button><button>禁煙</button>
// 						</span><br>
// 						<button className="love"><i className="fas fa-thumbs-up"></i></button>
// 					</div>
// 				</li>
// 				<li className="item">
// 					<img src="images/ELOISE’s Cafe.jpg" alt="">
// 					<div className="info">
// 						<span className="name">ELOISE’s Cafe 浅草店</span><br>
// 						<span className="kind">浅草（つくばＥＸＰ）駅 360m / カフェ、ハワイ料理、バー</span><br>
// 						<span className="info">軽井沢で大人気のカフェが東京初出店！フレンチトーストやカレーなど、こだわりの逸品を堪能♪</span><br>
// 						<span className="hashtags">
// 							<button>テイクアウト</button><button>禁煙</button>
// 						</span><br>
// 						<button className="love"><i className="fas fa-thumbs-up"></i></button>
// 					</div>
// 				</li>
// 			</ul>
// 		</div>

// 		<!-- Footer -->
// 		<footer id="l_footer">
// 			<div className="inner">
// 				<section>
// 					<h2>Contact Us</h2>
// 					<form method="post" action="#">
// 						<div className="fields">
// 							<div className="field half">
// 								<input type="text" name="name" id="name" placeholder="Name" />
// 							</div>
// 							<div className="field half">
// 								<input type="email" name="email" id="email" placeholder="Email" />
// 							</div>
// 							<div className="field">
// 								<textarea name="message" id="message" placeholder="Message"></textarea>
// 							</div>
// 						</div>
// 						<ul className="actions">
// 							<li><input type="submit" value="Send" className="primary" /></li>
// 						</ul>
// 					</form>
// 				</section>
// 				<section>
// 					<h2>Follow</h2>
// 					<ul className="icons">
// 						<li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a>
// 						</li>
// 						<li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a>
// 						</li>
// 						<li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a>
// 						</li>
// 						<li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
// 						<li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
// 					</ul>
// 				</section>
// 				<ul className="copyright">
// 					<li>&copy; Untitled. All rights reserved</li>
// 					<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
// 				</ul>
// 			</div>
// 		</footer>

// </body>

// </html>