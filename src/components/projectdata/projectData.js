import AvoglowLogin from "./projectImages/Avoglow Login Page.png";
import AvoglowHome from "./projectImages/Avoglow Home Page.png";
import AvoglowSymptoms from "./projectImages/Avoglow Sympoms Page.png";
import AvoglowCalendar from "./projectImages/Avoglow Calendar Page.png";
import Spotify from "./projectImages/Spotify Top Tracks Project.png";
import Twitter from "./projectImages/twitter clone.png";
import WordleLight from "./projectImages/Wordle Light.png";
import WordleDark from "./projectImages/Wordle Dark.png";
import Pokedex from "./projectImages/pokedex.png";
import KindKitchen1 from "./projectImages/KindKitchen 18.25.49.png";
import KindKitchen2 from "./projectImages/KindKitchen 18.25.56.png";
import KindKitchen3 from "./projectImages/KindKitchen 18.26.04.png";
import KindKitchen4 from "./projectImages/KindKitchen 18.26.24.png";
import CourseCalendar from "./projectImages/CourseCalendar.png";
import Violin from "./projectImages/Susan Lee Violin 2.jpg";
import Violin2 from "./projectImages/susan lee recital flyer.png";

export const projects = [
  {
    project: "Avoglow",
    description: (
      <p>
        Avoglow is a skincare app inspired by Clue. My friends and I created
        this app using React Native. Users can record their daily skin symptoms
        (such as breakouts and dryness), save their logs into a calendar, and
        access skincare tips. We also created support for user authentication
        with Supabase.
      </p>
    ),
    images: [AvoglowLogin, AvoglowHome, AvoglowSymptoms, AvoglowCalendar],
  },
  {
    project: "Top Spotify Tracks",
    description: (
      <p>
        Using React Native, I made an app that created a playlist of a user’s
        top Spotify tracks, utilizing the Spotify API to enable users to connect
        with their account.
      </p>
    ),
    images: [Spotify],
  },
  {
    project: "Twitter Clone",
    description: (
      <p>
        I created a simple Twitter clone using HTML, CSS, and JavaScript. Using
        Node.js and Express.js, I implemented a REST API to interact with a
        MongoDB database to enable users to create a profile, log in, create
        posts, comment on other users’ posts on their feed, and follow or
        unfollow other users.
      </p>
    ),
    images: [Twitter],
  },
  {
    project: "Wordle",
    link: [
      "https://wordle-two-khaki.vercel.app/",
      "https://github.com/suleesan/wordle",
    ],
    description: (
      <p>
        Click the title to try it out! Feeling too impatient to wait every day
        for a new Wordle, I decided to build my own using React. Features
        unlimited plays, light/dark mode, and valid guesses and answers
        according to the actual NYT Wordle. Future improvements: Hard Mode.
      </p>
    ),
    images: [WordleDark, WordleLight],
  },
  {
    project: "Pokedex",
    link: [
      "https://pokedex-one-cyan.vercel.app/",
      "https://github.com/suleesan/pokedex",
    ],
    description: (
      <p>
        Click the title to play with my Pokedex! I'm currently cooking up a
        different project that involves Pokemon, but while I was playing around
        with the PokeAPI, I thought I'd build a super quick Pokedex with React.
        It features Pokemon from Generations I to IV in the Pokedex and has a
        search feature. It fetches Pokemon upon click/search; I also used Redux
        and local storage to save the data and reduce load time. Enjoy!
      </p>
    ),
    images: [Pokedex],
  },
  {
    project: "KindKitchen",
    link: [
      "https://devpost.com/software/openplate",
      "https://github.com/collinjung/kindkitchen",
    ],
    description: (
      <p>
        For TreeHacks 2024, my team and I built KindKitchen using React Native
        and Convex. We aimed to connect patients to cultural, home-cooked meals
        provided by volunteers and allow users to opt-in to shared meal
        experiences to combat loneliness and isolation in their treatment
        journey. Users can specify dietary restrictions and preferences to
        filter meals, request a meal to be delivered, or alternatively if no
        meals are available, chat with an AI chatbot that provides easy-to-cook
        recipes tailored to the user’s restrictions/preferences.
      </p>
    ),
    images: [KindKitchen1, KindKitchen2, KindKitchen3, KindKitchen4],
  },
  {
    project: "Course Calendar",
    link: [
      "https://course-calendar.vercel.app/",
      "https://github.com/suleesan/course-calendar",
    ],
    description: (
      <p>
        This is a simple course planner built with React and Supabase where I
        plan out my course schedules for every quarter. I used to do this on my
        iPad and draw out the classes; solutions exist (ex: Carta, onCourse)
        where they'll automatically plan out quarters for you, but I like the
        manual aspect. Users can add/delete/update classes per quarter, switch
        between quarters, and share their calendars. All data is saved with
        local storage. View mine{" "}
        <a
          href="https://course-calendar.vercel.app/?id=df856d13-5769-4869-af5f-807484548d91"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:bg-gray-100 hover:px-1 rounded-lg"
        >
          here
        </a>
        !
      </p>
    ),
    images: [CourseCalendar],
  },
];

