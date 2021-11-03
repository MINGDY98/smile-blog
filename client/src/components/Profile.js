import React from 'react';
import axios from 'axios';
import styled from "styled-components"

const CircleProfileImg = styled.img`
  width           : 100%;
  height          : auto;
`

const ProfileWrapper = styled.div`
  position        : relative;
  width           : 150px;
  height          : 150px;
  overflow        : hidden;
  border-radius   : 50%;
  display				  : flex;
	justify-content	: center;
`

const IntoduceText = styled.div`
  font-size       :6px;
  text-align      : center;
`

const Profile = () => {

  const [Image, setImage] = React.useState("profile.png")
  const [introduce, setIntroduce]=React.useState("");
  const callLatestApi = async()=>{
    const response = await axios.get('http://localhost:4000/profile');
    return response.data.data;
  }

  React.useEffect(()=>{
    callLatestApi()
    .then(res=>{
      setImage(res.userImg);
      setIntroduce(res.introduce);
    })
    .catch( err=>console.log(err) );
  }, []);

  return (  
    <div>
      <ProfileWrapper>
        <CircleProfileImg
          src={Image} 
          alt="Avatar"
        />
      </ProfileWrapper>
      <IntoduceText>{introduce}</IntoduceText>
    </div>
  )
}
export default Profile;