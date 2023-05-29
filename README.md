<a href="https://harmonious-sunshine-7478e1.netlify.app/">
    <img src="./public/readme1.png" alt="AfterLeaf logo" title="AfterLeaf" align="right" height="50" />
</a>

# :seedling: AfterLeaf
[AfterLeaf](https://harmonious-sunshine-7478e1.netlify.app/) help you give your plants a heartfelt memorial
before you send them to us to be composted.

You get closure. We give them new life by nourishing our forests and bushlands. You feel okay about killing your plans. It's a win, win, win!

## About this project
- This is 2 days challenge to collaborate with UX/UI as a team to create the website as a design
- The challenge includes a design brief and also the presentation
- Figma: https://www.figma.com/file/ZIH2YxFfHlCWw6p9KNceDo/Collabathon---AfterLeaf?type=design&node-id=1-2
- Project details: https://docs.google.com/document/d/1E5x-oPAeO5AJ3TIPUc3zCNJzl6Zpv-H6pw0PtdArpeM/edit

## Built with
- React.js
- HTML
- CSS/SCSS
- Deployed on Netlify

### Snapshots
|Desktop|Mobile|
|:-:|:-:|
| <img src="./public/desktop.gif" border="0"/> | <img src="./public/mobile.gif" border="0"/> |

---
## :bell: Put it all together

### :bulb: Features:
- Popup component and confirmation.
- Mobile friendly.
- There are sign-up interfaces which match The required conditions:
  ```
  - A first and last name is required
  - A name cannot contain a number
  - A name cannot contain a special character
  - A name must be at least two letters
  - An email address is required        
  - An email address must contain exactly one @
  - An email address must contain at least one full stop (.)
  ```
  Form to check the above conditions.
    ```JavaScript
    <form onSubmit = {_handleSubmit} > 
        <label>
            First name*
            <textarea type="text" name="name" value={firstname}  onChange={_handleFirstNameChange}></textarea>
            {errors.firstname && <span className = 'error-msg'>{errors.firstname}</span>}
        </label>
        <label>
            Last name*
            <textarea type="text" name="name" value={lastname}  onChange={_handleLastNameChange}></textarea>
            {errors.lastname && <span className = 'error-msg'>{errors.lastname}</span>}
        </label>
        <label>
            Email*
            <textarea type="text" name="name" value={email}  onChange={_handleEmailChange}></textarea>
            {errors.email && <span className = 'error-msg'>{errors.email}</span>}
        </label>
        <div>
            <input className = "close-btn" type = "submit" value ="Sign Up"/>
        </div>

    </form>
    ```
    
### :spiral_calendar: Challenges:
- About us and home pages as it was 2 days challenge, adjusting CSS took most of the time spent.
- Component design for the time spent was challenging as it should be simple together with achieving the requirements.
- Hamburger icon to wrap all navbar contents when changing to the mobile screen.

### :book: Lessons:
- When there are limited time and resources, what we should do is prioritising.
- It was fun working with UX/UI team and got more understanding of how they think, what they value, and the way they design.

### :bookmark: Future updates:
- Create a backend utilising Firebase, Supabase, or any providers.
- Reorganise the interface to match the figma design.
- Add more features and improve the code on the sign-up part.
