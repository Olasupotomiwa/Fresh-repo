import EngagementTaskTemplate from "./FollowPages";

const LikePosts =()=>{

const apiEndpoint = 'https://jsonplaceholder.typicode.com/albums'
    return(
   <>
   <EngagementTaskTemplate
  apiEndpoint={apiEndpoint}
  customHeading="Like posts"
  customText="Like posts on Instagram, TikTok, Facebook and Twitter"
/>
   </>

    )
}
export default LikePosts