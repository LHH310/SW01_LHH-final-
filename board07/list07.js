let boardsStr = localStorage.getItem("boards07");

if (boardsStr === null) {
    const listStr = JSON.stringify([]);
    localStorage.setItem("boards07", listStr);
    boardsStr = listStr;
}

const boardsObj = JSON.parse(boardsStr);


const recentBoards = boardsObj.sort((a, b) => new Date(b.date) - new Date(a.date));
console.log("Recent Boards: ", recentBoards);

const template = (index, objValue) => {
    const ratingValue = objValue.rating ? objValue.rating : 0;
    return `
    <tr>
        <td>${index + 1}</td>
        <td><a href=" ./view.html?index=${objValue.index}">${objValue.subject}</a></td>
        <td>${objValue.writer}</td>
        <td>${objValue.date}</td>
        <td>${ratingValue} / 5</td>
    </tr>
    `;
};

const tbody = document.querySelector("tbody");
const pageSize = 10;
let currentPage = 1;

const renderPage = (page) => {
    tbody.innerHTML = ""; 

    const start = (page - 1) * pageSize;
    const end = Math.min(start + pageSize, recentBoards.length);
    const pageBoards = recentBoards.slice(start, end);

    console.log("Page Boards: ", pageBoards);

    pageBoards.forEach((objValue, index) => {
        tbody.innerHTML += template(start + index, objValue);
    });

    document.getElementById("page-number").textContent = page;
};

document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < Math.ceil(recentBoards.length / pageSize)) {
        currentPage++;
        renderPage(currentPage);
    }
});

renderPage(currentPage);
