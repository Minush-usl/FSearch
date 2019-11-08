# FSearch - система повнотекстового пошуку

Для реалізації  системи використовується пошуковий індекс

--------------------------------------------------------------------------------------------------------


Пошуковий індекс — структура даних, яка містить інформацію про документи та використовується в пошукових системах. Індексування, що здійснюється пошуковою машиною, — процес збору, сортування та зберігання даних з метою забезпечення швидкого та точного пошуку інформації. Створення індексу включає міждисциплінарні поняття з лінгвістики, когнітивної психології, математики, інформатики та фізики. Веб-індексуванням називають процес індексування в контексті пошукових машин, розроблених для пошуку веб-сторінок в Інтернеті.

Популярні пошукові машини зосереджуються на повнотекстовій індексації документів, написаних природною мовою. Мультимедійні документи, такі як відео та аудіо і графіка, також можуть брати участь у пошуку.

Метапошукові машини використовують індекси інших пошукових сервісів і не зберігають локальний індекс, тоді як пошукові машини, засновані на кеш сторінках, довго зберігають як індекс, так і текстові корпуси. На відміну від повнотекстових індексів, частково-текстові сервіси обмежують глибину індексації, щоб зменшити розмір індексу. Великі сервіси, зазвичай, виконують індексацію в заданому часовому інтервалі через необхідність часу і витрат на обробку, у той час як пошукові машини, засновані на агентах, будують індекс в масштабі реального часу

Індексація!
---------------------
Мета використання індексу — підвищення швидкості пошуку релевантних документів за пошуковим запитом. Без індексу пошукова машина повинна була б сканувати кожен документ в корпусі, що вимагало б великої кількості часу і обчислювальної потужності. Наприклад, у той час, як індекс 10 000 документів може бути опитано в межах мілісекунд, послідовний перегляд кожного слова в 10 000 великих документів міг би зайняти години. Додаткова пам'ять, що виділяється для зберігання індексу, і збільшення часу, необхідного для поновлення індексу, компенсується зменшенням часу на пошук інформації.

Фактори, що впливають на проектування пошукових систем
---

#### Фактори  злиття
Як дані входять до індексу? Як слова та підлеглі функції додаються до індексу під час текстового корпусного обходу? І чи можуть кілька пошукових роботів працювати асинхронно? Пошуковий робот повинен спочатку перевірити, оновлює він старий зміст або додає новий. Злиття індексу пошукової системи подібно SQL Merge та іншим алгоритмам злиття.

---
#### Методи зберігання
Як зберігати індексовані дані? Тобто визначають вид інформації, що зберігається: стиснутий або відфільтрований

---
#### Розмір індексу
Скільки необхідно пам'яті комп'ютера, аби підтримувати індекс.

---
#### Швидкість пошуку
Як швидко можна знайти слово в інвертованому індексі. Важливим для інформатики є порівняння швидкості знаходження запису в структурі даних та швидкості оновлення/видалення індексу.

---
#### Зберігання
Як зберігається індекс протягом тривалого часу

---

#### Відмовостійкість
Для пошукової служби важливо бути надійною. Запитання відмовостійкості містять проблему ушкодження індексу, визначаючи, чи можна окремо розглядати некоректні дані, пов'язані з поганими апаратними засобами, секціонуванням та схемами на основі хеш-функцій та композитного секціонування, а також реплікації.
Індексні структури даних
---
Архітектура пошукової системи розрізняється за способами індексування і за методами зберігання індексів, задовольняючи чинники. Індекси бувають наступних типів:

---
#### Суфіксне дерево

Образно структуроване як дерево, підтримує лінійний час пошуку. Побудовано на зберіганні суфіксів слів. Дерева підтримують розширене хешування, яке важливо для індексації пошукової системи. Використовується для пошуку за шаблоном в послідовностях ДНК та кластеризації. Основним недоліком є те, що зберігання слова в дереві може потребувати простір більший, ніж необхідно для зберігання самого слова. Альтернативний запис — суфіксний масив. Вважається, що він вимагає менше віртуальної пам'яті та підтримує блочно-сортувальний стиск даних.

---
#### Інвертований індекс
Сховище списку входжень кожного критерію пошуку, зазвичай у формі хеш-таблиць або бінарного дерева.

Прямий індекс
---
Прямий індекс зберігає список слів для кожного документа. Нижче приведено спрощену форму прямого індексу:

|Слова |  Документ |
| ------------ | ------------ |
|Мати, Батько   | Документ 1   |
| Дім, Школа | Документ 2   |

Необхідність розробки прямого індексу пояснюється тим, що найкраще одразу зберігати слова за документами, оскільки їх надалі аналізують для створення пошукового індексу. Формування прямого індексу включає асинхронну системну обробку, яка частково обходить вузьке місце оновлення інвертованого індексу. Прямий індекс сортують, щоб перетворити в інвертований. Прямий індекс власне являє собою список пар, які складаються з документів та слів, відсортованих за документами. Перетворення прямого індексу у інвертований є лише питанням сортування пар за словами. У цьому плані інвертований індекс — відсортований за словами прямий індекс.
Інвертований індекс
---
Багато пошукових систем використовують інвертований індекс при оцінюванні пошукового запиту, щоб швидко визначити місце розташування документів, що містять слова запиту, а потім ранжувати ці документи по релевантності. Оскільки інвертований індекс зберігає список документів, що містять кожне слово, пошукова система може використовувати прямий доступ, аби знайти документи, пов'язані з кожним словом в запиті, і швидко отримати їх. Нижче наведено спрощене уявлення інвертованого індексу:

