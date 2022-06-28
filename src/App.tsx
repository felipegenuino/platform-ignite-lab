import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import {client} from "./lib/apollo"


const GET_LESSONS_QUERY = gql`
 query allLessons {
  lessons {
    id
    slug
    title
    description
    teacher {
      bio
      avatarURL
      name
    }
  
  }
}

`

interface Lesson {
  id: string,
  title: string,
  description: string
}

function App() {

const {data} = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)  
console.log(data)
  return (
    <div className="bg-sky-50 aspect-square">
      <h1 className="text-yellow-200">Hello Baby2</h1>
      <ul>
     {data?.lessons.map(lesson => {
      return <li key={lesson.id}>
         <h2>{lesson.title}</h2>
         <p>{lesson.description}</p>
         </li>
     })}
     </ul>
  
    </div>
  )
}

export default App
