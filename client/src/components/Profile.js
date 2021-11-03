import React from 'react';
import axios from 'axios';
import styled from "styled-components"

const CircleImg = styled.img`
  width           : 100%;
  height          : auto;
`

const ImgWrapper = styled.div`
  position        : relative;
  width           : 72px;
  height          : 72px;
  overflow        : hidden;
  border-radius   : 50%;
  display				  : flex;
	justify-content	: center;
  margin-right    : 10px;
`

const IntroduceText = styled.div`
  font-size       : 12px;
  font-weight     : 500;
  color           : #888888;
`

const IntroduceWrapper = styled.div`
  text-align      : left;
`

const ProfileWrapper = styled.div`
  display				  : flex;
  align-items     : center;
  justify-content : left;
  width           : 100%;
  padding         : 40px 0px;
  border-bottom   : 1px solid #EEEEEE;
`

const IntroduceName = styled.p`
  color           : #333333;
  margin          : 0px;
  font-size       : 20px;
  font-weight     : 600;
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
    <ProfileWrapper>
      <ImgWrapper>
        <CircleImg
          src={Image} 
          alt="Avatar"
        />
      </ImgWrapper>
      <IntroduceWrapper>
        <IntroduceName>
          김민지
        </IntroduceName>
        <IntroduceText>
          {introduce}
        </IntroduceText>
      </IntroduceWrapper>
    </ProfileWrapper>
  )
}
export default Profile;