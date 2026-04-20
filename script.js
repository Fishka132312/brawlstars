// 1. Данные
const brawlers = [
    { id: 1, name: "Shelly", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000000.webp", color: "#77d4fe" },
    { id: 2, name: "Colt", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000001.webp", color: "#5aea2e" },
    { id: 3, name: "Bull", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000002.webp", color: "#5aea2e" },
    { id: 4, name: "Brock", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000003.webp", color: "#5aea2e" },
    { id: 5, name: "Barley", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000006.webp", color: "#5aea2e" },
    { id: 7, name: "Nita", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000008.webp", color: "#5aea2e" },
    { id: 8, name: "El Primo", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000010.webp", color: "#5aea2e" },
    { id: 9, name: "Poco", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000013.webp", color: "#5aea2e" },
    { id: 10, name: "Rosa", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000024.webp", color: "#5aea2e" },
    { id: 11, name: "Rico", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000004.webp", color: "#1f6ce0" },
    { id: 12, name: "Jessie", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000007.webp", color: "#1f6ce0" },
    { id: 13, name: "Dynomike", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000009.webp", color: "#1f6ce0" },
    { id: 14, name: "Darryl", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000018.webp", color: "#1f6ce0" },
    { id: 15, name: "Penny", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000019.webp", color: "#1f6ce0" },
    { id: 16, name: "Tick", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000022.webp", color: "#1f6ce0" },
    { id: 17, name: "Carl", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000025.webp", color: "#1f6ce0" },
    { id: 18, name: "8-BIT", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000027.webp", color: "#1f6ce0" },
    { id: 19, name: "Jacky", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000034.webp", color: "#1f6ce0" },
    { id: 20, name: "Gus", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000061.webp", color: "#8a22dd" },
    { id: 21, name: "Bo", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000014.webp", color: "#8a22dd" },
    { id: 22, name: "Piper", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000015.webp", color: "#8a22dd" },
    { id: 23, name: "Pam", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000016.webp", color: "#8a22dd" },
    { id: 24, name: "Frank", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000020.webp", color: "#8a22dd" },
    { id: 25, name: "Bibi", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000026.webp", color: "#8a22dd" },
    { id: 26, name: "Bea", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000029.webp", color: "#8a22dd" },
    { id: 27, name: "Emz", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000030.webp", color: "#8a22dd" },
    { id: 28, name: "Gale", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000035.webp", color: "#8a22dd" },
    { id: 29, name: "Nani", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000036.webp", color: "#8a22dd" },
    { id: 30, name: "Collete", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000039.webp", color: "#8a22dd" },
    { id: 31, name: "Edgar", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000043.webp", color: "#8a22dd" },
    { id: 32, name: "Stu", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000045.webp", color: "#8a22dd" },
    { id: 33, name: "Belle", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000046.webp", color: "#8a22dd" },
    { id: 34, name: "Grom", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000048.webp", color: "#8a22dd" },
    { id: 35, name: "Griff", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000050.webp", color: "#8a22dd" },
    { id: 36, name: "Ash", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000051.webp", color: "#8a22dd" },
    { id: 37, name: "Lola", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000053.webp", color: "#8a22dd" },
    { id: 38, name: "Bonnie", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000058.webp", color: "#8a22dd" },
    { id: 39, name: "Sam", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000060.webp", color: "#8a22dd" },
    { id: 40, name: "Mandy", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000065.webp", color: "#8a22dd" },
    { id: 41, name: "Maisie", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000068.webp", color: "#8a22dd" },
    { id: 42, name: "Hank", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000069.webp", color: "#8a22dd" },
    { id: 43, name: "Pearl", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000072.webp", color: "#8a22dd" },
    { id: 44, name: "Larry lorry", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000077.webp", color: "#8a22dd" },
    { id: 45, name: "Angelo", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000079.webp", color: "#8a22dd" },
    { id: 46, name: "Berry", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000082.webp", color: "#8a22dd" },
    { id: 47, name: "Shade", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000086.webp", color: "#8a22dd" },
    { id: 48, name: "Meeple", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000089.webp", color: "#8a22dd" },
    { id: 49, name: "Trunk", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000096.webp", color: "#8a22dd" },
    { id: 50, name: "Mortis", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000011.webp", color: "#e81116" },
    { id: 51, name: "Tara", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000017.webp", color: "#e81116" },
    { id: 52, name: "Gene", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000021.webp", color: "#e81116" },
    { id: 53, name: "Mr.P", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000031.webp", color: "#e81116" },
    { id: 54, name: "Max", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000032.webp", color: "#e81116" },
    { id: 55, name: "Sprout", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000037.webp", color: "#e81116" },
    { id: 56, name: "Lou", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000041.webp", color: "#e81116" },
    { id: 57, name: "Byron", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000042.webp", color: "#e81116" },
    { id: 58, name: "Ruffs", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000044.webp", color: "#e81116" },
    { id: 59, name: "Squeak", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000047.webp", color: "#e81116" },
    { id: 60, name: "Buzz", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000049.webp", color: "#e81116" },
    { id: 61, name: "Fang", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000054.webp", color: "#e81116" },
    { id: 62, name: "Eve", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000056.webp", color: "#e81116" },
    { id: 63, name: "Janet", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000057.webp", color: "#e81116" },
    { id: 64, name: "Otis", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000059.webp", color: "#e81116" },
    { id: 65, name: "Buster", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000062.webp", color: "#e81116" },
    { id: 66, name: "Gray", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000064.webp", color: "#e81116" },
    { id: 67, name: "R-T", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000066.webp", color: "#e81116" },
    { id: 68, name: "Willow", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000067.webp", color: "#e81116" },
    { id: 69, name: "Doug", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000071.webp", color: "#e81116" },
    { id: 70, name: "Chuck", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000073.webp", color: "#e81116" },
    { id: 71, name: "Charlie", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000074.webp", color: "#e81116" },
    { id: 72, name: "Mico", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000075.webp", color: "#e81116" },
    { id: 73, name: "Melodie", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000078.webp", color: "#e81116" },
    { id: 74, name: "Lily", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000081.webp", color: "#e81116" },
    { id: 75, name: "Clancy", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000083.webp", color: "#e81116" },
    { id: 76, name: "Moe", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000084.webp", color: "#e81116" },
    { id: 77, name: "Juju", class: "Artillery", image: "https://brawlify.com/images/brawlers/160/16000087.webp", color: "#e81116" },
    { id: 78, name: "Ollie", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000090.webp", color: "#e81116" },
    { id: 79, name: "Lumi", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000091.webp", color: "#e81116" },
    { id: 80, name: "Finx", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000092.webp", color: "#e81116" },
    { id: 81, name: "Jae-Yong", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000093.webp", color: "#e81116" },
    { id: 82, name: "Alli", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000095.webp", color: "#e81116" },
    { id: 83, name: "Mina", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000097.webp", color: "#e81116" },
    { id: 84, name: "Ziggy", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000098.webp", color: "#e81116" },
    { id: 85, name: "Gigi", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000100.webp", color: "#e81116" },
    { id: 86, name: "Glowy", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000101.webp", color: "#e81116" },
    { id: 87, name: "Najia", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/16000103.png", color: "#fbea0e" },
    { id: 88, name: "Spike", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000005.webp", color: "#fbea0e" },
    { id: 89, name: "Crow", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000012.webp", color: "#fbea0e" },
    { id: 90, name: "Leon", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000023.webp", color: "#fbea0e" },
    { id: 91, name: "Sandy", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000028.webp", color: "#fbea0e" },
    { id: 92, name: "Surge", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000038.webp", color: "#fbea0e" },
    { id: 93, name: "Amber", class: "Controller", image: "https://brawlify.com/images/brawlers/160/16000040.webp", color: "#fbea0e" },
    { id: 94, name: "Meg", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000052.webp", color: "#fbea0e" },
    { id: 95, name: "Chester", class: "Damage Dealer", image: "https://brawlify.com/images/brawlers/160/16000063.webp", color: "#fbea0e" },
    { id: 96, name: "Cordelius", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000070.webp", color: "#fbea0e" },
    { id: 97, name: "Kit", class: "Support", image: "https://brawlify.com/images/brawlers/160/16000076.webp", color: "#fbea0e" },
    { id: 98, name: "Draco", class: "Tank", image: "https://brawlify.com/images/brawlers/160/16000080.webp", color: "#fbea0e" },
    { id: 99, name: "Kenji", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000085.webp", color: "#fbea0e" },
    { id: 100, name: "Pierce", class: "Marksman", image: "https://brawlify.com/images/brawlers/160/16000099.webp", color: "#fbea0e" },
    { id: 101, name: "Kaze", class: "Assassin", image: "https://brawlify.com/images/brawlers/160/16000094.webp", color: "rainbow" },
    { id: 102, name: "Sirius", class: "Controller", image: "https://brawlify.com/images/brawlers/16000102.png", color: "rainbow" },
];

const metaData = {
    "S": [89, 88, 90, 100, 50, 95, 3, 2, 11],
    "A": [64, 21, 102, 25, 57, 27, 75, 87, 4], 
    "B": [48, 20, 83, 58, 96, 17, 74, 84, 101, 33, 82, 93, 71, 45],
    "C": [9, 47, 15, 26, 52, 97, 40, 59, 77, 22, 69, 29, 72, 67, 73, 51, 32, 99, 24, 76, 7],
    "D": [35, 34, 31, 1, 13, 65, 14, 70, 55, 92, 61, 60, 53, 86, 42, 63, 41, 38, 80, 91, 16, 37, 98, 94, 5, 49, 68, 85, 12, 56],
    "F": [28, 43, 81, 54, 79, 46, 10, 36, 8, 78, 18, 39, 30, 62, 23, 19]
};

const hardCounters = {
    //------------------------------Tank-------------------------------
    3: [ // Bull
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 2, weight: 20, tip: "Long distance, worse on closed maps"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 25, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 26, weight: 25, tip: "Long distance, veryyyy bad on closed maps" },
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}
    ],
    25: [ // Bibi
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 10, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 1, weight: 25, tip: "Very good for closed maps"},
        { id: 26, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}

    ],
    24: [ // Frank
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 10, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 1, weight: 25, tip: "Very good for closed maps"},
        { id: 26, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}
    ],
    19: [ // Jacky
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 10, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 1, weight: 25, tip: "Very good for closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}
    ],

    99: [ // Kenji
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 10, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 1, weight: 25, tip: "Very good for closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}
    ],

    101: [ // Kaze
        { id: 100, weight: 252, tip: "Long distance, worse on closed maps"},
        { id: 75, weight: 80, tip: "The best anti tank rn, pick everywhere"},
        { id: 88, weight: 25, tip: "Top 2 anti tank, good pick if Clancy banned"},
        { id: 35, weight: 25, tip: "Top 3 anti tank, good pick if Clancy banned"},
        { id: 30, weight: 5, tip: "Mid distance, good for Heist"},
        { id: 64, weight: 20, tip: "Long distance, i dont like otis"},
        { id: 27, weight: 10, tip: "Mid distance, good for control, worse on closed maps, "},
        { id: 87, weight: 25, tip: "Long distance, veryyyy bad on closed maps"},
        { id: 1, weight: 25, tip: "Very good for closed maps"},
        { id: 102, weight: 25, tip: "Mid distance and closed maps"}
    ],

    //------------------------------Anti Heal-------------------------------
    57: [ // Byron
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    9: [ // Poco
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    23: [ // Pam
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    69: [ // Pam
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    81: [ // Jae young
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    46: [ // Berry
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    86: [ // Glowy
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    52: [ // Gene
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    50: [ // Mortis
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    99: [ // Kenji
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],
    25: [ // Bibi
        { id: 89, weight: 35, tip: "Use first star power to reduce heal"}
    ],


    //------------------------------Metateli-------------------------------
    5: [ // Barley
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    13: [ // Dyno
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    16: [ // Tick
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    34: [ // Tick
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    44: [ // Larry
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    55: [ // Sprout
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    77: [ // Juju
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    68: [ // Willow
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],
    84: [ // Willow
        { id: 3, weight: 20, tip: "Not recomended on open maps"},
        { id: 25, weight: 20, tip: "Not recomended on open maps"},
        { id: 19, weight: 20, tip: "Not recomended on open maps"},
        { id: 50, weight: 20, tip: "Good or most maps"},
        { id: 72, weight: 20, tip: "Not recomended on open maps"},
        { id: 74, weight: 10, tip: "Good"},
        { id: 82, weight: 10, tip: "Good for closed maps, need bushes"},
        { id: 31, weight: 10, tip: "Ok rn, with new buffies will be the best"},
        { id: 90, weight: 20, tip: "Good for closed maps, need bushes"},
        { id: 97, weight: 20, tip: "Long distance, closed distance"},
        { id: 31, weight: 20, tip: "Open map with ur ult, not op rn"},
        { id: 47, weight: 20, tip: "Kill through walls"},
        { id: 96, weight: 20, tip: "Jump with first gadget"},
        { id: 99, weight: 20, tip: "Based on map"},
        { id: 33, weight: 20, tip: "Based on map, long distance bounce"},
        { id: 29, weight: 20, tip: "Based on map, long distance"},
    ],

    //------------------------------Anti Chuck-------------------------------
    70: [ // Chuck
        { id: 96, weight: 20, tip: "Good conter (Heist)"},
        { id: 72, weight: 20, tip: "Good conter (Heist)"},
        { id: 3, weight: 20, tip: "Good tank conter"},
        { id: 35, weight: 20, tip: "Good conter (Heist)"}
    ],

    //------------------------------Anti Dalniki-------------------------------
    22: [ // Piper
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    26: [ // Bea
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    33: [ // Belle
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    40: [ // Mandy
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    38: [ // Bonnie
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    45: [ // Angelo
        { id: 3, weight: 20, tip: "Good for closed maps"},
        { id: 25, weight: 20, tip: "Good for closed maps"},
        { id: 19, weight: 20, tip: "Good for closed maps"},
        { id: 100, weight: 20, tip: "Long distance, and closed maps"},
        { id: 84, weight: 5, tip: "Good for closed maps"},
        { id: 31, weight: 10, tip: "Good for closed maps"},
        { id: 82, weight: 15, tip: "Good for closed maps with bushes"},
        { id: 85, weight: 10, tip: "For long distance maps, not for skill issue"},
        { id: 90, weight: 25, tip: "Long distance, closed maps"},
        { id: 101, weight: 20, tip: "Good for closed maps"},
        { id: 50, weight: 10, tip: "Long distance, closed maps"},
        { id: 74, weight: 20, tip: "Good for closed maps with bushes"},
        { id: 97, weight: 20, tip: "Not for skill issue"}
    ],
    //------------------------------Anti Sirius-------------------------------
    102: [ // Sirius
        { id: 15, weight: 30, tip: "The best for anti Sirius"},
    ],
    //------------------------------Anti Najia-------------------------------
    87: [ // Sirius
        { id: 58, weight: 30, tip: "Spawn things with first gadget"},
        { id: 74, weight: 15, tip: "Good"},
        { id: 50, weight: 15, tip: "Use gadget for bat"},
        { id: 90, weight: 15, tip: "Use gadget for reduce potion effects"},
        { id: 25, weight: 15, tip: "Good tank"},
        { id: 62, weight: 15, tip: "Use only with hypercharge"},
    ],
};

// 1. Хранилище для выбранных врагов
let selectedEnemies = [null, null, null]; 
let currentSlot = null;

// 2. Открыть окно выбора бойца
// Открыть окно выбора с поиском
function openPicker(slotIndex) {
    currentSlot = slotIndex;
    const modal = document.getElementById('picker-modal');
    
    if (!modal) return;

    modal.classList.remove('hidden');
    
    // Создаем структуру окна
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <input type="text" id="brawler-search" placeholder="Search brawler..." 
                    style="flex-grow: 1; padding: 12px; border-radius: 10px; border: 3px solid white; background: rgba(0,0,0,0.5); color: white; font-family: 'Lilita One', cursive; font-size: 18px; outline: none;">
                <button onclick="closePicker()" class="action-btn" 
                    style="padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; font-family: 'Lilita One', cursive; margin: 0;">
                    X
                </button>
            </div>
            <div id="picker-grid"></div>
        </div>
    `;

    // Функция для отрисовки списка (внутренняя)
    const renderFilteredBrawlers = (filterText = "") => {
        const grid = document.getElementById('picker-grid');
        if (!grid) return;
        grid.innerHTML = "";
        
        // Фильтруем и сортируем по ID
        const filtered = brawlers
            .filter(b => b.name.toLowerCase().includes(filterText.toLowerCase()))
            .sort((a, b) => a.id - b.id);

        filtered.forEach(b => {
            const item = document.createElement('div');
            item.className = "card picker-card"; // Добавили спец класс picker-card

            let videoHTML = "";
            if (b.color === "rainbow") {
                item.classList.add("rainbow-card");
                videoHTML = `<video class="bg-video" autoplay loop muted playsinline>
                                <source src="https://preview.redd.it/srdmhkerhaxe1.gif?width=640&format=mp4&s=9e8614e4b3bdafd81aaf0f6f36b4af8f13540253" type="video/mp4">
                             </video>`;
            } else {
                item.style.background = b.color || '#1a1a1a';
            }

            // !!! УБРАЛИ УЖАСНЫЕ ПОЗИЦИОНИРОВАНИЯ И ПЛЮЩИЛКИ !!!
            // Стилизуем карточку только через CSS-классы
            item.innerHTML = `
                ${videoHTML}
                <img src="${b.image}" alt="${b.name}">
                <p>${b.name}</p>
            `;
            
            item.onclick = () => selectBrawlerForSlot(b);
            grid.appendChild(item);
        });
    };

    // Запускаем отрисовку
    renderFilteredBrawlers();

    // Слушатель поиска
    const searchInput = document.getElementById('brawler-search');
    searchInput.addEventListener('input', (e) => {
        renderFilteredBrawlers(e.target.value);
    });

    // Фокус на инпут
    setTimeout(() => searchInput.focus(), 100);
}

// 3. Закрыть окно выбора
function closePicker() {
    const modal = document.getElementById('picker-modal');
    if (modal) modal.classList.add('hidden');
}

// 4. Логика выбора бойца в ячейку (с проверкой на дубликаты)
function selectBrawlerForSlot(brawler) {
    if (!brawler) return;

    const isDuplicate = selectedEnemies.some(e => e && e.id === brawler.id);
    if (isDuplicate) {
        alert("This Brawler has already been selected!");
        return;
    }

    selectedEnemies[currentSlot - 1] = brawler;
    
    const slotDiv = document.getElementById(`slot-${currentSlot}`);
    if (slotDiv) {
        slotDiv.innerHTML = `<img src="${brawler.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
        slotDiv.style.background = brawler.color || "#000";
        slotDiv.style.border = "4px solid white";
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

    const tierPoints = { "S": 2.5, "A": 1.5, "B": 1.0, "C": 0.5, "D": 0, "F": -1 };

    // Получаем ID врагов (чтобы исключить их)
    const enemyIds = enemies.map(e => e.id);

    // Функция получения тира
    const getTier = (id) => {
        for (let tier in metaData) {
            if (metaData[tier].includes(id)) return tier;
        }
        return "Z";
    };

    let finalScores = [];

    brawlers.forEach(myBrawler => {

        // ❌ 1. НЕ берем бойцов, которые уже выбраны как враги
        if (enemyIds.includes(myBrawler.id)) return;

        let score = 0;
        const myClass = myBrawler.class;
        const myMatchup = matchups[myClass];

        // ❌ 2. Если нет матчапа — небольшой штраф
        if (!myMatchup) {
            score -= 3;
        } else {
            enemies.forEach(enemy => {

                // защита от undefined
                if (!enemy.class) return;

                // ✅ сильный против
                if (myMatchup.strong.includes(enemy.class)) {
                    score += 3;
                }

                // ❌ слабый против
                if (myMatchup.weak.includes(enemy.class)) {
                    score -= 3;
                }

                // ⚖️ маленький бонус за нейтрал (необязательно, но делает стабильнее)
                if (
                    !myMatchup.strong.includes(enemy.class) &&
                    !myMatchup.weak.includes(enemy.class)
                ) {
                    score += 0.5;
                }
            });
        }

        // ✅ 3. Добавляем мету
        const tier = getTier(myBrawler.id);
        score += (tierPoints[tier] ?? -0.5);

        finalScores.push({
            id: myBrawler.id,
            total: score
        });
    });

    // ✅ 4. Сортировка (если равны — выше тот, кто выше по мете)
    finalScores.sort((a, b) => {
        if (b.total !== a.total) return b.total - a.total;

        const tierOrder = ["S", "A", "B", "C", "D", "F", "Z"];
        const tierA = getTier(a.id);
        const tierB = getTier(b.id);

        return tierOrder.indexOf(tierA) - tierOrder.indexOf(tierB);
    });

    // ✅ 5. Берем топ-5
    const winners = finalScores.slice(0, 5).map(item => item.id);

    renderResults(winners);
}

// 7. Отрисовка результатов
function renderResults(ids) {
    const resDiv = document.getElementById('pick-result');
    if (!resDiv) return;

    resDiv.innerHTML = "<h2 style='margin-bottom:20px;'>The best counter-peaks:</h2>";
    const grid = document.createElement('div');
    grid.className = "grid-container";
    grid.style.justifyContent = "center";

    ids.forEach(id => {
        const b = brawlers.find(x => x.id == id);
        if (b) {
            const card = document.createElement('div');
            card.className = "card";
            
            let videoHTML = "";
            if (b.color === "rainbow") {
                card.classList.add("rainbow-card");
                videoHTML = `<video class="bg-video" autoplay loop muted playsinline>
                                <source src="https://preview.redd.it/srdmhkerhaxe1.gif?width=640&format=mp4&s=9e8614e4b3bdafd81aaf0f6f36b4af8f13540253" type="video/mp4">
                             </video>`;
            } else {
                card.style.background = b.color || "#2e7d32"; 
            }

            card.style.border = "3px solid #fff";
            card.innerHTML = `
                ${videoHTML}
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
    { id: 1, name: "Out in the Open", mode: "Knockout", link: "https://brawlify.com/maps/15000548", image: "https://media.brawltime.ninja/maps/15000548.webp?size=512", best: [22, 40, 4, 2, 90, 89, 57, 88, 52, 20, 45, 33, 29, 87, 48, 26, 100, 34, 72, 50, 20, 97, 43, 48, 33, 62], firstPick: [22, 40, 90, 88, 52, 20, 45, 87, 100], lastPick: [50, 34, 16, 97, 86, 74, 101, 72], worst: [1, 60, 54, 92, 24, 73, 35, 9, 69, 95, 36, 19, 23, 10, 91, 44, 7, 5, 46, 47, 98, 42, 51, 39, 68, 96, 73, 70, 56, 49, 80, 12], mapType: 1},
    { id: 2, name: "Opening Move", mode: "Knockout", link: "https://brawlify.com/maps/15001210", image: "https://media.brawltime.ninja/maps/15001210.webp?size=512" },
    { id: 3, name: "Healthy Middle Ground", mode: "Knockout", link: "https://brawlify.com/maps/15000581", image: "https://media.brawltime.ninja/maps/15000581.webp?size=512" },
    { id: 4, name: "New Perspective", mode: "Knockout", link: "https://brawlify.com/maps/15000528", image: "https://media.brawltime.ninja/maps/15000528.webp?size=512" },
    { id: 5, name: "Flowing Springs", mode: "Knockout", link: "https://brawlify.com/maps/15000502", image: "https://media.brawltime.ninja/maps/15000502.webp?size=512" },
    { id: 6, name: "Belle's Rock", mode: "Knockout", link: "https://brawlify.com/maps/15000368", image: "https://media.brawltime.ninja/maps/15000368.webp?size=512", best: [90, 100, 11, 20, 52, 66, 4, 57, 87, 34, 72, 50, 16, 97, 40, 53, 33, 88, 2, 26], firstPick: [90, 100, 11, 4, 87, 33], lastPick: [50, 72, 16, 97, 31, 84, 55], worst: [1, 60, 69, 8, 92, 35, 24, 34, 36, 23, 10, 19, 62, 56, 91, 7, 94, 39, 8, 1, 37, 70, 79, 12], mapType: 1},
    { id: 7, name: "Flaring Phoenix", mode: "Knockout", link: "https://brawlify.com/maps/15000440", image: "https://media.brawltime.ninja/maps/15000440.webp?size=512", best: [4, 90, 52, 100, 66, 57, 50, 88, 40, 59, 74, 34, 89, 87, 72, 16, 84, 102, 97, 63, 48, 77, 22, 66, 52], firstPick: [4, 90, 52, 100, 87], lastPick: [50, 74, 34, 72, 16, 84, 31, 97, 69, 55, 77], worst: [1, 60, 3, 24, 8, 14, 95, 30, 99, 9, 36, 19, 23, 91, 56, 37, 94, 7, 62, 79, 46, 54, 81, 8, 12, 70, ], mapType: 2},
    { id: 8, name: "Goldarm Gulch", mode: "Knockout", link: "https://brawlify.com/maps/15000367", image: "https://media.brawltime.ninja/maps/15000367.webp?size=512" },
    { id: 9, name: "Konnakol", mode: "Knockout", link: "https://brawlify.com/maps/15001173", image: "https://media.brawltime.ninja/maps/15001173.webp?size=512" },
    { id: 10, name: "Chivalry", mode: "Knockout", link: "https://brawlify.com/maps/15001127", image: "https://media.brawltime.ninja/maps/15001127.webp?size=512" },
    { id: 11, name: "Double Decker", mode: "Knockout", link: "https://brawlify.com/maps/15001018", image: "https://media.brawltime.ninja/maps/15001018.webp?size=512" },
    { id: 12, name: "Pinned Down", mode: "Knockout", link: "https://brawlify.com/maps/15001179", image: "https://media.brawltime.ninja/maps/15001179.webp?size=512" },
    { id: 13, name: "Streets with No Name", mode: "Knockout", link: "https://brawlify.com/maps/15001019", image: "https://media.brawltime.ninja/maps/15001019.webp?size=512" },
    { id: 14, name: "Four Levels", mode: "Knockout", link: "https://brawlify.com/maps/15000734", image: "https://media.brawltime.ninja/maps/15000734.webp?size=512" },
    { id: 15, name: "New Horizons", mode: "Knockout", link: "https://brawlify.com/maps/15000703", image: "https://media.brawltime.ninja/maps/15000703.webp?size=512", best: [4, 66, 100, 50, 52, 57, 90, 45, 20, 34, 87, 72, 40, 22, 48, 84, 97, 77, 55, 2, 66, 53, 29, 45, 16], firstPick: [4, 66, 100, 90, 45, 20, 87, 2], lastPick: [50, 72, 84, 97, 77, 55, 16], worst: [102, 53, 17, 64, 60, 96, 14, 15, 82, 34, 19, 10, 36, 23, 98, 56, 7, 46, 8, 70, 39, 12, 79, 5, 54, 92], mapType: 1},
    { id: 16, name: "Snake Out", mode: "Knockout", link: "https://brawlify.com/maps/15000365", image: "https://brawlify.com/images/maps/150/15000365.webp" },
    { id: 17, name: "A Ballad About Minced Cutlets", mode: "Knockout", link: "https://brawlify.com/maps/15001096", image: "https://media.brawltime.ninja/maps/15001096.webp?size=512" },
    { id: 18, name: "Call of the Water", mode: "Knockout", link: "https://brawlify.com/maps/15001059", image: "https://media.brawltime.ninja/maps/15001059.webp?size=512" },
    { id: 19, name: "Crab Claws", mode: "Knockout", link: "https://brawlify.com/maps/15001211", image: "https://media.brawltime.ninja/maps/15001211.webp?size=512" },
    { id: 20, name: "Deep End", mode: "Knockout", link: "https://brawlify.com/maps/15000429", image: "https://media.brawltime.ninja/maps/15000429.webp?size=512" },
    { id: 21, name: "H for...", mode: "Knockout", link: "https://brawlify.com/maps/15000882", image: "https://media.brawltime.ninja/maps/15000882.webp?size=512" },
    { id: 22,name: "Party for You", mode: "Knockout", link: "https://brawlify.com/maps/15001095", image: "https://media.brawltime.ninja/maps/15001095.webp?size=512" },
    { id: 23, name: "Think Ahead", mode: "Knockout", link: "https://brawlify.com/maps/15001058", image: "https://media.brawltime.ninja/maps/15001058.webp?size=512" },
    { id: 24, name: "Super Beach", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000259", image: "https://media.brawltime.ninja/maps/15000051.webp?size=512" },
    { id: 25, name: "Nutmeg", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001168", image: "https://media.brawltime.ninja/maps/15001168.webp?size=512" },
    { id: 26, name: "Beach Ball", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000143", image: "https://media.brawltime.ninja/maps/15000143.webp?size=512" },
    { id: 27, name: "Backyard Bowl", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000024", image: "https://media.brawltime.ninja/maps/15000024.webp?size=512" },
    { id: 28, name: "Singed Earth", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001167", image: "https://media.brawltime.ninja/maps/15001167.webp?size=512" },
    { id: 29, name: "Pinhole Punt", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000026", image: "https://media.brawltime.ninja/maps/15000026.webp?size=512" },
    { id: 30, name: "Pinball Dreams", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000118", image: "https://media.brawltime.ninja/maps/15000118.webp?size=512", best: [95, 89, 11, 2, 90, 100, 88, 3, 25, 26, 75, 24, 102, 87, 27], firstPick: [95, 89, 11, 2, 90, 100, 87], lastPick: [3, 25, 88, 50, 24, 69, 84], worst: [22, 40, 16, 57, 17, 54, 12, 62, 52, 38, 53, 33, 22, 23, 70, 61, 29, 18, 55, 46, 57, 37, 79, 54], mapType: 2},
    { id: 31, name: "Spiraling Out", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001021", image: "https://media.brawltime.ninja/maps/15001021.webp?size=512" },
    { id: 32, name: "Grass Knot", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001020", image: "https://media.brawltime.ninja/maps/15001020.webp?size=512" },
    { id: 33, name: "Triple Dribble", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000025", image: "https://media.brawltime.ninja/maps/15000025.webp?size=512", best: [95, 11, 89, 90, 48, 27, 3, 88, 50, 47, 25, 102, 13, 75, 77, 84, 87, 7, 76, 42, ], firstPick: [95, 11, 89, 90], lastPick: [3, 50, 47, 25, 75, 77, 84, 24, 68], worst: [22, 4, 21, 40, 57, 16, 19, 69, 13, 33, 52, 38, 62, 29, 53, 29, 23, 22, 70, 55, 79, 4, 43, 56, 15], mapType: 2},
    { id: 34, name: "Match 1123581321", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001054", image: "https://media.brawltime.ninja/maps/15001054.webp?size=512" },
    { id: 35, name: "Super Beach", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000051", image: "https://media.brawltime.ninja/maps/15000051.webp?size=512" },
    { id: 36, name: "Sunny Soccer", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000144", image: "https://media.brawltime.ninja/maps/15000144.webp?size=512" },
    { id: 37, name: "Sneaky Fields", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000050", image: "https://media.brawltime.ninja/maps/15000050.webp?size=512", best: [95, 11, 88, 89, 27, 3, 25, 50, 24, 87, 75, 102, 7], firstPick: [95, 11, 89, 87], lastPick: [3, 25, 50, 24, 69, 19], worst: [4, 97, 74, 16, 40, 29, 54, 62, 52, 53, 38, 33, 22, 23, 70, 79, 18, 57, 55, 46, 4, 77, 45, 20, 29, 44], mapType: 3},
    { id: 38, name: "Sidetrack", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001053", image: "https://media.brawltime.ninja/maps/15001053.webp?size=512" },
    { id: 39, name: "Center Stage", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000132", image: "https://media.brawltime.ninja/maps/15000132.webp?size=512", best: [95, 88, 11, 89, 64, 3, 2, 27, 75, 90, 26, 75, 87, 24, 102, 28, 7], firstPick: [95, 88, 11, 89, 64, 2, 27, 90], lastPick: [3, 50, 25, 34, 1, 97, 69, 24, 19], worst: [22, 4, 40, 74, 16, 17, 45, 33, 62, 52, 38, 53, 22, 44, 23, 29, 5, 18, 55, 20, 79, 16, ], mapType: 3},
    { id: 40, name: "Flute Chutes", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001093", image: "https://media.brawltime.ninja/maps/15001093.webp?size=512" },
    { id: 41, name: "Goalies", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001204", image: "https://media.brawltime.ninja/maps/15001204.webp?size=512" },
    { id: 42, name: "Grab the Moment", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001094", image: "https://brawlify.com/images/maps/150/15001094.webp" },
    { id: 43, name: "No Good Deed", mode: "Brawl Ball", link: "https://brawlify.com/maps/15001205", image: "https://brawlify.com/images/maps/15001205.png" },
    { id: 44, name: "Priceless Cactus", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000928", image: "https://media.brawltime.ninja/maps/15000928.webp?size=512" },
    { id: 45, name: "Rooftop Runners", mode: "Brawl Ball", link: "https://brawlify.com/maps/15000929", image: "https://media.brawltime.ninja/maps/15000929.webp?size=512" },
    { id: 46, name: "Double Swoosh", mode: "Gem Grab", link: "https://brawlify.com/maps/15000115", image: "https://media.brawltime.ninja/maps/15000115.webp?size=512", best: [95, 88, 50, 89, 90, 21, 63, 27, 75, 21, 87, 7, 76, 63, 91, 74], firstPick: [89, 90, 21, 63], lastPick: [50, 27, 75, 3], worst: [22, 48, 40, 14, 68, 34, 4, 47, 69, 49, 10, 82, 74, 38, 62, 46, 5, 44, 73, 29, 55, 22, 66, 42, 37, 84, 79, 56, 54, 77, 70], mapType: 3},
    { id: 47, name: "Hard Rock Mine", mode: "Gem Grab", link: "https://brawlify.com/maps/15000007", image: "https://media.brawltime.ninja/maps/15000007.webp?size=512", best: [11, 95, 90, 89, 21, 3, 25, 50, 64, 75, 87, 51], firstPick: [11, 95, 90, 89, 21, 100], lastPick: [3, 25, 50, 64], worst: [22, 40, 93, 57, 53, 66, 29, 32, 48, 76, 38, 5, 62, 55, 78, 46, 66, 29, 33, 79, 68, 79, 22, 45], mapType: 3},
    { id: 48, name: "Gem Fort", mode: "Gem Grab", link: "https://brawlify.com/maps/15000010", image: "https://media.brawltime.ninja/maps/15000010.webp?size=512", best: [11, 95, 50, 90, 89, 88, 3, 21, 82, 75, 25, 27, 87, 51], firstPick: [11, 95, 90, 89, 21], lastPick: [50, 3, 82, 75, 25], worst: [29, 57, 40, 28, 34, 20, 48, 52, 66, 69, 62, 38, 44, 33, 55, 5, 77, 39, 46, 73, 78, 29, 22, 70, 42, 79, 57, 4, 16, 8], mapType: 2},
    { id: 49, name: "Snake Pit", mode: "Gem Grab", link: "https://brawlify.com/maps/15001171", image: "https://media.brawltime.ninja/maps/15001171.webp?size=512" },
    { id: 50, name: "Storage Sector", mode: "Gem Grab", link: "https://brawlify.com/maps/15001027", image: "https://media.brawltime.ninja/maps/15001027.webp?size=512" },
    { id: 51, name: "Deathcap Trap", mode: "Gem Grab", link: "https://brawlify.com/maps/15000009", image: "https://media.brawltime.ninja/maps/15000009.webp?size=512" },
    { id: 52, name: "On a Roll", mode: "Gem Grab", link: "https://brawlify.com/maps/15001026", image: "https://media.brawltime.ninja/maps/15001026.webp?size=512" },
    { id: 53, name: "Crystal Arcade", mode: "Gem Grab", link: "https://brawlify.com/maps/15000008", image: "https://media.brawltime.ninja/maps/15000008.webp?size=512" },
    { id: 54, name: "Undermine", mode: "Gem Grab", link: "https://brawlify.com/maps/15000011", image: "https://media.brawltime.ninja/maps/15000011.webp?size=512", best: [95, 90, 11, 89, 64, 100, 88, 51, 27, 12, 72, 87, 102, 27], firstPick: [95, 90, 11, 89], lastPick: [50, 88, 97, 25, 3], worst: [48, 22, 54, 28, 4, 40, 57, 29, 32, 62, 38, 78, 5, 46, 44, 81, 29, 42, 33, 39, 37, 77, 68, 70, 85, 45, 55, 8, 79, 73], mapType: 2},
    { id: 55, name: "Rustic Arcade", mode: "Gem Grab", link: "https://brawlify.com/maps/15000343", image: "https://media.brawltime.ninja/maps/15000343.webp?size=512" },
    { id: 56, name: "Open Space", mode: "Gem Grab", link: "https://brawlify.com/maps/15000499", image: "https://media.brawltime.ninja/maps/15000499.webp?size=512" },
    { id: 57, name: "Afterparty", mode: "Gem Grab", link: "https://brawlify.com/maps/15001090", image: "https://media.brawltime.ninja/maps/15001090.webp?size=512" },
    { id: 58, name: "Railroad Robbery", mode: "Gem Grab", link: "https://brawlify.com/maps/15001123", image: "https://media.brawltime.ninja/maps/15001123.webp?size=512" },
    { id: 59, name: "Fortress Fall", mode: "Gem Grab", link: "https://brawlify.com/maps/15001172", image: "https://media.brawltime.ninja/maps/15001172.webp?size=512" },
    { id: 60, name: "ATLAS", mode: "Gem Grab", link: "https://brawlify.com/maps/15001089", image: "https://media.brawltime.ninja/maps/15001089.webp?size=512" },
    { id: 61, name: "Extreme Nonchalance", mode: "Gem Grab", link: "https://brawlify.com/maps/15001052", image: "https://media.brawltime.ninja/maps/15001052.webp?size=512" },
    { id: 62, name: "Lilygear Lake", mode: "Gem Grab", link: "https://brawlify.com/maps/15000931", image: "https://media.brawltime.ninja/maps/15000931.webp?size=512" },
    { id: 63, name: "Local Restaurants", mode: "Gem Grab", link: "https://brawlify.com/maps/15000932", image: "https://media.brawltime.ninja/maps/15000932.webp?size=512" },
    { id: 64, name: "Picturesque", mode: "Gem Grab", link: "https://brawlify.com/maps/15001208", image: "https://media.brawltime.ninja/maps/15001208.webp?size=512" },
    { id: 65, name: "Satomi Springs", mode: "Gem Grab", link: "https://brawlify.com/maps/15001209", image: "https://media.brawltime.ninja/maps/15001209.webp?size=512" },
    { id: 66, name: "Whisper Vale", mode: "Gem Grab", link: "https://brawlify.com/maps/15001051", image: "https://media.brawltime.ninja/maps/15001051.webp?size=512" },
    { id: 67, name: "Bridge Too Far", mode: "Heist", link: "https://brawlify.com/maps/15000077", image: "https://media.brawltime.ninja/maps/15000072.webp?size=512", best: [2, 29, 100, 73, 89, 45, 33, 22, 93, 101, 70, 12, 72, 4, 18, 93, 87, 29, 22, 33, 26, 57], firstPick: [2, 29, 100, 73, 89, 45, 33, 22, 93, 70], lastPick: [101, 82, 72], worst: [22, 50, 16, 55, 95, 52, 78, 10, 36, 23, 19, 91, 65, 16, 9, 5, 42, 44, 55, 92, 98, 54, 79, 46], mapType: 1},
    { id: 68, name: "Hot Potato", mode: "Heist", link: "https://brawlify.com/maps/15000053", image: "https://media.brawltime.ninja/maps/15000053.webp?size=512", best: [2, 11, 89, 46, 7, 88, 96, 25, 3, 75, 70, 72, 102, 73, 46], firstPick: [2, 11, 89, 75, 70, 72], lastPick: [46, 7, 88, 96, 25, 3], worst: [22, 50, 45, 61, 95, 64, 55, 16, 29, 52, 78, 38, 54, 66, 36, 33, 23,91, 53, 65, 56, 19, 26, 22, 45, 16, 62, 9, 43], mapType: 2},
    { id: 69, name: "Safe Zone", mode: "Heist", link: "https://brawlify.com/maps/15000019", image: "https://media.brawltime.ninja/maps/15000019.webp?size=512", best: [2, 100, 89, 72, 15, 17, 45, 73, 3, 70, 12, 87], firstPick: [2, 100, 89, 70], lastPick: [72, 3, 73], worst: [57, 50, 16, 64, 20, 92, 1, 14, 74, 55, 52, 78, 36, 19, 10, 91, 56, 42, 23, 65, 48, 9, 16, 68, 20, 55, 81, 1, 44, 79, 66,], mapType: 1},
    { id: 70, name: "Photic Doom", mode: "Heist", link: "https://brawlify.com/maps/15001099", image: "https://media.brawltime.ninja/maps/15001099.webp?size=512" },
    { id: 71, name: "Aridity", mode: "Heist", link: "https://brawlify.com/maps/15001169", image: "https://media.brawltime.ninja/maps/15001169.webp?size=512" },
    { id: 72, name: "GG 2.0", mode: "Heist", link: "https://brawlify.com/maps/15000900", image: "https://brawlify.com/images/maps/150/15000900.webp" },
    { id: 73, name: "Quintillion", mode: "Heist", link: "https://brawlify.com/maps/15001170", image: "https://media.brawltime.ninja/maps/15001170.webp?size=512" },
    { id: 74, name: "All Things Wicked", mode: "Heist", link: "https://brawlify.com/maps/15001098", image: "https://media.brawltime.ninja/maps/15001098.webp?size=512" },
    { id: 76, name: "Corner Cave", mode: "Heist", link: "https://brawlify.com/maps/15001063", image: "https://media.brawltime.ninja/maps/15001063.webp?size=512" },
    { id: 77, name: "Kaboom Canyon", mode: "Heist", link: "https://brawlify.com/maps/15000018", image: "https://brawlify.com/images/maps/150/15000018.webp", best: [2, 100, 45, 73, 101, 3, 89, 88, 72, 70, 75, 87, 100, 62, 15, 26, 29], firstPick: [2, 100, 45], lastPick: [3, 88, 72], worst: [22, 50, 45, 61, 95, 64, 55, 16, 52, 78, 36, 19, 10, 91, 56, 42, 23, 65, 48, 9, 16, 68, 20, 55, 81, 1, 44, 79, 66], mapType: 2},
    { id: 78, name: "Perpetual Motion", mode: "Heist", link: "https://brawlify.com/maps/15001207", image: "https://media.brawltime.ninja/maps/15001207.webp?size=512" },
    { id: 79, name: "Pit Stop", mode: "Heist", link: "https://brawlify.com/maps/15000137", image: "https://media.brawltime.ninja/maps/15000137.webp?size=512" },
    { id: 80, name: "Plain Text", mode: "Heist", link: "https://brawlify.com/maps/15000933", image: "https://brawlify.com/images/maps/150/15000933.webp" },
    { id: 81, name: "Subway Turfers", mode: "Heist", link: "https://brawlify.com/maps/15001024", image: "https://media.brawltime.ninja/maps/15001024.webp?size=512" },
    { id: 82, name: "Tuning Fork", mode: "Heist", link: "https://brawlify.com/maps/15001206", image: "https://media.brawltime.ninja/maps/15001206.webp?size=512" },
    { id: 83, name: "Zip Zap Zoom", mode: "Heist", link: "https://brawlify.com/maps/15001062", image: "https://media.brawltime.ninja/maps/15001062.webp?size=512" },
    { id: 84, name: "Temple Ruins", mode: "Bounty", link: "https://brawlify.com/maps/15000000", image: "https://brawlify.com/images/maps/150/15000000.webp" },
    { id: 85, name: "Snake Prairie", mode: "Bounty", link: "https://brawlify.com/maps/15000004", image: "https://media.brawltime.ninja/maps/15000004.webp?size=512" },
    { id: 86, name: "Shooting Star", mode: "Bounty", link: "https://brawlify.com/maps/15000005", image: "https://media.brawltime.ninja/maps/15000005.webp?size=512", best: [57, 52, 22, 29, 90, 20, 45, 100, 87, 4, 33, 34, 16, 2, 26, 88], firstPick: [57, 52, 22, 29, 90, 20, 45, 100, 87, 4], lastPick: [50, 34, 16, 84], worst: [19, 8, 3, 36, 1, 92, 93, 32, 54, 68, 47, 79, 95, 36, 10, 78, 23, 91, 46, 19, 8, 7, 5, 39], mapType: 1},
    { id: 87, name: "Hideout", mode: "Bounty", link: "https://brawlify.com/maps/15000022", image: "https://media.brawltime.ninja/maps/15000022.webp?size=512", best: [57, 29, 52, 50, 20, 4, 22, 33, 101, 89, 100, 26, 84, 50, 90, 87, 34, 21, 40, 72, 2, 45], firstPick: [57, 29, 52, 20, 4, 22, 33, 89, 100, 26, 90, 87], lastPick: [101, 84, 50, 97, 16, 44, 77, 34, 72], worst: [92, 95, 47, 17, 3, 8, 35, 1, 83, 24, 19, 25, 98, 36, 23, 10, 56, 19, 46, 8, 42, 79, 39, 98, 70], mapType: 1},
    { id: 88, name: "Dry Season", mode: "Bounty", link: "https://brawlify.com/maps/15000083", image: "https://media.brawltime.ninja/maps/15000083.webp?size=512", best: [87, 102, 34, 4, 22, 26, 40, 101, 90, 74, 20, 52, 57, 66, 72, 84, 100, 45, 29], firstPick: [87, 102, 34, 4, 22, 26, 40, 90, 20, 52, 100], lastPick: [101, 74, 16, 34, 55, 97, 86, 84, 50, 72, 84, 55, 97], worst: [8, 1, 47, 54, 35, 3, 30, 14, 52, 99, 79, 14, 19, 36, 25, 36, 10, 23, 19, 79, 5, 56, 91, 47, 42, 70, 44, 39, 12, 54, 92], mapType: 1},
    { id: 89, name: "Starrburst", mode: "Bounty", link: "https://brawlify.com/maps/15001067", image: "https://media.brawltime.ninja/maps/15001067.webp?size=512" },
    { id: 90, name: "Choral Chambers", mode: "Bounty", link: "https://brawlify.com/maps/15001176", image: "https://media.brawltime.ninja/maps/15001176.webp?size=512" },
    { id: 91, name: "Layer Cake", mode: "Bounty", link: "https://brawlify.com/maps/15000082", image: "https://media.brawltime.ninja/maps/15000082.webp?size=512",  best: [16, 87, 50, 90, 89, 88, 52, 100, 48, 26, 40, 34, 74, 72, 84], firstPick: [87, 89, 88, 52, 100, 48, 26, 40], lastPick: [16, 3, 84, 72, 74, 97, 34, 50, 74, 84, 97, 101], worst: [95, 8, 79, 36, 39, 60, 73, 23, 56, 36, 62, 39, 46, 49, 98, 19], mapType: 2},
    { id: 92, name: "Wall Hugging", mode: "Bounty", link: "https://brawlify.com/maps/15001175", image: "https://media.brawltime.ninja/maps/15001175.webp?size=512" },
    { id: 93, name: "Excel", mode: "Bounty", link: "https://brawlify.com/maps/15000081", image: "https://brawlify.com/images/maps/150/15000081.webp" },
    { id: 94, name: "Deathcap Trap", mode: "Bounty", link: "https://brawlify.com/maps/15000002", image: "https://media.brawltime.ninja/maps/15000009.webp?size=512" },
    { id: 95, name: "Brace for Impact", mode: "Bounty", link: "https://brawlify.com/maps/15000935", image: "https://media.brawltime.ninja/maps/15000935.webp?size=512" },
    { id: 96, name: "Don't turn around", mode: "Bounty", link: "https://brawlify.com/maps/15000553", image: "https://media.brawltime.ninja/maps/15000553.webp?size=512" },
    { id: 97, name: "Hit and Run", mode: "Bounty", link: "https://brawlify.com/maps/15001220", image: "https://media.brawltime.ninja/maps/15000295.webp?size=512" },
    { id: 98, name: "No Excuses", mode: "Bounty", link: "https://brawlify.com/maps/15000295", image: "https://media.brawltime.ninja/maps/15001220.webp?size=512" },
    { id: 99, name: "Side by Side", mode: "Bounty", link: "https://brawlify.com/maps/15000554", image: "https://media.brawltime.ninja/maps/15000554.webp?size=512" },
    { id: 100, name: "Watermelons", mode: "Bounty", link: "https://brawlify.com/maps/15001219", image: "https://media.brawltime.ninja/maps/15001219.webp?size=512" },
    { id: 101, name: "Open Business", mode: "Hot Zone", link: "https://brawlify.com/maps/15000292", image: "https://media.brawltime.ninja/maps/15000292.webp?size=512", best: [100, 90, 95, 89, 50, 21, 27, 88, 48, 75, 102, 87, 98, 91, 42, 12, 35], firstPick: [100, 90, 89, 21, 87], lastPick: [75, 25, 50, 77, 16, 98, 69, 84, 34, 49, 72, 70, 65], worst: [22, 4, 29, 57, 66, 40, 1, 32, 62, 45, 38, 33, 52, 29, 22, 37, 36, 63, 73, 54, 20, 82, 4], mapType: 2},
    { id: 102, name: "Dueling Beetles", mode: "Hot Zone", link: "https://brawlify.com/maps/15000306", image: "https://media.brawltime.ninja/maps/15000306.webp?size=512", best: [90, 50, 89, 21, 88, 27, 100, 25, 15, 95, 87, 75, 99, 42, 49, 70, 91, 3, 95, 12, 15, 101, 83, 48], firstPick: [90, 89, 21, 100, 87], lastPick: [50, 27, 88, 25, 16, 69, 99, 34, 84, 49, 98, 70, 3, 24, 101, 5], worst: [4, 22, 40, 66, 57, 60, 74, 92, 54, 52, 45, 22, 38, 54, 29, 36, 53, 79, 68, 63, 20, 4], mapType: 2},
    { id: 103, name: "Tax Evasion", mode: "Hot Zone", link: "https://brawlify.com/maps/15001165", image: "https://media.brawltime.ninja/maps/15001165.webp?size=512" },
    { id: 104, name: "Playmaker", mode: "Hot Zone", link: "https://brawlify.com/maps/15001057", image: "https://media.brawltime.ninja/maps/15001057.webp?size=512" },
    { id: 105, name: "Parallel Plays", mode: "Hot Zone", link: "https://brawlify.com/maps/15000293", image: "https://media.brawltime.ninja/maps/15000293.webp?size=512", best: [25, 50, 96, 27, 47, 90, 89, 99, 77, 88, 69, 102, 87, 100, 21, 32, 46, 75], firstPick: [90, 89], lastPick: [25, 50, 96, 27, 47, 69, 19, 49, 42, 3, 72, 31, 5, 99, 97, 84, 44, 96], worst: [95, 65, 14, 28, 26, 35, 34, 62, 52, 38, 33, 54, 22, 78, 26, 81, 57, 55, 37, 18, 36, 79, 4, 10, 20, 45, 40, 66, 63, 70, 2, 39, 58, 23], mapType: 3},
    { id: 106, name: "The Seven Pillars of Humanity", mode: "Hot Zone", link: "https://brawlify.com/maps/15001166", image: "https://media.brawltime.ninja/maps/15001166.webp?size=512" },
    { id: 107, name: "Ring of Fire", mode: "Hot Zone", link: "https://brawlify.com/maps/15000300", image: "https://media.brawltime.ninja/maps/15000300.webp?size=512", best: [95, 90, 100, 50, 88, 89, 21, 80, 15, 57, 16, 75, 27, 9, 87, 12, 61, 80, 34, 91, 15, 100], firstPick: [95, 90, 100, 16], lastPick: [50, 25, 70, 34, 69, 99], worst: [38, 78, 36, 52, 55, 85, 54, 68, 79, 22, 42, 39, 95, 44, 37, 41, 1], mapType: 1},
    { id: 108, name: "Abracadabra", mode: "Hot Zone", link: "https://brawlify.com/maps/15001022", image: "https://media.brawltime.ninja/maps/15001022.webp?size=512" },
    { id: 109, name: "Back Shuffle", mode: "Hot Zone", link: "https://brawlify.com/maps/15001092", image: "https://brawlify.com/images/maps/150/15001092.webp" },
    { id: 110, name: "Fishing Bed", mode: "Hot Zone", link: "https://brawlify.com/maps/15000927", image: "https://media.brawltime.ninja/maps/15000927.webp?size=512" },
    { id: 111, name: "Golden Bay", mode: "Hot Zone", link: "https://brawlify.com/maps/15001202", image: "https://media.brawltime.ninja/maps/15001202.webp?size=512" },
    { id: 112, name: "Hyacinth House", mode: "Hot Zone", link: "https://brawlify.com/maps/15001203", image: "https://media.brawltime.ninja/maps/15001203.webp?size=512" },
    { id: 113, name: "In the Liminal", mode: "Hot Zone", link: "https://brawlify.com/maps/15001023", image: "https://media.brawltime.ninja/maps/15001023.webp?size=512", best: [50, 95, 90, 100, 89, 21, 27, 88, 2, 75, 9, 87, 91, 94, 80], firstPick: [90, 100, 89, 21], lastPick: [50, 88, 25, 99, 16, 70,], worst: [78, 45, 36, 38, 52, 85, 79, 55, 82, 68, 62, 47], mapType: 2},
    { id: 114, name: "Just Another Race To Anywhere", mode: "Hot Zone", link: "https://brawlify.com/maps/15001091", image: "https://media.brawltime.ninja/maps/15001091.webp?size=512" },
    { id: 115, name: "Open Zone", mode: "Hot Zone", link: "https://brawlify.com/maps/15000527", image: "https://media.brawltime.ninja/maps/15000527.webp?size=512" },
    { id: 116, name: "Ticket to Die", mode: "Hot Zone", link: "https://brawlify.com/maps/15001126", image: "https://media.brawltime.ninja/maps/15001126.webp?size=512" },
    { id: 117, name: "Zone Splitting", mode: "Hot Zone", link: "https://brawlify.com/maps/15001125", image: "https://media.brawltime.ninja/maps/15001125.webp?size=512" },
    { id: 118, name: "Quick Travel", mode: "Hot Zone", link: "https://brawltime.ninja/tier-list/mode/hot-zone/map/Quick-Travel", image: "https://media.brawltime.ninja/maps/15000350.webp?size=512", best: [89, 75, 88, 90, 72, 47, 25, 3, 93, 64, 102, 27, 19, 21], firstPick: [89, 75, 88, 90], lastPick: [3, 25, 47, 93, 64, 69, 49, 24, 10, 42, 99], worst: [38, 62, 52, 45, 54, 26, 78, 22, 37, 33, 55, 20, 79, 57, 29, 73, 18, 39, 4, 80, 63, 30, 81, 85, 23, 43, 58, 77, 14, 59, 70, 17, 2, 41, 5], mapType: 3},

    
];

function displayMaps(filteredMaps = maps) {
    const mapsList = document.getElementById('maps-list');
    if (!mapsList) return;
    
    mapsList.innerHTML = ""; // Очистка
    
    // ПРИНУДИТЕЛЬНО ставим вертикальный стек для главного контейнера
    mapsList.style.display = "flex";
    mapsList.style.flexDirection = "column";
    mapsList.style.alignItems = "center";
    mapsList.style.width = "100%";

    const modes = [...new Set(filteredMaps.map(m => m.mode))];

    modes.forEach(mode => {
        // Обертка для ОДНОГО режима (Заголовок + Сетка)
        const modeSection = document.createElement('div');
        modeSection.className = "class-group"; 
        
        // Стилизуем секцию, чтобы она занимала всю ширину и шла вниз
        modeSection.style.width = "100%";
        modeSection.style.display = "flex";
        modeSection.style.flexDirection = "column";
        modeSection.style.alignItems = "center";
        modeSection.style.marginBottom = "40px";

        // Заголовок (Knockout, и т.д.)
        const title = document.createElement('div');
        title.className = "class-title";
        title.innerText = mode;
        modeSection.appendChild(title);

        // Сетка для карт именно этого режима
        const grid = document.createElement('div');
        grid.className = "grid-container";
        // Обнуляем возможные внешние отступы, которые могут мешать
        grid.style.width = "100%"; 
        grid.style.margin = "0 auto";

        const modeMaps = filteredMaps.filter(m => m.mode === mode);

        // Проверь, чтобы в displayMaps было именно так:
modeMaps.forEach(map => {
    const card = document.createElement('div');
    card.className = "map-card"; 
    
    // Используем onclick, а не ссылки <a>
    card.onclick = (e) => {
        e.preventDefault();
        showMapDetails(map.id);
    };

    card.innerHTML = `
        <img src="${map.image}" alt="${map.name}" style="width: 100%; border-radius: 15px;">
        <p>${map.name}</p>
    `;
    grid.appendChild(card);
});

        modeSection.appendChild(grid);
        mapsList.appendChild(modeSection);
    });
}

function getBrawlerIcons(ids) {
    if (!ids || ids.length === 0) return `<p style="opacity:0.5;">No data</p>`;
    
    return ids.map(id => {
        const b = brawlers.find(x => x.id === id);
        if (!b) return "";

        // Возвращаем onclick, передавая ID бойца
        // Твоя функция showBrawlerDetails сама найдет объект по этому ID
        return `
            <div onclick="showBrawlerDetails(${b.id})" 
                 style="display:inline-block; margin: 8px; text-align:center; cursor:pointer;">
                <img src="${b.image}" 
                     style="width: 55px; height: 55px; border-radius: 12px; border: 2px solid white; display: block; margin: 0 auto; transition: transform 0.2s;"
                     onmouseover="this.style.transform='scale(1.1)'" 
                     onmouseout="this.style.transform='scale(1)'">
                <p style="font-size: 11px; margin: 5px 0 0 0; color: white; font-family: 'Lilita One'; text-transform: uppercase;">
                    ${b.name}
                </p>
            </div>
        `;
    }).join("");
}

function goToBrawler(id) {
    const brawler = brawlers.find(b => b.id === id);
    if (brawler) {
        // Вызываем твою основную функцию, передавая ПОЛНЫЙ ОБЪЕКТ
        // Если твоя функция называется showBrawlerDetails, вызывай её:
        showBrawlerDetails(brawler); 
    }
}

// 1. Создаем список советов (можешь добавлять свои сколько угодно)
// Список фраз для примера (информация о карте)
function showMapDetails(mapId) {
    const map = maps.find(m => m.id === mapId);
    if (!map) return;

    showSection('details'); 
    
    const detailsContainer = document.getElementById('brawler-details');
    
    detailsContainer.innerHTML = `
        <div class="map-details-wrapper">

            <div class="map-left">
                <h1 style="
                    font-size: 2.5rem;
                    color: #ffcb05;
                    text-shadow: 3px 3px 0 #000;
                    margin-bottom: 10px;
                ">
                    ${map.name}
                </h1>

                <p style="
                    font-size: 1.2rem;
                    font-family: 'Lilita One';
                    margin-bottom: 15px;
                ">
                    Mode: ${map.mode}
                </p>

                <img src="${map.image}" style="
                    width: 100%;
                    max-width: 300px;
                    border: 6px solid white;
                    border-radius: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                ">
            </div>

            <div class="map-right">

                <div>
                    <h2 style="margin-top: 0;">Strategy & Info</h2>

                    <p style="color: #eee;">
                        Explore the best meta picks and strategy for ${map.name}.
                    </p>

                    <div class="map-grid">

                        <div style="background: rgba(255,203,5,0.1); padding: 10px; border-radius: 15px; border: 1px solid var(--bs-yellow);">
                            <h4 style="color: var(--bs-yellow); margin: 0 0 10px 0;">⭐ BEST</h4>
                            ${getBrawlerIcons(map.best)}
                        </div>

                        <div style="background: rgba(76, 175, 80, 0.1); padding: 10px; border-radius: 15px; border: 1px solid #4CAF50;">
                            <h4 style="color: #4CAF50; margin: 0 0 10px 0;">🟢 FIRST</h4>
                            ${getBrawlerIcons(map.firstPick)}
                        </div>

                        <div style="background: rgba(244, 67, 54, 0.1); padding: 10px; border-radius: 15px; border: 1px solid #F44336;">
                            <h4 style="color: #F44336; margin: 0 0 10px 0;">🔴 LAST</h4>
                            ${getBrawlerIcons(map.lastPick)}
                        </div>

                        ${map.worst ? `
                        <div style="background: rgba(120,120,120,0.1); padding: 10px; border-radius: 15px; border: 1px solid #888;">
                            <h4 style="color: #bbb; margin: 0 0 10px 0;">💀 WORST</h4>
                            ${getBrawlerIcons(map.worst)}
                        </div>
                        ` : ''}

                    </div>
                </div>

                <button onclick="window.open('${map.link}', '_blank')" class="action-btn" style="width: 100%;">
                    MORE INFO (Brawlify)
                </button>

            </div>
        </div>
    `;

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.onclick = () => showSection('maps');
        backBtn.innerText = "← Back to Maps";
    }
}

// Логика контр-пиков по классам
const matchups = {
    "Damage Dealer": { strong: ["Tank", "Assassin"], weak: ["Marksman", "Artillery"] },
    "Assassin": { strong: ["Marksman", "Artillery"], weak: ["Tank","Damage Dealers"] },
    "Marksman": { strong: ["Damage Dealer", "Artillery"], weak: ["Assassin", "Artillery"] },
    "Artillery": { strong: ["None"], weak: ["Tank", "Assassins"] },
    "Tank": { strong: ["Assassin", "Support"], weak: ["Damage Dealer"] },
    "Support": { strong: ["Damage Dealer", "Assassins", "Marksman"], weak: ["Tank"] },
    "Controller": { strong: ["Tank", "Support"], weak: ["Marksman", "Assassin", "Artillery"] },
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
    // 1. Скрываем все секции
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    
    // 2. Показываем нужную
    const activeSection = document.getElementById(`${sectionId}-section`);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // 3. Запускаем рендер в зависимости от секции
    if (sectionId === 'classes') renderClasses();
    if (sectionId === 'meta') renderMeta(); 
    if (sectionId === 'maps') displayMaps();
    
    // ДОБАВЛЯЕМ ЭТО: если открываем драфт, заполняем список карт
    if (sectionId === 'draft') {
        initDraftMapSelect();
    }
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
    const query = document.getElementById('mapSearch').value.toLowerCase();
    
    // Фильтруем массив maps по названию
    const filtered = maps.filter(map => 
        map.name.toLowerCase().includes(query)
    );

    // ВАЖНО: Вызываем новую функцию отрисовки, которую мы делали!
    // Чтобы дизайн не менялся и ссылки не появлялись
    displayMaps(filtered); 
}

// 4. Рендер Бойцов
function renderClasses() {
    const container = document.getElementById('brawlers-by-class');
    container.innerHTML = "";
    
    // Получаем список уникальных классов
    const classes = [...new Set(brawlers.map(b => b.class))];
    
    classes.forEach(className => {
        // Создаем обертку для каждого класса
        const classSection = document.createElement('div');
        classSection.className = "class-group"; // Добавили класс для CSS
        
        // Создаем красивый заголовок
        const title = document.createElement('h2');
        title.className = "class-title";
        title.innerText = className;
        
        const grid = document.createElement('div');
        grid.className = "grid-container";
        
        // Фильтруем бойцов по классу
        brawlers.filter(b => b.class === className).forEach(b => {
            const card = document.createElement('div');
            card.className = "card";
            
            let videoHTML = "";
            if (b.color === "rainbow") {
                card.classList.add("rainbow-card");
                videoHTML = `<video class="bg-video" autoplay loop muted playsinline>
                                <source src="https://preview.redd.it/srdmhkerhaxe1.gif?width=640&format=mp4&s=9e8614e4b3bdafd81aaf0f6f36b4af8f13540253" type="video/mp4">
                             </video>`;
            } else {
                card.style.background = b.color || 'var(--bs-purple)';
            }
            
            card.innerHTML = `
                ${videoHTML}
                <img src="${b.image}">
                <p>${b.name}</p>
                <span>ID: ${b.id}</span>
            `;
            card.onclick = () => showBrawlerDetails(b);
            grid.appendChild(card);
        });
        
        classSection.appendChild(title);
        classSection.appendChild(grid);
        container.appendChild(classSection);
    });
}

function showBrawlerDetails(data) {
    showSection('details');
    
    let brawler;
    if (typeof data === 'object' && data !== null) {
        brawler = data;
    } else {
        brawler = brawlers.find(b => b.id == data);
    }

    if (!brawler) return;

    const m = matchups[brawler.class] || { strong: [], weak: [] };
    const tierWeights = { "S": 0, "A": 1, "B": 2, "C": 3, "D": 4, "F": 5 };

    const getBrawlerTier = (bId) => {
        for (const [tier, ids] of Object.entries(metaData)) {
            if (ids.includes(bId)) return tier;
        }
        return null; 
    };

    // НОВАЯ ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ ИКОНОК
    const getBrawlerIconsByClasses = (classList) => {
        if (!classList || classList.length === 0) return `<span style="color: #666;">No targets</span>`;
        
        const filtered = brawlers.filter(b => classList.includes(b.class));
        
        // Сортируем по тиру перед отрисовкой
        const sorted = filtered.sort((a, b) => {
            const tierA = getBrawlerTier(a.id) || "Z";
            const tierB = getBrawlerTier(b.id) || "Z";
            return (tierWeights[tierA] ?? 10) - (tierWeights[tierB] ?? 10);
        });

        return `
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px;">
                ${sorted.map(b => {
                    const tier = getBrawlerTier(b.id);
                    return `
                        <div style="position: relative; width: 50px; height: 50px; cursor: pointer;" onclick="event.stopPropagation(); showBrawlerDetails(${b.id})">
                            <img src="${b.image}" title="${b.name}" style="
                                width: 100%; height: 100%; object-fit: cover; 
                                border-radius: 8px; border: 2px solid rgba(255,255,255,0.2);
                                background: #222;
                            ">
                            ${tier ? `<div style="
                                position: absolute; bottom: -2px; right: -2px; 
                                background: #ffcb05; color: black; font-weight: bold; 
                                font-size: 10px; padding: 1px 4px; border-radius: 4px;
                                border: 1px solid black; font-family: 'Lilita One';
                            ">${tier}</div>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    };

    const isFromMaps = !document.getElementById('maps-section').classList.contains('hidden');
    const backTarget = isFromMaps ? 'maps' : 'classes';
    const backText = isFromMaps ? '← Back to Maps' : '← Back to Brawlers';

    const detailsContainer = document.getElementById('brawler-details');
    if (!detailsContainer) return;

    detailsContainer.innerHTML = `
        <div class="map-details-wrapper" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; padding: 10px; gap: 20px;">
            
            <div class="map-left" style="flex: 0 0 240px; text-align: center;">
                <h1 style="font-size: 2rem; color: #ffcb05; text-shadow: 2px 2px 0 #000; margin: 0;">
                    ${brawler.name}
                </h1>
                <p style="font-family: 'Lilita One'; font-size: 1rem; margin-bottom: 10px; color: #bbb; text-transform: uppercase;">
                    ${brawler.class}
                </p>
                <img src="${brawler.image}" style="
                    width: 100%; max-height: 280px; object-fit: contain; 
                    border-radius: 20px; border: 4px solid white;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
                ">
            </div>

            <div class="map-right" style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 15px; max-width: 500px;">
                
                <div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 15px; border: 1px solid #4CAF50;">
                    <h4 style="margin: 0 0 10px 0; font-family: 'Lilita One'; color: #4CAF50; font-size: 1.2rem; text-transform: uppercase;">
                        🔥 Strong Against:
                    </h4>
                    ${getBrawlerIconsByClasses(m.strong)}
                </div>

                <div style="background: rgba(244, 67, 54, 0.1); padding: 15px; border-radius: 15px; border: 1px solid #F44336;">
                    <h4 style="margin: 0 0 10px 0; font-family: 'Lilita One'; color: #F44336; font-size: 1.2rem; text-transform: uppercase;">
                        💀 Weak Against:
                    </h4>
                    ${getBrawlerIconsByClasses(m.weak)}
                </div>

                <button class="action-btn" onclick="showSection('${backTarget}')" style="width: 100%; padding: 12px; font-size: 1.1rem; margin-top: 5px;">
                    ${backText}
                </button>
            </div>
        </div>
    `;

    const oldBackBtn = document.querySelector('.back-btn');
    if (oldBackBtn) oldBackBtn.style.display = 'none'; 
}

// --- СИСТЕМА ДРАФТА ---

let draftData = {
    selectedMap: null,
    firstSide: 'blue', 
    currentTurn: 0,    
    picks: {
        blue: [],
        red: []
    },
    bans: []
};

let suggestionOffset = 0;

function shuffleSuggestions() {
    // 1. ПРОВЕРКА: Если карта не выбрана — блокируем логику
    if (!draftData.selectedMap) {
        // Опционально: трясем кнопку shuffle, если у нее есть ID
        const shuffleBtn = document.getElementById('shuffle-btn'); 
        if (shuffleBtn) {
            shuffleBtn.classList.add('shaking-slot');
            setTimeout(() => shuffleBtn.classList.remove('shaking-slot'), 400);
        }
        
        // Или просто выводим сообщение (на твой вкус)
        console.warn("Select map first to shuffle suggestions!");
        return; 
    }

    // 2. ОСНОВНАЯ ЛОГИКА (сработает только если карта есть)
    // Увеличиваем сдвиг, чтобы брать следующих по силе бравлеров
    suggestionOffset += 10;
    
    // Если ушли слишком далеко (дальше топ-40), сбрасываем в ноль
    if (suggestionOffset > 30) {
        suggestionOffset = 0;
    }
    
    // 3. Перерисовываем предложения
    updateDraftSuggestions();
}

let isBanMode = false;

function toggleBanMode() {
    isBanMode = !isBanMode;
    
    const slider = document.getElementById('mode-slider');
    const container = document.getElementById('ban-mode-container');
    
    // Если элементов нет в DOM, выходим, чтобы не было ошибок
    if (!slider || !container) return;

    if (isBanMode) {
        // --- РЕЖИМ БАНА ---
        // Передвигаем ползунок вправо (на 50% ширины)
        slider.style.left = 'calc(50%)'; 
        slider.style.background = '#ff4b2b'; // Красный цвет (BAN)
        
        // Подсвечиваем рамку контейнера красным
        container.style.borderColor = '#ff4b2b';
        container.style.boxShadow = "0 0 15px rgba(255, 75, 43, 0.3)";
    } else {
        // --- РЕЖИМ ПИКА ---
        // Возвращаем ползунок влево (отступ 4px)
        slider.style.left = '4px'; 
        slider.style.background = '#007bff'; // Синий цвет (PICK)
        
        // Возвращаем рамку в спокойное состояние или синий
        container.style.borderColor = '#007bff';
        container.style.boxShadow = "none";
    }

    // Добавляем микро-эффект "отдачи" при клике (кнопка слегка сжимается)
    container.style.transform = 'scale(0.96)';
    setTimeout(() => {
        container.style.transform = 'scale(1)';
    }, 100);
}

function renderBans() {
    const banSlotsContainer = document.getElementById('ban-slots');
    if (!banSlotsContainer) return;

    const slots = banSlotsContainer.children;
    
    for (let i = 0; i < 6; i++) {
        slots[i].innerHTML = "";
        slots[i].style.background = "rgba(255,255,255,0.05)";
        slots[i].style.border = "1px solid #333";
        slots[i].onclick = null; // Сбрасываем старые клики
    }

    draftData.bans.forEach((id, index) => {
        const brawler = brawlers.find(b => b.id == id);
        if (brawler && slots[index]) {
            slots[index].style.position = "relative";
            slots[index].style.border = "1px solid #ff4b2b";
            slots[index].style.cursor = "pointer";
            
            slots[index].innerHTML = `
                <img src="${brawler.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px; filter: grayscale(1); opacity: 0.7;">
                <div style="position: absolute; color: red; font-weight: bold; font-size: 12px; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;">✕</div>
            `;
            
            // ДОБАВЛЯЕМ КЛИК ДЛЯ РАЗБАНА ПРЯМО В СЛОТЕ
            slots[index].onclick = () => toggleBan(id);
        }
    });
}

// 1. Переключение стороны (Blue/Red)
// 1. Создаем функцию инициализации (выполнится один раз)
function initButtonAnimations() {
    const btn = document.getElementById('side-toggle');
    if (!btn) return;

    btn.style.transition = 'transform 0.15s ease-out, background 0.3s ease, box-shadow 0.15s ease';
    
    // Вешаем события сразу
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    btn.onmousedown = () => btn.style.transform = 'scale(0.95)';
    btn.onmouseup = () => btn.style.transform = 'scale(1.05)';
}

// 2. Запускаем её (добавь эту строку в конец своего скрипта или после объявления функции)
initButtonAnimations();

// 3. Твоя основная функция (очищенная от лишнего)
function toggleFirstSide() {
    const btn = document.getElementById('side-toggle');
    const isPicksStarted = draftData.picks.blue.length > 0 || draftData.picks.red.length > 0;

    if (isPicksStarted) {
        const allSlots = document.querySelectorAll('.draft-slot');
        allSlots.forEach(slot => {
            slot.classList.add('shaking-slot');
            setTimeout(() => slot.classList.remove('shaking-slot'), 400);
        });
        return; 
    }

    // ЛОГИКА СМЕНЫ СТОРОНЫ
    if (draftData.firstSide === 'blue') {
        draftData.firstSide = 'red';
        btn.innerText = 'RED SIDE FIRST';
        btn.style.background = '#ff4b2b';
        btn.style.boxShadow = '0 4px 0 #b32d16';
    } else {
        draftData.firstSide = 'blue';
        btn.innerText = 'BLUE SIDE FIRST';
        btn.style.background = '#007bff';
        btn.style.boxShadow = '0 4px 0 #0056b3';
    }
}

function selectDraftMap() {
    const select = document.getElementById('draft-map-select');
    const display = document.getElementById('draft-map-display');
    const mapId = select.value;

    if (!mapId) return;

    const mapData = maps.find(m => m.id == mapId);
    if (mapData) {
        draftData.selectedMap = mapData;
        
        // 1. Определяем название и цвет для каждого типа карты
        const typeInfo = {
            1: { name: "FULL OPEN", color: "#4da6ff" }, // Голубой для открытых
            2: { name: "SEMI OPEN", color: "#ffcc00" }, // Желтый для полуоткрытых
            3: { name: "CLOSED", color: "#ff4b2b" }    // Красный для закрытых
        };

        const currentType = typeInfo[mapData.mapType] || { name: "STANDARD", color: "#eee" };

        // 2. Обновляем отображение (картинка + текст типа)
        display.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                <img src="${mapData.image}" alt="${mapData.name}" 
                     style="width: 85%; height: 85%; object-fit: contain; display: block; 
                            padding: 5px; box-sizing: border-box; margin-left: 20px;">
                
                <div style="margin-top: 10px; padding: 4px 12px; border-radius: 8px; 
                            background: rgba(0,0,0,0.3); border: 1px solid ${currentType.color};
                            color: ${currentType.color}; font-family: 'Lilita One'; font-size: 14px;
                            letter-spacing: 1px; text-shadow: 0 0 5px ${currentType.color}44;">
                    TYPE: ${currentType.name}
                </div>
            </div>
        `;
        
        updateDraftSuggestions();
        renderAllDraftBrawlers();
    }
}

// 3. Обновление списка ТОП-10
function updateDraftSuggestions() {
    const container = document.getElementById('draft-suggestions');
    if (!container || !draftData.selectedMap) return;

    container.innerHTML = ""; 

    const taken = [...draftData.picks.blue, ...draftData.picks.red, ...draftData.bans];
    const totalPicks = draftData.picks.blue.length + draftData.picks.red.length;
    const isLastPick = (totalPicks === 5);

    if (totalPicks >= 6) {
    const rightSide = document.querySelector('.draft-right-side');
    const allBrawlersSection = document.querySelector('.all-brawlers-section');
    const searchBar = document.querySelector('#draft-search');

    if (allBrawlersSection) allBrawlersSection.style.display = 'none';
    if (searchBar) searchBar.style.display = 'none';

    if (rightSide) {
        rightSide.innerHTML = `
            <div style="background: rgba(10, 10, 20, 0.4); padding: 20px; border-radius: 20px; text-align: center;">
                <h4 style="color: #ffcc00; font-size: 1.8rem; margin-bottom: 20px; font-family: 'Lilita One'; text-shadow: 2px 2px 0 #000;">
                    DRAFT COMPLETED
                </h4>
                
                <div id="final-matchup-info" style="display: flex; flex-direction: column; gap: 10px;">
                    ${generateFinalReport()}
                </div>

                <button onclick="resetDraft()" 
                    onmouseover="this.style.transform='scale(1.05)';" 
                    onmouseout="this.style.transform='scale(1)';"
                    onmousedown="this.style.transform='scale(0.95)';"
                    onmouseup="this.style.transform='scale(1.05)';"
                    style="
                        margin-top: 25px; 
                        padding: 12px 30px; 
                        border-radius: 15px; 
                        background: #ff4b2b; 
                        color: white; 
                        border: none; 
                        font-family: 'Lilita One'; 
                        cursor: pointer; 
                        font-size: 1.1rem; 
                        box-shadow: 0 4px 0 #b32d16;
                        transition: transform 0.15s ease-out;
                        outline: none;
                    ">
                    NEW ANALYTICS
                </button>
            </div>
        `;
        
        rightSide.style.background = "rgba(255, 204, 0, 0.1)";
        rightSide.style.boxShadow = "0 0 30px rgba(255, 204, 0, 0.1)";
    }
    return; 
} else {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(5, 1fr)";
        container.style.gap = "15px";
    }

    const enemyBrawlers = draftData.picks.red.map(id => brawlers.find(x => x.id == id)).filter(Boolean);
    const myTeamBrawlers = draftData.picks.blue.map(id => brawlers.find(x => x.id == id)).filter(Boolean);

    let scoredBrawlers = brawlers
        .filter(b => !taken.includes(b.id))
        .map(b => {
            let score = 0;
            let counterList = []; 
            let weakList = [];
            let currentTier = "F";

            // 1. ОПРЕДЕЛЕНИЕ ТИРА
            for (const [tier, ids] of Object.entries(metaData)) {
                if (ids.includes(b.id)) { currentTier = tier; break; }
            }

            // 2. ДИНАМИЧЕСКИЙ ВЕС ТИРА И ФИЛЬТР "МУСОРА"
            const baseTierWeights = { "S": 50, "A": 30, "B": 15, "C": 0, "D": -30, "F": -60 }; // Увеличили штраф для D и F
            const tierDecay = 1 - (totalPicks * 0.1); 
            score += (baseTierWeights[currentTier] || -60) * tierDecay;

            // --- НОВАЯ ЛОГИКА РЕДКОСТИ ДЛЯ D И F ---
            // Если персонаж в тире D, его итоговый балл режется на 30%
            // Если в тире F, то на 60%
            let tierMultiplier = 1.0;
            if (currentTier === "D") tierMultiplier = 0.7;
            if (currentTier === "F") tierMultiplier = 0.4;

            // 3. СИНЕРГИЯ И БАЛАНС КЛАССОВ
            // Считаем, сколько бойцов такого же класса, как у b, уже есть в команде (blue)
            const sameClassCount = myTeamBrawlers.filter(mate => mate.class === b.class).length;

            // Применяем штраф в зависимости от количества
            if (sameClassCount === 1) {
                // В команде уже есть один такой класс. Второй брать нежелательно (штраф -45)
                score -= 45; 
            } else if (sameClassCount >= 2) {
                // В команде уже двое таких. Третий — это почти всегда плохой пик (штраф -120)
                score -= 120;
            }

            // Классические связки (синергия) — бонусы остаются
            myTeamBrawlers.forEach(mate => {
                if (b.class === "Support" && mate.class === "Tank") score += 25;
                if (b.class === "Tank" && mate.class === "Healer") score += 25;
                if (b.class === "Assassin" && mate.class === "Tank") score += 15;
                // Анти-синергия: два метателя на одной линии часто мешают друг другу
                if (b.class === "Artillery" && mate.class === "Artillery") score -= 20;
            });

            // 4. КАРТА (Бонус из массива best/worst/first/last)
            if (draftData.selectedMap.best?.includes(b.id)) score += 40;
            if (draftData.selectedMap.worst?.includes(b.id)) score -= 60;
            
            // Новинка: Бонус за стадию пика из данных карты
            if (totalPicks < 2 && draftData.selectedMap.firstPick?.includes(b.id)) score += 30;
            if (totalPicks >= 4 && draftData.selectedMap.lastPick?.includes(b.id)) score += 30;

            // 4.1 ЛОГИКА ТИПА КАРТЫ (MapType) — ВСТАВЛЯТЬ СЮДА
            const mType = draftData.selectedMap.mapType;
            if (mType === 1) { // FULL OPEN (Открытая)
                if (b.class === "Marksman") score += 50;
                if (b.class === "Controller") score += 20;
                if (["Damage Dealer", "Assassin"].includes(b.class)) score += 10;
                if (["Tank", "Artillery", "Support"].includes(b.class)) score -= 60;
            } 
            else if (mType === 2) { // SEMI OPEN (Полуоткрытая)
                if (["Controller", "Assassin", "Damage Dealer"].includes(b.class)) score += 50;
                if (["Tank", "Marksman", "Artillery", "Support"].includes(b.class)) score += 15;
            } 
            else if (mType === 3) { // CLOSED (Закрытая)
                if (["Tank", "Damage Dealer", "Support", "Assassin", "Artillery"].includes(b.class)) score += 180;
                if (["Controller", "Marksman"].includes(b.class)) score -= 40;
            }

            // 5. ЛОГИКА КОНТР-ПИКОВ (УСИЛЕННАЯ)
            const myMatchup = matchups[b.class];
            if (myMatchup && enemyBrawlers.length > 0) {
                let strongCount = 0;
                let weakCount = 0;

               enemyBrawlers.forEach(enemy => {
    // старая логика
    if (myMatchup.strong.includes(enemy.class)) {
        strongCount++;
        counterList.push({ name: enemy.name, type: "normal" });
    }

    if (myMatchup.weak.includes(enemy.class)) {
        weakCount++;
        weakList.push(enemy.name);
    }

    // --- HARD COUNTERS ---
    const counters = hardCounters[enemy.id];

    if (counters) {
        counters.forEach(c => {
            if (c.id === b.id) {
                score += c.weight;

                counterList.push({
                    name: enemy.name,
                    type: "hard",
                    tip: c.tip
                });
            }
        });
    }
});

                // Бонус за контру растет в прогрессии
                // 1 враг = +40, 2 врага = +90, 3 врага = +150
                score += (strongCount * 40) + (strongCount > 1 ? strongCount * 20 : 0);

                // Огромный штраф, если тебя контрят
                score -= (weakCount * 50);

                // Статус "HARD COUNTER" если ты бьешь двоих и тебя никто не бьет
                if (strongCount >= 2 && weakCount === 0) score += 60;
            }

            if (draftData.bans.length > 0 && myMatchup) {
                draftData.bans.forEach(banId => {
                    const bannedBrawler = brawlers.find(x => x.id == banId);
                    if (bannedBrawler && myMatchup.weak.includes(bannedBrawler.class)) {
                        // Главная угроза в бане! Даем бонус
                        score += 30; 
                        
                        // Если это S или A тир, который "освободился", накидываем еще
                        if (["S", "A"].includes(currentTier)) score += 15;
                    }
                });
            }

            if (currentTier === "D") score *= 0.7; 
            if (currentTier === "F") score *= 0.4;

            if (mType === 1 && ["Tank", "Assassin"].includes(b.class) && !draftData.selectedMap.best?.includes(b.id)) {
                score -= 50; 
            }
            // --- СТРАТЕГИЧЕСКАЯ ЛОГИКА С УЧЕТОМ ТИПА КАРТЫ ---
            let threatsList = []; 
            let risksList = [];   
            let isSafeNow = false;

            // Считаем общее кол-во пиков, чтобы понять, началась ли игра
            const currentTotalPicks = draftData.picks.blue.length + draftData.picks.red.length;
            // Собираем всех, кто уже не в игре (баны + пики обеих команд)
            const allOccupied = [...draftData.picks.blue, ...draftData.picks.red, ...draftData.bans];

            if (myMatchup) {
                // 1. Ищем всех "убийц" нашего бравлера среди S и A тиров
                const primaryThreats = brawlers.filter(enemy => 
                    myMatchup.weak.includes(enemy.class) && 
                    (metaData.S.includes(enemy.id) || metaData.A.includes(enemy.id))
                );

                // 2. ФИЛЬТРАЦИЯ ПО ТИПУ КАРТЫ
                const filteredThreats = primaryThreats.filter(threat => {
                    if (mType === 1) { // Open map
                        if (b.class === "Marksman" && (threat.class === "Assassin" || threat.class === "Tank")) return false; 
                    }
                    if (mType === 3) { // Closed map
                        if (b.class === "Marksman" && (threat.class === "Assassin" || threat.class === "Tank")) return true; 
                    }
                    return true;
                });

                // 3. ПРОВЕРКА АКТИВНЫХ УГРОЗ
                if (filteredThreats.length > 0) {
                    // Оставляем только тех, кто еще СВОБОДЕН (не пикнут и не забанен)
                    const activeThreats = filteredThreats.filter(t => !allOccupied.includes(Number(t.id)));
                    
                    if (activeThreats.length === 0) {
                        isSafeNow = true; 
                    } else {
                        const threatNames = activeThreats.slice(0, 3).map(t => t.name);

                        // ЛОГИКА: Если пиков еще нет и есть слоты для банов — пишем в BAN
                        // Если хотя бы один пик сделан ИЛИ баны кончились — пишем в RISK
                        if (currentTotalPicks === 0 && draftData.bans.length < 6) {
                            threatsList = threatNames;
                        } else {
                            risksList = threatNames;
                        }
                    }
                } else {
                    isSafeNow = true;
                }
            }
            // Возвращаем объект для дальнейшего рендера
            return { brawler: b, score, tier: currentTier, counters: counterList, weakness: weakList, isSafeNow, threatsList, risksList, mType };
        });

    // Сортируем и выводим ТОП-10
    scoredBrawlers.sort((a, b) => b.score - a.score);

    scoredBrawlers.slice(suggestionOffset, suggestionOffset + 10).forEach(item => {
        const b = item.brawler;
        const div = document.createElement('div');
        const tierColors = { "S": "#ff4d4d", "A": "#ff944d", "B": "#ffdb4d", "C": "#4dff4d", "D": "#4da6ff", "F": "#b34dff" };
        
        let borderColor = "rgba(255,255,255,0.1)";
        let shadow = "none";
        let specialLabel = "";

        // Визуализация "Идеального выбора"
        if (item.score > 80 && item.weakness.length === 0) {
            borderColor = "#00ff88"; 
            shadow = "0 0 20px rgba(0,255,136,0.5)";
            specialLabel = `<div style="position: absolute; top: -10px; background: #00ff88; color: #000; font-size: 10px; padding: 2px 10px; border-radius: 10px; font-weight: bold; z-index: 11; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">PERFECT PICK</div>`;
        } else if (item.weakness.length > 1) {
            borderColor = "#ff4b2b"; // Опасно
        }

        div.style = `
            display: flex; flex-direction: column; align-items: center; 
            background: linear-gradient(180deg, rgba(35,35,50,0.95) 0%, rgba(15,15,25,0.98) 100%); 
            padding: 12px 8px; border-radius: 20px; 
            cursor: pointer; border: 2px solid ${borderColor}; box-shadow: ${shadow};
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative;
            text-align: center; height: 210px; box-sizing: border-box;
        `;

        // Пример логики внутри рендера карточки:
let analysisHTML = "";
const takenIds = [...draftData.picks.blue, ...draftData.picks.red, ...draftData.bans];

// Функция для обрезки длинных списков (чтобы не вылезало за края)
const shortList = (list) => {
    if (list.length <= 2) return list.join(", ").toUpperCase();
    return list.slice(0, 2).join(", ").toUpperCase() + "...";
};

if (isLastPick) {
    analysisHTML += `<div style="color: #ffcc00; font-size: 11px; font-weight: 900; margin-bottom: 2px; text-shadow: 0 0 8px rgba(255,204,0,0.4);">🔥 ULTIMATE OUTPICK</div>`;
} else if (item.isSafeNow) {
    analysisHTML += `<div style="color: #00ff88; font-size: 11px; font-weight: 900; margin-bottom: 2px;">✅ READY TO PICK</div>`;
} 
else if (item.threatsList.length > 0) {
    const activeThreats = item.threatsList.filter(name => {
        const b = brawlers.find(br => br.name.toUpperCase() === name.toUpperCase());
        return b && !takenIds.includes(b.id);
    });
    if (activeThreats.length > 0) {
        analysisHTML += `<div style="color: #ffcc00; font-size: 10px; font-weight: 900; line-height: 1;">🚫 BAN: <span style="color: #fff;">${shortList(activeThreats)}</span></div>`;
    }
} 
else if (item.risksList.length > 0) {
    const activeRisks = item.risksList.filter(name => {
        const b = brawlers.find(br => br.name.toUpperCase() === name.toUpperCase());
        return b && !takenIds.includes(b.id);
    });
    if (activeRisks.length > 0) {
        analysisHTML += `<div style="color: #ff4b2b; font-size: 10px; font-weight: 900; line-height: 1;">⚠️ RISK: <span style="color: #fff;">${shortList(activeRisks)}</span></div>`;
    }
}

// Списки контры и слабостей — делаем компактнее
if (item.counters.length > 0) {

    const seen = new Set();

    const formatted = item.counters
        // убираем дубли по имени + приоритет HARD
        .filter(c => {
            const name = typeof c === "string" ? c : c.name;

            if (seen.has(name)) return false;
            seen.add(name);
            return true;
        })
        .map(c => {
            if (typeof c === "string") return c.toUpperCase();

            if (c.type === "hard") {
                return `${c.name.toUpperCase()} 🔥`;
            }

            return c.name.toUpperCase();
        })
        .join(", ");

    analysisHTML += `
        <div style="color: #00ff88; font-size: 10px; font-weight: 900; margin-top: 4px;">
            ⚔️ VS: <span style="color: #fff; font-weight: normal;">${formatted}</span>
        </div>
    `;
}

const tips = item.counters
    .filter(c => typeof c !== "string" && c.type === "hard" && c.tip)
    .map(c => `• vs ${c.name}: ${c.tip}`);

if (tips.length > 0) {
    analysisHTML += `
        <div style="color:#ffcc00; font-size:9px; margin-top:4px; line-height:1.2;">
            ${tips.join("<br>")}
        </div>
    `;
}

if (item.weakness.length > 0) {
    analysisHTML += `<div style="color: #ff4b2b; font-size: 10px; font-weight: 900; margin-top: 4px; line-height: 1;">⚠️ WEAK: <span style="color: #fff; font-weight: normal;">${shortList(item.weakness)}</span></div>`;
}
        div.innerHTML = `
            ${specialLabel}
            <div style="position: relative; width: 65px; height: 65px; margin-bottom: 8px;">
                <img src="${b.image}" style="width: 100%; height: 100%; border-radius: 18px; border: 2px solid rgba(255,255,255,0.2); object-fit: cover;">
                <span style="position: absolute; top: -8px; right: -8px; background: ${tierColors[item.tier]}; color: #000; font-size: 11px; font-weight: 900; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #111;">
                    ${item.tier}
                </span>
            </div>
            <div style="width: 100%; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-family: 'Lilita One'; font-size: 14px; color: white; margin-bottom: 2px;">${b.name.toUpperCase()}</div>
                    <div style="font-size: 9px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">${b.class}</div>
                </div>
                <div style="background: rgba(0,0,0,0.4); border-radius: 12px; padding: 8px; min-height: 70px; display: flex; flex-direction: column; justify-content: center; border: 1px solid rgba(255,255,255,0.05);">
                    ${analysisHTML || '<div style="color:#666; font-size:9px;">STABLE PICK</div>'}
                </div>
            </div>
        `;
        
        div.onmouseenter = () => { div.style.transform = "scale(1.05) translateY(-5px)"; div.style.zIndex = "10"; };
        div.onmouseleave = () => { div.style.transform = "scale(1) translateY(0)"; div.style.zIndex = "1"; };
        div.onclick = () => makePick(b.id);
        container.appendChild(div);
    });
    // --- 1. Получаем элементы панели ---
    const banListUI = document.getElementById('ban-icons-list');
    const counterUI = document.getElementById('best-counter-icon');

    if (banListUI && counterUI) {
        banListUI.innerHTML = ""; 
        counterUI.innerHTML = "";

        // --- 2. ФИКСИРОВАННАЯ ЛОГИКА БАНОВ (5 персонажей) ---
        const staticBans = brawlers
            .map(b => {
                let priority = 0;
                if (draftData.selectedMap.best?.includes(b.id)) priority += 150;
                if (metaData.S.includes(b.id)) priority += 100;
                if (metaData.A.includes(b.id)) priority += 50;
                return { ...b, priority };
            })
            .sort((a, b) => b.priority - a.priority)
            .slice(0, 5);

        staticBans.forEach(b => {
            // Берем ID как число для надежности
            const bId = Number(b.id);
            const isBanned = draftData.bans.includes(bId);
            
            const banDiv = document.createElement('div');
            
            // УБИРАЕМ лишние проверки. Просто вызываем toggleBan.
            // Она сама решит: если есть в массиве — удалит, если нет — добавит.
            banDiv.onclick = (e) => {
                e.stopPropagation(); 
                toggleBan(bId); 
            };

            // Граница: зеленая для бана
            let borderColor = isBanned ? '#00ff88' : 'rgba(255,204,0,0.3)';
            
            // Курсор pointer теперь всегда, чтобы можно было и банить, и разбанивать отсюда
            banDiv.style = `position: relative; width: 34px; height: 34px; border-radius: 8px; border: 2px solid ${borderColor}; overflow: hidden; background: #000; transition: all 0.3s; cursor: pointer;`;
            
            let overlay = "";
            if (isBanned) {
                overlay = `<div style="position: absolute; inset: 0; background: rgba(0,255,136,0.2); display: flex; align-items: center; justify-content: center; color: #00ff88; font-size: 18px; font-weight: bold; text-shadow: 0 0 5px #000;">✓</div>`;
            }

            const finalOpacity = isBanned ? '0.4' : '1';

            banDiv.innerHTML = `
                <img src="${b.image}" style="width: 100%; height: 100%; object-fit: cover; opacity: ${finalOpacity};">
                ${overlay}
            `;
            banListUI.appendChild(banDiv);
        });

        // Здесь дальше идет твой код с "3. УЛЬТИМАТИВНАЯ ЛОГИКА POWER COUNTER"

        // --- 3. ЛОГИКА "БЕЗОПАСНЫЙ КОНТР-ПИК" (АНТИ-РИСК) ---
        const redPicksCount = draftData.picks.red.length;
        const taken = [...draftData.picks.blue, ...draftData.picks.red, ...draftData.bans];

        if (redPicksCount === 0) {
            counterUI.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 38px;">
                    <span style="color: #555; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Waiting for enemy targets...</span>
                </div>
            `;
        } else {
            const enemyBrawlers = draftData.picks.red.map(id => brawlers.find(b => b.id == id)).filter(Boolean);

            // 1. Собираем глубокую аналитику
let intelligence = brawlers
    .filter(b => !taken.includes(Number(b.id))) // Принудительно в число
    .map(b => {
        const myMatchup = matchups[b.class];
        let currentCounterScore = 0;
        let targets = [];
        
        // А) Кого МЫ контрим из уже выбранных врагов (Красных)
        if (myMatchup) {
            enemyBrawlers.forEach(enemy => {
                if (myMatchup.strong && myMatchup.strong.includes(enemy.class)) {
                    currentCounterScore += 5; // Увеличили вес контры
                    targets.push(enemy.name);
                }
            });
        }

        // Б) АНАЛИЗ БУДУЩЕГО РИСКА
let futureThreatsCount = 0;

if (isLastPick) {
    // На последнем пике риска НЕТ, враг больше не выбирает!
    futureThreatsCount = 0;
} else {
    brawlers.forEach(potentialEnemy => {
        if (!taken.includes(Number(potentialEnemy.id))) {
            const enemyMatchup = matchups[potentialEnemy.class];
            if (enemyMatchup && enemyMatchup.strong && enemyMatchup.strong.includes(b.class)) {
                futureThreatsCount++;
            }
        }
    });
}

        // Берем готовый score из основного цикла (scoredBrawlers уже должен быть рассчитан выше)
        const mainAnalysis = scoredBrawlers.find(s => s.brawler.id === b.id);
        const baseScore = mainAnalysis ? mainAnalysis.score : 0;
        const currentTier = mainAnalysis ? mainAnalysis.tier : 'C';

        return {
            brawler: b,
            counterScore: currentCounterScore,
            targets: targets,
            riskLevel: futureThreatsCount,
            baseScore: baseScore,
            tier: currentTier
        };
    });

// 2. ФИЛЬТРАЦИЯ И СОРТИРОВКА
// Сначала ищем тех, кто реально контрит врага (counterScore > 0)
// А среди них уже выбираем тех, у кого меньше риск
intelligence.sort((a, b) => {
    if (b.counterScore !== a.counterScore) return b.counterScore - a.counterScore; // Кто сильнее бьет врага
    if (a.riskLevel !== b.riskLevel) return a.riskLevel - b.riskLevel; // У кого меньше риск
    return b.baseScore - a.baseScore; // У кого выше балл на карте
});

const powerPick = intelligence[0];

            if (powerPick) {
                const isUltraSafe = powerPick.riskLevel <= 3; // Почти нет контры в пуле
                const accentColor = isUltraSafe ? '#00ffff' : '#00ff88';
                const statusText = isUltraSafe ? 'NO RISK PICK' : 'STABLE COUNTER';

                counterUI.innerHTML = `
                    <div onclick="makePick(${powerPick.brawler.id})" style="display: flex; align-items: center; gap: 8px; background: rgba(0,255,136,0.05); padding: 4px 12px; border-radius: 12px; border: 1px solid ${accentColor}; box-shadow: 0 0 15px ${accentColor}22; cursor: pointer;">
                        <div style="display: flex; flex-direction: column; align-items: flex-start;">
                            <span style="color: ${accentColor}; font-size: 8px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px;">${statusText}</span>
                            <div style="display: flex; align-items: center; gap: 4px;">
                                <span style="color: white; font-size: 11px; font-weight: bold; font-family: 'Lilita One';">${powerPick.brawler.name.toUpperCase()}</span>
                                <span style="color: rgba(255,255,255,0.4); font-size: 9px;">${powerPick.tier} (Risk: ${powerPick.riskLevel})</span>
                            </div>
                        </div>
                        <img src="${powerPick.brawler.image}" style="width: 32px; height: 32px; border-radius: 8px; border: 1px solid ${accentColor}; object-fit: cover;">
                    </div>
                `;
            } else {
                counterUI.innerHTML = `<span style="color: #666; font-size: 10px;">NO SAFE OPTIONS</span>`;
            }
        }
    }
}

// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ОТЧЕТА ПОСЛЕ 6 ПИКОВ
function generateFinalReport() {
    const blueTeam = draftData.picks.blue.map(id => brawlers.find(x => x.id == id)).filter(Boolean);
    const redTeam = draftData.picks.red.map(id => brawlers.find(x => x.id == id)).filter(Boolean);
    let report = "";

    blueTeam.forEach(my => {
        const myMatch = matchups[my.class];
        if (!myMatch) return;

        // Фильтруем врагов
        const iCounter = redTeam.filter(enemy => myMatch.strong.includes(enemy.class));
        const iAmWeak = redTeam.filter(enemy => myMatch.weak.includes(enemy.class));

        // Если у бравлера есть хоть какие-то связи, рисуем блок
        if (iCounter.length > 0 || iAmWeak.length > 0) {
            report += `
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 12px; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 8px;">
                
                <div style="display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
                    <img src="${my.image}" style="width: 40px; height: 40px; border-radius: 10px; border: 2px solid #fff;">
                    <span style="color: #fff; font-size: 16px; font-weight: bold; font-family: 'Lilita One';">${my.name.toUpperCase()}</span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 6px;">
                    
                    ${iCounter.length > 0 ? `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #00ff88; font-size: 12px; font-weight: 900; min-width: 70px;">COUNTERS:</span>
                        <div style="display: flex; gap: 4px;">
                            ${iCounter.map(e => `<img src="${e.image}" style="width: 30px; height: 30px; border-radius: 6px; border: 1px solid #00ff88;">`).join('')}
                        </div>
                    </div>` : ''}

                    ${iAmWeak.length > 0 ? `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #ff4b2b; font-size: 12px; font-weight: 900; min-width: 70px;">WEAK VS:</span>
                        <div style="display: flex; gap: 4px;">
                            ${iAmWeak.map(e => `<img src="${e.image}" style="width: 30px; height: 30px; border-radius: 6px; border: 1px solid #ff4b2b;">`).join('')}
                        </div>
                    </div>` : ''}

                </div>
            </div>`;
        }
    });

    return report || `<div style="color: #777; padding: 20px;">No specific counters found.</div>`;
}

// 4. Логика совершения пика
function getDraftOrder() {
    return draftData.firstSide === 'blue' 
        ? ['blue', 'red', 'red', 'blue', 'blue', 'red'] 
        : ['red', 'blue', 'blue', 'red', 'red', 'blue'];
}

function toggleBan(brawlerId) {
    const id = Number(brawlerId); // Принудительно в число
    const index = draftData.bans.findIndex(banId => Number(banId) === id);
    
    if (index > -1) {
        // РАЗБАН
        draftData.bans.splice(index, 1);
    } else {
        // БАН
        if (draftData.bans.length >= 6) {
            alert("All 6 bans are used!");
            return;
        }
        const isTaken = draftData.picks.blue.includes(id) || draftData.picks.red.includes(id);
        if (isTaken) return alert("Already picked!");
        
        draftData.bans.push(id);
    }
    
    // Синхронно обновляем всё
    renderBans(); 
    updateDraftSuggestions();
    if (typeof renderAllDraftBrawlers === 'function') renderAllDraftBrawlers();
}

// 1. УНИВЕРСАЛЬНАЯ ФУНКЦИЯ БАНА/РАЗБАНА
function toggleBan(brawlerId) {
    const index = draftData.bans.indexOf(brawlerId);
    
    if (index > -1) {
        // Если уже в бане — УДАЛЯЕМ (разбаниваем)
        draftData.bans.splice(index, 1);
    } else {
        // Если нет в бане — ДОБАВЛЯЕМ
        if (draftData.bans.length >= 6) return alert("All 6 bans are used!");
        
        const isAlreadyPicked = draftData.picks.blue.includes(brawlerId) || draftData.picks.red.includes(brawlerId);
        if (isAlreadyPicked) return alert("Brawler already picked!");

        draftData.bans.push(brawlerId);
    }
    
    // Обновляем всё визуально
    renderBans(); 
    updateDraftSuggestions();
    renderAllDraftBrawlers();
}

function undoLastAction() {
    // 1. Проверяем, есть ли что отменять
    if (draftData.currentTurn === 0) return;

    // 2. Определяем, кто ходил ПОСЛЕДНИМ
    const lastTurnIdx = draftData.currentTurn - 1;
    const side = getDraftOrder()[lastTurnIdx]; 
    
    // 3. Убираем ID из массива и уменьшаем счетчик
    draftData.picks[side].pop();
    draftData.currentTurn--;

    // 4. ОЧИЩАЕМ СЛОТ ВИЗУАЛЬНО
    const slotIdx = draftData.picks[side].length + 1; 
    const slotElement = document.getElementById(`d-slot-${side}-${slotIdx}`);

    if (slotElement) {
        slotElement.innerHTML = "";
        slotElement.style.background = "rgba(15, 15, 25, 0.4)";
        slotElement.style.border = side === 'blue' ? '2px dashed rgba(79, 172, 254, 0.5)' : '2px dashed rgba(255, 75, 43, 0.5)';
        slotElement.style.boxShadow = "none";
    }

    // 5. ВОССТАНОВЛЕНИЕ ИНТЕРФЕЙСА (если драфт был завершен)
    const allBrawlersSection = document.querySelector('.all-brawlers-section');
    const searchBar = document.getElementById('draft-search');
    const rightSide = document.querySelector('.draft-right-side');

    if (allBrawlersSection) allBrawlersSection.style.display = 'block';
    if (searchBar) {
        searchBar.style.display = 'block';
        searchBar.value = ""; // Очищаем поиск для удобства
    }

    // КЛЮЧЕВОЙ МОМЕНТ: Если мы отменили финальный ход, нужно вернуть структуру аналитики
    if (lastTurnIdx === 5 && rightSide) {
        // Проверяем, нет ли уже заголовка TOP 10, чтобы не перезаписывать лишний раз
        if (!rightSide.querySelector('h3') || rightSide.querySelector('h3').innerText !== "TOP 10 ANALYTICS") {
            // Возвращаем стандартный фон и верстку
            rightSide.style.background = "rgba(255, 204, 0, 0.05)"; 
            rightSide.innerHTML = `
                <div style="position: relative; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <h3 style="color: #ffcc00; text-align: center; margin: 0; font-size: 1.6rem; letter-spacing: 2px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">TOP 10 ANALYTICS</h3>
                    <button onclick="shuffleSuggestions()" 
                            style="position: absolute; right: 0; background: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.4); color: #ffcc00; border-radius: 12px; padding: 5px 12px; cursor: pointer; font-family: 'Lilita One'; font-size: 11px; text-transform: uppercase;">
                        🔀 SHUFFLE
                    </button>
                </div>
                <div id="strategy-bar" style="display: flex; justify-content: space-between; align-items: center; background: rgba(15, 15, 25, 0.8); padding: 12px 18px; border-radius: 18px; border: 1px solid rgba(255, 204, 0, 0.3); margin-bottom: 20px;">
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <span style="color: #ffcc00; font-size: 10px; font-weight: 900; text-transform: uppercase;">Map Priority Bans:</span>
                        <div id="ban-icons-list" style="display: flex; gap: 8px; min-height: 38px;"></div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
                        <span style="color: #00ff88; font-size: 10px; font-weight: 900; text-transform: uppercase;">Power Counter:</span>
                        <div id="best-counter-icon" style="min-height: 38px;"></div>
                    </div>
                </div>
                <div id="draft-suggestions" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;"></div>
            `;
        }
    }

    // 6. ОБНОВЛЯЕМ ДАННЫЕ
    updateDraftSuggestions(); 
    renderAllDraftBrawlers();
}

// 2. ОБНОВЛЕННАЯ ФУНКЦИЯ ПИКА
function makePick(brawlerId) {
    if (!draftData.selectedMap) return alert("Select map first!");

    // --- ЛОГИКА БАНА (теперь короткая и работает в обе стороны) ---
    if (isBanMode) {
        toggleBan(brawlerId); 
        return; 
    }

    // --- ОБЫЧНАЯ ЛОГИКА ПИКА ---
    if (draftData.currentTurn >= 6) return alert("Draft is finished!");
    if (draftData.bans.includes(brawlerId)) return alert("This brawler is BANNED!");

    const isTaken = draftData.picks.blue.includes(brawlerId) || draftData.picks.red.includes(brawlerId);
    if (isTaken) return;

    const brawler = brawlers.find(b => b.id == brawlerId);
    if (!brawler) return;

    const side = getDraftOrder()[draftData.currentTurn]; 
    draftData.picks[side].push(brawlerId);
    
    const slotIdx = draftData.picks[side].length;
    const slotElement = document.getElementById(`d-slot-${side}-${slotIdx}`);

    if (slotElement) {
        // Твой код отрисовки слота...
        slotElement.style.position = "relative";
        slotElement.style.overflow = "hidden";
        slotElement.style.display = "flex";
        slotElement.style.alignItems = "flex-end";
        slotElement.style.justifyContent = "center";
        slotElement.style.border = "2px solid #ffcc00"; 
        
        slotElement.style.background = side === 'blue' 
            ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' 
            : 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)';

        slotElement.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                <img src="${brawler.image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="position: relative; z-index: 2; width: 100%; padding-bottom: 5px; 
                        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%); 
                        display: flex; justify-content: center;">
                <span style="font-family: 'Lilita One'; font-size: 0.9rem; color: white; 
                             text-transform: uppercase; text-align: center; text-shadow: 1px 1px 2px #000;">
                    ${brawler.name}
                </span>
            </div>
        `;
    }

    draftData.currentTurn++;
    renderAllDraftBrawlers(); 
    updateDraftSuggestions();
}

// 5. Полный сброс
function resetDraft() {
    draftData.currentTurn = 0;
    draftData.picks = { blue: [], red: [] };
    draftData.bans = []; 
    
    isBanMode = false; 
    const btn = document.getElementById('ban-mode-btn');
    if (btn) {
        btn.innerText = 'BAN MODE: OFF';
        btn.style.background = '#444';
    }

    // --- ВОССТАНОВЛЕНИЕ ИНТЕРФЕЙСА ПОСЛЕ DRAFT COMPLETED ---

    // 1. Показываем каталог бравлеров, если он был скрыт
    const allBrawlersSection = document.querySelector('.all-brawlers-section');
    if (allBrawlersSection) {
        allBrawlersSection.style.display = 'block';
    }

    const searchBar = document.getElementById('draft-search');
    if (searchBar) {
        searchBar.style.display = 'block';
        searchBar.value = ""; // Чистим текст поиска
    }

    // 2. Восстанавливаем правую панель (структуру ТОП 10 ANALYTICS)
    const rightSide = document.querySelector('.draft-right-side');
    if (rightSide) {
        // Возвращаем стандартный фон
        rightSide.style.background = "rgba(255, 204, 0, 0.05)"; 
        rightSide.style.boxShadow = "inset 0 0 20px rgba(255, 204, 0, 0.05)";
        
        // Переписываем содержимое в исходный вид
       rightSide.innerHTML = `
            <div style="position: relative; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <h3 style="color: #ffcc00; text-align: center; margin: 0; font-size: 1.6rem; letter-spacing: 2px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">TOP 10 ANALYTICS</h3>
                
                <button onclick="shuffleSuggestions()" 
                        style="position: absolute; right: 0; background: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.4); color: #ffcc00; border-radius: 12px; padding: 5px 12px; cursor: pointer; font-family: 'Lilita One'; font-size: 11px; transition: all 0.2s; display: flex; align-items: center; gap: 6px; text-transform: uppercase; outline: none;">
                    <span style="font-size: 14px;">🔀</span> SHUFFLE
                </button>
            </div>

            <div id="strategy-bar" style="display: flex; justify-content: space-between; align-items: center; background: rgba(15, 15, 25, 0.8); padding: 12px 18px; border-radius: 18px; border: 1px solid rgba(255, 204, 0, 0.3); margin-bottom: 20px; backdrop-filter: blur(5px);">
                <div style="display: flex; flex-direction: column; gap: 6px;">
                    <span style="color: #ffcc00; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">Map Priority Bans:</span>
                    <div id="ban-icons-list" style="display: flex; gap: 8px; min-height: 38px; align-items: center;"></div>
                </div>

                <div style="width: 1px; height: 40px; background: rgba(255,255,255,0.1); margin: 0 15px;"></div>

                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
                    <span style="color: #00ff88; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">Power Counter:</span>
                    <div id="best-counter-icon" style="min-height: 38px; display: flex; align-items: center;"></div>
                </div>
            </div>

            <div id="draft-suggestions" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-top: 5px;"></div>
        `;
    }

    // --- ОЧИСТКА СЛОТОВ ---

    renderBans(); 
    
    // Ищем все возможные слоты (и по классу, и те, что начинаются на d-slot)
    // --- ОЧИСТКА СЛОТОВ ---
    const allSlots = document.querySelectorAll('.draft-slot, [id^="d-slot-"], [id^="slot-"]');
    allSlots.forEach(slot => {
        slot.innerHTML = ""; 
        slot.style.backgroundImage = "none"; // ПРИНУДИТЕЛЬНО УДАЛЯЕМ ФОН
        slot.style.background = "rgba(15, 15, 25, 0.4)"; 
        
        if (slot.id.includes('blue')) {
            slot.style.border = '2px dashed rgba(79, 172, 254, 0.5)';
        } else {
            slot.style.border = '2px dashed rgba(255, 75, 43, 0.5)';
        }
    });

    // --- ОЧИСТКА ПОИСКА ---
    const searchInput = document.getElementById('draft-search');
    if (searchInput) {
        searchInput.value = "";
    }

    // --- ПЕРЕЗАПУСК АНАЛИТИКИ ---
    updateDraftSuggestions();
    renderAllDraftBrawlers(); // Это обновит список бравлеров (вернет прозрачность тем, кто был выбран)
}

function initDraftMapSelect() {
    const dl = document.getElementById('map-list');
    const input = document.getElementById('draft-search-map'); // ID твоего инпута для выбора карты
    if (!dl) return;

    // 1. НАПОЛНЕНИЕ СПИСКА КАРТ
    const allowedMapIds = [1, 6, 7, 15, 30, 33, 37, 39, 46, 47, 48, 54, 67, 68, 69, 77, 86, 87, 88, 91, 101, 102, 105, 107, 113, 118]; 

    dl.innerHTML = ''; 

    if (typeof maps !== 'undefined' && maps.length > 0) {
        const filteredAndSorted = maps
            .filter(map => allowedMapIds.includes(map.id))
            .sort((a, b) => a.mode.localeCompare(b.mode));

        filteredAndSorted.forEach(map => {
            const opt = document.createElement('option');
            // Используем строку [РЕЖИМ] Название
            opt.value = `[${map.mode.toUpperCase()}] ${map.name}`;
            opt.dataset.id = map.id;
            dl.appendChild(opt);
        });
    }

    // 2. ЛОГИКА СБРОСА ПРИ СМЕНЕ (Если инпут существует)
    if (input) {
        // Убираем старые слушатели, если они были
        input.oninput = function() {
            const val = this.value;
            const options = document.getElementById('map-list').options;
            
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === val) {
                    const mapId = options[i].dataset.id;
                    const foundMap = maps.find(m => m.id == mapId);
                    
                    if (foundMap) {
                        // 1. Сначала полностью очищаем старые данные
                        resetDraft(); 
                        
                        // 2. Устанавливаем новую карту
                        draftData.selectedMap = foundMap;
                        
                        // 3. Обнуляем оффсет шаффла
                        if (window.suggestionOffset !== undefined) suggestionOffset = 0;

                        // 4. Даем браузеру 50мс "продышаться" перед отрисовкой советов
                        setTimeout(() => {
                            updateDraftSuggestions();
                            renderAllDraftBrawlers(); 
                        }, 50);

                        this.blur();
                    }
                    break;
                }
            }
        };
    }
}

function handleMapInput(inputElement) {
    const val = inputElement.value;
    const dl = document.getElementById('map-list');
    if (!dl) return;
    
    const options = dl.options;
    let foundId = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === val) {
            foundId = options[i].dataset.id;
            break;
        }
    }

    if (foundId) {
        const mapData = maps.find(m => m.id == foundId);
        if (mapData) {
            // 1. ПОЛНЫЙ СБРОС (очистит массивы picks, bans и вернет currentTurn к 0)
            resetDraft(); 
            
            // 2. УСТАНОВКА НОВОЙ КАРТЫ
            draftData.selectedMap = mapData;
            
            // 3. ОТРИСОВКА
const display = document.getElementById('draft-map-display');
display.style.display = "flex";          // Центрируем по горизонтали
display.style.alignItems = "center";     // Центрируем по вертикали
display.style.justifyContent = "center"; 

display.innerHTML = `
    <img src="${mapData.image}" 
         alt="${mapData.name}" 
         style="width: 85%; height: 85%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
`;
            
            // 4. ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
            updateDraftSuggestions();
            renderAllDraftBrawlers();
            
            // Если у тебя есть функция отрисовки иконок банов в верху экрана
            if (typeof renderBans === "function") renderBans(); 
            
            // Убираем фокус и чистим поле ввода (по желанию)
            inputElement.blur();
        }
    }
}
// Функция отрисовки всех бойцов для ручного выбора
function renderAllDraftBrawlers() {
    const grid = document.getElementById('all-brawlers-grid');
    if (!grid) return;
    
    grid.innerHTML = "";
    
    // СОРТИРОВКА: теперь по ID (как в твоем массиве brawlers)
    const sorted = [...brawlers].sort((a, b) => a.id - b.id);
    
    const taken = [...draftData.picks.blue, ...draftData.picks.red, ...draftData.bans];

    sorted.forEach(b => {
        const isTaken = taken.includes(b.id);
        
        const div = document.createElement('div');
        // Добавляем класс для поиска
        div.className = "all-brawler-card";
        
        // СТИЛИ: 
        // 1. Добавили margin: 5px чтобы при увеличении (scale) они не толкали соседей
        // 2. transform-origin: center чтобы увеличивался из центра
        // 3. z-index при наведении чтобы карточка была НАД остальными
        div.style = `
            text-align: center; cursor: ${isTaken ? 'default' : 'pointer'}; 
            opacity: ${isTaken ? '0.3' : '1'}; transition: all 0.2s ease;
            background: rgba(255,255,255,0.03); padding: 10px; border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.1);
            position: relative; z-index: 1; margin: 5px;
            display: flex; flex-direction: column; align-items: center;
        `;
        
        if (!isTaken) {
            div.onmouseenter = () => { 
                div.style.background = "rgba(255,255,255,0.1)"; 
                div.style.transform = "scale(1.15)"; // Чуть сильнее увеличиваем
                div.style.zIndex = "10"; // Выводим на передний план, чтобы не перекрывали соседи
                div.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
            };
            div.onmouseleave = () => { 
                div.style.background = "rgba(255,255,255,0.03)"; 
                div.style.transform = "scale(1)"; 
                div.style.zIndex = "1";
                div.style.boxShadow = "none";
            };
            div.onclick = () => {
                makePick(b.id);
            };
        }

        div.innerHTML = `
            <img src="${b.image}" style="width: 60px; height: 60px; border-radius: 10px; margin-bottom: 5px; pointer-events: none;">
            <div style="font-size: 11px; white-space: nowrap; pointer-events: none;">${b.name}</div>
        `;
        
        grid.appendChild(div);
    });
}

// Поиск: теперь ищем по классу, чтобы не задеть лишние div
function filterDraftBrawlers() {
    const term = document.getElementById('draft-search').value.toLowerCase();
    const items = document.getElementsByClassName('all-brawler-card');

    for (let item of items) {
        const name = item.innerText.toLowerCase();
        // Используем flex, так как в стиле div выше он подразумевается для центровки
        item.style.display = name.includes(term) ? "flex" : "none";
    }
}

// ОБЯЗАТЕЛЬНО ОБНОВИ ФУНКЦИЮ makePick
// Добавь renderAllDraftBrawlers() в самый конец функции makePick, 
// чтобы список снизу обновлялся (затенялся), когда ты кого-то выбираешь.
// Запускаем при загрузке
initDraftMapSelect();
renderAllDraftBrawlers();
// Инициализация
showSection('maps');
