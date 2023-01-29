import {createClient} from 'contentful'

export function getMedusaClient() {
    const client = createClient({
        space: process.env.MEDUSA_SPACE_ID,
        accessToken: process.env.MEDUSA_ACCESS_TOKEN
    })

    return client
}