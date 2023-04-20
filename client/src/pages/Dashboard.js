import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import ChatContainer from "../components/ChatContainer";
import {useCookies} from 'react-cookie'
import axios from 'axios'

const DashBoard = () => {
  
  
  const [user, setUser] = useState(null)
  const [genredUsers, setGenredUsers] = useState(null)
  const [lastDirection, setLastDirection] = useState();
  // const [lastDirection, setLastDirection] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const userId = cookies.UserId


  const getUser = async () => {
      try {
          const response = await axios.get('http://localhost:8000/user', {
              params: {userId}
          })
          setUser(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  const getGenredUsers = async () => {
    try {
        const response = await axios.get('http://localhost:8000/genred-users', {
            params: {genre: user?.genre_interest}
        })
        setGenredUsers(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() =>{
    getUser()
    getGenredUsers()
  }, [user, genredUsers])




  const updateMatches = async (matchedUserId) => {
    try {
        await axios.put('http://localhost:8000/addmatch', {
            userId,
            matchedUserId
        })
        getUser()
    } catch (err) {
        console.log(err)
    }
}

// console.log(user)



  const swiped = (direction, swipedUserId) => {
    if (direction === 'right') {
        updateMatches(swipedUserId)
    }
    setLastDirection(direction)
}

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };


  const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

  const filteredGenredUsers = genredUsers?.filter(genredUser => !matchedUserIds.includes(genredUser.user_id))

  return (
    <>
    {user &&
    <div className="dashboard">
      <ChatContainer user={user}/>
      <div className="swipe-container">
        <div className="card-container">
          {filteredGenredUsers?.map((genredUser) => (
            <TinderCard
              className="swipe"
              key={genredUser.user_id}
              onSwipe={(dir) => swiped(dir, genredUser.user_id)}
              onCardLeftScreen={() => outOfFrame(genredUser.first_name)}
            >
              <div
                className="card"
                style={{ backgroundImage: "url(" + genredUser.url + ")" }}
              >
                <h3>{genredUser.first_name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default DashBoard;
