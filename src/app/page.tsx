import backgroundImage from "../assets/lakeTaupoSunset.jpg";
import profilePhoto from "../assets/profilePhoto.png";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgb(168 119 119 / 20%)",
          backdropFilter: "blur(45px)",
          borderRadius: "10px",
          padding: "1.5rem 10rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "43%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={profilePhoto.src}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p style={{ color: "white", fontSize: "3rem", marginBottom: "0" }}>
          Hi, I am
        </p>
        <h1
          style={{
            fontSize: "4rem",
            color: "white",
            padding: "0px",
            marginBottom: "3rem",
            marginTop: "0.8rem",
          }}
        >
          Dhairya Trivedi
        </h1>
      </div>
    </div>
  );
}
