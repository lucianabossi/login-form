import './App.css';

const body = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh"
}

const form = {
  backgroundColor: "white",
  borderRadius: "20px",
  boxSizing: "border-box",
  height: "45vh",
  width: "15.6vw",
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)",
}

const title = {
  backgroundColor: "#6FB553",
  fontSize: "16px",
  width: "15.6vw",
  height: "8vh",
  borderRadius: "20px 20px 0 0",
  textAlign: "center",
  lineHeight: "4.5",
  color: "white",
  margin: "0 0 40px 0"
}

const input = {
  display: "block",
  width: "13vw",
  height: "3vh",
  borderRadius: "20px",
  margin: "10px auto",
  border: "none",
  backgroundColor: "#EBEBEB",
  textIndent: "0.2cm",
  fontWeight: "bold"
}

const text = {
  textAlign: "right",
  fontSize: "12px",
  marginRight: "1.5vw",
  color: "gray"
}

const button = {
  backgroundColor: "#6FB553",
  display: "block",
  width: "13vw",
  height: "3vh",
  borderRadius: "20px",
  margin: "2vh auto 8vh",
  border: "none",
  textIndent: "0.2cm",
  fontWeight: "bold",
  color: "#fff"
}

const text2 = {
  textAlign:"center",
  fontSize: "12px",
  marginTop: "0",
}

const colorGray = {
  color: "gray"
}

const colorGreen = {
  color: "#6FB553"
}

const fontBold = {
  fontWeight: "bold"
}

function App() {
  return (
    <div style={body}>
      <form style={form}>
        <h1 style={title}>Sign In</h1>
        <label>          
          <input type="text" name="username" placeholder="Username"  style={input} />
          <input type="password" name="password" placeholder="Password" style={input} />
          <p style={text}> Forgot <span style={colorGreen}>Username / Password?</span></p>
        <button style={button}>SIGN IN</button>
        <p style={{...text2,...colorGray}}>Don't have an account?</p>
        <p style={{...text2,...colorGreen,...fontBold}}>SIGN UP NOW</p>
        </label>
      </form>
    </div>
  );
}

export default App;