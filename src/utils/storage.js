const storage = sessionStorage;

const saveDataToStorage = (data) => {
  storage.setItem("USER", JSON.stringify(data));
};

const getDataFromStorage = (name = "USER") => {
  const response = storage.getItem(name);

  return JSON.parse(response);
};

const removeDataFromStorage = (name = "USER") => {
  storage.removeItem(name);
};

export { saveDataToStorage, getDataFromStorage, removeDataFromStorage };
