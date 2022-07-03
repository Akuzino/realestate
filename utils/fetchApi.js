import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            "X-RapidAPI-Key": "e58944c2ffmsh6bfd8ec855e097dp103410jsnbfad29c4a9b7",
        },
    });

    return data;
};
