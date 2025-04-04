Bamboozled - TECHTONIC 2K25

Bamboozled is a coding challenge game created for TECHTONIC 2K25 at Sinhgad. This game tests 
participants' problem-solving abilities by requiring them to decipher content that has been 
transformed using character substitution based on ASCII values.


Application Flow

 1. Home Page
 --Entry point with event details, rules, and instructions
 --Prize money information and competition overview
 --"Continue" button to proceed to registration

 2. Registration Page
 --Registration form with the following validations:
 --Name field (required)
 --Email field (required, must follow proper email format)
 --Mobile number (required, must be 10 digits starting with 6, 7, 8, or 9)
 --College name
 --Validation to check if email is already registered
 --Link to Login page for returning participants
 **Form submission stores data in the database MongoDB Atlas

 3. Login Page
 --Email and mobilenumber fields
 --Authentication against database records
 --Error handling for incorrect credentials
 --Successful login redirects to instructions page
 **Stores user session/authentication token in the sessions in MongoDB atlas.

 4. Instructions Page
 --Detailed explanation of game rules
 --Step-by-step guide on how to play
 --Information about game levels and difficulty
 --Instructions for decoding techniques
 --"Start Game" button to proceed to the main game

 5. Main Game Page
 --Player information display
 --Timer countdown (20 minutes)
 --Two randomly selected challenges:
 --Equation problem (provides the ASCII shift value)
 --Scrambled paragraph problem (to be decoded)
 --Text input area with character transformation
 **Utility tools:
 --Calculator
 --ASCII reference table
 --Download functionality for solution submission with the player name.

 6. Thank You Page
 --Completion message
 --Acknowledgment of participation
 --Information about results announcement
 --Possibly event co-ordinator names and event pictures.

 7. Results Page (Admin Only)
 --Restricted to administrators
 --Displays participant results according to time talken and accuracy of paragraph.
 --Scoring and ranking information
 --Download functionality for results


 Authentication & Middleware
 Middleware Protection

 1. Authentication Middleware
 --Prevents unauthorized access to protected routes
 --Redirects unauthenticated users back to login page
 --Validates session tokens/authentication status

 2. Route Restrictions
 --If user is logged in, they cannot access:
    Login page
    Registration page
    Home page
 --If user is not logged in, they cannot access:
    Instructions page
    Main game
    Thank you page
    Results page is strictly limited to admin users

 3. Game State Management
 --Prevents refreshing or leaving the game page accidentally
 --Stores game progress in case of browser issues


 Technical Implementation
 --Core Game Mechanics
    Character Transformation: When typing in the solution area, characters are automatically 
    transformed according to:
        Level 1: Shifts alphabetic characters by a value based on the equation answer
        Level 2: Shifts all ASCII characters (32-126) by the equation answer

 Database Structure
    --Users table:

    User ID (primary key)
    Name
    Email (unique)
    Mobile number
    Collage Name
    Other College Name

 Anti-Cheat Measures
 --Copy, cut, and paste functionality is disabled
 --Right-click context menu is disabled
 --F5 and Ctrl+R (page refresh) are prevented
 --Page navigation/closing warnings are implemented


 How to Play
 1. Register or log in with your credentials
 2. Read the instructions carefully
 3. Start the game when ready
 4. Review both the equation problem and the scrambled paragraph
 5. Solve the equation problem to understand the character shift value
 6. Type your solution to decode the paragraph in the solution text area
 As you type, characters will be automatically transformed
 Use the ASCII button and calculator for assistance if needed
 7. Download your solution before the timer expires if time expires file will automatically downloads.
 8. Choose your preferred file format for submission

Server Configuration
 Backend Requirements

 --Technology Stack: Node.js with Express.js
 --Database: MongoDB Atlas for cloud-based database

 Session Management:
 --express-session for handling user sessions in 1hour.
 --connect-mongo for storing sessions in MongoDB

 Authentication:
 --Local authentication with passwordless options
 --Session cookies for maintaining user state

 Data Processing:
 --body-parser for request parsing

 Security Features:
 --CSRF protection
 --Prepared statements for database operations
 --Input validation and sanitization


 Frontend Dependencies
 Core Technologies:
 --HTML5 for structure
 --CSS3 for styling (with mobile-responsive design)
 --JavaScript (ES6+) for client-side functionality

 Form Validation:
 --Client-side validation libraries
 --Custom validation rules for specific fields

 State Management:
 --LocalStorage for persisting game state
 --Session tracking for user activity


 Deployment Instructions

 1. Clone the repository
 git clone https://github.com/vitthalkendre29/Bamboozled-V-2
 cd Bamboozled-V-2

 2. Install dependencies
 npm install

 3. Configure environment variables
 change the url of mangoDB atlas in the route.js and db.js files.
 change the from redirection in login.js,register.js,route.js
 
 4. Run database migrations
 npm run db:setup

 5. Start the development server
 npm run dev

 6. For production deployment
 npm run build
 npm start
 
 Development Notes
 --Implement CSRF protection for all forms
 --Use prepared statements for database operations to prevent injection attacks
 --Implement proper error logging and monitoring
 --Test all validation rules thoroughly across different browsers
 --Ensure mobile responsiveness with media queries and flexible layouts
 --Add service worker for offline capabilities if required
 --Implement rate limiting to prevent brute force attacks

 Contact Information:
 email: kendrevitthal225@gmail.com

