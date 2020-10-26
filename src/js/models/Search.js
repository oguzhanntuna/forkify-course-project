import axios from 'axios';

export default class Search {
    constructor(query) {  
        this.query = query;
    }

    async getResults() {
        // WE DONT USE PROXY AND KEY, THIS API WE ARE USING RIGHT NOW IS A HAND-MADE API.
        //const proxy = "https://cors-anywhere.herokuapp.com/";
        //const key = '4k8452sdyhbc9145646csf846g52';
        //const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?key=${key}&q=${query}`);
    
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }  
    }
};

