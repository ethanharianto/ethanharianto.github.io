import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { Spotify } from "react-spotify-embed";
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPSJi9U4ydqq12qeo5nQUMcEqlXimEAoI",
  authDomain: "portfolio-f072b.firebaseapp.com",
  projectId: "portfolio-f072b",
  storageBucket: "portfolio-f072b.appspot.com",
  messagingSenderId: "30671997925",
  appId: "1:30671997925:web:7e659ee73f9781596b7d0c",
};
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSong(db) {
  const spotifyDocRef = doc(db, "spotify", "fav");

  try {
    const docSnapshot = await getDoc(spotifyDocRef);

    if (docSnapshot.exists()) {
      const songData = docSnapshot.data();
      console.log("Song data:", songData);
      return songData;
    } else {
      console.log("Document does not exist.");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
}

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyLink:
        "https://open.spotify.com/track/6Ec5LeRzkisa5KJtwLfOoW?si=b08c5f55ec214045",
    };
  }

  async componentDidMount() {
    const songData = await getSong(db);
    if (songData && songData.spotifyLink) {
      this.setState({
        spotifyLink: songData.spotifyLink,
      });
    }
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="80px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />

                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
                <div className="spotify-container">
                  <h1
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.text }}
                  >
                    The song I can't stop listening to right now:
                  </h1>
                  <Spotify
                    wide
                    link={this.state.spotifyLink}
                    style={{ height: "80%" }}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
