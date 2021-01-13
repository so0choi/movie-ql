
import  {people, getById } from './db.js'

const resolvers = {
    Query: {
        people: () => people,
        person:  (_, {id}) => 
            getById(id)
        

    }
}

export default resolvers;