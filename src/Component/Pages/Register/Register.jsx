import { useRef } from 'react';
import { useState } from 'react';
import './Register.scss'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const emailRef=useRef()
    const passwordRef=useRef()
    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish=()=>{
        setEmail(passwordRef.current.value)
    }
    return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAB5CAMAAACZQJQkAAAAbFBMVEUAAADjCRTnCRTtCRUxAgTTCBPeCRNXBAiyBw/ICBEvAgTMCBKkBg5GAwaRBg3YCBNyBQk/AwV+BQsUAQKEBQxRAwfCCBENAAGZBg0kAQNfBAghAQNLAwarBw9mBAm9BxEbAQIpAgM3AgX1CRW8iuTbAAAEfUlEQVR4nO2Za4OqIBBAEZU031Zq9rDH//+PV2bwWW21d7a+zPmwC4bgURhQhGAYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGI2Totly631DlnBemLM+XcHiudG3bt4d384Kk9eO5TI7CCZanTWHQ7bftMYlUlruuqDWZWjc4FmFPuhCRsZfeJOyOJ26Lr2WGVtgdDqPk4bS7TB5MGrt2D9MH8EvlQ3ZrEKrSllLZnrII2I9UCMvqHEbbXWm1mB9vDVVs0npfN9UVDzenMCn73HZ3O4axkj79gHVcSKRFKqyVx0MrXuc7KmiDRypphrGYHtYsnu9TESlflLyEDTdsxpM8JFA8praz0G1ahDRkYZClUIReUVtIrH1jd7YHW8NPYatYDn1rVcNY10ulAdneOzsqynAdWSYc66GihII2nQFrFvZXqy1qvPatTgSpacNxlyKyw9VurpM4igw7/K0g5eGPxp2VnZcd90Wj7kpWIoXHVTg4HHN5EUp2VdB9YZfdOQquoz6PVLCi/YHXCtmOxUVA4J7ayZPYFK9FAtukG5lYQ0VtVH7QKHJNdoM1eUYZ1MbLyt194VltoUBYYbYjC+sjKsuovWIkKJxb4U1A5jaz08/+YVdcDRZR0N9Wy6R7V6Fmpu1bLeyfRWYmia1+ShXUxtrrW92bhxkP2T60sZSoKnlsN96ruFlvzm0Jk1QbYH1ZM9XOrrh73HSthdRPmRdARDsM1ccrHq9s/s6rM3aML652VhCuQa/GOlU1jtcGOqyJBCFjZsX67kd7pC1ZLnLICSiljlePqMns4rt7oge9FC3HEcaUoh5WxSnP4ty7mVirO15p80uijyF4ib1k1JlrE9Fb5TkE38G7mq7u3kG5tIVbmMcvmRCMEGCu8Bgkj95MrJvNipUvWgo7Oqr724+KTVst+xUS4Yh+sTkp+w2rdt2pJKiUxWOEHn09bbYNhEUC5ZOqt0m88K3xrVC6+ZZFJDVbnQL5nNZ+Ff7NmxxnY26McXbzorYZoNLGC9svzfnGsy6nVS89KNmEVx+v0WO+Xt1YR9r+1gEENHxmorfrvspNZ2CsCV2nGXyBftzJrE11TUIp5D8SltSqxAume6K1EFwVvVkyY+J3VEOLUjVWE39YrvdeiU9fZBgqJlXkn+Ok7+39YWcmN1RqasPXypfuERm+1ufesHllJOYkWepPmbSscTTD7mghM9Toystqabwh3rXD3wOBK2Y604RJyvyiKYBbuPHsAtsXmVmY5g90O1mpkS9yRlfmM1VsNu2yWSlw/HmLgJbu0DPnVdrfbbWf7GcssizZ1mq+r8OD5rnLBCrbq8Csn9jrfXAfEi4JmA3VitTfRAeeNoPHaqJyni2hH05Rml8dV6IX64lN4ht2EluH6gihejK1EcrUT36vw7WNZ/nDa/wE1Z2leHXzz4mx2fezDD2e9AewLS2O1+zuRp+TtlEi2L1w1YZwfnecF/5pVVOdx2NDsy+1OJNVQsSIcwwzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzyD/KTSI0RYZJEAAAAAElFTkSuQmCC" alt="" />
                <button className='loginButton'>Sign in</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership
            </p>
            {!email ? (
            <form className="input">
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </form>
            ) : (
                <form className="input">
                <input type="password" placeholder='password' ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )}
        </div>
    </div>
  )
}

export default Register