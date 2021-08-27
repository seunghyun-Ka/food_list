import './index.css';
import axios from "axios";
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    const [foods, setfoods] = React.useState([])
    React.useEffect(function () {
        axios.get("https://f1553172-7a0c-447c-81d1-30bd9ef6cee1.mock.pstmn.io/foods")
            .then((result) => {
                console.log(result);
                const foods = result.data.foods;
                setfoods(foods);
            }).catch((error) => {
                console.error("에러 발생: ", error)
            })
    }, [])

    return (
        <div>

            <header>
                <h1>There are many delicious restaurants in Japan.<br />
                    You'll find the restaurant you want to go to! :)</h1>
                <p>自分にBESTなお店をさがそう！！エリア・最寄駅や食べたい料理で楽しく飲食店探しができます♪<br />
                    大切な人、大切な時間を美味しい料理と一緒にどうですか？FoodTripが、手伝います！</p>
            </header>
            <div id="foodlist">
                {/* for문 닽은 것 */}
                {
                    foods.map(function (food, index) {
                        return (
                            <Link className="foodpage_link" to={`/foodpage/${food.id}`} >
                                <div className="food_card">
                                    <h3 className="food_name_three">{food.name1}</h3>
                                    <div className="food_top_name">{food.name2}</div>
                                    <div className="food_description">{food.description}</div>
                                    <img className="food_img" src={food.imageUrl} />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div >);

}

export default MainPage;
