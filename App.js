//import PropTypes from 'prop-types';
const userdata=[{
  name:"John",
  city:"Us",
  discription:"front end developer",
  skills:["UL/Ux","HTML","css","javascript","angular","node"],
   online:true,
   profile:"images/1.jpg"
},
{
  name:"Lucy",
  city:"Paris",
  discription:"Ux designer",
  skills:["UL/Ux","HTML","css","javascript","angular"],
   online:false,
   profile:"images/2.jpg"
},
{
  name:"Nacy",
  city:"London",
  discription:"front end developer",
  skills:["UL/Ux","HTML","css","javascript","angular","node","next js"],
   online:true,
   profile:"images/3.jpg"
},
];
function User(props){
 return <div className="container"> 
  <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
  <img src={props.profile} className="img" alt="user"/>
  <h3>{props.name}</h3>
  <h3>{props.city}</h3>
  <p>{props.discription}</p>
  <div className="buttons">
    <button className="primary">Message</button>
    <button className="primary outline">Following</button>
  </div>
  <div className="skill">
    <h6>Skills</h6>
    <ul>
      {props.skills.map((skill,index)=>(
      <li key="index">{skill}</li>))}
    </ul>

  </div>
 </div>
}


function App() {
  return (<>
  {userdata.map((user,index)=>(
    <User key="index" name={user.name} city={user.city} discription={user.discription}
    skills={user.skills} online={user.online} profile={user.profile}/>))}
    </>
  );
}

export default App;
