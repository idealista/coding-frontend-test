const MAX_STAR_REVIEW = 5;

const createIconNode = () => {
    const ratingIcon = document.createElement("i");
    ratingIcon.classList.add('fas', 'fa-star', 'reviews__score__icon');

    return ratingIcon;
};

const createRatingScoreNode = (rate) => {
    const scoreContainer = document.createElement("article");
    scoreContainer.dataset.score = rate;

    for(let i = 1; i <= MAX_STAR_REVIEW; i++) {
        scoreContainer.appendChild(createIconNode());
    }

    return scoreContainer;
};

const createReviewsNode = (review) => {
    const container = document.createElement("article");
    container.classList.add("box", "reviews");

    const divTag = document.createElement("div");
    divTag.classList.add("reviews__header");
    container.appendChild(divTag);
    
    const h3Tag = createNodeWithText("h3", review.title);
    divTag.appendChild(h3Tag);

    divTag.appendChild(createRatingScoreNode(review.rating));

    const pTag = createNodeWithText("p", review.text);
    container.appendChild(pTag);    

    return container;
};

const renderContainer4 = (data) => {
    const container4 = document.getElementById('container4');
    data.forEach((review) => container4.appendChild(createReviewsNode(review)));
};

export default {
    renderContainer4
};