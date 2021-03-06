export interface IMenuList {
    title: string,
    url?: string,
}

export interface ITabList {
    title: string,
}

export interface IOrganization {
    title: string,
    url: string,
}

export interface IDelegation {
    name: string,
    delegation: string,
}

export interface IBureaus {
    name: string,
    bureau: string,
}

export interface IApparatus {
    name: string,
    post: string,
}

export const apparatus: IApparatus[] = [
    {
        name: "Пуртова Людмила Васильевна",
        post: "Председатель",
    },
    {
        name: "Летова Надежда Ивановна",
        post: "Заместитель председателя",
    },
    {
        name: "Владимирова Елена Сергеевна",
        post: "Главный бухгалтер ",
    },
    {
        name: "Глазырин Александр Владимирович",
        post: "Главный технический инспектор труда, водитель",
    },
    {
        name: "Ванюшина Марина Анатольевна",
        post: "Главный правовой инспектор труда",
    },
    {
        name: "Короткова Марианна Петровна",
        post: "Главный специалист-юрист",
    },
    {
        name: "Антонова Алла Александровна",
        post: "Ведущий специалист",
    },
    {
        name: "Чугунова Ольга Андреевна",
        post: "Бухгалтер",
    },
]

export const bureaus: IBureaus[] = [
    {
        name: "ПУРТОВА Людмила Васильевна",
        bureau: "Председатель Марийской республиканской организации Профсоюза",
    },
    {
        name: "ЛЕТОВА Надежда Ивановна",
        bureau: "Заместитель председателя Марийской республиканской организации Профсоюза",
    },
    {
        name: "ГРИШИН Максим Юрьевич",
        bureau: "Председатель республиканского Совета молодых педагогов, зам. директора МОУ «Лицей № 11 им. Т.И. Александровой г. Йошкар-Олы",
    },
    {
        name: "ДОЛГОВА Ирина Александровна",
        bureau: "Председатель Медведевской территориальной (районной) организации Профсоюза",
    },
    {
        name: "ИОНОВА Ольга Геннадьевна",
        bureau: "Председатель Волжской территориальной организации Профсоюза",
    },
]

export const delegation: IDelegation[] = [
    {
        name: "ПУРТОВА Людмила Васильевна",
        delegation: "Путем прямых выборов, председатель Марийской республиканской организации Профсоюза",
    },
    {
        name: "ЛЕТОВА Надежда Ивановна",
        delegation: "По предложению председателя, заместитель председателя Марийской республиканской организации Профсоюза",
    },
    {
        name: "АЛГАЙКИН Максим Григорьевич",
        delegation: "Делегат от Моркинской территориальной организации Профсоюза ",
    },
    {
        name: "АЛЕКСЕЕВ Лев Александрович",
        delegation: "Делегат от первичной профсоюзной организации студентов Поволжского государственного технологического университета",
    },
    {
        name: "АНТОНОВА Алла Александровна",
        delegation: "Делегат от первичной профсоюзной организации аппарата республиканского комитета профсоюза",
    },
]

export const organizations: IOrganization[] =[
    {
        title: "Медведевская районная организация профессионального союза работников народного образования и науки Российской Федерации",
        url: "profobrmedvedevo12.ru",
    },
    {
        title: "Йошкар-Олинская городская организация Общероссийского Профсоюза образования",
        url: "iolagorkom.ucoz.ru",
    },
    {
        title: "Союз «Объединение организаций профсоюзов Республики Марий Эл»",
        url: "oop.ter12.ru",
    },
    {
        title: "Профсоюзная организация студентов ПГТУ",
        url: "vk.com/profcom.volgatech",
    },
    {
        title: "Профсоюзная организация МарГУ",
        url: "vk.com/profkom_marsu",
    },
]

export const tabList: ITabList[] = [
    {
        title: "О нас",
    },
    {
        title: "Документы",
    },
    {
        title: "Защита прав и интересов",
    },
    {
        title: "Внутрисоюзная работа",
    },
    {
        title: "Пресс-служба",
    },
    {
        title: "Мероприятия",
    },
]

export const firstMenuList: IMenuList[] = [
    {
        title: "История республиканской организации",
        url: "/history",
    },
    {
        title: "Республиканский Комитет",
        url: "/committee",
    },
    {
        title: "Президиум",
        url: "/bureau",
    },
    {
        title: "Контрольно-ревизионная комиссия",
    },
    {
        title: "Аппарат",
        url: "/apparatus",
    },
    {
        title: "Территориальные организации",
        url: "/organization",
    },
    {
        title: "Профсоюз в вузах",
    },
    {
        title: "Центр Таир",
    },
    {
        title: "Контакты",
    },
    {
        title: "Гимн профсоюзной организации",
    },
]

export const secondMenuList: IMenuList[] = [
    {
        title: "Уставные документы",
        url: "/statutory_documents",
    },
    {
        title: "Регламенты",
    },
    {
        title: "Постановления Комитета",
    },
    {
        title: "Постановления президиума",
    },
    {
        title: "Публичные отчеты",
    },
    {
        title: "Методические материалы",
    },
]

export const thirdMenuList: IMenuList[] = [
    {
        title: "Соцподдержка",
    },
    {
        title: "Рабочее время и время отдыха",
    },
    {
        title: "Условия работы",
    },
    {
        title: "Охрана труда и здоровья",
    },
    {
        title: "Пенсионное обоспечение",
    },
    {
        title: "Социальное партнерство",
    },
    {
        title: "Льготное кредитование",
    },
    {
        title: "Скидки и бонусы",
    },
    {
        title: "Оздоровление и отдых",
    },
    {
        title: "Профсоюз помог",
    },
]

export const fourthMenuList: IMenuList[] = [
    {
        title: "Организационная работа",
    },
    {
        title: "Комисии рескома",
    },
    {
        title: "Советы",
    },
    {
        title: "Правовая инспекция",
    },
    {
        title: "Техническая инспекция",
    },
    {
        title: "Профсоюзное образование",
    },
    {
        title: "Отчеты и выборы",
    },
]

export const fifthMenuList: IMenuList[] = [
    {
        title: "Год 100-летия республиканской организации",
    },
    {
        title: "Год Спорта, здоровья и долголетия",
    },
    {
        title: "Газета 'ПУТь'",
    },
    {
        title: "СМИ о проблемах образования",
    },
]

export const sixthMenuList: IMenuList[] = [
    {
        title: "Планы работы",
        url: "/work_plans",
    },
    {
        title: "Конкурсы",
    },
    {
        title: "Проекты",
    },
    {
        title: "Акции",
    },
    {
        title: "Форум 'Таир'",
    },
    {
        title: "Спартакиада",
    },
    {
        title: "Турслет",
    },
    {
        title: "Галерея",
        url: "/gallery",
    },
]