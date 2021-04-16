import React from "react";
import './exercise2.less';

function Exercise2 () {

    return (
        <div className="App">
            <h1>Ejercicio 2</h1>
            <section className="reviews">
                <article className="box review">
                    <header className="review__header">
                        <p className="review__name">Ana</p>
                        <div className="reviews__score" data-score="3">
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                        </div>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar risus quis tellus dignissim, non mollis mauris volutpat. Praesent placerat magna mi, vel luctus arcu tempus eu. Etiam semper vehicula neque. Mauris ipsum elit, feugiat nec pharetra sit amet, ultricies et quam. 
                    </p>
                </article>
                <article className="box review">
                    <header className="review__header">
                        <p className="review__name">Victoria</p>
                        <div className="reviews__score" data-score="4">
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                        </div>
                    </header>
                    <p>
                    Proin dignissim ultrices urna eget congue. Nam dignissim quam lobortis lacinia pharetra. Proin ipsum urna, consequat sit amet finibus eget, sollicitudin eu felis. Mauris non consectetur felis. 
                    </p>
                </article>
                <article className="box review">
                    <header className="review__header">
                        <p className="review__name">Andrés</p>
                        <div className="reviews__score" data-score="5">
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                            <i className="fas fa-star review__score__icon"></i>
                        </div>
                    </header>
                    <p>
                    Vestibulum tempor metus cursus ante euismod mattis. Aliquam blandit magna a luctus tempus. Vivamus tincidunt pharetra orci, a ultrices libero consectetur vitae. Quisque porttitor erat sit amet sodales malesuada. Aliquam vitae sem fermentum odio ornare aliquam ut ut ligula. Aliquam iaculis rhoncus fringilla. 
                    </p>
                </article>
            </section>
        </div>
    );
}

export default Exercise2;