|Слово | Документи |
|-----|-----|
|Мати | Документ 1, Документ 2, Документ 3 |
|Батько | Документ 3, Документ 1, Документ 3 |

Інвертований індекс може лише визначити, чи існує слово в межах конкретного документа, оскільки не зберігає жодної інформації щодо частоти та позиції слова, і тому його вважають логічним індексом. Він визначає, які документи відповідають запиту, але не оцінює їх. У деяких випадках індекс містить додаткову інформацію, таку як частота кожного слова в кожному документі або позиція слова в документі. Інформація про позицію слова дозволяє пошуковому алгоритму ідентифікувати близькість слова, щоб підтримувати пошук фраз. Частота може використовуватися, щоб допомогти в ранжируванні документів за запитом. Такі теми в центрі уваги досліджень інформаційного пошуку.

Інвертований індекс представлений розрідженою матрицею, оскільки не всі слова присутні в кожному документі. Індекс подібний матриці термів документа, використовуваному в ЛСА. Інвертований індекс можна вважати формою хеш-таблиці. В деяких випадках індекс представлений у формі двійкового дерева, яка вимагає додаткової пам'яті, але може зменшити час пошуку. У великих індексах архітектура, зазвичай, представлена розподіленою хеш-таблицею

Злиття індексу
---
Інвертований індекс заповнюється шляхом злиття або відновлення. Архітектура може бути спроектована так, щоб підтримувати інкрементну індексацію, у якій злиття визначає документ або документи, які будуть додані або оновлені, а потім аналізує кожний документ в слова. Для технічної точності, злиття об'єднує недавно індексовані документи, які зазвичай перебувають у віртуальній пам'яті, з індексним кешем, який розташований на одному або декількох твердих дисках комп'ютера.

Після синтаксичного аналізу індексатор додає вказаний документ в список документів для відповідних слів. У більш великих пошукових системах процес знаходження кожного слова для інвертованого індексу може потребувати великого обсягу роботи, тому його, зазвичай, поділяють на дві частини:

розробка прямого індексу,
сортування прямого індексу в інвертований індекс.
Інвертований індекс називається так через те, що він є інверсією прямого індексу.


Стиснення
---
Створення та підтримка великомасштабного пошукового індексу потребує значної пам'яті та виконання завдань обробки. Багато пошукових систем використовують ту чи іншу форму стиснення, щоб зменшити розмір індексів на диску. Розглянемо таку ситуацію для повнотекстового механізму пошуку в Інтернеті:

Потрібно 8 бітів (1 байт) для зберігання одного символу. Деякі кодування використовують 2 байта на символ.
Середнім числом символів в будь-якому слові на сторінці візьмемо 5.
Враховуючи цей сценарій, не стислий індекс для 2 мільярдів веб-сторінок мав би зберігати 500 мільярдів записів слів. 1 байт за символ або 5 байтів за слово — було б потрібно 2500 гігабайт одного лише простору пам'яті. Це більше, ніж середній вільний простір на диску 2 персональних комп'ютерів. Для відмовостійкій розподіленої архітектури потрібно ще більше пам'яті. Залежно від обраного методу стиснення індекс може бути зменшений до частини такого розміру. Компроміс часу і обчислювальної потужності, необхідної для виконання стиснення та розпакування.

Цікаво, що великомасштабні проекти пошукових систем містять витрати на зберігання, а також на електроенергію для здійснення зберігання.









Приклад таблиць індексування
---

- Table documents

|  id  |name   |
|--------|---------|
|1|Doc1.doc|
|2|hh12.doc|
|3|test.doc|

- Table inverted index

|word|docID|wordQuantity|
|------------------|---|--------------------|
|cat|1|3|
|cat|2|44|
|dog|2|23|

Table word position

|word|docID|wordPosition(line, number)|
|-------|------------|----------------------|
|cat|1|'3, 3'|
|cat|1|'5, 23'|
|cat|1|'13, 354'|
|cat|2|'21, 73'|
|cat|2|'23, 7'|
|dog|2|'67,1'|









Джерела
---

- James Lee. [Software Learns to Tag Photos](http://www.technologyreview.com/news/406833/software-learns-to-tag-photos/) 

- Stephen V. Rice, Stephen M. Bailey. [Searching for Sounds Comparisonics Searching for Sounds](http://www.comparisonics.com/SearchingForSounds.html)
- С. Брин, Л. Пейдж [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html)

- Vreda Pieterse and Paul E. Black. "trie" in [Dictionary of Algorithms and Data Structures](http://www.nist.gov/dads/HTML/invertedIndex.html)

- Christofer D. Manning [Introduction to information retrieval](http://nlp.stanford.edu/IR-book/html/htmledition/irbook.html)

