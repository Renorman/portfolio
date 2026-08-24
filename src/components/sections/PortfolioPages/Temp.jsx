import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { TempRenders, TempProgress } from '/src/constants/gallery.js'

const TempData = {
  title: 'UIUC Temperature App',
  role: <span><em>Team</em> - Lead Programmer and Lead Designer</span>,
  icons: [{ src: './assets/AboutIcons/Technologies/AndroidStudio.png', alt: 'Android Studio' }, {src: './assets/AboutIcons/Languages/Java.png', alt: 'Java'}],
  splashSrc: './assets/gallery/temp_app/TempAppSplash.png',
  synopsis: <span>

    Internal temperatures across buildings have always been inconsistent. This is especially true for Illinois in those messy months between winter and spring. And when you’re running across campus several times a day trying to catch your next class, you might not be prepared for the climate you’ve committed your next hour and a half to. One second you’re in a chilly morning class, and the next you’re stuck in a blistering evening lecture. How could you possibly prepare for that?

    <br></br>
    <br></br>

    Our temperature-checking app was designed to incorporate a group voting mechanic to collect real-time thermal updates for classrooms all across the University of Illinois Urbana-Champaign’s campus. We conducted user research, built paper prototypes, and designed an interactive coded prototype to show how this app might work, look, and feel if actually put to market.

  </span>,
  tasks: <span>I was deeply involved in the research, design, and programming of our app, frequently leading the project and supporting my teammates in meeting our milestones on time. That being said, my main focus was on designing the home screen and coding out our map screen.</span>,
  renderImages: TempRenders,
  progressImages: TempProgress,
  challenges: [
    { title: 'User Research', body: <span>

      The bulk of our time spent working on this project was dedicated to research and preparation. Starting with a general audience of “people who frequently switch locations throughout the day,” we were able to hone in on college students specifically.

      We then narrowed our scope further to appeal to three specific types of students: 

      <br></br>
      <br></br>

      <ol className="list-decimal pl-5 space-y-1">
        <li><b>The Veteran: </b>A student with a consistent schedule. They’re comfortable and familiar with all the buildings they tend to be in.</li>

        <li><b>The Explorer: </b>A student who enjoys traveling to new and unfamiliar places.</li>

        <li><b>The Cautious:</b>A student who’s very sensitive to surrounding temperatures.</li>
      </ol>

      <br></br>

      When building out interview questions and task-oriented goals, our team struggled with specificity. Our questions tended to be too vague, and our user tasks too general. To amend these issues, we wanted to be specific without being leading. And ultimately, for both our tasks and interview questions, we were able to do so by emphasizing their relation to our project’s goal. 

    </span> },
    { title: 'Home Screen', body: <span>

      Designing the home screen took an extensive number of iterations, with us often reworking and revamping its use of buttons, popups, and overall structure. 

      <br></br>
      <br></br>

      As the first thing users experience when opening our app, we wanted the home screen to be efficient and easy-to-understand. Since we were expecting a portion of our users to use our app whilst actively walking from one class to another, we couldn’t waste their time with confusing design

      <br></br>
      <br></br>

      First things first, we planned out a feature where your home screen would automatically sync with an entered schedule. In other words, upon opening the app, you’ll immediately have access to the temperature information of your next class. This way, users won’t have to juggle navigating the app while walking.

      <br></br>
      <br></br>

      The most difficult aspect of the home screen was getting the voting mechanic just right. Our app’s real-time hour-by-hour temperature estimations hinged on user input. In theory, all of our temperature information would be actively voted on or averaged across the student population. But how could we do that? Asking users point-blank to give their best estimate of any room’s temperature seemed a bit too complicated and tedious. And after trying out a couple of paper prototypes, we ultimately landed on providing users with an anchoring reference point. Given the current outside temperature, users are then prompted to guesstimate via slider how their current surroundings compare.

      
    </span> },
    { title: 'Map Screen', body: <span>
      Transferred from the home screen duty, I was put in charge of building out our map screen’s general mechanics. I took advantage of Google Maps API to create a UI foundation immediately understandable to our average user. But, as a result, it didn’t feel personalized for <em>our </em> app. You could see building locations, sure, and even their internal rooms, but you could do just as well in any map app. 

      <br></br>
      <br></br>

      The key was adding in a temperature calibration element. Each room in each building was marked as being within your ideal temperature, warmer than your ideal temperature, or cooler than your ideal temperature. To make this distinction clear and fun without clogging the map up with words or numbers, an emoji corresponded to each temperature state. Your “ideal” temperature could then be adjusted via a calibration slider on top of the screen, which would update each room’s icon when moved. 

      <br></br>
      <br></br>

      Funnily enough, when brainstorming this idea, I originally leaned towards having a static image represent the calibration mechanic. But, fearing our prototype’s audience wouldn’t fully understand it without a demonstration, I coded a fully functional calibration bar. 
      
    </span> },
  ],
  insights: <span>
    User research is the backbone of any design project. If you don’t know what your audience wants and expects of your project, you’re doomed to fail. It’s really easy to fall back on what <em>you </em> know and what <em>you </em> expect out of the project, but even if you count as a member of your core audience, you’re still just one person. Don’t limit yourself to the whims of a single individual, even if that individual is yourself. In almost every case, more is more. The more information you have on your audience, the better. 
      
    </span>
}

export const Temp = () => <TemplateProj {...TempData} />