export interface Project {
  hidden: boolean;
  featured?: boolean;
  title: string;
  shortDescription: string;
  longDescription?: string[];
  link?: string;
  github?: string;
  dribbble?: string;
}

export const projects: Project[] = [
  {
      "hidden": false,
      "title": "IsTrumpStillF*ingPresident?",
      "shortDescription": "Answers the question. Attempts to provide some joy.",
      "link": "https://istrumpstillfuckingpresident.co",
      "github": "https://github.com/thalida/istrumpstillfuckingpresident"
  },
  {
      "hidden": false,
      "title": "blerDCon",
      "shortDescription": "BlerDCon will be the first nerd convention to ever be truly universal. We’re structured to cater to minority nerds in all genres. To ensure that the inclusive experience we offer has something for you.",
      "link": "http://blerdcon.com"
  },
  {
      "hidden": false,
      "title": "ShapeConnector",
      "shortDescription": "A puzzle game where the goal is to get from one shape to another in a specified amount of moves.",
      "link": "http://shapeconnector.com",
      "github": "https://github.com/thalida/ShapeConnector",
      "dribbble": "https://dribbble.com/thalida/projects/307956-ShapeConnector"
  },
  {
      "hidden": false,
      "title": "CiphersCodes",
      "shortDescription": "ciphers.codes is a ciphers translator which will encode + decode a given piece of text.",
      "link": "http://ciphers.codes",
      "github": "https://github.com/thalida/ShapeConnector",
      "dribbble": "https://dribbble.com/thalida/projects/307949-EncodeDecode"
  },
  {
      "hidden": true,
      "title": "FancyCard",
      "shortDescription": "Various demos of my personal website (thalida.com) developed in various frameworks and methods. A new demo will be added as the front-end development landscape changes, and will showcase the new techniques that have become part of the modern standard.",
      "link": "https://github.com/thalida/FancyCard",
      "github": "https://github.com/thalida/FancyCard",
      "dribbble": "https://dribbble.com/shots/2303709-Personal-Website"
  },
  {
      "hidden": false,
      "title": "WordBird",
      "shortDescription": "A chrome plugin which will replace any words you choose with another one.",
      "link": "https://github.com/thalida/WordBird",
      "github": "https://github.com/thalida/WordBird"
  },
  {
      "hidden": false,
      "title": "WelcomeBot",
      "shortDescription": "A slack bot which will greet new members to a channel with a basic introduction and a way to find out more information.",
      "link": "https://github.com/thalida/WelcomeBot",
      "github": "https://github.com/thalida/WelcomeBot"
  },
  {
      "hidden": true,
      "featured": true,
      "title": "Live-ish Scene",
      "shortDescription": "",
      "longDescription": [
        "The Live-ish Scene <span class=\"hidden-mobile\">on the left</span> <span class=\"visible-mobile\">at the top</span> automatically updates throughout the day. This project was a very fun experiment for myself, and is something that I find myself coming back to and making little tweaks and improvements on every few months.",
        "There's a lot going on in the scene, and my intial description was 6 paragraphs, so to mention just two things: the sun &amp; moon rotate around like the hands of a clock, and this project is called \"live-ish\" because I ask for weather data about twice an hour and time data every minute.",
        "Basically, everything is dynamic and changes based on time, weather, number of visits, if mercury is in retrograde. Well, not the last part. But, you get the idea. Stuff moves. Text Changes. Cool stuff. Oh, and I made the graphics."
      ]
  }
]
