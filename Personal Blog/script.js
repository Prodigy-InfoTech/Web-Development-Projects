// Sample articles
const articles = [
    { title: 'Article 1', content: 'This is the content of article 1.' },
    { title: 'Article 2', content: 'This is the content of article 2.' }
];

// Function to display articles
function displayArticles() {
    const articlesSection = document.getElementById('articles');
    articlesSection.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('article');
        articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articlesSection.appendChild(articleDiv);
    });
}

// Display articles when the page loads
displayArticles();
