import AdjStore from "../assets/images/adjStore.avif"
import TicketBookingShow from "../assets/images/TicketBookingShow.png"
import MoneyManagementApp from "../assets/images/MoneyManagementApp.png"
import MovieDiscovery from "../assets/images/MovieDiscovery.png"
import CodeEditor from "../assets/images/CodeEditor.png"
import ContactManager from "../assets/images/ContactManager.png"
import RestCountryApp from "../assets/images/rest-country-app-image.avif"
import ExpenseTracker from "../assets/images/expense-tracker-image.avif"
import ToDo from "../assets/images/toDo.jpg"

export const projects = [
    {
      title: "AdjStore",
      description: "This Project is a React application that represents a e-commerce website.Implemented core e-commerce features including product browsing, cart management, and user authentication. Integrated Clerk for secure user authentication and session management.",
      techStack: "ReactJS, Tailwind CSS, styled-components, clerk",
      image: AdjStore,
      liveUrl: 'https://adj-store.netlify.app',
      githubUrl: "https://github.com/Adarsh-jai-29/AdjStore",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Rest Country App",
      description: "Developed a comprehensive Rest Country App . The app allows users to explore country details, search for countries, and view country flags. Includes a toggle for switching between light and dark themes for a better user experience.",
      techStack: "React, Tailwind CSS, REST API",
      image: RestCountryApp,
      liveUrl: "https://adarshjai-rest-country-api.netlify.app/",
      githubUrl: "https://github.com/Adarsh-jai-29/Rest-country-using-react",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Movie Discovery App",
      description: "The Movie Discovery App is a React-based web application that allows users to search, explore, and discover movies with ease. Implemented code splitting with React.lazy and Suspense to dynamically load components only when needed, reducing the app’s initial load time..",
      techStack: "React, Tailwind, Vanilla CSS, IMDB API",
      image: MovieDiscovery,
      liveUrl: "https://adarshjai-movie-discovery.netlify.app/",
      githubUrl: "https://github.com/Adarsh-jai-29/6_TMDB_Movies",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Money Management App",
      description: "Built a money management application using Redux for state management. The app allow users to perform credit and debit actions and maintain a transaction history with details such as time, date, and transaction type (credit/debit).",
      techStack: "React, Redux, Tailwind CSS",
      image: MoneyManagementApp,
      liveUrl: "https://moneymanagementsystem.netlify.app",
      githubUrl: "https://github.com/Adarsh-jai-29/5_MoneyManagementSystem",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Ticket Booking System",
      description: "A Movie Ticket Booking System is an interactive web application that allows users to select movies, choose showtimes, pick seats, and purchase tickets online. This project involves simulating a real-world cinema booking system, providing a streamlined user experience from browsing movies to finalizing the transaction. It’s a great opportunity to build a comprehensive system that includes front-end.",
      techStack: "ReactJS, Tailwind CSS, Lucid React",
      image: TicketBookingShow,
      liveUrl: "https://adarshjai-ticketbookingsystem.netlify.app",
      githubUrl: "https://github.com/Adarsh-jai-29/7_TicketBookingSystem",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Expense Tracker",
      description: "Developed a comprehensive Expense Management System featuring full CRUD operations for all your Expenses, and advanced categorization based on your needs.",
      techStack: "React, Tailwind CSS",
      image: ExpenseTracker,
      liveUrl: "https://adarshjai-expense-tracker.netlify.app",
      githubUrl: "https://github.com/Adarsh-jai-29/Expense-Tracker",
      gradient: "from-blue-500 to-purple-500"
    }, 
    {
      title: "CodeEditor",
      description: "The editor is fully functional and ready for frontend development work. Each component is independent and can be easily modified or extended. The modular structure makes it easy to add new features like syntax highlighting, code formatting, or additional language support.",
      techStack: "ReactJS, Tailwind CSS, React-RnD",
      image: CodeEditor,
      liveUrl: "https://adarshjai-codeeditor.netlify.app",
      githubUrl: "https://github.com/Adarsh-jai-29/pr_2_codeEditor",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Contact Manager",
      description: "Built a contact card app where users can enter contact details (name, phone number, email) into a form. When the user submits the form, the contact is added to a list and displayed on the screen.",
      techStack: "React, Tailwind CSS",
      image: ContactManager,
      liveUrl: "https://adarshjai-contactmanager.netlify.app",
      githubUrl: "https://github.com/Adarsh-jai-29/ContactCard",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "ToDo App",
      description: "A simple yet powerful To-Do App built using Vanilla JavaScript, designed to manage daily tasks efficiently. Implemented localStorage to persist tasks, ensuring that the data remains available even after refreshing or closing the browser.",
      techStack: "HTML, CSS, JavaScript",
      image: ToDo,
      liveUrl: "https://adarshjai-to-do.netlify.app/",
      githubUrl: "https://github.com/Adarsh-jai-29/ToDoList",
      gradient: "from-blue-500 to-purple-500"
    },
  ];