import TasksTemplate from './Instagramtask'

const Twitter =()=>{


    return(
   <>
   <TasksTemplate
  apiEndpoint="https://jsonplaceholder.typicode.com/albums"
  customHeading="Twitter tasks"
  customText="Our Twitter adverts tasks only require you to download the ad image or video and share it on your Twitter profile"
/>
   </>

    )
}
export default Twitter