import React from 'react'

function LoginForm() {
    
    return (
        <body className='FormAll'>
            <section class='login' id='login'>
                <div class='head'>
                <h1 class='company'>.comUnity</h1>
                </div>
                <p class='msg'>Stay connected</p>
                <div class='form'>
                    <form>
                <input type="text" placeholder='Username' class='text' id='username' required></input>
                <input type="password" placeholder='••••••••••••••' class='password'></input>
                <a href="#" class='btn-login' id='do-login'>Login</a>
                <a href="#" class='forgot'>Forgot?</a>
                {/*<input type="checkbox" class="rememberMeButton" value="lsRememberMe" id="rememberMe"></input>
                     <label for="rememberMe" class="rememberMe">Remember me</label>*/}
                    </form>
                </div>
            </section>
</body>

    )
    }
export default LoginForm;