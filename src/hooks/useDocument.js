import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useDocument = (collection, id) => {

   const [document, setdocument] = useState(null)
   const [error, setError] = useState

   useEffect(() => {
const ref =  projectFirestore.collection(collection).doc(id)

const unsubscribe = ref.onSnapshot((snapshot) => {

    setdocument({...snapshot.data(), id: snapshot.id})
    setError(null)

}, (err) => {

    console.log(error.message)
    setError('failed to get document')
})

return () => unsubscribe()

   }, [collection, id])

   return {document, error}
   
}