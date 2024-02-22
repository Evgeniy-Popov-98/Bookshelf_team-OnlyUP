        Запроси на сервер виконуються через файл api-books.js 
Для цього потрібно інпортувати функцію getBooks. Ця функція має два аргеммента: 
ebdpoints - потрібен для отримання списку категорій, або топ книг, або отримати книгу по ID. category - цей аргумент потрібен при запиті за певною категорією книг 
  
    Приклад 1:
     ```{main.js} {let endpoints = 'category-list'; 
    const test1 = await getBooks(endpoints);}```    
    Отримаємо масив об'єктів де будуть всі наявні категорії книг 
    
    Приклад 2:
    ```{main.js} {let endpoints = 'category'; 
    let category = 'Audio Fiction'; 
    const test4 = await
    getBooks(endpoints, category); }```
    Отримуємо масив об'єктів книг з однієї категорії
