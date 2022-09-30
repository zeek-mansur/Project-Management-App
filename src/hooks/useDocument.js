import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useDocument = (collection, id) => {

   const [document, setdocument] = useState(null)
   const [error, setError] = useState(null)

   useEffect(() => {
const ref =  projectFirestore.collection(collection).doc(id)

const unsubscribe = ref.onSnapshot((snapshot) => {

    if (snapshot.data()) {

        setdocument({...snapshot.data(), id: snapshot.id})
    setError(null)

    }
    else {
        setError('No such document exists')
    }   

}, (err) => {

    console.log(error.message)
    setError('failed to get document')
})

return () => unsubscribe()

   }, [collection, id])

   return {document, error}
   
}