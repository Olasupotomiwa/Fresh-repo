import EngagementTaskTemplate from "./FollowPages";

const AppStore =()=>{


    return(
   <>
   <EngagementTaskTemplate
  apiEndpoint="https://jsonplaceholder.typicode.com/albums"
  customHeading="Download Apps on Appstore"
  customText="Download, give reviews and earn"
/>
   </>

    )
}
export default AppStore