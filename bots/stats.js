const axios = require('axios');
const cheerio = require('cheerio');

async function get_stats() {
    try {
        const response = await axios.get('https://steamstat.us/')

        const html = response.data
        console.log(html)
        const $ = cheerio.load(html)
        const invent = $("#csgo_community")
        console.log(invent)
    } catch (error) {
        console.log(error)
    }
}

async function stats_api() {
    try {
        const response = await axios.get('https://vortigaunt.steamstat.us/not_an_api.json', {
            headers: {
                'accept': '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'if-modified-since': 'Sat, 29 Apr 2023 22:41:49 GMT',
                'sec-ch-ua': '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'Referer': 'https://steamstat.us/',
                'Referrer-Policy': 'strict-origin'
            }
        })

        let stats = {}
        for (let element of response.data.services) {
            stats[element[0]] = element[2]
        }
        return stats
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_stats,
    stats_api
}