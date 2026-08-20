function addToStorage(title) {
    const todoTitle = localStorage.setItem("title",title);
};

export {
    addToStorage,
};