export const musicProjects = [
  {
    project: "Senior Violin Recital",
    link: ["https://youtu.be/1qgSJApeouI?si=U_umKth77j66r8fp"],
    description: (
      <>
        <p>
          After a 3-year hiatus from the violin, I put together a recital for my
          senior year! My repertoire was Tzigane, Franck Violin Sonata, and
          Hubay's Carmen Fantaisie. You can read more about my thoughts{" "}
          <a
            className="text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.susanlee.dev/post/violin"
          >
            here
          </a>
          , but overall, I'm super happy how it turned out. I was admittedly
          really nervous for this performance, but consistent practice,
          reflection, and a lot of work on confronting and fixing my technique
          paid off.
        </p>
        <p className="mt-4">
          I was least familiar with Tzigane before this recital, and
          impressionistic/contemporary music is a style I generally have a hard
          time with. I'm glad I chose this piece because it was uncomfortable
          and pushed my limits both stylistically and technically (left-hand
          pizzicato is maybe my worst nightmare). I was most familiar with
          Franck, yet I think this piece challenged me the most emotionally. The
          3rd and 4th movements were the hardest for me in that regard, but I
          think I grew a lot; I sat with many emotions and learned to add more
          emotional depth to my playing through this piece. Finally, I added
          Carmen to balance out the recital. Despite many famous violin
          renditions of the opera, Hubay's version isn't commonly played, and I
          wanted to include a piece less standard to the usual violin
          repertoire. This was the most technically demanding piece of the
          recital, and since it came at the end of the recital, I really
          struggled the most with stamina for this piece. This piece taught me
          the most about patience.
        </p>
        <p className="mt-4">
          This is the most fulfilling project I've completed during college. I
          learned a lot: consistency, honest confrontations with myself about my
          playing, vulnerability and maturity regarding emotions, patience for
          memorizing and getting passages to settle in my fingers, figuring out
          a good balance for a recital repertoire, understanding the stories of
          each piece and adding my own interpretations to them, listening (to
          myself, my amazing teacher Robin Sharp, and my wonderful pianist Lori
          Lack), taking feedback graciously and applying it to my playing,
          seeking diverse sources of feedback (I went to the SF Opera to
          actually watch Carmen as my playing of the melody should reflect the
          story and the voice as an instrument. Also, I participated in a
          masterclass for the 3rd movement of Franck), and of course, happiness.
          Playing is a gift!
        </p>
      </>
    ),
    images: [Violin, Violin2],
  },
  {
    project: "Pokemon Gold/Silver/Crystal Violin Cover",
    link: ["https://youtu.be/fUDsSFXgPqQ?si=dVLjqvXTnfHX_0Jf"],
    description: (
      <>
        <p>
          Recorded in 2020, I meticulously combed through various
          transcriptions, combined them, and edited them after listening to the
          original soundtrack countless times to create the most accurate cover
          I could. This was one of the times I was grateful for perfect pitch
          because many of the transcriptions I found had errors that I had to
          fix. It was also difficult to piece these together because of
          Acapella's 1 minute limit for videos back then. I also had to edit the
          transcriptions I found as they were usually piano transcriptions and
          had to figure out how to divide them up into different violin parts. I
          poured my soul into this cover and the result is this video!
        </p>
        <p className="mt-4">
          My personal favorite tracks are Violet/Olivine City, the SURF THEME,
          Route 26, and the ending credits.
        </p>
      </>
    ),
    images: [],
  },
  {
    project: "Howl's Moving Castle Violin and Piano Cover",
    link: ["https://youtu.be/imgXrUz7hso?si=FiyEmBLfbnlXUldU"],
    description: (
      <p>
        Also recorded in 2020, this is one of my earlier attempts at creating
        covers (and certainly sounds a bit rougher). I similarly found various
        transcriptions of the theme, combined them, figured out the different
        parts, and edited them for accuracy to create this cover. Fun fact: I
        tuned my G string down to an F for one of the cuts (one of my FAVORITE
        parts of the piece). Can you find it?
      </p>
    ),
    images: [],
  },
  {
    project: "Your Lie in April Chopin Ballade No. 1 Violin/Piano Cover",
    link: ["https://youtu.be/-yIUO15h3zY?si=dzwuWgRCOsRuBx2B"],
    description: (
      <p>
        Also recorded in 2020 (I had a lot of time on my hands). I think this
        one was the most difficult one I put together as I am a much better
        violinist than I am a pianist. I learned the entirety of Chopin's
        Ballade on my own to make this cover, but chose to only record the
        excerpt with the violin (coincidentally also my favorite part of the
        original piano piece as well). Learning the piano part was definitely
        the hardest part of this project. While not perfect, I loved making
        this!
      </p>
    ),
    images: [],
  },
];
