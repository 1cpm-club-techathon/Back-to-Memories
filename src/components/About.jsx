//import eWasteImage from "../assets/images/ewaste.png";
//import eWasteImage from "../assets/images/e.png"
import eWaste from "../assets/images/friends.jpg"
export const About = () => {

    return (
        <div className="bg-[url('rosebg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    <br></br>
                    <strong>"A picture is worth a thousand words words, but a memory is worth is price"</strong><br></br><br/>
                    Memories are the culmination of the events of our daily lives. Many precious memories are lost with time, but those recorded and preserved truimph against time and exist even as generations pass. "Back To memories" is an exclusive memory documentation application that serves as a platform for you to record and revisit your precious everyday memories whether it be images, locations or daily descriptions in your own words. This application has been carefuly created using React JS, HTML,Tailwind CSS to maximize the user experience and MongoDB accompanied with React for developing a secure and robust backend.
                         <br></br>
                         <br></br>
                         Developed by
                        <strong> Team 1CPM (1 crore per month) Club: </strong><br></br><strong>Keerthana J </strong> <br></br><strong>Haresh M</strong><br/> <strong>Hayagreevan V</strong> 
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={eWaste} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}