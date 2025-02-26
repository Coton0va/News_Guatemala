document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const searchInput = document.getElementById("search");
    const dateFilter = document.getElementById("date-filter");

    const newsData = [
        {
            title: "Noticia 1",
            image: "images/news1.jpg",
            summary: "Resumen de la noticia 1.",
            opinion: "Mi opinión sobre la noticia 1.",
            date: "2025-02-23"
        },
        {
            title: "Noticia 2",
            image: "images/news2.jpg",
            summary: "Resumen de la noticia 2.",
            opinion: "Mi opinión sobre la noticia 2.",
            date: "2025-02-24"
        }
    ];

    function renderNews(filteredNews) {
        newsContainer.innerHTML = "";
        filteredNews.forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h2>${news.title}</h2>
                <img src="${news.image}" alt="Imagen de ${news.title}">
                <p><strong>Resumen:</strong> ${news.summary}</p>
                <p><strong>Opinión:</strong> ${news.opinion}</p>
                <p><strong>Fecha:</strong> ${news.date}</p>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    function filterNews() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDate = dateFilter.value;
        
        const filteredNews = newsData.filter(news => {
            return (
                (news.title.toLowerCase().includes(searchTerm) || news.summary.toLowerCase().includes(searchTerm)) &&
                (selectedDate === "" || news.date === selectedDate)
            );
        });
        renderNews(filteredNews);
    }

    searchInput.addEventListener("input", filterNews);
    dateFilter.addEventListener("change", filterNews);

    renderNews(newsData);
});
