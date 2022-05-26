import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './memberLogin.css'
import Welcome from './memberWelcom';
function MemberLogin(props){
    const [member_account, setmember_account] = useState("");
    const [nameMessage, setNameMessage] = useState("");
    const [member_password, setmember_password] = useState("");
    const {auth,setAuth} = props;  
    const {thismemberid,setThismemberid} = props;  
    // const [datas,setDatas] = useState([])

   
    const handleValueChange=(e)=>{
      setmember_account(e.target.value);
    }
    const handleValueChange2=(e)=>{
      setmember_password(e.target.value);
    }
    const handleCheckName=async ()=>{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkName?member_account=${member_account}`);
      console.log(process.env.REACT_APP_API_URL);
      const results = await response.json();
      if(results.total === 0){
          setNameMessage("帳號錯誤");
      }else{
          setNameMessage("帳號存在");
      }

    }
    const loginBTN=async()=>{
        const loginTF = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginTF/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
        
       
        
        const resultsTF = await loginTF.json();
        console.log(resultsTF);
        // console.log(results);
        if(resultsTF.total===1){
            const login = await fetch(`${process.env.REACT_APP_API_URL}/account/Login/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
            const results = await login.json();
            console.log(results);
            // alert(results.member_id);
            alert('成功登入');
            setAuth(!auth)
            setThismemberid(results.member_id)
            // window.location.assign("http://localhost:3000/member/QAcheck/1");
        }else{
            alert('帳號密碼錯誤');
            // setAuth(!auth)

        }

    }
    

    const Login = ()=>{
        document.querySelector('.loginMain1').style.right='-491px';
        document.querySelector('.loginMain1').style.transition='0.5s';
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
    const SingIn = ()=>{
        document.querySelector('.loginMain1 ').style.right='0px';
        document.querySelector('.loginMain1 ').style.transition='0.5s';
      }
      const fg = ()=>{
        document.querySelector('.LG').style.display="none"
        document.querySelector('.LG-F').style.display="block"
      }
      const fgb = ()=>{
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
  
  
  
      const rwdNew = () =>{
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.loginCM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const rwdL=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const fgM=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.forget-m').style.display="block"
      }
      const fgMb=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
      }

  
    //   
    return(
      
        <>
         {auth ? <Link to="/member/Profile"></Link>:<div>
         <div className="pmain">
                <div className="row">
                    <div className="col ">
                        <div className="memberLoginMain">
                            <div className="row">
                                <div className="col loginLift">
                                    <img className="member1" src={require('./img/member_logoin_1.png')} alt=""></img>
                                    <img className="member2" src={require('./img/member_logoin_2.png')} alt=""></img>
                                    <h2 className="liftW1">登入會員</h2>
                                    <h2 className="liftW2">享受專屬優惠</h2>
                                </div>
                                <div className="col loginRight">
                                    <div className="row">
                                    <div className="col-6 loginTop loginTopL"> <div className="loginWord lg1" onClick={Login}>LOGIN</div> </div>
                                    <div className="col-6 loginTop loginTopR"> <div className="loginWord lg2" onClick={SingIn}>SIGN IN</div> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row loginMain">
                                <div className="col-6 loginMain1">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputL">
                                        <div className="LG">
                                            <br></br>
                                            <form >
                                            <input type="text" size="30" placeholder="&ensp;會員帳號" value={member_account} name='member_account' onChange={handleValueChange} onBlur={handleCheckName}></input>
                                            <div>{nameMessage || "輸入帳號"}</div>
                                            <br></br>
                                            <input type="password" size="30" placeholder="&ensp;會員密碼" value={member_password} name='member_password' onChange={handleValueChange2}></input>
                                            <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-4"></div> 
                                            <div id="forget" onClick={fg} className="col-3">忘記密碼?</div>
                                            <div className="col-2"></div>
                                            </div>
                                            <br></br>
                                            {/* <button  onClick={()=>{
                                                setAuth(!auth)

                                            }}>{auth?"登出":"登入"}</button> */}
                                            
                                            {/* <Link to="/member/Profile"><button >&ensp;登入&ensp;</button></Link> */}
                                           {/* <button type='button' onClick={loginBTN}>&ensp; {auth ? '已登入':'登入'}&ensp;</button> */}
                                           <button type='button' onClick={loginBTN}>&ensp;登入&ensp;</button>
                                            </form>
                                            <hr></hr>
                                            <br></br>
                                            <div className="GLoginL"><i className="fa-brands fa-google"></i>&ensp;使用Google登入</div>
                                        </div>
                                        <div className="LG-F">
                                            <form>
                                            <input type="email" placeholder="請輸入註冊信箱" name='FMail'></input>
                                            <div className="fgBack mLcolor" onClick={fgb}>返回</div>
                                            <button>&ensp;送出&ensp;</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 loginMain2">
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputR">
                                    <br></br>
                                    <form>
                                    <input type="email" size="30" placeholder="&ensp;會員信箱" name='Create_Mail'></input>
                                    <br></br>
                                    <input type="text" size="30" placeholder="&ensp;會員帳號" name='Create_Account'></input>
                                    <br></br>
                                    <input type="password" size="30" placeholder="&ensp;會員密碼" name='Create_Password'></input>
                                    <br></br>
                                    <button>&ensp;註冊&ensp;</button>
                                    </form>
                                    <hr></hr>
                                    <br></br>
                                    <div className="GLoginR"><i className="fa-brands fa-google"></i>&ensp;使用Google註冊</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pmain-m">
                <div className="loginM">
                    <div className="MimgDiv">
                    </div>
                    <div className="loginInput loginInputL">
                    <form>
                    <input type="text" size="25" placeholder="&ensp;會員帳號" value={member_account} name='member_account' onChange={handleValueChange} onBlur={handleCheckName}></input>
                    <br></br>
                    <input type="password" size="25" placeholder="&ensp;會員密碼" value={member_password} onChange={handleValueChange2}></input>
                    <br></br>
                    <div className="mLcolor fgaa" onClick={fgM}>忘記密碼</div>
                    <br></br>
                    <button type='button' onClick={loginBTN}>&ensp;登入&ensp;</button>
                    </form>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="newM mLcolor" onClick={rwdNew}>註冊帳號</div>
                    </div>
                    </div>
                </div>  

                <div className="loginCM">
                    <div className="loginInput loginInputL">
                    <form>
                        <input type="text" size="25" placeholder="&ensp;會員信箱" name='Create_Mail'></input>
                        <br></br>
                        <input type="text" size="25" placeholder="&ensp;會員帳號" name='Create_Account'></input>
                        <br></br>
                        <input type="password" size="25" placeholder="&ensp;會員密碼" name='Create_Password'></input>
                        <br></br>
                        <button>&ensp;註冊&ensp;</button>
                    </form>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <br></br>
                        <div className="newL mLcolor" onClick={rwdL}>已有帳號</div>
                    </div>
                    </div>
                </div> 
                <div className="forget-m loginInput loginInputL">
                    <form>
                        <input type="email" size="25" placeholder="請輸入註冊信箱" name='Create_Mail'></input>
                        <div className="mldiv"><div className="fgMBack mLcolor" onClick={fgMb}>返回</div></div>
                        <button>&ensp;送出&ensp;</button>
                    </form>
                </div> 
                </div>
         </div>}
            
            
        </>
    )
    
    
    

}
export default MemberLogin