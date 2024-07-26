import React, { useState } from 'react'
import './TweetBox.css'
import Button from '@material-ui/core/Button'
import { Avatar } from '@material-ui/core'
import db from './firebase';
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (event) => {
    event.preventDefault();
    if (tweetMessage !== '') {
      db.collection('posts').add({
        displayName: 'Sameer Yadav',
        username: 'sameeryaadav',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQHk3ESAVGM2pQ/profile-displayphoto-shrink_200_200/0/1537719973795?e=1622678400&v=beta&t=azlHa7VUrnEerrrA-p8AXcPsDzIwpvy_SHD0U3OcySs'
      });
      setTweetMessage("");
      setTweetImage("");
    }
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5103AQHk3ESAVGM2pQ/profile-displayphoto-shrink_200_200/0/1537719973795?e=1622678400&v=beta&t=azlHa7VUrnEerrrA-p8AXcPsDzIwpvy_SHD0U3OcySs"
            alt=""
          />
          <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening?" type="text" />
        </div>
        <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
