const categories = [
    ["1", "Классика"],
    ["2", "Фэнтези"],
    ["3", "Детектив"],
    ["6", "Детская литература"],
    ["4", "Романы"],
    ["5", "Фантастика"],
]
const books = [
    {
        id: 1,
        title: "Игра престолов",
        author: "Джордж Р.Р. Мартин",
        genre: 2,
        coverURL: "https://s1.livelib.ru/boocover/1002916527/o/a0bc/Dzhordzh_Martin__Igra_prestolov.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Эпическая сага о борьбе за власть в вымышленном мире Вестероса с его жестокими климатическими условиями и вероломными правящими династиями.",
        price: 1250
    },
    {
        id: 2,
        title: "1984",
        author: "Джордж Оруэлл",
        genre: 1,
        coverURL: "https://s1.livelib.ru/boocover/1007352619/o/42e2/Dzhordzh_Oruell__1984._Skotnyj_dvor._Esse.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Антиутопический Романы-предупреждение, рисующий пугающую картину тоталитарного общества будущего, где всё подчинено идее порабощения человеческого разума.",
        price: 850
    },
    {
        id: 3,
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        genre: 4,
        coverURL: "https://s1.livelib.ru/boocover/1009183819/o/a6e7/Dzhejn_Ostin__Gordost_i_predubezhdenie.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Классический Роман о нравах английского дворянства, рассказывающий историю любви Элизабет Беннет и Фицуильяма Дарси.",
        price: 670
    },
    {
        id: 4,
        title: "Гарри Поттер и философский камень",
        author: "Дж.К. Роулинг",
        genre: 2,
        coverURL: "https://s1.livelib.ru/boocover/1002687858/o/231d/Dzh._K._Rouling__Garri_Potter_i_filosofskij_kamen.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Первая книга серии о приключениях юного волшебника Гарри Поттера и его друзей в Школе Чародейства и Волшебства Хогвартс.",
        price: 890
    },
    {
        id: 5,
        title: "Код да Винчи",
        author: "Дэн Браун",
        genre: 3,
        coverURL: "https://s1.livelib.ru/boocover/1002455336/o/92d7/Den_Braun__Kod_da_Vinchi.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Захватывающий детективный Романы о поисках ответов, связанных с кодом Да Винчи и тайными обществами.",
        price: 780
    },
    {
        id: 6,
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        genre: 1,
        coverURL: "https://s1.livelib.ru/boocover/1009164193/o/3082/Antuan_de_SentEkzyuperi__Malenkij_prints.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Философская сказка, наполненная поэзией, мудростью и духовными истинами, пронзительно описывающая вопросы детства и взросления.",
        price: 520
    },
    {
        id: 7,
        title: "Унесенные ветром",
        author: "Маргарет Митчелл",
        genre: 4,
        coverURL: "https://s1.livelib.ru/boocover/1009203985/o/c5cc/Margaret_Mitchell__Unesennye_vetrom.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Эпическая история любви на фоне Гражданской войны в США, обрисовывающая быт и нравы американского Юга.",
        price: 1100
    },
    {
        id: 8,
        title: "Убить пересмешника",
        author: "Харпер Ли",
        genre: 1,
        coverURL: "https://s1.livelib.ru/boocover/1002918449/o/d8ad/__Ubit_peresmeshnika._Graficheskij_roman.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Знаменитый Романы, раскрывающий проблемы расизма и нетерпимости через восприятие маленькой девочки.",
        price: 980
    },
    {
        id: 9,
        title: "Дюна",
        author: "Фрэнк Герберт",
        genre: 5,
        coverURL: "https://s1.livelib.ru/boocover/1009001941/o/7ba2/Frenk_Gerbert__Dyuna.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Культовая научно-фантастическая эпопея, описывающая борьбу народов за ценнейший космический ресурс - пряность меланж.",
        price: 1370
    },
    {
        id: 10,
        title: "Бегущий человек",
        author: "Стивен Кинг",
        genre: 5,
        coverURL: "https://s1.livelib.ru/boocover/1000764380/o/0f21/__Beguschij_chelovek._Hudeyuschij_sbornik.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Постапокалиптический Романы о человечестве, вынужденном участвовать в жестоких играх на выживание.",
        price: 920
    },
    {
        id: 11,
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        genre: 1,
        coverURL: "https://s1.livelib.ru/boocover/1002775876/o/41fb/Fjodor_Dostoevskij__Prestuplenie_i_nakazanie._Idiot_sbornik.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Один из величайших Романыов в мировой литературе, психологическая драма о борьбе человека с самим собой, раскрывающая глубины души.",
        price: 670
    },
    {
        id: 12,
        title: "Хоббит",
        author: "Дж.Р.Р. Толкин",
        genre: 2,
        coverURL: "https://s1.livelib.ru/boocover/1007284957/o/6152/Dzhon_R._R._Tolkin__Hobbit.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Книга, положившая начало легендарной эпопее 'Властелин колец', повествующая о путешествии хоббита Бильбо Бэггинса.",
        price: 790
    },
    {
        id: 13,
        title: "Девушка в поезде",
        author: "Пола Хокинс",
        genre: 3,
        coverURL: "https://s1.livelib.ru/boocover/1006961164/o/3152/Pola_Hokins__Devushka_v_poezde.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Захватывающий психологический триллер, в котором запутанная история вскрывает человеческие слабости и пороки.",
        price: 730
    },
    {
        id: 14,
        title: "Гордость и предубеждение и зомби",
        author: "Джейн Остин, Сет Грэм-Смит",
        genre: 2,
        coverURL: "https://s1.livelib.ru/boocover/1001486665/o/e801/__Gordost_i_predubezhdenie_i_zombi.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Оригинальная версия классики Джейн Остин, переписанная в стилистике фэнтези с добавлением зомби-апокалипсиса.",
        price: 870
    },
    {
        id: 15,
        title: "Школа на кукурузном поле",
        author: "Сандра Дж. Паул",
        genre: 6,
        coverURL: "https://s1.livelib.ru/boocover/1009086622/o/7559/Sandra_Dzh._Paul__Shkola_na_kukuruznom_pole.jpeg",
        coverURL2: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg",
        description: "Над Квинтеном всегда посмеивались, что он обладает слишком живым воображением, но сейчас Квинтен перестал понимать, где реальность, а где страшный сон, словно оказался героем ужастика. Посреди кукурузного поля возникла Мрачная школа, и вдруг оказалось, что теперь все дети учатся в ней. Только каждый день, проведённый там, словно отбирает личность у одноклассников Квинтена. Они становятся незнакомцами со странными знаниями и новыми привычками. Квинтен считает, что единственный шанс спастись от подобной участи — разгадать секрет школы на кукурузном поле.",
        price: 259
    }]
