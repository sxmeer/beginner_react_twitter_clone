import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1054608205748277248"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sameeryaadav"
          options={{ height: 400 }}
        />
      </div>

    </div>
  )
}

export default Widgets
