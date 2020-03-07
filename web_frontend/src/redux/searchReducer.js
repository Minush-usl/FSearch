const SEARCH = 'SEARCH';


let initialState = {

    articles: [
        {
            title: "My Title",
            body: " Скажи, а чайки тоже плачут,\n" +
                "                Когда их море предает? -\n" +
                "                Спросила девочка у мальчика,\n" +
                "                Когда весной кололся лед.\n" +
                "                \n" +
                "                Деревья на ветру качались,\n" +
                "                И он ответил на вопрос:\n" +
                "                - Чайки разбиваются о скалы,\n" +
                "                Когда их море предает.\n" +
                "                \n" +
                "                Летели годы, словно ветер,\n" +
                "                Летели, оставляя след.\n" +
                "                И вот, они уже не дети,\n" +
                "                Им стало восемнадцать лет."


        },
        {
            title: "My Title",
            body: " Скажи, а чайки тоже плачут,\n" +
                "                Когда их море предает? -\n" +
                "                Спросила девочка у мальчика,\n" +
                "                Когда весной кололся лед.\n" +
                "                \n" +
                "                Деревья на ветру качались,\n" +
                "                И он ответил на вопрос:\n" +
                "                - Чайки разбиваются о скалы,\n" +
                "                Когда их море предает.\n" +
                "                \n" +
                "                Летели годы, словно ветер,\n" +
                "                Летели, оставляя след.\n" +
                "                И вот, они уже не дети,\n" +
                "                Им стало восемнадцать лет."


        },
        {
            title: "My Title",
            body: " Скажи, а чайки тоже плачут,\n" +
                "                Когда их море предает? -\n" +
                "                Спросила девочка у мальчика,\n" +
                "                Когда весной кололся лед.\n" +
                "                \n" +
                "                Деревья на ветру качались,\n" +
                "                И он ответил на вопрос:\n" +
                "                - Чайки разбиваются о скалы,\n" +
                "                Когда их море предает.\n" +
                "                \n" +
                "                Летели годы, словно ветер,\n" +
                "                Летели, оставляя след.\n" +
                "                И вот, они уже не дети,\n" +
                "                Им стало восемнадцать лет."


        },
    ],


};


const searchReducer = (state = initialState, action) => {
    if (action.type === SEARCH) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8000/searcher/search?q=' + action.query, false);
        xhr.send();
        state.articles = JSON.parse(xhr.responseText)['articles'];
    }

    return state
};


export default searchReducer;