document.addEventListener("DOMContentLoaded", () => {
    const articles = [];
    const articlesPerPage = 4;
    let currentPage = 1;

    const form = document.getElementById("add-article-form");
    const articleContainer = document.getElementById("articles-container");
    const paginationControls = document.getElementById("pagination-controls");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const imageUrl = document.getElementById("image-url").value.trim();

        if (title && description) {
            articles.push({ title, description, imageUrl });
            form.reset();
            renderArticles();
            renderPagination();
        } else {
            alert("Title and description are required.");
        }
    });

    function renderArticles() {
        articleContainer.innerHTML = "";
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const paginationArticles = articles.slice(start, end);

        paginationArticles.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                ${
                    article.imageUrl
                        ? `<img src="${article.imageUrl}" alt="${article.title}">`
                        : ""
                }
            `;
            articleContainer.appendChild(articleDiv);
        });

        if (articles.length === 0) {
            articleContainer.innerHTML = "<p>No articles to display.</p>";
        }
    }

    function renderPagination() {
        paginationControls.innerHTML = "";
        const totalPages = Math.ceil(articles.length / articlesPerPage);

        if (currentPage > 1) {
            const prevButton = document.createElement("button");
            prevButton.textContent = "Previous";
            prevButton.addEventListener("click", () => {
                currentPage--;
                renderArticles();
                renderPagination();
            });
            paginationControls.appendChild(prevButton);
        }

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;

            if (i === currentPage) pageButton.classList.add("active");
            pageButton.addEventListener("click", () => {
                currentPage = i;
                renderArticles();
                renderPagination();
            });
            paginationControls.appendChild(pageButton);
        }

        if (currentPage < totalPages) {
            const nextButton = document.createElement("button");
            nextButton.textContent = "Next";
            nextButton.addEventListener("click", () => {
                currentPage++;
                renderArticles();
                renderPagination();
            });
            paginationControls.appendChild(nextButton);
        }
    }
});
