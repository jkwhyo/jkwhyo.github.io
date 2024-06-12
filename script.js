document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.nav-link');
    const dramaDetailsSection = document.getElementById('drama-details');
    const backToDiscoverBtn = document.getElementById('back-to-discover');
    const backToWatchlistBtn = document.getElementById('back-to-watchlist')
    const discoverSection = document.getElementById('discover');
    const addToWatchlistBtn = document.getElementById('add-to-watchlist');
    const watchlistSection = document.getElementById('watchlist');
    const watchlistContent = document.getElementById('watchlist-content');



    // Array of drama objects
    // an array or list of drama objects
    const dramas = [
        {
            title: 'Lovely Runner', filmCategory: 'Drama', year: "(2024)", dateAired: "Apr 8 - May 28, 2024", totalEp: 16, duration: 70,
            description: "In the glitzy realm of stardom, Ryu Seon Jae shines as a top-tier celebrity, captivating the spotlight since his debut. Despite the facade of a perfect life, the demanding nature of the entertainment industry has left him utterly exhausted. Im Sol, an ardent admirer, holds an affectionate love for Ryu Seon Jae. A childhood accident derailed her dreams, yet the solace found in Ryu Seon Jae's music on the radio transformed her into an unwavering fan.The narrative takes a poignant turn when Im Sol, reeling from the breaking news of Ryu Seon Jae's tragic demise, experiences a miraculous twist of fate. Transported back 15 years into the past, she confronts Ryu Seon Jae in his 19-year-old high school self. Im Sol grapples with the formidable challenge of altering the trajectory of his future, driven by an unyielding determination to avert the impending tragedy.",
            imageUrl: 'assets/lovely-runner.jpg', genre: 'romance', rating: 9.2,
            country: 'Korea', altName: "내일의 으뜸 , 기억을 걷는 시간, The Best of Tomorrow, Gieokeul Geodneun Sigan ",
            cast: ['Yoon Jong Ho (Director)', 'Kim Tae Yub (Director)', 'Byeon Woo Seok (Ryu Seon Jae)', 'Kim Hye Yoon (Im Sol)', 'Song Geon Hee (Kim Tae Sung)', 'Lee Seung Hyub(Baek In Hyuk)'],
            OSTs: ['Star (CD Only) - 3:38', 'Sudden Shower (소나기) - 3:53', 'Run Run - 3:35', 'You & I - 2:49', 'A Day (Jongho) - 3:52', 'I Think I Did (그랬나봐) (Yoo Hwe Seung) - 3:52'],
            discoverMore: ['The Best of Tomorrow Webtoon', 'Fandom page link', 'Discussion board link']
        },

        {
            title: 'Twinkling Watermelon', filmCategory: 'Drama', year: "(2023)", dateAired: "Sep 2 - Nov 14, 2023", totalEp: 16, duration: 70,
            description: "In 2023, Eun Gyeol is a CODA (Child of Deaf Adults) high-school student, but he has a passion for music. During the day, he is a studious model pupil, but at night, he rocks out as a guitarist in a band. But when he stumbles across a strange yet alluring music store, he goes hurtling back in time to 1995. Here, he comes face to face with his father, Ha Yi Chan – as a high schooler! Yi Chan takes Eun Gyeol for a lunatic when the latter calls him “dad”. Worse still, it looks like Yi Chan has a crush on an icy cellist named Se Kyeong – not his future mother, Cheong Ah! In a bid to put things “right,” Eun Gyeol joins a band fronted by his future father. But will this be enough to help Eun Gyeol bring his future parents together... and will he ever get back to the 2020s?",
            imageUrl: 'assets/twinkling-watermelon.jpg', genre: 'romance', rating: 9.2,
            country: 'Korea', altName: "반짝이는 워터멜론, Shining Watermelon , Sparkling Watermelon , Banjjagineun Woteomellon",
            cast: ['Song Jung Hyun (Director)', 'Ryeoun (Ha Eun Gyeol)', 'Choi Hyun Wook (Ha Yi Chan)', 'Seol In Ah (Choi Se Kyeong / On Eun Yu)', 'Shin Eun Soo (Yoon Cheong Ah)'],
            OSTs: ['Jeong Jun-il – To you who shines', 'Koo Jun-hoe (iKON) - HIGHER', 'Kim Han-gyeom- SHINING', 'RP- Tomorrow', 'Alia - I talk about loneliness'],
            discoverMore: ['OST Album link', 'Fandom page link', 'Fanfiction link']
        },

        {
            title: 'Hospital Playlist', filmCategory: 'Drama', year: "(2020)", dateAired: "Mar 12 - May 28, 2020", totalEp: 12, duration: 100,
            description: "The stories of people going through their days are seemingly ordinary but actually special at the hospital, a place known as the microcosm of life, where someone is being born and someone's life meets its ending. The five doctors are long-time friends of 20 years who started their undergrad in 1999 in the same medical school and now are colleagues in the same hospital and have a band together.",
            imageUrl: 'assets/hospital-playlist.jpg', genre: 'romance', rating: 9.1,
            country: 'Korea', altName: "슬기로운 의사 생활,  A Wise Doctor's Life",
            cast: ['Shin Won Ho (Director)', 'Jo Jung Suk (Lee Ik Jun)', 'Yoo Yeon Seok (Ahn Jung Won)', 'Jung kyung Ho (Kim Jun Wan)', 'Kim Dae Myung (Yang Suk Hyung)', 'Jeon Mi Do (Chae Song Hwa)'],
            OSTs: [' Kwon Jin Ah – Lonely Night', 'JOY – Introduce Me A Good Person', 'Cho Jung Seok – Aloha', 'KYUHYUN – Confession Is Not Flashy', 'Urban Zakapa – Beautiful My Love', 'Kwak Jin Eon – In Front of City Hall at the Subway Station'],
            discoverMore: ['Hospital Playlist S2', 'Fandom page link', 'Fanfiction link']
        },

        {
            title: 'Nirvana in Fire', filmCategory: 'Drama', year: "(2015)", dateAired: "Sep 19 - Oct 15, 2015", totalEp: 54, duration: 45,
            description: "In sixth-century China, the Emperor of Great Liang orders the unjust execution of his brother-in-law Marshal Lin Xie alongside the Lin family, his 70,000 army soldiers, and Crown Prince Qi. Secretly surviving the massacre is Lin Xie's son, Lin Shu, who undergoes medical treatment that changes his appearance entirely and leaves him in a weakened state, unable to ever perform martial arts again. Lin Shu changed his name to Mei Chang Su and later became the chief of the pugilist world and established the Jiangzuo Alliance. Twelve years later, Mei Chang Su returns to the capital with a secret plan after being sought after by Prince Yu and Prince Xian during their fight for the throne. He decides to covertly assist Prince Jing, the unfavoured son of the Emperor, and wisely rids the court of all scheming officials.",
            imageUrl: 'assets/nirvana-in-fire.jpg', genre: 'historical', rating: 9.1,
            country: 'China', altName: " 琅琊榜, Lang Ya Bang",
            cast: ['Kong Sheng (Director)', 'Li Xue (Director)', 'Hu Ge (Mei Chang Su)', 'Liu Tao (Mu Ni Huang)', 'Wang Kai (Xiao Jing Yan)', 'Chen Long (General Meng Zhi)','Victor Huang (Xiao Jing Huan)','Ding Yong Dai (Emperor Xiao Xuan)'],
            OSTs: ['Hu Ge - When the Wing Blows', 'Liu Tao - Aging of a Beauty', 'Wang Kai - Loyal Blood Runs Forever Red'],
            discoverMore: ['Nirvana in Fire S2', 'Fandom page link', 'Discussion thread']
        },

        {
            title: 'Moving', filmCategory: 'Drama', year: "(2023)", dateAired: "Aug 9 - Sep 20, 2023", totalEp: 20, duration: 47,
            description: 'Kim Bong Seok, Jang Hee Soo, and Lee Gang Hoon, seemingly typical high school students, bear extraordinary inherited powers. Bong Seok can fly, Hee Soo possesses exceptional athleticism and rapid injury recovery, and Gang Hoon wields uncanny strength and speed. As they conceal their gifts, their parents fight to shield them from exploitation by others, navigating a delicate balance between secrecy and protection.',
            imageUrl: 'assets/moving.jpg', genre: 'action', rating: 9.1,
            country: 'Korea', altName: "무빙, Mubing",
            cast: ['Park In Je (Director)', 'Ryu Seung Rong (Jang Joo Won)', 'Han Hyo Joo (Lee Mi Hyun)', 'Zo In Sung (Kim Doo Shik)', 'Lee Jung Ha (Kim Bong Seok)', 'Go Youn Jang (Jang Hee Soo)','Kim Do Hoon (Lee Kang Hoon)'],
            OSTs: ['Dalparan (달파란) - Bongseok Levitating Score', 'Dalparan - Moving Ending Bgm', 'Jannabi - TOGETHER!'],
            discoverMore: ['Moving Webtoon', 'Fandom page link', 'Discussion thread']
        },

        {
            title: 'Hidden Love', filmCategory: 'Drama', year: "(2023)", dateAired: "Jun 20 - Jul 6, 2023", totalEp: 25, duration: 45,
            description: "Sang Zhi falls in love with Duan Jia Xu, the boy who often comes to her house to play games in her older brother's room. He is five years older than her. Sang Zhi had a crush on Duan Jia Xu when she was young, but they lost contact with each other for some reason. After she graduates, she joins the university in the city he is in, and during their day-to-day intimate and close interaction, they slowly fall in love.",
            imageUrl: 'assets/hidden-love.jpg', genre: 'romance', rating: 9.0,
            country: 'China', altName: "偷偷藏不住, Secretly, Secretly, but Unable to Hide It",
            cast: ['Lee Ching Jung (Director)', 'Zhao Lu Si (Sang Zhi)', 'Chen Zhe Yuan (Duan Jia Xu)', 'Victor Ma (Sang Yan)'],
            OSTs: ['Zhao Lu Si & Silence Wang - Only Want to Secretly Hide You (Theme song)', 'Zhao Lu Si - I have someone I like', 'Ma Bo Qian - Be Your Light' ],
            discoverMore: ['Secretly, Secretly; But Unable to Hide It Web Novel', 'Hidden Love Manhua', 'First Frost Web Novel']
        },

        {
            title: 'Mysterious Lotus Casebook', filmCategory: 'Drama', year: "(2023)", dateAired: "Jul 23 - Aug 9, 2023", totalEp: 40, duration: 45,
            description: "Li Lian Hua is a countryside doctor who travels dragging around a lotus tower. He accidentally becomes 'famous' and gets pulled into the pugilistic world that he no longer wants to have any connections with. Fang Duo Bing, a passionate youth who dreams of becoming a hero, realizes that Li Lian Hua is not a simple man and vows to find proof that Li Lian Hua has been impersonating a famous doctor. Meanwhile, Di Fei Sheng, who has always regarded Li Xiang Yi as a fierce enemy, has also reemerged in the pugilistic world and recognizes that the unremarkable doctor Li Lian Hua is none other than Li Xiang Yi. After a series of cases, Li Lian Hua, Di Fei Sheng and Fang Duo Bing gradually come to forge a deep friendship and join hands in solving mysterious cases to uphold justice.",
            imageUrl: 'assets/lotus-casebook.jpg', genre: 'wuxia', rating: 9.0,
            country: 'China', altName: "莲花楼, Auspicious Pattern Lotus House",
            cast: ['Guo Hu (Director)', 'Ren Hai Tao (Director)', 'Cheng Yi (Li Lian Hu / Li Xiang Yi)', 'Joseph Zeng (Fang Duo Bing)', 'Xiao Shun Yao (Di Fei Sheng)'],
            OSTs: ['Liu Yu Ning - Above Jiang Hu (Opening)', 'Yan Yi Dan - The World is too Busy (Ending)', 'Hu Xia - A Flask of Lotus Wine', 'Zhang Yuan - Beyond the Mountains'],
            discoverMore: ['Auspicious Pattern Lotus House Novel', 'Fandom page link', 'Discussion thread']
        },

        {
            title: 'The Untamed', filmCategory: 'Drama', year: "(2019)", dateAired: "Jun 27 - Aug 7, 2019", totalEp: 50, duration: 45,
            description: "Wei Wu Xian and Lan Wang Ji, two talented disciples of respected clans, meet during cultivation training and accidentally discover a secret carefully hidden for many years. Taking on the legacy of their ancestors, they decide to rid the world of the ominous threat. But in a dramatic turn of events, Wei Wu Xian dies. Sixteen years later, Wei Wu Xian is brought back to life through a self-sacrificing ritual. He conceals himself behind a mask and assumes the identity of his summoner. Soon, Wei Wu Xian reunites with Lan Wang Ji and they start working together to solve the mysteries of the present and unravel the truth behind the events in the past.",
            imageUrl: 'assets/the-untamed.jpg', genre: 'wuxia', rating: 9.0,
            country: 'China', altName: "陈情令, Mo Dao Zu Shi",
            cast: ['Steve Chang (Director)', 'Chan Ka Lam (Director)', 'Xiao Zhan (Wei Wu Xian / Wei Ying)', 'Wang Yi Bo (Lan Wang Ji / Lan Zhan)'],
            OSTs: ['Xiao Zhan & Wang Yi Bo / Bibi Zhou - Unrestrained', 'Xiao Zhan & Wang Yi Bo - Wu Ji (Theme Song)', 'Xiao Zhan - The Ending Melody of Chen Qing'],
            discoverMore: ['Grandmaster of Demonic Cultivation Novel', 'Mo Dao Zu Shi Anime', 'Mo Dao Zu Shi Manhua', 'Fandom page link']
        },

        {
            title: 'When I Fly Towards You', filmCategory: 'Drama', year: "(2023)", dateAired: "Jul 13 - Jun 29, 2023", totalEp: 24, duration: 35,
            description: "In the early autumn of 2012, Yucai High School welcomes a cheerful transfer student named Su Zai Zai. On the first day of school, Su Zai Zai encounters the aloof and cool Zhang Lu Rang and falls in love with him at first sight. Behind Zhang Lu Rang's seemingly outstanding academic performance and privileged family background, he is a 'contradictory' person who appears to be quite confident on the outside yet constantly doubts himself on the inside. Due to the presence of his genius younger brother, Zhang Lu Li, Zhang Lu Rang is constantly compared to him by his mother. For over a decade, Zhang Lu Rang's life has been like living inside a thick shell. He is introverted and speaks little. He looks composed and polite but keeps everyone at a distance. However, Zhang Lu Rang's life changes when he meets the bubbly and forward Su Zai Zai, and joins hands with old and new friends Gu ran,  Guan Fang, and Su Zai Zai's best friend Jiang Jia. They help him understand the meaning of self and he slowly begins to understand how to plan his life. Zhang Lu Rang and Su Zai Zai work towards their goals while supporting one another, as romance begins to blossom throughout their friend group.",
            imageUrl: 'assets/when-i-fly-towards-you.jpg', genre: 'romance', rating: 9.0,
            country: 'China', altName: "当我飞奔向你,  The Girl Who Fell Into Love",
            cast: ['Mao De Shu (Director)', 'Zhou Yi Ran (Zhang Lu Rang)', 'Zhang Miao Yi (Su Zai Zai)'],
            OSTs: ['Lin Chen Yang - When I Run to You (Opening)', 'Yin Xi Lu - I Think I Will (Ending)', 'Yin Xi Lu - Gentle Summer'],
            discoverMore: ["She's a Little Crazy Novel", 'Fandom page link', 'Discussion thread']
        },

        {
            title: 'Crash Landing on You', filmCategory: 'Drama', year: "(2019)", dateAired: "Dec 14 - Feb 16, 2019", totalEp: 16, duration: 85,
            description: 'After getting into a paragliding accident, South Korean heiress Yoon Se Ri crash lands in North Korea. There, she meets North Korean army officer Ri Jung Hyuk, who agrees to help her return to South Korea. Despite the tension between their countries, the two of them start falling for one another.',
            imageUrl: 'assets/crash-landing-on-you.jpg', genre: 'romance', rating: 9.0,
            country: 'China', altName: "사랑의 불시착,  Crash Landing of Love",
            cast: ['Lee Jeong Hyo (Director)', 'Hyun Bin (Ri Jung Hyuk)', 'Son Ye Jin (Yoon Se Ri)', 'Seo Ji Hye (Seo Dan)', 'Kim Jung Hyun (Goo Seung Jun)'],
            OSTs: ["10cm - But It's Destiny", 'Yoon Mi Rae - Flower', 'Davichi - Sunset', 'Baek Ye Rin - Here I Am Again'],
            discoverMore: ['Real-world Event that inspired the drama', 'Fandom page link', 'Fanfiction link']
        },

        {
            title: 'Someday or Oneday', filmCategory: 'Drama', year: "(2019)", dateAired: "Nov 17 - Feb 16, 2019", totalEp: 13, duration: 72,
            description: "In 2019, 27-year-old Huang Yu Xuan yearns for her missing boyfriend Wang Quan Sheng, presumed dead for two years. On her birthday, she wishes to 'see him.' Meanwhile, in 1998, 17-year-old Chen Yun Ru pines for a boy who doesn't share her feelings. Her birthday wish is to 'become the girl Li Zi Wei loves.' A mysterious cassette player transports Yu Xuan into Yun Ru's life as she awakens in the past, facing a shocking twist—she's now high schooler Chen Yun Ru. The person beside her isn't Wang Quan Sheng but Li Zi Wei. Stuck in the past, living Yun Ru's life, Yu Xuan must prevent Yun Ru's impending 1999 death. Li Zi Wei, her new classmate, unexpectedly develops feelings for her, complicating matters as his friend Mo Jun Jie also harbors a crush. Can true love transcend this seemingly insurmountable time gap?",
            imageUrl: 'assets/someday-or-oneday.jpg', genre: 'thriller', rating: 9.0,
            country: 'Taiwan', altName: "想見你,  Want to Meet You",
            cast: ['Tien Jen Huang (Director)', 'Ko Chia Yen (Huang Yu Xuan / Chen Yun Ru)', 'Greg Hsu (Li Zi Wei / Wang Quan Sheng)', 'Patrick Shih (Mo Jun Jie)'],
            OSTs: ['Shi Shi - Someday or One Day (Theme Song)', '831 - Miss You 3000 想見你想見你想見你(Ending Theme)', 'Nine Chen - See Your Voice'],
            discoverMore: ['Someday or One Day Book', 'Fandom page link', 'Discussion thread']
        },

        {
            title: 'Go Ahead', filmCategory: 'Drama', year: "(2020)", dateAired: "Aug 10 - Sep 6, 2020", totalEp: 46, duration: 45,
            description: "Growing up in dysfunctional households, three individuals who are unrelated by blood treat each other like family as they yearn for the love that they cannot find at home. Eldest brother Ling Xiao, second brother He Zi Qiu, and youngest sister Li Jian Jian grow up together, experiencing life’s joy and strife as they support each other’s chosen paths. As Ling Xiao and He Zi Qiu graduate from high school, they return to their original families. Nine years later, the three are reunited, but the heartaches from their complicated family past become a shadow that constantly lingers. Can they finally fix their personal issues to become better versions of themselves?",
            imageUrl: 'assets/go-ahead.jpg', genre: 'romance', rating: 8.9,
            country: 'China', altName: "以家人之名,  In the Name of the Family",
            cast: ['Ding Zi Guang (Director)', 'Tan Song Yun (Li Jian Jian)', 'Song Wei Long (Ling Xiao)', 'Zhang Xin Cheng (He Zi Qu)', 'Tu Song Yan (Li Hai Chao)', 'Zhang Xi Lin (Ling He Ping)'],
            OSTs: ['Ma Song - No Fear (Opening)', 'Mao Bu Yi - I Will Stay Guard Here (Ending)', 'Zhao Bei Er - The Light Which Cannot Be Seen'],
            discoverMore: ['Fandom page Link', 'Discussion Thread', 'Cdrama Review', 'Recap Video']

        }
    ];


    // Function to render dramas based on filter
    function renderDramas(filter) {
        content.innerHTML = '';
        const filteredDramas = dramas.filter(drama => filter === 'top-rated' || drama.genre === filter);

        // Loops through the array of drama objects until there is nothing left.
        filteredDramas.forEach((drama, index) => {
            if (index % 6 === 0) {
                const row = document.createElement('div');
                row.className = 'row';
                content.appendChild(row);
            }

            // Create a grid for the content 
            const currentRow = content.lastChild;
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 col-lg-2 mb-4'

            // Create a card for the respective drama object in the grid
            const card = document.createElement('div');
            card.className = 'card';

            // Create a place to put the image and title in the card
            const cardImage = document.createElement('img');
            cardImage.className = 'card-img-top';
            cardImage.src = drama.imageUrl;
            cardImage.alt = drama.title;

            // Create a place to put content in the card
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            // Create h5 title by retrieving the title of the respective drama object
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = drama.title;

            // Create small card-footer by retrieving rating of the respective drama object
            const cardText = document.createElement('small');
            cardText.className = 'card-footer';
            cardText.innerText = '✰' + drama.rating;

            card.addEventListener('click', () => showDramaDetails(drama));



            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            col.appendChild(card);
            currentRow.appendChild(col);

            card.addEventListener('click', () => showDramaDetails(drama));
        });
    }

    // Function to display details of a selected drama 
    function showDramaDetails(drama) {
        const detailsContainer = document.getElementById('drama-details-content');
        detailsContainer.innerHTML = `

            <p><h2>${drama.title} ${drama.year}</h2></p>
            <p><strong>Alternate Name:</strong> ${drama.altName}</p>

            <button id="add-to-watchlist-btn" class="btn btn-outline-primary">Add to Watch List</button>
            <br><br>

            <div>
                <img src="${drama.imageUrl}" alt="${drama.title}" class="details-img img-fluid mb-2">
                <div section='detais-words'>
                <p><strong>Description:</strong> ${drama.description}</p></div>
                <p><strong>Main Genre:</strong> ${drama.genre}</p>
                <p><strong>Rating:</strong> ${drama.rating}✰</p>
                <p><strong>Date Aired:</strong> ${drama.dateAired}</p>
                <p><strong>Total Episodes:</strong> ${drama.totalEp}</p>
                <p><strong>Duration:</strong> ${drama.duration} minutes</p>
                <p><strong>Country:</strong> ${drama.country}</p>
            </div><br>

            <div section="more-details">
                <div class="row g-3">
                <div class="col-md-4">
                    <div class="card">
                    <h4><br>Main Cast</h4>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                ${drama.cast.slice(0, 8).map(actor => `<li class="list-group-item">${actor}</li>`).join('')}
                            </ul>
                            <button class="btn btn-primary mt-2" onclick="viewMore('${drama.title}', 'cast')">View More</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                    <h4><br>OSTs</h4>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                ${drama.OSTs.slice(0, 8).map(song => `<li class="list-group-item">${song}</li>`).join('')}
                            </ul>
                            <button class="btn btn-primary mt-2" onclick="viewMore('${drama.title}', 'OSTs')">View More</button>
                        </div>
                    </div>
                </div>
            
                <div class="col-md-4">
                    <div class="card">
                    <h4><br>Discover More</h4>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                ${drama.discoverMore.slice(0, 6).map(item => `<li class="list-group-item">${item}</li>`).join('')}
                            </ul>
                            <button class="btn btn-primary mt-2" onclick="viewMore('${drama.title}', 'discoverMore')">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        `;


        // Show the details view and hide the discover section
        dramaDetailsSection.classList.remove('d-none');
        discoverSection.classList.add('d-none');
        watchlistSection.classList.add('d-none');


        const addToWatchListBtn = document.getElementById('add-to-watchlist-btn');
        addToWatchListBtn.addEventListener('click', () => addToWatchList(drama));
    }

    // Function to add a drama to the watch list and stores drama object in local storage
    function addToWatchList(drama) {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        if (!watchlist.some(item => item.title === drama.title)) {
            watchlist.push(drama);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            renderWatchList(); // Render watchlist after adding
        }
    }

    // Function to remove a drama from watch list and local storage
    function removeFromWatchlist(index) {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        const removedDrama = watchlist.splice(index, 1);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        alert(`${removedDrama[0].title} has been removed from your watchlist!`);
        renderWatchlist(); // Re-render watchlist to reflect changes
    }

    // Function to render watch list
    function renderWatchList() {
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        const watchlistContent = document.getElementById('watchlist-content');
        watchlistContent.innerHTML = '';

        //Create a row of dramas added to the watch list
        watchlist.forEach((drama, index) => {
            if (index % 5 === 0) {
                const row = document.createElement('div');
                row.className = 'row';
                watchlistContent.appendChild(row);
            }

            const currentRow = watchlistContent.lastChild;
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 col-lg-2 mb-4';

            const card = document.createElement('div');
            card.className = 'card';

            const cardImage = document.createElement('img');
            cardImage.className = 'card-img-top';
            cardImage.src = drama.imageUrl;
            cardImage.alt = drama.title;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = drama.title;

            const cardText = document.createElement('small');
            cardText.className = 'card-footer';
            cardText.innerText = '✰' + drama.rating;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn btn-danger btn-sm';
            removeBtn.innerText = 'Remove';
            removeBtn.onclick = (event) => {
            event.stopPropagation(); // Prevent the card click event
            removeFromWatchlist(index);
            renderWatchList();
        };

        card.addEventListener('click', () => {
            showDramaDetails(drama);
        });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(removeBtn);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            col.appendChild(card);
            currentRow.appendChild(col);
        });



    }

     // Event listeners
     filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            renderDramas(filter);
        });
    });

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = document.getElementById(link.getAttribute('href').substring(1));
            sections.forEach(section => section.classList.add('d-none'));
            target.classList.remove('d-none');
            if (target.id === 'watchlist') {
                renderWatchList();
            }
        });
    });


    // Function to show/hide sections
    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.add('d-none');
            if (section.id === id) {
                section.classList.remove('d-none');
            }
        });
    };

    // Event listener for navbar link
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Event listeners for filter links
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
            this.classList.add('btn-primary');
            renderDramas(filter);
        });
    });

    // Event listener for drama cards
    content.addEventListener('click', function (event) {
        if (event.target.closest('.card')) {
            const cardElement = event.target.closest('.card');
            const cardTitle = cardElement.querySelector('.card-title').innerText;
            const selectedDrama = dramas.find(d => d.title === cardTitle);
            if (selectedDrama) {
                showDramaDetails(selectedDrama);
            }
        }
    });

    // Back button event listener
    backToDiscoverBtn.addEventListener('click', () => {
        dramaDetailsSection.classList.add('d-none');
        discoverSection.classList.remove('d-none');
    });

    // Back button event listener
    backToWatchlistBtn.addEventListener('click', () => {
        dramaDetailsSection.classList.add('d-none');
        watchlistSection.classList.remove('d-none');
        renderWatchList();
    });
    


    // Initial render of dramas
    renderDramas('top-rated');

});
