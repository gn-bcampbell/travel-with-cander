import  {createClient} from 'next-sanity'
import { env } from 'process'

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: env.SANITY_PROJECT_ID,
    useCdn: false
})