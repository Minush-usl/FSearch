import searchReducer from "./searchReducer";

let store = {

    _state: {

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


    },

    _callSubscriber() {
        console.log("!!");

    },
    getState() {
        return this._state
    },


    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {

        this._state = searchReducer(this._state, action);

        this._callSubscriber(this);
    }

};


export default store















