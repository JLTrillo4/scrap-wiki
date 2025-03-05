const express = require('express')
const axios = require ('axios')
const cheerio = require ('cheerio')

const app = express()

const url = `https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap`

app.get('/', async (req, res) => {
    try {
        const responde = await axios.get(url)

        if(response.status ===200) {
            const html = response.data
            const $ = cheerio.load(html)

            const links = []
            const rapers = []
            const imgs = []

            //links
            const $links = $('#mw-pages a')
            $links.each((index, element) => {
                const link = $(element).attr('href')
                links.push(link)
            })
            
            const template = `
                <ul>
                    ${links.map(link => `<li>${link}</li>`).join('')}
                </ul>
            `

            res.send(template)

        }
            
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }

})





app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
})
