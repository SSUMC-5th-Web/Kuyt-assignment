import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import LoginControl from './LoginControl';

const Navigation = ({setAuth, log, setLog}) => {
    const list = [
        '영화',
        'TV 프로그램',
        '인물'
    ];
    const navigate = useNavigate();
    const gotoHome = () =>{
        navigate('/');
    }
    const movePage =(list) =>{
        switch(list){
            case '영화':
                navigate('/movie');
                break;
            case 'TV 프로그램':
                navigate('/tv');
                break;
            case '인물':
                navigate('/celebirity');
                break;
            default:
                break;
        }
    }
  return (
    <NavWrapper>
        <Img
        onClick={gotoHome}
		style={{ width: "154px", height: "20px" }}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"
        />
        <Ul>
            {list.map((list)=>(<Li onClick={()=>movePage(list)}>{list}</Li>))}
        </Ul>
       <LoginControl setAuth={setAuth} log={log} setLog={setLog}/>
        
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: #353b6d;
`;
const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    color: white;
    font-weight: bold;
`;
const Li= styled.li`
    margin-right: 30px;
    cursor: pointer;
`;
const Img = styled.img`
    margin-left: 100px;
    cursor: pointer;
`;

export default Navigation