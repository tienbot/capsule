function init(){
    let age = parseInt(prompt('Сколько вам лет?')); //указываем возраст героя капсулы
    //проверка на введение числа
    while (isNaN(parseFloat(age)) && !isFinite(age)) {
        age = prompt('Ошибка! Введите возраст числом');
    }

    document.getElementById("age").innerHTML = age;
    let clicks = 0;
    let finalBtn = document.querySelector('#final');
    let randomBtn = document.querySelector('#generate');

    let question = [
        "Как, где и с кем ты отметил(-а) последний Новый год?",
        "Какой длины у тебя сейчас волосы?",
        "В какую неловкую ситуацию ты недавно попал(-а)?",
        "Какую неудачную покупку ты совершил(-а) за последнее время?",
        "Что лежит сейчас в твоем холодильнике?",
        "Ты популярен(-на)?",
        "Какую глупую вещь ты сегодня совершил(-а)?",
        "Жизнь справедлива? Да? Нет? Не сегодня?",
        "Сколько чашек кофе ты сегодня выпил(-а)?",
        "Люди могут меняться?",
        "Последний раз ты очень сильно смеялся(-ась), когда...",
        "По шкале от 1 до 10, насколько тебе грустно? Почему?",
        "С кем из коллег у тебя самые хорошие отношения?",
        "Какой комплимент тебе недавно сделали?",
        "Что лежит в твоем рюкзаке/сумочке?",
        "Сколько у тебя лишних кг?",
        "Ты должен(-на) кому-то деньги? А тебе кто-то должен?",
        "Лучшая часть сегодняшнего дня...",
        "Ты влюблен(-на)?",
        "Какой твой самый безумный поступок совершенный ради любви?",
        "Твой рецепт для лечения разбитого сердца...",
        "Ты сейчас обижен(-а)? На кого?",
        "Что должен настоящий мужчина, а что настоящая женщина?",
        "Возможна ли дружба между мужчиной и женщиной?",
        "Ты лидер или исполнитель?",
        "Високосный год? Как ты провел(-а) дополнительный февральский день?",
        "В каком ресторане ты был(-а) в последний раз?",
        "Сегодня было весело потому что...",
        "Какой интересный случай произошел с тобой сегодня?",
        "Что ты подарил/тебе подарили на 8 марта?",
        "Кому ты последний раз подарил(-а) что-то без повода?",
        "Чего бы ты хотел(-а) избежать в отношениях?",
        "Сегодня был трудный день, потому что...",
        "Сможешь ли ты простить измену?",
        "Без какого изобретения человечества ты не сможешь жить?",
        "О чем ты сегодня мечтал(-а)?",
        "Когда последний раз ты был(-а) в кинотеатре?",
        "Какой марки одежду ты в основном покупаешь?",
        "С кем бы ты хотел(-а) поменяться местами всего на один день?",
        "Когда ты последний раз ел(-а) фастфуд?",
        "Самый смешной розыгрыш за сегодня?",
        "Самый привлекательный актер?",
        "Плохая идея",
        "Ты мог(-ла) бы сделать пластическую операцию?",
        "Тебе нужен перерыв в чем-то? Зачем?",
        "С какой знаменитостью ты бы хотел(-а) поужинать?",
        "Ты оригинальный человек? Почему?",
        "Какое место на Земле можно назвать райским?",
        "У какой знаменитости ты бы хотел(-а) взять интервью?",
        "Больше всего ты благодарен(-на) за...",
        "Какой момент из сегодняшнего дня тебе хотелось бы переиграть?",
        "Тебе хочется кому-то отомстить?",
        "К кому ты чувствовал(-а) сегодня признательность?",
        "Кто должен сыграть тебя в фильме про твою жизнь? Какого жанра этот фильм?",
        "Что хочется запомнить из сегодняшнего дня?",
        "Твоя талия/ твой бицепс... см",
        "Где и когда последний раз ты плавал(-а)?",
        "На какую вечеринку ты последний раз ходил(-а)?",
        "Когда ты последний раз был(-а) на свидании?",
        "За что тебя ценит босс?",
        "Какие проблемы волновали тебя сегодня?",
        "Когда ты последний раз плакал(-а)?",
        "Сегодняшний день был заурядным? Почему?",
        "Ты доверяешь своим инстинктам?",
        "Какого размера ты покупаешь одежду?",
        "Когда последний раз ты встречался(-ась) с друзьями?",
        "Как ты считаешь, на какого литературного героя ты похож(-а)?",
        "С кем из знакомых ты хотел(-а) бы стать друзьями?",
        "Кого ты считаешь милым?",
        "Что всегда поднимает тебе настроение?",
        "Сегодня был восхитительный день, потому что...",
        "Что было в последнем личном письме, которое ты получил(-а)?",
        "Чем ты сегодня занимался(-ась)?",
        "Твоя недавняя шутка, которая всех рассмешила...",
        "Твой враг №1?",
        "Как бы ты подвел(-а) итоги этого дня в одном предложении?",
        "У тебя появились новые друзья? Кто это?",
        "Если ты оглянешься прямо сейчас, что ты увидешь?",
        "Кукую роль ты бы хотел исполнить в кино или театре?",
        "Что может поднять тебе настроение прямо сейчас?",
        "Чтобы ты сделаешь, чтобы произвести впечатление на нового знакомого?",
        "Кому ты завидуешь?",
        "Что тебя сегодня расстроило?",
        "У тебя дома порядок?",
        "Какое блюдо последний раз кто-то приготовил для тебя?",
        "Что бы ты хотел(-а) получить в подарок от любимого человека?",
        "Какие 5 вещей ты бы взял с собой на необитаемый остров?",
        "Лучшая новость сегодняшнего дня?",
        "Как бы ты мог(-ла) в трех словах описать свой стиль и образ?",
        "От кого бы ты хотел(-а) сейчас получить сообщение?",
        "Сколько денег ты готов(-а) потратить на рюкзак/сумочку?",
        "Кто тебя сегодня разозлил?",
        "Когда последний раз ты ел(-а) пиццу? С чем она была?",
        "Когда тебе чаще всего приходят в голову хорошие идеи?",
        "Сколько денег ты потратил(-а) на свой последний отпуск?",
        "Что может вывести тебя из себя?",
        "Какие мысли тебя преследуют в данный момент?",
        "От кого последний пропущенный звонок?",
        "Как бы твой друг описал тебя в трех словах?",
        "Сегодня был забавный день, потому что...",
        "Кем бы ты хотел(-а) быть в следующей жизни?",
        "Какая песня характеризует тебя?",
        "В чем секрет успешных любовных отношений?",
        "Шутка дня...",
        "Сколько ты весишь?",
        "Кого ты ревнуешь?",
        "Какой необычный сон ты видел(-а) в последнее время?",
        "Чего ты жаждешь?",
        "Лучший сценарий для романтического вечера?",
        "Какое обещание ты дал(-а) и не выполнил(-а)?",
        "Твоя последняя ложь...",
        "В каком глупом споре ты сегодня участвовал(-а)?",
        "В каком наряде ты был(-а) на Хеллоуине?",
        "Цитата дня...",
        "Ты хорошо владеешь компьютером?",
        "Твое любимое ТВ шоу?",
        "Женщины/мужчины какого возраста самые горячие?",
        "Кого недавно ты удалил(-а) из списка контактов?",
        "Что никогда не сделает настоящий мужчина? А настоящая женщина?",
        "Когда последний раз ты ходил(-а) на танцы?",
        "Человек, с которым ты бы хотел(-а) проводить больше времени?",
        "Какой щедрый поступок ты совершил(-а) недавно?",
        "Ты красивый(-ая) или умный(-ая)?",
        "О чем ты больше всего сожалеешь?",
        "Когда ты последний раз плакал(-а)? Почему?",
        "Сколько часов в день в среднем ты трачешь на сериалы и телешоу?",
        "Что в современной моде тебя раздражает?",
        "Ты проспал(-а). Свидание через 10 минут. Твои действия...",
        "Тебе не нравится, когда девушка/парень...",
        "Эпиграф к твоей автобиографии был бы такой...",
        "Самое ужасное свидание",
        "Твоя любимая радиостанция...",
        "Момент, который ты бы хотел(-а) продлить?",
        "Чем ты любишь перекусить?",
        "Последнее время ты уходишь с работы вовремя?",
        "Что удивило тебя сегодня?",
        "Чего тебе недостает в жизни?",
        "Что бы ты сказал(-а) себе тринадцатилетнему(-ей)?",
        "Что ты хотел(-а) попробовать из того, что не разрешаешь себе?",
        "С кем ты планируешь встечать НГ?",
        "Твое самое заветное воспоминание этого года...",
        "Как сегодня начался твой день?",
        "Чему бы ты хотел(-а) научиться?",
        "Твоя слабость...",
        "Без чего ты не сможешь жить?",
        "Любимое приложение?",
        "Твоя первая работа?",
        "Играешь на музыкальном инструменте?",
        "Что всегда берешь в дорогу?",
        "Опиши себя в трех словах",
        "У тебя есть хобби?",
        "Что большинство людей о тебе не знает?",
        "Лучший совет, что тебе давали?",
        "Какой совет дашь себе подростку?",
        "Кому было отправлено последнее сообщение?",
        "Что тебя бесит?",
        "Любимый сайт?",
        "Самое поучительное событие?",
        "Что тебя сейчас радует в жизни?",
        "Чем ты сейчас занимаешься?",
        "Что интересного у тебя сейчас в жизни?",
        "Что тебе жутко надоело?",
        "Что недавно тебя растрогало?",
        "Расскажи о своем клевом или необычном таланте",
        "Что ты не умеешь?",
        "От какой привычки хочешь избавиться?",
        "Что такое творчество?",
        "Какими приключениями ты похвастаешься?",
        "Что ты всегда хотел(-а) попробовать, но слишком боялся(-ась)?",
        "Что ты точно не будешь делать в следующем году?",
        "Чего ты обязательно хочешь добиться в жизни?",
        "Чем тебя порадовал этот месяц?",
        "С чем ты без сожаления попрощался(-ась)?",
        "С чего начинается твой день?",
        "За что ты хочешь, чтобы тебя запомнили?",
        "Что тебя больше всего бесит?",
        "Назови место, где тебе всегда спокойно?",
        "Что тебя больше всего вдохновляет?",
        "Ты мечтаеешь что-нибудь сделать?",
        "Как ты расслабляешься?",
        "Ты считаешь себя феминистом(-кой)?",
        "Что такое феминизм?",
        "Где ты хочешь быть через 9 лет?",
        "Какую историческую личность ты бы хотел(-а) сыграть в кино?",
        "Где знакомиться с искусством?",
        "Ты собрался с друзьями, что вы делаете?",
        "Три вещи, без которых ты не сможете жить?",
        "Во сколько ты проснулся сегодня утром?",
        "Центр или окраина города?",
        "В каком мюзикле ты бы хотел сыграть?",
        "Любимая пьесса?",
        "Любимый комик?",
        "Больше всего на свете ты боишься?",
        "На что ты в первую очередь обращаешь внимание при знакомстве?",
        "Что самое лучшее в твоей работе?",
        "Как ты относишься к гороскопам?",
        "Сколько электронных писем ты отправляешь каждый день?",
        "Тайное увлечение?",
        "Какой у тебя телефон?",
        "Самое великое изобретение всех времен?",
        "Бумажные или электронные письма?",
        "Письмо или открытка?",
        "Чему ты никогда не сможешь научиться?",
        "Самое большое сожаление?",
        "Твой самый любимый фильм?",
        "Кто твой любимый актер или актриса?",
        "Лучший поворот сюжета в любом фильме?",
        "Театр или кино?",
        "Лучший спортивный фильм?",
        "Лучший фильм всех времен?",
        "Лучший фильм последних 5 лет?",
        "Самый смешной фильм?",
        "Любимая телепередача?",
        "Хотел(-а) бы ты снять фильм?",
        "Фильм, который заставил тебя рыдать?",
        "Лучший фильм этого месяца?",
        "Любимый фильм детства?",
        "Самый любимый мюзикл?",
        "Твой самый любимый телесериал?",
        "Какой сериал ты сейчас смотришь?",
        "Если бы ты снимал(-а) документальное кино, то о чем?",
        "Любимая песня...",
        "Любимая песня в караоке",
        "Какую песню ты знаешь наизусть?",
        "Под каким псевданимом ты бы читал(-а) рэп?",
        "Если твоя жизнь",
        "Последняя песня, которую слушал(-а) на телефоне?",
        "Самая любимая группа?",
        "Любимый музыкант прошлого?",
        "Любимый современный музыкант?",
        "Твой любимый исполнитель исполнит кавер на современную песню, на какую?",
        "Любимая цитата из песни?",
        "Ты в караоке, что споешь?",
        "Лучший концерт, где ты был?",
        "Любимое музыкальное течение всех времен?",
        "Любимое блюдо?",
        "Нелюбимое блюдо?",
        "Твой любимый напиток?",
        "Любимый десерт?",
        "Представь, что можешь поужинать с любым человеком в истории? С кем?",
        "Что любишь из фастфуда?",
        "Лучший торт на день рождения?",
        "Последнее, что ты пек(-ла)?",
        "Одна вещь, которая всегда есть в твоем холодильнике?",
        "Что ты предпочитаешь на завтрак?",
        "Вода с газом или без?",
        "Кофе или чай?",
        "Твой любимый коктейль?",
        "Где бы ты хотел(-а) поужинать на следующей неделе?",
        "Блюдо какой кухни ты любишь готовить?",
        "С кем ты бы хотел(-а) выпить кофе?",
        "С кем бы ты хотел(-а) выпить по коктейлю?",
        "Твое фирменное блюдо?",
        "Любимая страна?",
        "В какой стране ты был(-а) в последний раз?",
        "Какую страну ты мечатешь посестить?",
        "Что ты больше всего любишь в своем родном городе?",
        "Лучшее место для отдыха?",
        "Главное позитивное изменение в России",
        "Что в стране необходимо срочно менять?",
        "Что тебе больше всего нравится в твоем городе?",
        "Что больше всего не нравится в твоем городе?",
        "Давно живешь в своем городе?",
        "Твое любимое место в городе",
        "Опишите свой город тремя прилагательными",
        "Опишите свою страну тремя прилагательными",
        "Самая русская вещь на свете?",
        "Твоя любимая книга?",
        "Что ты читаешь в данный момент?",
        "Последняя прочитанная книга?",
        "Какую книгу ты бы хотел(-а) прочитать?",
        "Какая книга сильно на тебя повлияла?",
        "Как бы ты назвал(-а) свою автобиографию?",
        "Ты играешь на музыкальном инструменте?",
        "Твое самое большое достижение в работе",
        "Чему учит твоя профессия?",
        "Твоя любимая сказка?",
        "Умеешь танцевать? Докажи",
        "Носить бороду или бриться?",
        "Что посоветуешь тому, кто хочет научиться твоей профессии?",
        "Любимая вещь дома?",
        "Самая старая вещь в доме?",
        "Чему ты научился(-ась) у своего отца?",
        "Чему ты научился(-ась) у своей матери?",
        "Чему ты научился(-а) у своих детей (если они есть)?",
        "Какие у тебя планы на сегодня?",
        "Если бы ты мог(-ла) провести день с кем угодно, то с кем?",
        "Сообщения или звонок?",
        "Кому последнему ты звонил(-а)?",
        "У тебя есть шрамы?",
        "За какой страницей в соц.сетях ты больше всего любишь следить?",
        "Самая важная политическая тема?",
        "Твой любимый цвет волос?",
        "Самый остроумный человек?",
        "Любимый спорт?",
        "Есть татуировки?",
        "Твой любимый праздник?",
        "Кличка первого питомца?",
        "Любимая одежда",
        "Самая дорогая спонтанная покупка?",
        "В какой эпохе ты хотел(-а) бы жить?",
        "Без чего не обойтись на необитаемом острове?",
        "Любимое слэнговое слово",
        "Твое тотемное животное?",
        "Твой любимый танец?",
        "Твой главный сюрприз в жизни?",
        "Твой любимый супергерой?",
        "У тебя есть прозвища?",
        "Лучший подарок, что ты получал(-а)?",
        "Лучший подарок, что ты дарил(-а)?",
        "Расскажите о том, когда ты больше всего нервничал(-а)?",
        "Представь, что ты чемпион мира по спорту, по какому?",
        "Будь ты музыкальным виртуозом, на чем бы ты играл(-а)?",
        "Где провести первое свидание?",
        "Твой лучший подарок для девушки/парня?",
        "Лучший подарок от девушки/парня тебе?",
        "Котята или щенки?",
        "Как часто носишь костюм?",
        "Носишь одежду, что дарят родственники?",
        "Что возьмешь в один конец на Марс?",
        "Любимая настольная игра?",
        "Любимая тема в викторине?",
        "С кем бы ты хотел(-а) поменяться местами на один день?",
        "Кто твой любимый учитель?",
        "Какой предмет ты бы хотел(-а) преподавать в школе?",
        "Какую суперспособность хочешь?",
        "Лучший комплимент, что тебе делали?",
        "Что тебя в людях удивляет?",
        "Что тебя всегда смешит?",
        "Ты веришь в Бога?",
        "Что у тебя сохранилось из детства?",
        "Чем ты больше всего гордишься?",
        "Кем ты хотел(-а) стать, когда тебе было 5?",
        "Чего ты к сожалению не знал(-а) в 19 лет?",
        "Чего ты точно не будешь делать через 10 лет?",
        "Какой на твой взгляд самый важный жизненный урок?",
        "Что ты можешь сказать на другом языке?",
        "Твой самый храбрый поступок?",
        "Твой самый спонтанный поступок?",
        "Какая у тебя цель на этот год?",
        "Где ты живешь?",
        "Из чего состоит идеальный день?",
        "Кем ты хочешь быть?",
        "Где ты работаешь?",
        "Твой главный недостаток?",
        "Кто сейчас президент?",
        "Твой девиз по жизни?",
        "Чем ты обычно занимаешься в выходные?",
        "По кому ты скучаешь?",
        "Что бы ты хотел обновить из вещей?",
        "Твоя любимая песня?",
        "На кого ты хочешь быть похожим?",
        "Какое самое большое препятствие сейчас перед тобой?",
        "3 правила успеха...",
        "Твой доход сейчас...",
        "Твой любмый аксессуар",
        "Чем ты дорожишь больше всего?",
        "Карьера или семья?",
        "Что бы ты хотел(-а) узнать о своем будущем?",
        "Каким видом спорта ты занимаешься?",
        "Что ты хочешь получить на день рождения?",
        "Какое качество самое важное в мужчине?",
        "А в женщине?",
        "Лучшее время твоей жизни...",
        "Почему ты все еще живешь в России?",
        "В чем ты больше всего нуждаешься сегодня?",
        "Насколько здоровым(-ой) тя себя ощущаешь от 1 до 10?",
        "Самая стильная вещь в твоем гардеробе",
        "Тебе сейчас хочется покоя или приключений?",
        "Какая погода сейчас снаружи?",
        "Что ты сейчас читаешь?",
        "Твое последнее ночное приключение...",
        "Сколько денег наличными в твоем кошельке? А на банковском счете?",
        "Каких тем ты стараешься избегать?",
        "Какая песня застряла у тебя в голове?",
        "Какое представление или концерт ты посетил(-а) за последнее время?",
        "Каким талантом ты бы хотел(-а) обладать?",
        "Если бы пришлось выбирать из того, что делает тебя счастливым(-ой), какую одну вещь ты бы выбрал(-а)?",
        "Самая дорогая вещь на тебе сейчас",
        "Насколько привлекательным(-ой) ты себя ощущаешь?",
        "Интересный факт, который ты недавно узнал(-а)?",
        "Есть ли у тебя любимое занятие, которому ты бы хотел(-а) посвятить жизнь?",
        "Как бы ты мог(-ла) в трех словах описать свою личную жизнь?",
        "На что тебе не хватает денег?",
        "Что ты любишь делать в воскресенье утром?",
        "Твой главный принцип жизни...",
        "Сколько времени ты тратишь на телефонные разговоры и личную переписку?",
        "Что можно купить за 100 рублей?",
        "Где ты хочешь жить?",
        "Твой лучший друг",
        "Если бы в твой день можно было добавить один час, на что бы ты его потратил(-а)?",
        "У тебя много свободного времени?",
        "На чьей свадьбе ты присутствовал(-а) в последний раз?",
        "Что ты ел(-а) сегодня утром?",
        "Сколько детей ты хочешь иметь и в каком возрасте?",
        "Над чем ты работаешь в данный момент?",
        "Три слова, которые описывают твое состояние сейчас...",
        "Какие детские мечты ты не воплотил(-а) в жизнь?",
        "Какое слово-паразит ты сейчас используешь?",
        "О какой работе ты мечтаешь?",
        "Кто тебя вдохновляет?",
        "Что ты хочешь купить?",
        "Какое кино ты недавно посмотрел(-а)?",
        "Как ты можешь описать свое поведение на работе?",
        "Когда последний раз ты болел(-а)?",
        "Ты оптимист или пессимист?",
        "Что нового ты попробовал(-а) сегодня? Если не сегодня, то за последнее время",
        "Твой идеал/авторитет",
        "Какой цвет в одежде ты предпочитаешь?",
        "Что бы ты хотел(-а) забыть?",
        "Какие дела ты хочешь отложить на потом?",
        "Кого тебе больше всего не хватает сейчас?",
        "Кто среди знакомых самый яркий человек в твоей жизни?",
        "Если бы завтра ты мог(-ла) отправиться в путешествие куда угодно, какое место ты бы выбрал(-а)?",
        "На что тебе не хватает времени?",
        "Новое блюдо, которое ты научился(-ась) готовить",
        "Какой поступок тебя поразил?",
        "Ты на верном пути?",
        "5 человек, с которым ты больше всего общаешься...",
        "Какого домашнего питомца ты хочешь завести?",
        "Когда и с кем за последнее время у тебя был самый интересный разговор?",
        "Без какой вещи ты не можешь выйти из дома?",
        "Ты цинник или мечтатель?",
        "Когда и при каких обстоятельствах последний раз ты выступал(-а) перед аудиторией?",
        "На что ты тратишь слишком много времени?",
        "Доволен(-на) ли ты своей жизнью? От 1 до 10?",
        "Если бы тебе осталось жить один день, с кем и как ты бы его провел(-а)?",
        "Куда бы ты отправился(-ась) на машине времени?",
        "Как бы ты хотел(-а) встретить старость?",
        "Если бы сегодня у тебя не было никаких дел, чем бы ты занялся(-ась)?",
        "Где бы ты хотел(-а) жить? И с кем?",
        "Какой он, отпуск твоей мечты?",
        "Ты долго принимаешь решения?",
        "Какой журнал или газету ты регулярно читаешь?",
        "Какой музыкальный исполнитель сейчас самый популярный?",
        "У тебя есть тайная страсть? Какая?",
        "Как ты любишь проводить вечера пятницы?",
        "Во сколько обычно ты встаешь по будням?",
        "Идеальный выходные",
        "Как ты обычно начинаешь свой день?",
        "Что делает тебя несчастным(-ой)?",
        "Кто твой лучший друг?",
        "Твоя самая большая проблема сейчас",
        "Что ты хотел(-а) сделать, но не сделал, и сейчас жалеешь?",
        "Какая зарплата тебя бы устроила?",
        "Если бы ты мог(-ла) иметь суперсилу, что бы это было?",
        "Когда последний раз ты летал(-а) на самолете?",
        "Что ты бы хотел(-а) знать лучше?",
        "Что тебе больше всего нравится в своем теле?",
        "За что тебя ценят твои друзья?",
        "Какой сериал ты недавно посмотрел(-а)?",
        "Тебя легко вывести из себя?",
        "Какое необычное блюдо ты пробовал(-а)?",
        "Какую сферу жизни ты хочешь изменить?",
        "Сколько денег в месяц ты тратишь на развлечения?",
        "Твоя любимая одежда...",
        "Какие три сайта ты посещаешь чаще всего?",
        "Кто ты?",
        "Чтотебе нравится в твоей работе?",
        "Какое самое умное слово тебе сейчас пришло в голову?",
        "Твоя первая мысль с утра...",
        "Ты бы предпочел(-ла) жить в центре города или за городом?",
        "Что способно тебя растрогать?",
        "Какой твой любимый гаджет?",
        "За какую команду ты болеешь?",
        "Ты умный? По шкале от 1 до 10?",
        "Чего ты больше всего боишься?",
        "Ты чувствуешь себя одиноким(-ой)?",
        "Где ты видишь себя через год?",
        "Что тебя раздражает в людях?",
        "Первое слово, пришедшее на ум?",
        "Сколько времени ты проводишь в социальных сетях?",
        "Что тебя необходимо выбросить?",
        "Что нужно делать, чтобы достичь желаемого?",
        "Твое слабое место",
        "Твои планы на завтра...",
        "Твой секрет привлекательности",
        "Чем ты сейчас одержим(-а)?",
        "Если когда-нибудь о тебе напишут книгу, какое название у нее будет?",
        "Сколько времени ты добираешься до работы?",
        "У тебя есть талисман?",
        "План или импровизация?",
        "Самое классное, что призошло этим летом...",
        "Love is...",
        "Что у тебя на ужин?",
        "Ты устал(-а) от своей работы?",
        "Какой надавно просмотренный фильм ты бы не стал(-а) рекомендвать друзьям?",
        "Какие шокирующие новости ты недвано узнал?",
        "Сколько лет, ты бы хотел(-а), чтобы тебе было? Почему?",
        "Как бы ты мог(-ла) в трех словах описать свою работу?",
        "В скольких странах ты был(-а)?",
        "Что ты считаешь своим самым большим достижением?",
        "На что ты тратишь слишком много денег?",
        "Первое, на что ты обращаешь внимание, глядя на парня/девушку?",
        "Твой рецепт хорошего настроения...",
        "Если бы ты мог(-ла) повернуть время вспять, что бы ты изменил(-а)?",
        "Ты нашел(-ла) доказательство существования высшей силы?",
        "Когда ты последний раз употреблял(-а) алкогольный напиток?",
        "Что приносит тебе самое большое наслаждение?",
        "Ты умеешь говорить 'нет'?",
        "В какой профессии ты бы хотел(-а) себя попробовать?",
        "Что должно остаться как есть?",
        "С чем/кем связаны самые приятные воспоминания?",
        "Плохие новости: лучше приукрасить или выложить как есть?",
        "Ты часто врешь?",
        "Во сколько ты лег(-ла) спать прошлой ночью?",
        "Каким(-ой) ты видишь себя через год?",
        "Кто самый важный человек в твоей жизни?",
        "Что ты считаешь непреодолимым?",
        "Когда последний раз ты выезжал(-а) за город?",
        "Можешь ли ты первым(-ой) заговорить/познакомиться с классной девушкой/парнем?",
        "Какой едой ты злоупотребляешь?",
        "Последний спонтанный поступок? Какие последствия?",
        "У тебя есть любимый человек?",
        "Твоя первая мысль сегодня утром?",
        "Какая полезная привычка тебе бы не помешала?",
        "Твой главный талант",
        "Можешь ли ты сказать, что у тебя все есть?",
        "Что в своей внешности ты хотел(-а) бы изменить?",
        "Если бы ты собрался создать собственную компанию, чем бы она занималась?",
        "Ты успешнее, чем твои сверстники?",
        "Какой твой уровень владения иностранным языком?",
        "Какое блюдо ты в последний раз приготовил(-а)?",
        "О чем тебе нравится разговаривать?",
        "Какого рода замечания ты получаешь чаще всего?",
        "Что тебя заставляет двигаться дальше, несмотря на неудачи?",
        "В чем тебе хотелось быть лучше других?",
        "Что бы ты посоветовал(-а) попробовать каждому?",
        "Какую книгу ты планируешь прочесть в скором времени?",
        "Какой вопрос заставляет тебя нервничать?",
        "Какая твоя самая большая мечта?",
        "В чем смысл жизни?",
        "Самый ценный совет, который ты получил(-а)?",
        "О чем ты хочешь спросить свою маму?",
        "Какой самый продвинутый гаджет у тебя есть?",
        "На что тебе не хватает смелости?",
        "На какой риск ты надевно пошел(-ла)?",
        "На что ты тратишь слишком много денег?",
        "Если бы тебе дали 2 путевки в один конец в далекую страну, кого бы ты взял(-а) с собой?",
        "Что тебе мешает исполнить свою мечту?",
        "Лучшее начало дня",
        "Что ты делаешь лучше других?",
        "Выходной. Интерет отключен на весь день. Что ты будешь делать?",
        "Какие темы для раговора ты считаешь скучными?",
        "Какие три слова характеризуют твою работу?",
        "Какого человека ты бы выбрал(-а), если бы настал апокалипсис?",
        "От какой привычки тебе необходимо избавиться?",
        "Какое замечание ты чаще всего слышишь от мамы или ближайших родственников?",
        "Главный сюрприз года?",
        "Как бы ты описал(-а) этот год в трех словах?",
        "Главное разочарование года",
        "Что ты обязательно сделаешь в следующем году?",
        "Качество, которое ты ставишь выше всего?",
        "Важнейшее качество мужчины...",
        "Важнейшее качество женщины...",
        "Твои главные качества",
        "Чем ты более всего дорожишь в друзьях?",
        "Твой главный недостаток",
        "Твоее любимое занятие",
        "Твое представление о несчастье?",
        "Если не собой, кем бы ты хотел быть?",
        "Где бы ты хотел(-а) жить?",
        "Твой любимый цвет и цветок",
        "Твоя любимая птица?",
        "Твои любимые прозаики?",
        "Твои любимые поэты?",
        "Твои любимые литературные герои",
        "Твои любимые литературные героини",
        "Твои любимые художники и композиторы",
        "Твои герои в реальной жизни",
        "Твои героини в реальной жизни",
        "Кого ты более всего не любишь из исторических личностей?",
        "Твоя героиня мировой истории",
        "Твои любимые еда и питье",
        "Твои любимые имена",
        "Что ты более всего ненавидешь?",
        "Военное событие, которое тебя более всего восхищает",
        "Реформа, которая тебя более всего восхищает",
        "Талант, которым ты хотел(-а) бы обладать",
        "Как бы ты хотел умереть?",
        "Каково твое нынешнее состояние?",
        "К какому недостатку ты относишься терпимее всего?",
        "Твой любимый девиз",
        "Твое самое нелюбимое слово?",
        "Твое самое любимое слово?",
        "О чем ты более всего сожалеешь?",
        "Если б ты мог(-ла) пообщаться с любым человеком, который когда-либо жил на свете",
        "Если бы дьявол предложил тебе бессмертие, вечную молодость без всяких условий, приняли бы?",
        "Ты оказался перед Господом Богом. Что ты ему скажешь?",
        "Что ты считаешь своим главным достижением?",
        "Когда и где ты был более всего счастлив?",
        "Какой у тебя телефон?",
        "Какая у тебя машина?",
        "Кем ты работаешь?",
        "У тебя есть домашний питомец?",
        "О чем ты мечтаешь?",
        "Чему ты научился(-ась) в этом году?",
        "Твое хобби?",
        "Что делает тебя счастливым?",
        "Что делает тебя несчастным?",
        "Чем ты гордишься?",
        "Что бы ты посоветовал(-а) себе молодому(-ой)?",
        "Что можно купить на 100 рублей?",
        "Чего хочешь достичь за год?",
        "Чем запомнился в этот год?",
        "Твое отношение к политической обстановке в стране",
        "Твоя любимая компьютерная игра?",
        "К кому ты можешь обратиться за советом?",
        "Что тебя сейчас пугает?",
        "Опиши себя в этом году",
        "Что изменилось для тебя за этот год?",
        "Что ты хочешь сказать самому себе через год?",
        "Что ты посоветуешь себе из прошлого года?",
        "Что для тебя сейчас важнее всего?",
        "Что хочешь сделать впервые?",
        "Кто твой лучший друг/подруга?",
        "Как часто ты общаешься с семьей?",
        "Что лежит у тебя на столе?",
        "Слово-паразит, от котороое ты часто используешь в речи",
        "Что по настоящему увлекает тебя?",
        "Представь, что для тебя возможно все. Что бы ты сделал?",
        "У тебя есть 100 млн долларов. Что бы ты делал каждый день?",
        "Чем я собираюсь оставить память о себе после смерти?",
        "Чему ты всегда хотел научиться?",
        "Твой распорядок дня?",
        "Назови самое длинное слово, которое придет в голову",
        "Назови самое умное слово, которое ты знаешь. Что оно означает?",
        "Назови три вещи, которые реально имеют значение",
        "Как вы представляете/представляли свою старость?",
        "Чего ты хотел достичь к 30 годам, когда был-(а) маленьким/ой?",
        "В чем ты плохо разбираешься?",
        "Чего ты не умеешь, и жалеешь об этом?",
        "На каких профессиях ты работал-(а)?",
        "Политическая партия и политик, которому ты доверяешь?",
        "Деревня или город?",
        "Твой любимый мессенджер",
        "Дай совет кому-то из родни. Что ему продолжать делать, что перестать делать, что начать делать?",
        "Что самое ужасное в молодости?",
        "Что самое ужасное в старости?",
        "Вы когда-нибудь влюблялись? Какого это было?",
        "Какой полезный совет вы можете дать?",
        "Твой самый любимый школьный предмет?",
        "Что тебя сейчас больше всего беспокоит?",
        "Есть ли проблемы со здоровьем?",
        "Как познакомились твои родители?",
        "У тебя есть дети? Расскажи о них",
        "Расскажи о своих родителях",
        "Нравится ли вам тот человек, которым вы стали?",
        "Что люди скажут о вас на ваших похоронах?",
        "О чем вы будете сожалеть, что не сделали в своей жизни?",
        "Какова самая мудрая мысль, которую вы когда-либо слышали?",
        "Чему вас научил ваш личный горький опыт?",
        "Как часто реализуются ваши самые сильные тревоги и страхи?",
        "Если бы вам осталось жить год, чего бы вы попытались достичь?",
        "Вы служите деньгам, или деньги — на службе у вас?",
        "Боитесь ли вы быть самим собой в кругу других людей? Почему?",
        "Сделали ли вы недавно что-то, чем гордитесь?",
        "Сделали ли вы недавно что-то доброе?",
        "Если бы вы знали, что завтра умрете, какие бы вопросы задали себе?",
        "Если бы сбылись ваши худшие страхи, имело бы это значение пять лет спустя?",
        "Как бы вы описали себя?",
        "Пользуетесь ли вы чужими советами?",
        "Вы быстро обижаетесь?",
        "Считаете ли вы себя приятным человеком?",
        "«То, что мы получаем, обеспечивает нам существование. То, что мы отдаем, творит нашу жизнь» – Что эти слова Уинстона Черчилля значат для вас?",
        "Обогащаете ли вы чем-то жизнь других?",
        "Живете ли вы осмысленной жизнью?",
        "Что такое осмысленная жизнь?",
        "Отдали бы вы свою жизнь, чтобы спасти жизнь другого человека?",
        "Многим ли вы готовы пожертвовать ради людей, оказавшихся в нищете?",
        "Если бы вы могли проживать один и тот же день снова и снова, что бы вы предпочли сделать в этот день?",
        "Считаете ли вы себя человеком важным и достойным привязанности и любви?",
        "Что поможет вам чувствовать себя более достойным человеком? Что в вас должно стать иначе?",
        "Что вас чаще всего расстраивает?",
        "Согласились бы вы работать меньше (и заниматься любимыми делами) и меньше зарабатывать?",
        "Что приносит вам мир?",
        "Каково главное качество, которое вы ищете в других?",
        "Какова ваша главная мечта?",
        "Каков ваш главный страх?",
        "Как изменился бы мир, если бы вы не родились?",
        "Какие жизненные уроки вы хотели бы знать десять лет назад?",
        "Если бы вы могли сказать самому себе в молодости что-то одно, что бы это могло быть?",
        "Если бы ваша жизнь была фильмом, как бы он назывался?",
        "Если бы ваша жизнь была фильмом, понравилось бы вам его смотреть?",
        "Что для вас значит успех?",
        "Если бы вы могли стать другим человеком, то каким бы стали?",
        "Каким был лучший день вашей жизни? Почему вы так считаете?",
        "Чего вы больше всего ждете в жизни?",
        "От каких дурных привычек вы хотели бы отказаться?",
        "Кто для вас авторитет и почему?",
        "Знаете ли вы язык любви своего партнера?",
        "Знают ли люди, которых вы любите больше всего, как вы их любите?",
        "Удовлетворены ли вы глубиной своих отношений с людьми?",
        "Что вы должны себе?",
        "Учитывая вашу нынешнюю повседневную жизнь, чего вы рассчитываете добиться через пять лет?",
        "Часто ли вы говорите «да», хотя на самом деле хотите сказать «нет»? Почему?",
        "Что вы узнали вчера?",
        "Что вам нравится в себе?",
        "Назвали бы вы себя щедрым человеком?",
        "Когда люди с вами говорят, вы действительно слушаете?",
        "Что самое главное, что вам нужно изменить в своей жизни в этом году?",
        "Сколько часов в неделю вы проводите в интернете?",
        "Каковы ваши самые распространенные негативные мысли? Есть ли в них логика?",
        "Считаете ли вы, что за некоторые вещи вам уже поздно браться? Почему?",
        "Если бы вы могли стать самым влиятельным человеком в мире, что бы вы изменили?",
        "Сколько времени вы проводите с семьей и друзьями?",
        "Где вы хотите оказаться через пять лет?",
        "Осложняют ли вашу жизнь вещи, в которых нет необходимости?",
        "Как вы могли бы упростить свою жизнь и сосредоточиться на самом важном?",
        "Что вызывает у вас стресс?",
        "Что делает вашу жизнь проще?",
        "Как часто вы делитесь чем-то, не ожидая получить что-то в ответ?",
        "Каков главный вызов в вашей жизни?",
        "Что самое главное для вас в жизни? Уделяете ли вы этому достаточно времени?",
        "Если бы вы могли отправить всему миру послание, что бы вы сказали за 30 секунд?",
        "О чем вы никому не рассказываете и очень сожалеете об этом?",
        "Когда вы в последний раз попробовали что-то новое?",
        "Боитесь ли вы выражать собственное мнение?",
        "Не слишком ли часто вы поддаетесь на уговоры других, а потом чувствуете обиду и сожаление?",
        "Держитесь ли вы за что-то, что нужно оставить позади?",
        "Как часто вы позволяете своим страхам удержать вас от действий?",
        "Помогают ли люди в вашей жизни вам проявить себя с лучшей стороны?",
        "Как часто вы отделываетесь от других оправданиями?",
        "Какую ошибку вы больше никогда не повторите?",
        "Что хуже — потерпеть неудачу или вовсе не пробовать?",
        "Что больше помогло вашему личному росту — вызовы и испытания или приятные и уютные мгновения жизни?",
        "Если бы вы могли сделать так, чтобы в вашей жизни больше не было вызовов и препятствий, согласились бы вы на это?",
        "Что стоит между вами и вашей самой главной целью? Дайте ответ одним словом.",
        "Как часто вы ложитесь спать с ощущением злобы или гнева?",
        "Плохо ли красть, чтобы накормить голодного ребенка?",
        "Если бы вы уделяли больше внимания грустным аспектам жизни, испытывали бы вы больше внутренних конфликтов?",
        "Если на ошибках учатся, почему так плохо терпеть поражение?",
        "Чему в жизни вы могли бы уделять больше внимания?",
        "Почему мы больше всего думаем о других людях, когда их нет рядом?",
        "Что это значит — выжать из вашей жизни максимум?",
        "В чем вы сдались, опустили руки?",
        "Сколько людей вы действительно любите и что вы делаете для них?",
        "Достаточно ли вы задаете вопросов, или вы счастливы и тем, что и так уже знаете?",
        "Что вы делали в последний раз, когда потеряли счет времени?",
        "Будете ли вы счастливы, если вам больше не придется работать?",
        "Если бы вы могли попросить об исполнении одного желания, каким бы оно было?",
        "Что вдохновляет вас в жизни?",
        "Без чего вы больше всего не можете жить?",
        "Что вам нравится делать снова и снова?",
        "Когда вы в последний раз смеялись до боли в животе?",
        "Что мешает вам жить той жизнью, какой вы хотите жить?"
    ];

    let text = function makeQuestion() {
        question.sort(()=>Math.random()-0.5); //перемешиваем массив
        let randomQuestion = question.pop(); //- последний элемент массива
        return randomQuestion; //возвращаем этот элемент из функции
    };

    document.getElementById('generate').onclick = 
    function onClick(){ document.getElementById('text').innerHTML = text(); 
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        if(clicks >= age) {
            // this.disabled = true;
            finalBtn.classList.remove('d-none');
            randomBtn.classList.add('d-none');
        }
    };
}

window.onload = init;
