import {useRef, useState} from 'react';
import styled  from 'styled-components';
import {MdClose,MdArticle} from 'react-icons/md';
import { CloseButton } from 'react-bootstrap';
import {AiOutlinePicture,AiOutlinePlaySquare} from  'react-icons/ai';


const Wrapper=styled.div`
   position:fixed;
   top:0;
   left:0;
   z-index:1000;
   background-color:rgba(0,0,0,0.8);
   display:flex;
   width:100%;
   height:100%;
`;


const Content = styled.div`
    width:125%;
    height:75%;
    max-width:552px;
    background-color:white;
    max-height:98%;
    overflow:initial;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Header=styled.div`
    display:block;
    padding:16px 20px;
    border-bottom:1px solid rgba(0,0,0,0.15);
    font-size:16px;
    line-height:1.5;
    color:rgba(0,0,0,0.6);
    font-wight:400;
    display:flex;
    justify-content:space-between;
`;

const CreateContent =styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    overflow-y:auto;
    vertical-align:baseline;
    background:transparent;
    padding:8px 12px;
`;
const User=styled.div`
    display:flex;
    align-items:center;
    padding: 12px 24px;
    img{
        width:48px;
        height:48px;
        background-clip:content-box;
        border:2px solid transparent;
        border-radius:50%;
    }
    span{
        font-weight:600;
        font-size:16px;
        line-height:1.5;
        margin-left:5px;
    }
`;
const TheContent=styled.div`
    display:flex;
    justify-content:space-between;
    padding:12px 24px 12px 16px;
`;
const Assets=styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Btns=styled.button`
    padding:0;
    display:flex;
    justify-content: space-between;
    cursor:pointer;
    background-color:grey;
    color:black;    
`;


const Cls = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;
`;
const Poster=styled.button`
    max-width:60px;
    border-radius:20px;
    padding:0;
    display:flex;
    cursor:pointer;
    background-color:grey;
    color:black;
    margin-top: -5px;
}
`;

const Editer=styled.div`
    padding: 12px 24px;
    textarea{
        width:100%;
        min-height:100px;
        resize:none;
        border:none;
        outline:none;   
    }
    input{
        width:100%;
        height:35px;
        font-size:16px;
        margin-bottom:20px
    }
`;

export default function ShowPost({showPost,setShowPost}) {
    const [editText,setEditText]=useState("");

    const postRef=useRef();
    const closePost = e =>{
        if(postRef.current== e.target){
            setShowPost(false)
        }
    };

    
  return (
    <div>
    {showPost ? (
        
           <Wrapper ref={postRef} onClick={closePost}>
              <Content>
                   <Header>
                    <h2>Créer un post</h2>
                    <Cls aria-label='Close post' onClick={()=>setShowPost(prev=>!prev)}/>
                   </Header>
                   <CreateContent>
                       <User>
                           <img src="\assets\images.png" alt=""/>
                           <span>Nom</span>
                       </User>
                      <Editer>
                      <textarea value={editText} onChange={(e)=>setEditText(e.target.value)} placeholder="De quoi souhaitez-vous discuter?" autofocus={true}/>
                      </Editer>
                   </CreateContent>
                   <TheContent>
                        <Assets>
                            <Btns>
                                <AiOutlinePicture />
                            </Btns>
                            <Btns >
                                <AiOutlinePlaySquare/>
                            </Btns>
                            <Btns >
                                <MdArticle/>
                            </Btns>
                        </Assets>
                        <Poster>Publier</Poster>
                    </TheContent>   
                    </Content>
           </Wrapper>
        
    ):null}
    </div>
  )
};