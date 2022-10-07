import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/vnd.github+json";
axios.defaults.baseURL = "https://api.github.com/search";

export const params = { itemsPerPage: 30, maxItemsAPI: 1000 };
