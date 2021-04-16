const createNodeWithText = (element, text) => {
    const node = document.createElement(element);
    const content = document.createTextNode(text);      
    node.appendChild(content);
    return node;
};

const createImageNode = (uri) => {
    const imgNode = document.createElement('img');
    imgNode.src = uri;
    return imgNode;
};

const createPublicationNode = (pub) => {
    const container = document.createElement("div");
    container.classList.add("box", "news");
    
    const h3Tag = createNodeWithText("h3", pub.title);
    container.appendChild(h3Tag);

    const pTag = createNodeWithText("p", pub.description);
    container.appendChild(pTag);
    
    return container;
};

const createPropertyNode = (pub) => {
    const container = document.createElement("article");
    container.classList.add("box", "property");

    const imageNode = createImageNode(pub.picture);
    container.appendChild(imageNode);

    const divTag = document.createElement("div");
    divTag.classList.add("property__info");
    container.appendChild(divTag);
    
    const h3Tag = createNodeWithText("h3", `${pub.price} - ${pub.city}`);
    divTag.appendChild(h3Tag);

    const descriptionTag = createNodeWithText("p", "Descripción");
    descriptionTag.classList.add("property__info-description")
    divTag.appendChild(descriptionTag);


    const pTag = createNodeWithText("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec leo justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec turpis id elit tincidunt finibus sodales vulputate urna. Mauris pellentesque nibh et eros egestas, nec vestibulum ipsum laoreet. Nulla sit amet posuere sem. Pellentesque auctor posuere magna, a mattis ante sodales nec. Proin commodo tellus id magna tincidunt, id ornare mauris pellentesque. Ut et egestas ex.");
    pTag.classList.add("property__info-text");
    divTag.appendChild(pTag);
    
    return container;
};

const createReviewsNode = (review) => {
    const container = document.createElement("article");
    container.classList.add("box", "review");

    const divTag = document.createElement("div");
    divTag.classList.add("review__header");
    container.appendChild(divTag);
    
    const h3Tag = createNodeWithText("h3", review.title);
    divTag.appendChild(h3Tag);

    const p2Tag = createNodeWithText("p", review.rating);
    divTag.appendChild(p2Tag);

    const pTag = createNodeWithText("p", review.text);
    container.appendChild(pTag);    

    return container;
};

const renderContainer1 = (data) => {
    const h2Tag = createNodeWithText("h2", `Hola ${data.name}`)
    document.getElementById('container1').appendChild(h2Tag);
};

const renderContainer2 = (data) => {
    const container2 = document.getElementById('container2');
    data.forEach((pub) => container2.appendChild(createPropertyNode(pub)));
};

const renderContainer3 = (data) => {
    const container3 = document.getElementById('container3');
    data.forEach((pub) => container3.appendChild(createPublicationNode(pub)));
};

const renderContainer4 = (data) => {
    const container4 = document.getElementById('container4');
    data.forEach((review) => container4.appendChild(createReviewsNode(review)));
};

export default {
    renderContainer1,
    renderContainer2,
    renderContainer3,
    renderContainer4
};