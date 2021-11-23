# AHJ-2.3
Правила сдачи задания:

1. **Важно**: в рамках этого ДЗ можно использовать любой менеджер пакетов
1. **Важно**: всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor.
1. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
1. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты

---


### In-Memory Sorting

#### Легенда

Достаточно намучившись с `data-*` вы поняли, что хранить всю информацию в DOM и в атрибутах в частности, не всегда самая лучшая идея и решили реализовать хранение в памяти.

#### Описание

Формат приходящих данных (JSON):
```json
[
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
]
```

Храните все полученные объекты в памяти в виде массива и сортировку осуществляйте на базе этого массива (мутировать массив или нет - решать вам). После каждой сортировки пересобирайте заново дерево DOM.

Формат генерируемого DOM должен быть такой же, как в предыдущей задаче.

Внешний вид без сортировки (вы можете визуально улучшить отображение):

![](https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/loading.png)

Обратите внимание, в каком виде выводятся оценки (после точки всегда два символа).

При сортировке по id (по возрастанию):

![](https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/loading-2.png)

Обратите внимание на стрелку возле id.


Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.

---
[![Build status](https://ci.appveyor.com/api/projects/status/e452ukwvk0jbh9b4/branch/main?svg=true)](https://ci.appveyor.com/project/222Alexa44925/ahj-2-3/branch/main)