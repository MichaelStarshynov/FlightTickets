   async function fetchData(query) {
      try {
        const response = await fetch(``);
        if (!response.ok) throw new Error("Не знайдено!");
        const data = await response.json();
        return data;
      } catch (error) {
        return { error: error.message };
      }
      // Эта функция серверная, потому что она обрабатывает запрос и имеет доступ к апи.
    }
    