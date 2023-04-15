export const getSearchHistory= () => {
    const searchHistory = localStorage.getItem('search-history')
      ? JSON.parse(localStorage.getItem('search-history'))
      : [];
  
    return searchHistory;
  };

export const saveSearch = (historyItem) => {
    let history = getSearchHistory(); 
    history.push(historyItem); 
    localStorage.setItem('search-history', JSON.stringify(history));
}

export const clearSearch = () => {
    localStorage.removeItem('search-history');
}