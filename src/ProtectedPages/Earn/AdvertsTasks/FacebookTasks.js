import TasksTemplate from './Instagramtask'

const Facebook =()=>{


    return(
   <>
   <TasksTemplate
  apiEndpoint="https://jsonplaceholder.typicode.com/users"
  customHeading="Facebook tasks"
  customText="Our Facebook adverts tasks only require you to download the ad image or video and share it on your Facebook profile"
/>
   </>

    )
}
export default Facebook