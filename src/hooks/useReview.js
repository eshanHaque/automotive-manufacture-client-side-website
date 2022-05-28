import { useEffect, useState } from "react"

const useReview = () =>{
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('https://infinite-ridge-15899.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return [reviews, setReviews];
}

export default useReview;