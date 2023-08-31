import EngagementTaskTemplate from "./FollowPages";

const LikePosts =()=>{


    return(
   <>
   <EngagementTaskTemplate
  apiEndpoint="https://jsonplaceholder.typicode.com/albums"
  customHeading="Like posts"
  customText="Like posts on Instagram, TikTok, Facebook and Twitter"
/>
   </>

    )
}
export default LikePosts