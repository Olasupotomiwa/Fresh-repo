const generateLabelsAndText = ({ selectedEngagementTask }) => {
    const taskInfo = {
      "Likes for my post": {
        label1: "Where do you want likes ?",
        label2: "Link to the desired post",
        textContent3: "likes",
        textContent4: "like",
      },
      "Follow my account": {
        label1: "Where do you want followers ?",
        label2: "Link to account",
        textContent3: "followers",
        textContent4: "follower",
      },
      "Likes, views and  comment for my YouTube video": {
        label1: "Select YouTube here",
        label2: "Paste link to video here",
        label3: "Video thumbnail",
        textContent3: "views & likes",
        textContent4: "view & like",
      },
      "Comments for my post": {
        label1: "Where do you want comments ?",
        label2: "Paste link to post here",
        textContent3: "comments",
        textContent4: "comment",
      },
      "Reshare my post": {
        label1: "Where do you want your post to be reshared ?",
        label2: "Paste link to post here",
        textContent3: "re-shares / retweets",
        textContent4: "re-share / retweet",
      },
      "Suscribers for my YouTube channel": {
        label1: "Select YouTube here",
        label2: "Paste link to your channel",
        label3: "Channel banner or cover",
        textContent3: "suscribers",
        textContent4: "suscriber",
      },
      "Join my WhatsApp group": {
        label1: "Select WhatsApp here",
        label2: "Paste link to your WhatsApp group",
        textContent3: "people",
        textContent4: "person",
      },
      "Follow my Audiomack account": {
        label1: "Select Audiomack here",
        label2: "Paste link to your Audiomack account",
        textContent3: "people",
        textContent4: "person",
      },
      "Join my Telegram channel": {
        label1: "Select Telegram here",
        label2: "Paste link to your Telegram channel here",
        textContent3: "people",
        textContent4: "person",
      },
      "Download and review my App on Playstore": {
        label1: "Select Playstore here",
        label2: "Paste link to your App on Playstore",
        textContent3: "downloads and reviews",
        textContent4: "download and review",
      },
      "Download and review my App on Appstore": {
        label1: "Select Appstore here",
        label2: "Paste link to your App on Appstore",
        textContent3: "downloads and reviews",
        textContent4: "download and review",
      },
      "Join my discord channel": {
        label1: "Select discord here",
        label2: "Paste link to your Discord channel",
        textContent3: "people",
        textContent4: "person",
      },
    };
  
    return taskInfo[selectedEngagementTask] || {};
  };
  
  export default generateLabelsAndText;
  