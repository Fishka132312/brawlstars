// 1. Данные
const brawlers = [
    { id: 1, name: "Shelly", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000000.webp" },
    { id: 2, name: "Colt", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000001.webp" },
    { id: 3, name: "Bull", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000002.webp" },
    { id: 4, name: "Brock", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000003.webp" },
    { id: 5, name: "Barley", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000006.webp" },
    { id: 7, name: "Nita", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000008.webp" },
    { id: 8, name: "El Primo", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000010.webp" },
    { id: 9, name: "Poco", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000013.webp" },
    { id: 10, name: "Rosa", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000024.webp" },
    { id: 11, name: "Rico", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000004.webp" },
    { id: 12, name: "Jessie", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000007.webp" },
    { id: 13, name: "Dynomike", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000009.webp" },
    { id: 14, name: "Darryl", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000018.webp" },
    { id: 15, name: "Penny", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000019.webp" },
    { id: 16, name: "Tick", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000022.webp" },
    { id: 17, name: "Carl", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000025.webp" },
    { id: 18, name: "8-BIT", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000027.webp" },
    { id: 19, name: "Jacky", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000034.webp" },
    { id: 20, name: "Gus", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000061.webp" },
    { id: 21, name: "Bo", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000014.webp" },
    { id: 22, name: "Piper", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000015.webp" },
    { id: 23, name: "Pam", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000016.webp" },
    { id: 24, name: "Frank", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000020.webp" },
    { id: 25, name: "Bibi", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000026.webp" },
    { id: 26, name: "Bea", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000029.webp" },
    { id: 27, name: "Emz", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000030.webp" },
    { id: 28, name: "Gale", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000035.webp" },
    { id: 29, name: "Nani", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000036.webp" },
    { id: 30, name: "Collete", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000039.webp" },
    { id: 31, name: "Edgar", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000043.webp" },
    { id: 32, name: "Stu", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000045.webp" },
    { id: 33, name: "Belle", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000046.webp" },
    { id: 34, name: "Grom", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000048.webp" },
    { id: 35, name: "Griff", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000050.webp" },
    { id: 36, name: "Ash", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000051.webp" },
    { id: 37, name: "Lola", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000053.webp" },
    { id: 38, name: "Bonnie", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000058.webp" },
    { id: 39, name: "Sam", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000060.webp" },
    { id: 40, name: "Mandy", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000065.webp" },
    { id: 41, name: "Maisie", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000068.webp" },
    { id: 42, name: "Hank", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000069.webp" },
    { id: 43, name: "Pearl", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000072.webp" },
    { id: 44, name: "Larry lorry", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000077.webp" },
    { id: 45, name: "Angelo", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000079.webp" },
    { id: 46, name: "Berry", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000082.webp" },
    { id: 47, name: "Shade", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000086.webp" },
    { id: 48, name: "Meeple", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000089.webp" },
    { id: 49, name: "Trunk", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000096.webp" },
    { id: 50, name: "Mortis", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000011.webp" },
    { id: 51, name: "Tara", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000017.webp" },
    { id: 52, name: "Gene", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000021.webp" },
    { id: 53, name: "Mr.P", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000031.webp" },
    { id: 54, name: "Max", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000032.webp" },
    { id: 55, name: "Sprout", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000037.webp" },
    { id: 56, name: "Lou", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000041.webp" },
    { id: 57, name: "Byron", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000042.webp" },
    { id: 58, name: "Ruffs", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000044.webp" },
    { id: 59, name: "Squeak", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000047.webp" },
    { id: 60, name: "Buzz", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000049.webp" },
    { id: 61, name: "Fang", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000054.webp" },
    { id: 62, name: "Eve", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000056.webp" },
    { id: 63, name: "Janet", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000057.webp" },
    { id: 64, name: "Otis", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000059.webp" },
    { id: 65, name: "Buster", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000062.webp" },
    { id: 66, name: "Gray", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000064.webp" },
    { id: 67, name: "R-T", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000066.webp" },
    { id: 68, name: "Willow", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000067.webp" },
    { id: 69, name: "Doug", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000071.webp" },
    { id: 70, name: "Chuck", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000073.webp" },
    { id: 71, name: "Charlie", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000074.webp" },
    { id: 72, name: "Mico", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000075.webp" },
    { id: 73, name: "Melodie", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000078.webp" },
    { id: 74, name: "Lily", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000081.webp" },
    { id: 75, name: "Clancy", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000083.webp" },
    { id: 76, name: "Moe", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000084.webp" },
    { id: 77, name: "Juju", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000087.webp" },
    { id: 78, name: "Ollie", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000090.webp" },
    { id: 79, name: "Lumi", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000091.webp" },
    { id: 80, name: "Finx", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000092.webp" },
    { id: 81, name: "Jae-Yong", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000093.webp" },
    { id: 82, name: "Alli", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000095.webp" },
    { id: 83, name: "Mina", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000097.webp" },
    { id: 84, name: "Ziggy", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000098.webp" },
    { id: 85, name: "Gigi", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000100.webp" },
    { id: 86, name: "Glowy", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000101.webp" },
    { id: 87, name: "Najia", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/16000103.png" },
    { id: 88, name: "Spike", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000005.webp" },
    { id: 89, name: "Crow", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000012.webp" },
    { id: 90, name: "Leon", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000023.webp" },
    { id: 91, name: "Sandy", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000028.webp" },
    { id: 92, name: "Surge", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000038.webp" },
    { id: 93, name: "Amber", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000040.webp" },
    { id: 94, name: "Meg", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000052.webp" },
    { id: 95, name: "Chester", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000063.webp" },
    { id: 96, name: "Cordelius", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000070.webp" },
    { id: 97, name: "Kit", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000076.webp" },
    { id: 98, name: "Draco", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000080.webp" },
    { id: 99, name: "Kenji", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000085.webp" },
    { id: 100, name: "Pierce", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000099.webp" },
    { id: 101, name: "Kaze", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000094.webp" },
    { id: 102, name: "Sirius", class: "Controller", image: "https://brawlify.com/images/brawlers/16000102.png" },
];

const metaData = {
    "S": [25, 102, 11, 50, 89, 2, 21, 3, 88],
    "A": [27, 26, 51, 24], 
    "B": [1, 90, 57, 22, 30, 65, 60, 100, 10, 80, 81, 86, 64, 97, 32, 79, 39, 48, 99],
    "C": [63, 68, 46, 66, 71, 54, 77, 37, 41, 17, 20, 93, 101, 19, 85, 7, 49, 73, 58, 47, 43, 92, 36, 4, 15, 40, 76, 78],
    "D": [83, 8, 52, 95, 61, 31, 82, 69, 62, 45, 53, 96, 35, 56, 33, 74, 94, 34, 98],
    "F": [23, 67, 55, 9, 14, 13, 75, 84, 28, 12, 29, 59, 18, 44, 38, 5, 72, 16, 91, 42, 70]
};

// 1. Хранилище для выбранных врагов
let selectedEnemies = [null, null, null]; 
let currentSlot = null;

// 2. Открыть окно выбора бойца
function openPicker(slotIndex) {
    currentSlot = slotIndex;
    const modal = document.getElementById('picker-modal');
    const grid = document.getElementById('picker-grid');
    
    if (!modal || !grid) return; // Защита, если элементов нет в HTML

    modal.classList.remove('hidden');
    grid.innerHTML = "";

    // Сортируем бойцов по алфавиту для удобства выбора
    const sortedBrawlers = [...brawlers].sort((a, b) => a.name.localeCompare(b.name));

    sortedBrawlers.forEach(b => {
        const item = document.createElement('div');
        item.className = "card";
        item.style.width = "100px";
        item.style.padding = "5px";
        item.style.cursor = "pointer";
        item.innerHTML = `
            <img src="${b.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
            <p style="font-size: 12px; margin: 5px 0 0; color: white;">${b.name}</p>
        `;
        item.onclick = () => selectBrawlerForSlot(b.id);
        grid.appendChild(item);
    });
}

// 3. Закрыть окно выбора
function closePicker() {
    const modal = document.getElementById('picker-modal');
    if (modal) modal.classList.add('hidden');
}

// 4. Логика выбора бойца в ячейку (с проверкой на дубликаты)
function selectBrawlerForSlot(id) {
    const brawler = brawlers.find(b => b.id === id);
    if (!brawler) return;

    // ПРОВЕРКА: нельзя выбрать того же самого бойца в другой слот
    const isDuplicate = selectedEnemies.some(e => e && e.id === brawler.id);
    if (isDuplicate) {
        alert("Этот боец уже выбран в качестве врага!");
        return;
    }

    // Сохраняем в массив
    selectedEnemies[currentSlot - 1] = brawler;
    
    // Обновляем внешний вид ячейки
    const slotDiv = document.getElementById(`slot-${currentSlot}`);
    if (slotDiv) {
        slotDiv.innerHTML = `<img src="${brawler.image}" style="width: 100%; height: 100%; object-fit: cover;">`;
        slotDiv.style.border = "3px solid white";
        slotDiv.style.background = "#000";
    }
    
    closePicker();
}

// 5. Сброс всех слотов
function resetSlots() {
    selectedEnemies = [null, null, null];
    for (let i = 1; i <= 3; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if (slot) {
            slot.innerHTML = "+";
            slot.style.border = "3px dashed #ccc";
            slot.style.background = "#1a1a1a";
        }
    }
    const resDiv = document.getElementById('pick-result');
    if (resDiv) resDiv.innerHTML = "";
}

// 6. ГЛАВНАЯ ФУНКЦИЯ: Расчет лучшего контр-пика
function calculateBestPick() {
    const enemies = selectedEnemies.filter(e => e !== null);
    if (enemies.length === 0) {
        alert("Выберите хотя бы одного врага для анализа!");
        return;
    }

    let finalScores = [];

    brawlers.forEach(myBrawler => {
        let score = 0;
        const myClass = myBrawler.class;
        const myMatchup = matchups[myClass];

        // Если у этого класса нет данных в matchups, даем штраф или пропускаем
        if (!myMatchup) {
            score -= 5; 
        } else {
            enemies.forEach(enemy => {
                // Если мой класс силен против класса врага
                if (myMatchup.strong.includes(enemy.class)) score += 3;
                // Если мой класс слаб против класса врага
                if (myMatchup.weak.includes(enemy.class)) score -= 3;
            });
        }

        // Учитываем Мету из metaData
        const tierPoints = { "S": 2.5, "A": 1.5, "B": 1.0, "C": 0.5, "D": 0, "F": -1 };
        let currentTier = "Z";
        
        for (let tier in metaData) {
            if (metaData[tier].includes(myBrawler.id)) {
                currentTier = tier;
                break;
            }
        }
        score += (tierPoints[currentTier] || -0.5);

        finalScores.push({ id: myBrawler.id, total: score });
    });

    // Сортируем: сверху те, у кого больше баллов
    finalScores.sort((a, b) => b.total - a.total);

    // Берем топ-5 результатов
    const winners = finalScores.slice(0, 5).map(item => item.id);
    renderResults(winners);
}

// 7. Отрисовка результатов
function renderResults(ids) {
    const resDiv = document.getElementById('pick-result');
    if (!resDiv) return;

    resDiv.innerHTML = "<h2 style='margin-bottom:20px;'>Лучшие контр-пики:</h2>";
    const grid = document.createElement('div');
    grid.className = "grid-container";
    grid.style.justifyContent = "center";

    ids.forEach(id => {
        const b = brawlers.find(x => x.id == id);
        if (b) {
            const card = document.createElement('div');
            card.className = "card";
            card.style.background = "#2e7d32"; // Зеленый для победных вариантов
            card.style.border = "3px solid #fff";
            card.innerHTML = `
                <img src="${b.image}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px;">
                <h3 style="margin: 10px 0 5px;">${b.name}</h3>
                <p style="font-size: 12px; opacity: 0.9;">${b.class}</p>
            `;
            card.onclick = () => showBrawlerDetails(b.id);
            grid.appendChild(card);
        }
    });
    resDiv.appendChild(grid);
}

const maps = [
    { name: "Out in the Open", mode: "Knockout", link: "https://brawlify.com/maps/15000548", image: "https://brawlify.com/images/maps/150/15000548.webp" },
    { name: "Opening Move", mode: "Knockout", link: "https://brawlify.com/maps/15001210", image: "https://brawlify.com/images/maps/15001210.png" },
    { name: "Healthy Middle Ground", mode: "Knockout", link: "https://brawlify.com/maps/15000581", image: "https://brawlify.com/images/maps/150/15000581.webp" },
    { name: "New Perspective", mode: "Knockout", link: "https://brawlify.com/maps/15000528", image: "https://brawlify.com/images/maps/150/15000528.webp" },
    { name: "Flowing Springs", mode: "Knockout", link: "https://brawlify.com/maps/15000502", image: "https://brawlify.com/images/maps/150/15000502.webp" },
    { name: "Belle's Rock", mode: "Knockout", link: "https://brawlify.com/maps/15000368", image: "https://brawlify.com/images/maps/150/15000368.webp" },
    { name: "Flaring Phoenix", mode: "Knockout", link: "https://brawlify.com/maps/15000440", image: "https://brawlify.com/images/maps/150/15000440.webp" },
    { name: "Goldarm Gulch", mode: "Knockout", link: "https://brawlify.com/maps/15000367", image: "https://brawlify.com/images/maps/150/15000367.webp" },
    { name: "Konnakol", mode: "Knockout", link: "https://brawlify.com/maps/15001173", image: "https://brawlify.com/images/maps/150/15001173.webp" },
    { name: "Chivalry", mode: "Knockout", link: "https://brawlify.com/maps/15001127", image: "https://brawlify.com/images/maps/150/15001127.webp" },
    { name: "Double Decker", mode: "Knockout", link: "https://brawlify.com/maps/15001018", image: "https://brawlify.com/images/maps/150/15001018.webp" },
    { name: "Pinned Down", mode: "Knockout", link: "https://brawlify.com/maps/15001179", image: "https://brawlify.com/images/maps/150/15001179.webp" },
    { name: "Streets with No Name", mode: "Knockout", link: "https://brawlify.com/maps/15001019", image: "https://brawlify.com/images/maps/150/15001019.webp" },
    { name: "Four Levels", mode: "Knockout", link: "https://brawlify.com/maps/15000734", image: "https://brawlify.com/images/maps/150/15000734.webp" },
    { name: "New Horizons", mode: "Knockout", link: "https://brawlify.com/maps/15000703", image: "https://brawlify.com/images/maps/150/15000703.webp" },
    { name: "Snake Out", mode: "Knockout", link: "https://brawlify.com/maps/15000365", image: "https://brawlify.com/images/maps/150/15000365.webp" },
    { name: "A Ballad About Minced Cutlets", mode: "Knockout", link: "https://brawlify.com/maps/15001096", image: "https://brawlify.com/images/maps/150/15001096.webp" },
    { name: "Call of the Water", mode: "Knockout", link: "https://brawlify.com/maps/15001059", image: "https://brawlify.com/images/maps/150/15001059.webp" },
    { name: "Crab Claws", mode: "Knockout", link: "https://brawlify.com/maps/15001211", image: "https://brawlify.com/images/maps/15001211.png" },
    { name: "Deep End", mode: "Knockout", link: "https://brawlify.com/maps/15000429", image: "https://brawlify.com/images/maps/150/15000429.webp" },
    { name: "H for...", mode: "Knockout", link: "https://brawlify.com/maps/15000882", image: "https://brawlify.com/images/maps/150/15000882.webp" },
    { name: "Party for You", mode: "Knockout", link: "https://brawlify.com/maps/15001095", image: "https://brawlify.com/images/maps/150/15001095.webp" },
    { name: "Think Ahead", mode: "Knockout", link: "https://brawlify.com/maps/15001058", image: "https://brawlify.com/images/maps/150/15001058.webp" },
    { name: "Super Beach", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000259", image: "https://brawlify.com/images/maps/150/15000259.webp" },
    { name: "Nutmeg", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001168", image: "https://brawlify.com/images/maps/150/15001168.webp" },
    { name: "Beach Ball", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000143", image: "https://brawlify.com/images/maps/150/15000143.webp" },
    { name: "Backyard Bowl", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000024", image: "https://brawlify.com/images/maps/150/15000024.webp" },
    { name: "Singed Earth", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001167", image: "https://brawlify.com/images/maps/150/15001167.webp" },
    { name: "Pinhole Punt", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000026", image: "https://brawlify.com/images/maps/150/15000026.webp" },
    { name: "Pinball Dreams", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000118", image: "https://brawlify.com/images/maps/150/15000118.webp" },
    { name: "Spiraling Out", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001021", image: "https://brawlify.com/images/maps/150/15001021.webp" },
    { name: "Grass Knot", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001020", image: "https://brawlify.com/images/maps/150/15001020.webp" },
    { name: "Triple Dribble", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000025", image: "https://brawlify.com/images/maps/150/15000025.webp" },
    { name: "Match 1123581321", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001054", image: "https://brawlify.com/images/maps/150/15001054.webp" },
    { name: "Super Beach", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000051", image: "https://brawlify.com/images/maps/150/15000051.webp" },
    { name: "Sunny Soccer", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000144", image: "https://brawlify.com/images/maps/150/15000144.webp" },
    { name: "Sneaky Fields", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000050", image: "https://brawlify.com/images/maps/150/15000050.webp" },
    { name: "Sidetrack", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001053", image: "https://brawlify.com/images/maps/150/15001053.webp" },
    { name: "Center Stage", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000132", image: "https://brawlify.com/images/maps/150/15000132.webp" },
    { name: "Flute Chutes", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001093", image: "https://brawlify.com/images/maps/150/15001093.webp" },
    { name: "Goalies", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001204", image: "https://brawlify.com/images/maps/15001204.png" },
    { name: "Grab the Moment", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001094", image: "https://brawlify.com/images/maps/150/15001094.webp" },
    { name: "No Good Deed", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001205", image: "https://brawlify.com/images/maps/15001205.png" },
    { name: "Priceless Cactus", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000928", image: "https://brawlify.com/images/maps/150/15000928.webp" },
    { name: "Rooftop Runners", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000929", image: "https://brawlify.com/images/maps/150/15000929.webp" },
    { name: "Double Swoosh", mode: "Gem Grab", link: "https://brawlify.com/maps/15000115", image: "https://brawlify.com/images/maps/150/15000115.webp" },
    { name: "Hard Rock Mine", mode: "Gem Grab", link: "https://brawlify.com/maps/15000007", image: "https://brawlify.com/images/maps/150/15000007.webp" },
    { name: "Gem Fort", mode: "Gem Grab", link: "https://brawlify.com/maps/15000010", image: "https://brawlify.com/images/maps/150/15000010.webp" },
    { name: "Snake Pit", mode: "Gem Grab", link: "https://brawlify.com/maps/15001171", image: "https://brawlify.com/images/maps/150/15001171.webp" },
    { name: "Storage Sector", mode: "Gem Grab", link: "https://brawlify.com/maps/15001027", image: "https://brawlify.com/images/maps/150/15001027.webp" },
    { name: "Deathcap Trap", mode: "Gem Grab", link: "https://brawlify.com/maps/15000009", image: "https://brawlify.com/images/maps/150/15000009.webp" },
    { name: "On a Roll", mode: "Gem Grab", link: "https://brawlify.com/maps/15001026", image: "https://brawlify.com/images/maps/150/15001026.webp" },
    { name: "Crystal Arcade", mode: "Gem Grab", link: "https://brawlify.com/maps/15000008", image: "https://brawlify.com/images/maps/150/15000008.webp" },
    { name: "Undermine", mode: "Gem Grab", link: "https://brawlify.com/maps/15000011", image: "https://brawlify.com/images/maps/150/15000011.webp" },
    { name: "Rustic Arcade", mode: "Gem Grab", link: "https://brawlify.com/maps/15000343", image: "https://brawlify.com/images/maps/150/15000343.webp" },
    { name: "Open Space", mode: "Gem Grab", link: "https://brawlify.com/maps/15000499", image: "https://brawlify.com/images/maps/150/15000499.webp" },
    { name: "Afterparty", mode: "Gem Grab", link: "https://brawlify.com/maps/15001090", image: "https://brawlify.com/images/maps/150/15001090.webp" },
    { name: "Railroad Robbery", mode: "Gem Grab", link: "https://brawlify.com/maps/15001123", image: "https://brawlify.com/images/maps/150/15001123.webp" },
    { name: "Fortress Fall", mode: "Gem Grab", link: "https://brawlify.com/maps/15001172", image: "https://brawlify.com/images/maps/150/15001172.webp" },
    { name: "ATLAS", mode: "Gem Grab", link: "https://brawlify.com/maps/15001089", image: "https://brawlify.com/images/maps/150/15001089.webp" },
    { name: "Extreme Nonchalance", mode: "Gem Grab", link: "https://brawlify.com/maps/15001052", image: "https://brawlify.com/images/maps/150/15001052.webp" },
    { name: "Lilygear Lake", mode: "Gem Grab", link: "https://brawlify.com/maps/15000931", image: "https://brawlify.com/images/maps/150/15000931.webp" },
    { name: "Local Restaurants", mode: "Gem Grab", link: "https://brawlify.com/maps/15000932", image: "https://brawlify.com/images/maps/150/15000932.webp" },
    { name: "Picturesque", mode: "Gem Grab", link: "https://brawlify.com/maps/15001208", image: "https://brawlify.com/images/maps/15001208.png" },
    { name: "Satomi Springs", mode: "Gem Grab", link: "https://brawlify.com/maps/15001209", image: "https://brawlify.com/images/maps/15001209.png" },
    { name: "Whisper Vale", mode: "Gem Grab", link: "https://brawlify.com/maps/15001051", image: "https://brawlify.com/images/maps/150/15001051.webp" },
    { name: "Bridge Too Far", mode: "Heist", link: "https://brawlify.com/maps/15000077", image: "https://brawlify.com/images/maps/150/15000077.webp" },
    { name: "Hot Potato", mode: "Heist", link: "https://brawlify.com/maps/15000053", image: "https://brawlify.com/images/maps/150/15000053.webp" },
    { name: "Safe Zone", mode: "Heist", link: "https://brawlify.com/maps/15000019", image: "https://brawlify.com/images/maps/150/15000019.webp" },
    { name: "Photic Doom", mode: "Heist", link: "https://brawlify.com/maps/15001099", image: "https://brawlify.com/images/maps/150/15001099.webp" },
    { name: "Aridity", mode: "Heist", link: "https://brawlify.com/maps/15001169", image: "https://brawlify.com/images/maps/150/15001169.webp" },
    { name: "GG 2.0", mode: "Heist", link: "https://brawlify.com/maps/15000900", image: "https://brawlify.com/images/maps/150/15000900.webp" },
    { name: "Quintillion", mode: "Heist", link: "https://brawlify.com/maps/15001170", image: "https://brawlify.com/images/maps/150/15001170.webp" },
    { name: "All Things Wicked", mode: "Heist", link: "https://brawlify.com/maps/15001098", image: "https://brawlify.com/images/maps/150/15001098.webp" },
    { name: "Bridge Too Far", mode: "Heist", link: "https://brawlify.com/maps/15000072", image: "https://brawlify.com/images/maps/150/15000072.webp" },
    { name: "Corner Cave", mode: "Heist", link: "https://brawlify.com/maps/15001063", image: "https://brawlify.com/images/maps/150/15001063.webp" },
    { name: "Kaboom Canyon", mode: "Heist", link: "https://brawlify.com/maps/15000018", image: "https://brawlify.com/images/maps/150/15000018.webp" },
    { name: "Perpetual Motion", mode: "Heist", link: "https://brawlify.com/maps/15001207", image: "https://brawlify.com/images/maps/15001207.png" },
    { name: "Pit Stop", mode: "Heist", link: "https://brawlify.com/maps/15000137", image: "https://brawlify.com/images/maps/150/15000137.webp" },
    { name: "Plain Text", mode: "Heist", link: "https://brawlify.com/maps/15000933", image: "https://brawlify.com/images/maps/150/15000933.webp" },
    { name: "Subway Turfers", mode: "Heist", link: "https://brawlify.com/maps/15001024", image: "https://brawlify.com/images/maps/150/15001024.webp" },
    { name: "Tuning Fork", mode: "Heist", link: "https://brawlify.com/maps/15001206", image: "https://brawlify.com/images/maps/15001206.png" },
    { name: "Zip Zap Zoom", mode: "Heist", link: "https://brawlify.com/maps/15001062", image: "https://brawlify.com/images/maps/150/15001062.webp" },
    { name: "Temple Ruins", mode: "Bounty", link: "https://brawlify.com/maps/15000000", image: "https://brawlify.com/images/maps/150/15000000.webp" },
    { name: "Snake Prairie", mode: "Bounty", link: "https://brawlify.com/maps/15000004", image: "https://brawlify.com/images/maps/150/15000004.webp" },
    { name: "Shooting Star", mode: "Bounty", link: "https://brawlify.com/maps/15000005", image: "https://brawlify.com/images/maps/150/15000005.webp" },
    { name: "Hideout", mode: "Bounty", link: "https://brawlify.com/maps/15000022", image: "https://brawlify.com/images/maps/150/15000022.webp" },
    { name: "Dry Season", mode: "Bounty", link: "https://brawlify.com/maps/15000083", image: "https://brawlify.com/images/maps/150/15000083.webp" },
    { name: "Starrburst", mode: "Bounty", link: "https://brawlify.com/maps/15001067", image: "https://brawlify.com/images/maps/150/15001067.webp" },
    { name: "Choral Chambers", mode: "Bounty", link: "https://brawlify.com/maps/15001176", image: "https://brawlify.com/images/maps/150/15001176.webp" },
    { name: "Layer Cake", mode: "Bounty", link: "https://brawlify.com/maps/15000082", image: "https://brawlify.com/images/maps/150/15000082.webp" },
    { name: "Wall Hugging", mode: "Bounty", link: "https://brawlify.com/maps/15001175", image: "https://brawlify.com/images/maps/150/15001175.webp" },
    { name: "Excel", mode: "Bounty", link: "https://brawlify.com/maps/15000081", image: "https://brawlify.com/images/maps/150/15000081.webp" },
    { name: "Deathcap Trap", mode: "Bounty", link: "https://brawlify.com/maps/15000002", image: "https://brawlify.com/images/maps/150/15000002.webp" },
    { name: "Brace for Impact", mode: "Bounty", link: "https://brawlify.com/maps/15000935", image: "https://brawlify.com/images/maps/150/15000935.webp" },
    { name: "Don't turn around", mode: "Bounty", link: "https://brawlify.com/maps/15000553", image: "https://brawlify.com/images/maps/150/15000553.webp" },
    { name: "Hit and Run", mode: "Bounty", link: "https://brawlify.com/maps/15001220", image: "https://brawlify.com/images/maps/15001220.png" },
    { name: "No Excuses", mode: "Bounty", link: "https://brawlify.com/maps/15000295", image: "https://brawlify.com/images/maps/150/15000295.webp" },
    { name: "Side by Side", mode: "Bounty", link: "https://brawlify.com/maps/15000554", image: "https://brawlify.com/images/maps/150/15000554.webp" },
    { name: "Watermelons", mode: "Bounty", link: "https://brawlify.com/maps/15001219", image: "https://brawlify.com/images/maps/15001219.png" },
    { name: "Open Business", mode: "Hot Zone", link: "https://brawlify.com/maps/15000292", image: "https://brawlify.com/images/maps/150/15000292.webp" },
    { name: "Dueling Beetles", mode: "Hot Zone", link: "https://brawlify.com/maps/15000306", image: "https://brawlify.com/images/maps/150/15000306.webp" },
    { name: "Tax Evasion", mode: "Hot Zone", link: "https://brawlify.com/maps/15001165", image: "https://brawlify.com/images/maps/150/15001165.webp" },
    { name: "Playmaker", mode: "Hot Zone", link: "https://brawlify.com/maps/15001057", image: "https://brawlify.com/images/maps/150/15001057.webp" },
    { name: "Parallel Plays", mode: "Hot Zone", link: "https://brawlify.com/maps/15000293", image: "https://brawlify.com/images/maps/150/15000293.webp" },
    { name: "The Seven Pillars of Humanity", mode: "Hot Zone", link: "https://brawlify.com/maps/15001166", image: "https://brawlify.com/images/maps/150/15001166.webp" },
    { name: "Ring of Fire", mode: "Hot Zone", link: "https://brawlify.com/maps/15000300", image: "https://brawlify.com/images/maps/150/15000300.webp" },
    { name: "Abracadabra", mode: "Hot Zone", link: "https://brawlify.com/maps/15001022", image: "https://brawlify.com/images/maps/150/15001022.webp" },
    { name: "Back Shuffle", mode: "Hot Zone", link: "https://brawlify.com/maps/15001092", image: "https://brawlify.com/images/maps/150/15001092.webp" },
    { name: "Fishing Bed", mode: "Hot Zone", link: "https://brawlify.com/maps/15000927", image: "https://brawlify.com/images/maps/150/15000927.webp" },
    { name: "Golden Bay", mode: "Hot Zone", link: "https://brawlify.com/maps/15001202", image: "https://brawlify.com/images/maps/15001202.png" },
    { name: "Hyacinth House", mode: "Hot Zone", link: "https://brawlify.com/maps/15001203", image: "https://brawlify.com/images/maps/15001203.png" },
    { name: "In the Liminal", mode: "Hot Zone", link: "https://brawlify.com/maps/15001023", image: "https://brawlify.com/images/maps/150/15001023.webp" },
    { name: "Just Another Race To Anywhere", mode: "Hot Zone", link: "https://brawlify.com/maps/15001091", image: "https://brawlify.com/images/maps/150/15001091.webp" },
    { name: "Open Zone", mode: "Hot Zone", link: "https://brawlify.com/maps/15000527", image: "https://brawlify.com/images/maps/150/15000527.webp" },
    { name: "Ticket to Die", mode: "Hot Zone", link: "https://brawlify.com/maps/15001126", image: "https://brawlify.com/images/maps/150/15001126.webp" },
    { name: "Zone Splitting", mode: "Hot Zone", link: "https://brawlify.com/maps/15001125", image: "https://brawlify.com/images/maps/150/15001125.webp" },
    
];

// Логика контр-пиков по классам
const matchups = {
    "Damage Dealer": { strong: ["Tank", "Assassin"], weak: ["Marksman", "Artillery"] },
    "Assassin": { strong: ["Marksman", "Artillery"], weak: ["Tanks","Damage Dealers"] },
    "Marksmen": { strong: ["Damage Dealer", "Artillery"], weak: ["Assassin", "Artillery"] },
    "Artillery": { strong: ["None"], weak: ["Tank", "Assassins"] },
    "Tank": { strong: ["Assassin", "Support"], weak: ["Damage Dealer"] },
    "Support": { strong: ["Damage Dealers", "Assassins", "Marksman"], weak: ["Tank"] },
    "Controller": { strong: ["Tank", "Support"], weak: ["Marksmen", "Assassin", "Artillery"] },
    // Добавьте остальные по аналогии
};

// 2. Функции навигации
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
    if (sectionId === 'classes') renderClasses();
    if (sectionId === 'maps') renderMaps();
}

function showSection(sectionId) {
    // 1. Скрываем вообще все секции
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    
    // 2. Показываем нужную
    const activeSection = document.getElementById(`${sectionId}-section`);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // 3. Запускаем рендер данных в зависимости от секции
    if (sectionId === 'classes') renderClasses();
    if (sectionId === 'maps') renderMaps();
    if (sectionId === 'meta') renderMeta(); // ОБЯЗАТЕЛЬНО ЭТА СТРОЧКА
}

function renderMeta() {
    const container = document.getElementById('meta-section'); // Убедись, что такой ID есть в HTML
    container.innerHTML = "<h1 style='color:white; text-align:center;'>Brawler Tier List (Meta)</h1>";

    const tiers = ["S", "A", "B", "C", "D", "F"];
    const tierColors = {
        "S": "#ff7f7f", "A": "#ffbf7f", "B": "#ffff7f", 
        "C": "#7fff7f", "D": "#7fbfff", "F": "#ff7fff"
    };

    tiers.forEach(tier => {
        const row = document.createElement('div');
        row.style.display = "flex";
        row.style.alignItems = "stretch";
        row.style.marginBottom = "10px";
        row.style.background = "#1a1a1a";
        row.style.border = "1px solid #333";
        row.style.minHeight = "100px";

        // Левая часть с буквой ранга
        const label = document.createElement('div');
        label.innerText = tier;
        label.style.width = "80px";
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.justifyContent = "center";
        label.style.fontSize = "32px";
        label.style.fontWeight = "bold";
        label.style.backgroundColor = tierColors[tier];
        label.style.color = "#000";

        // Правая часть с иконками бойцов
        const items = document.createElement('div');
        items.style.display = "flex";
        items.style.flexWrap = "wrap";
        items.style.padding = "10px";
        items.style.gap = "10px";

        const brawlerIds = metaData[tier] || [];
        brawlerIds.forEach(id => {
            const brawler = brawlers.find(b => b.id === id);
            if (brawler) {
                const img = document.createElement('img');
                img.src = brawler.image;
                img.style.width = "60px";
                img.style.height = "60px";
                img.style.cursor = "pointer";
                img.style.borderRadius = "5px";
                img.style.border = "2px solid transparent";
                img.title = brawler.name;

                // Переход к деталям при клике
                img.onclick = () => showBrawlerDetails(brawler.id);
                
                // Эффект при наведении
                img.onmouseenter = () => img.style.borderColor = "white";
                img.onmouseleave = () => img.style.borderColor = "transparent";
                
                items.appendChild(img);
            }
        });

        row.appendChild(label);
        row.appendChild(items);
        container.appendChild(row);
    });
}

function renderMaps(filter = "") {
    const container = document.getElementById('maps-list');
    container.innerHTML = ""; 

    // Убираем горизонтальный скролл у главного контейнера
    container.style.display = "block"; 
    container.style.width = "100%";
    container.style.overflowX = "hidden"; // Запрещаем скролл вправо
    container.style.boxSizing = "border-box";

    const filteredMaps = maps.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()));
    const modes = [...new Set(filteredMaps.map(m => m.mode))];

    modes.forEach(modeName => {
        const modeSection = document.createElement('div');
        modeSection.style.width = "100%";
        modeSection.style.boxSizing = "border-box";
        modeSection.style.marginBottom = "40px"; 

        modeSection.innerHTML = `
            <h2 style="color: #FFCC00; font-size: 24px; margin: 20px 10px; text-transform: uppercase; font-family: sans-serif;">
                ${modeName}
            </h2>
        `;

        const grid = document.createElement('div');
        grid.style.display = "grid";
        // auto-fit и minmax(150px, 1fr) позволят картам сужаться, чтобы влезть в экран
        grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(160px, 1fr))";
        grid.style.gap = "15px";
        grid.style.padding = "10px";
        grid.style.boxSizing = "border-box";

        filteredMaps.filter(m => m.mode === modeName).forEach(map => {
            const card = document.createElement('div');
            card.className = "card";
            card.style.padding = "0";
            card.style.background = "#4B2C90";
            card.style.borderRadius = "12px";
            card.style.overflow = "hidden";
            card.style.border = "2px solid white";
            card.style.boxSizing = "border-box"; // Чтобы рамка не расширяла карту
            card.style.transition = "transform 0.2s";

            card.innerHTML = `
                <img src="${map.image}" style="width: 100%; height: auto; display: block; object-fit: contain;" alt="${map.name}">
                <div style="padding: 10px; text-align: center; color: white;">
                    <h3 style="margin: 0; font-size: 1rem; word-wrap: break-word;">${map.name}</h3>
                    <p style="margin: 5px 0 0; opacity: 0.7; font-size: 0.8rem;">${map.mode}</p>
                </div>
            `;
            
            card.onmouseenter = () => card.style.transform = "scale(1.03)";
            card.onmouseleave = () => card.style.transform = "scale(1)";
            card.onclick = () => window.open(map.link, '_blank');
            grid.appendChild(card);
        });

        modeSection.appendChild(grid);
        container.appendChild(modeSection);
    });
}

function searchMaps() {
    const term = document.getElementById('mapSearch').value;
    renderMaps(term);
}

// 4. Рендер Бойцов
function renderClasses() {
    const container = document.getElementById('brawlers-by-class');
    container.innerHTML = "";
    
    const classes = [...new Set(brawlers.map(b => b.class))];
    
    classes.forEach(className => {
        const section = document.createElement('div');
        section.innerHTML = `<h3>${className}</h3>`;
        const grid = document.createElement('div');
        grid.className = "grid-container";
        
        brawlers.filter(b => b.class === className).forEach(b => {
            const card = document.createElement('div');
            card.className = "card";
            card.innerHTML = `<img src="${b.image}"><p>${b.name}</p><span>ID: ${b.id}</span>`;
            card.onclick = () => showBrawlerDetails(b.id);
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        container.appendChild(section);
    });
}

function showBrawlerDetails(id) {
    showSection('details');
    const brawler = brawlers.find(b => b.id === id);
    const m = matchups[brawler.class] || { strong: [], weak: [] };

    // 1. Создаем веса для сортировки (S = 0, A = 1 ... F = 5, нет в списке = 6)
    const tierWeights = { "S": 0, "A": 1, "B": 2, "C": 3, "D": 4, "F": 5 };

    // Функция для получения ранга бойца
    const getBrawlerTier = (bId) => {
        for (const [tier, ids] of Object.entries(metaData)) {
            if (ids.includes(bId)) return tier;
        }
        return "Z"; // Если бойца нет в мете, он уходит в конец
    };

    // 2. Улучшенная функция получения имен с сортировкой по мете
    const getSortedNamesByClasses = (classList) => {
        return brawlers
            .filter(b => classList.includes(b.class)) // Оставляем только нужные классы
            .sort((a, b) => {
                const tierA = getBrawlerTier(a.id);
                const tierB = getBrawlerTier(b.id);
                
                // Сравниваем веса рангов
                const weightA = tierWeights[tierA] ?? 10;
                const weightB = tierWeights[tierB] ?? 10;
                
                return weightA - weightB;
            })
            .map(b => {
                const tier = getBrawlerTier(b.id);
                // Добавим визуальную пометку ранга рядом с именем (опционально)
                return tier !== "Z" ? `${b.name} [${tier}]` : b.name;
            })
            .join(", ");
    };

    document.getElementById('brawler-details').innerHTML = `
        <div class="card" style="width: 250px; margin: 20px auto; padding: 0; overflow: hidden; background: #4B2C90; border: 3px solid white; border-radius: 15px;">
            <div style="width: 100%; height: 150px; background: #000; display: flex; align-items: center; justify-content: center;">
                <img src="${brawler.image}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div style="padding: 15px; text-align: center; color: white;">
                <h2 style="margin: 0;">${brawler.name}</h2>
                <p style="margin: 5px 0 0; opacity: 0.8;">Класс: ${brawler.class}</p>
            </div>
        </div>

        <div class="counter-block strong" style="background-color: #4caf50; color: white; padding: 20px; margin: 10px; border-radius: 10px;">
            <h4 style="margin-top: 0;">Бойцы, которых он контрит (по силе в мете):</h4>
            <p style="margin-bottom: 0; line-height: 1.6;">${getSortedNamesByClasses(m.strong) || "Данные уточняются"}</p>
        </div>
        
        <div class="counter-block weak" style="background-color: #f44336; color: white; padding: 20px; margin: 10px; border-radius: 10px;">
            <h4 style="margin-top: 0;">Опасные противники (сначала топовые):</h4>
            <p style="margin-bottom: 0; line-height: 1.6;">${getSortedNamesByClasses(m.weak) || "Данные уточняются"}</p>
        </div>
    `;
}

// Инициализация
showSection('maps');