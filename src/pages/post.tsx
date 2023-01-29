import { GetStaticProps } from "next"
import {getMedusaClient} from '../services/medusa'

export default function Post(props) {
    console.log(props.response, 'props client side')
    return (
        <div>
            post publication
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const client = getMedusaClient()
    const response = await client.getEntries()

    return {
        props: {
            response
        },
      };
}