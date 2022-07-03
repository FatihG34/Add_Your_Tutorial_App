import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [tutorials, setTutorials] = useState("");
    console.log(tutorials);

    const url = `https://cw-axios-example.herokuapp.com/api/tutorials`;

    const getTutorials = async () => {
        try {
            const { data } = await axios.get(url);
            setTutorials(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTutorials()
    }, []);

    const addTutorail = async (tutorail) => {
        try {
            await axios.post(url, tutorail)
        } catch (error) {
            console.log(error);
        }
        getTutorials();
    }
    return (
        <div>
            <AddTutorial addTutorail={addTutorail} />
            <TutorialList tutorials={tutorials} />
        </div>
    )
}

export default Home