document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const searchInput = document.getElementById("search");
    const dateFilter = document.getElementById("date-filter");

    const newsData = [
        {
            title: "Los ministerios aún no identifican la necesidad de una readecuación presupuestaria, dice Karin Herrera sobre la atención a migrantes retornados",
            image: "images/news1.png",
            summary: "Resumen: El Gobierno de Guatemala ha lanzado el programa Retorno al Hogar para apoyar a los connacionales deportados de Estados Unidos debido al endurecimiento de las políticas migratorias. La vicepresidenta Karin Herrera explicó que este programa busca brindar apoyo en vivienda, empleo y formación para la reinserción de los migrantes en sus comunidades.",
            opinion: "El program Retorno al Hogar me parece una iniciativa de gran importancia, debido a las políticas migratorias de mayor exigencia que se ha estado viviendo desde que el presidente actual de los Estados unidos Donald Trump fue electo. Sin embargo, su efectividad va a depender meramente de la correcta implementación y seguimiento que se dé a la misma, así como del apoyo del pueblo hacia los compatriotas que egresan y renuncian al sueño americano por Obligación",
            date: "3 de Febrero de 2025"
        },
        {
            title: "Firman convenio para entornos libres de drogas para los menores de edad",
            image: "images/news2.png",
            summary: "El Ministerio de Gobernación (Mingob) y la Secretaría Ejecutiva de la Comisión contra las Adicciones y el Tráfico Ilícito de Drogas (SECCATID) firmaron un convenio de cooperación para fortalecer la lucha contra las drogas en Guatemala.",
            opinion: "Este convenio es un avance clave en la lucha contra las adicciones en Guatemala, la prevención es vital para proteger a las nuevas generaciones. Pero no es suficiente con prohibir: debe complementarse con educación y oportunidades reales para los jóvenes. Además, es crucial que no quede en papel, sino que se implemente con seguimiento y resultados medibles. La juventud necesita entornos seguros.",
            date: "4 de Febrero de 2025 "
        },
        {
            title: "Las empresas no van a invertir en un país donde va a haber un golpe de Estado",
            image: "images/news3.png",
            summary: "El secretario de Estado de los Estados Unidos, Marco Rubio, declaró en Guatemala que la corrupción y la inestabilidad democrática afectan la inversión extranjera, lo que genera pobreza, violencia y migración. ",
            opinion: "La inversión extranjera depende de un entorno estable y libre de corrupción. Guatemala enfrenta grandes desafíos en gobernanza y seguridad, y aunque el apoyo de Estados Unidos puede ser clave, el verdadero cambio debe venir desde dentro del país.",
            date: "5 de Febrero de 2025 "
        }, {
            title: "Presidente supervisa avances de tramo carretero en Chiquimula que beneficiará a más de 68 mil guatemaltecos",
            image: "images/news4.png",
            summary: "El presidente Bernardo Arévalo, junto con el ministro de Comunicaciones, Infraestructura y Vivienda, Miguel Ángel Díaz, supervisó los avances en la rehabilitación de un tramo carretero de 22.1 kilómetros entre Esquipulas y la aldea Chanmagua, en Chiquimula. ",
            opinion: "Las mejoras en la infraestructura vial son esenciales para el desarrollo económico y social del país. Un tramo carretero en buen estado puede marcar la diferencia en la vida de muchas personas, facilitando el acceso a mercados, educación y salud.",
            date: "6 de Febrero de 2025 "
        }, {
            title: "Ministros de Gobernación y Defensa fortalecen cooperación en seguridad con EE. UU.",
            image: "images/news5.png",
            summary: "El ministro de Gobernación, Francisco Jiménez, viajó a Washington D. C. para dar continuidad a los diálogos iniciados en Guatemala con el secretario de Estado de EE. UU., Marco Rubio. Durante su visita, Jiménez y el ministro de Defensa, Henry Saenz, participaron en reuniones enfocadas en la lucha contra el narcotráfico, el crimen organizado y el tráfico de personas.",
            opinion: "El fortalecimiento de la cooperación en seguridad con EE. UU. es clave para enfrentar amenazas como el narcotráfico y el crimen organizado. Guatemala necesita aliados estratégicos que aporten recursos y conocimiento en estas áreas, pero también es importante que el país no dependa exclusivamente de la ayuda extranjera",
            date: "7 de Febrero de 2025 "
        }, {
            title: "Luto en Guatemala: Al menos 55 muertos tras la caída de un autobús desde un puente",
            image: "images/news6.png",
            summary: "Un trágico accidente ocurrió este lunes 10 de febrero cuando un autobús de transporte público, sobrecargado de pasajeros, se precipitó desde el Puente Belice en la autopista al norte de la Ciudad de Guatemala, cayendo aproximadamente 60 metros hasta el río Las Vacas.",
            opinion: "Más allá del luto y el dolor que deja este terrible accidente, la verdadera problemática que enfrenta Guatemala es el pésimo estado del transporte público y la infraestructura vial. A diario, miles de guatemaltecos se ven obligados a viajar en autobuses sobrecargados, sin mantenimiento y sin regulaciones estrictas que garanticen su seguridad.",
            date: "10 de Febrero de 2025 "
        }, {
            title: "Guatemala mejora dos puntos en el Índice de Percepción de la Corrupción",
            image: "images/news7.png",
            summary: "Según el último informe de Transparencia Internacional, Guatemala mostró una leve mejoría en la percepción de corrupción al pasar de 23 puntos en 2023 a 25 en 2024 en una escala de 0 a 100.",
            opinion: "El problema no se soluciona con un par de puntos de mejora, sino con cambios profundos en las instituciones, mayor supervisión de los funcionarios y sanciones efectivas contra la corrupción. La ciudadanía debe exigir resultados tangibles, porque un índice tan bajo no es motivo de celebración, sino una alerta de lo mucho que queda por hacer.",
            date: "11 de Febrero de 2025 "
        }, {
            title: "Presentan Plan Nacional de Prevención de Delitos VET",
            image: "images/news8.png",
            summary: "La vicepresidenta de Guatemala, Karin Herrera, presentó en el Campo de Marte el Plan Nacional para la Prevención de Delitos de Violencia Sexual, Explotación y Trata de Personas, además del despliegue de unidades móviles de la UNIVET 2025.",
            opinion: "Esta iniciativa es un paso importante en la protección de las víctimas de violencia y explotación, sobre todo en comunidades, aunque estos programas son necesarios, la educación debería ser una prioridad aún mayor, ya que la falta de acceso a información y recursos es una de las principales causas de vulnerabilidad para estas poblaciones.",
            date: "12 de Febrero de 2025 "
        }, {
            title: "El MARN espera que el derecho a un ambiente sano prevalezca",
            image: "images/news9.png",
            summary: "La ministra de Ambiente y Recursos Naturales, Patricia Orantes, informó sobre el impacto positivo de la reciente entrada en vigor del Reglamento de Desechos Sólidos en Guatemala. Esta normativa busca fomentar la separación y disposición adecuada de la basura, promoviendo así un entorno más limpio y saludable.",
            opinion: "Esta noticia representa un avance importante para el país en términos ambientales. Sin embargo, Guatemala aún enfrenta grandes problemas con el reciclaje y la gestión de desechos, principalmente con la negativa por parte de la sociedad a esta iniciativa.",
            date: "13 de Febrero de 2025 "
        }, 
        {
            title: "17 de Febrero de 2025 - Nuevo incremento al precio del gas, el segundo en 14 días",
            image: "images/news11.png",
            summary: "Los precios del gas licuado de petróleo (GLP) en Guatemala sufrieron un nuevo aumento este 17 de febrero de 2025, marcando el segundo incremento en dos semanas. En total, el precio ha subido un 9.1% en 14 días, pasando de Q4.40 a Q4.80 por libra, lo que representa un aumento de Q0.40 por libra.",
            opinion: "Es importante que el gobierno garantice precios justos y accesibles, evitando prácticas abusivas en el mercado energético, por eso se pide transparencia en estas subidas de precios y razones reales para los mismos.",
            date: "17 de Febrero de 2025 "
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
