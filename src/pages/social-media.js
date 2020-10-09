import React from "react";
import Emoji from "../components/Emoji.js";
import Card from "../components/Card.js";
import Root from "../components/Root.js";
import CardStack from "../components/CardStack.js";
import imageOne from "../../static/images/one.png";
import imageTwo from "../../static/images/two.png";
import imageThree from "../../static/images/three.png";
import imageFour from "../../static/images/four.png";
import imageFive from "../../static/images/five.png";
import imageSix from "../../static/images/six.png";
import imageSeven from "../../static/images/seven.png";
import imageEight from "../../static/images/eight.png";
import "../sass/main.scss"

let story_image = {
    position: "relative",
    width: "70%",
    left: "15%",
    margin: "10% 0 1em 0",
    borderRadius: "0.75em"
}

export default function Home() {
  return (
    <Root typename="card" page="Social Media.">
      <h3>Graphics for stories &amp; posts below.</h3>
      <p>Do it for the gram. <Emoji name="sparkles" emoji="✨"/></p>
      <br/>
      <CardStack>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageOne} alt="one"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageTwo} alt="two"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageThree} alt="three"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageFour} alt="four"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageFive} alt="five"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageSix} alt="six"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageSeven} alt="seven"/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img style={story_image} src={imageEight} alt="eight"/>
          </Card.Body>
        </Card>
      </CardStack>
    </Root>
  )
}
