export default function Home() {
  return <h1>Тестове завдання Web-developer.
  Розробити веб-застосунок на NextJS (PagesRouter !) для отримання та відображення списку вагонів із HTTP API.
  
  URL запиту - https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo. 
  У відповіді прийде JSON-об'єкт, у якого за ключом Vagons лежить масив вагонів.
  Реквізити вагона для відображення: VagonNumber, VagonType, CargoName, OwnerName.
  Зовнішній вигляд списку – довільний.
  
  Під час розробки необхідно використовувати:
  
  axios - (https://axios-http.com/docs/intro) - для HTTP запитів.
  React Query - (https://tanstack.com/query/latest/) - для запитів на клієнті.
  Результат необхідно викласти у публічний GIT-репозиторій на GitHub.
  </h1>;
    
}
