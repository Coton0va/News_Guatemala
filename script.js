document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const searchInput = document.getElementById("search");
    const dateFilter = document.getElementById("date-filter");

    const newsData = [
        {
            title: "Los ministerios aún no identifican la necesidad de una readecuación presupuestaria, dice Karin Herrera sobre la atención a migrantes retornados",
            image: "images/news1.",
            summary: "Resumen: El Gobierno de Guatemala ha lanzado el programa Retorno al Hogar para apoyar a los connacionales deportados de Estados Unidos debido al endurecimiento de las políticas migratorias. La vicepresidenta Karin Herrera explicó que este programa busca brindar apoyo en vivienda, empleo y formación para la reinserción de los migrantes en sus comunidades.",
            opinion: "El program Retorno al Hogar me parece una iniciativa de gran importancia, debido a las políticas migratorias de mayor exigencia que se ha estado viviendo desde que el presidente actual de los Estados unidos Donald Trump fue electo. Sin embargo, su efectividad va a depender meramente de la correcta implementación y seguimiento que se dé a la misma, así como del apoyo del pueblo hacia los compatriotas que egresan y renuncian al sueño americano por Obligación",
            date: "2025-06-23"
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
