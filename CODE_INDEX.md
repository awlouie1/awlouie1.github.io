	  
	___  ___          _       _                 
	|  \/  |         | |     | |                
	| .  . | ___   __| |_   _| | __ _ _ __ __ _ 
	| |\/| |/ _ \ / _` | | | | |/ _` | '__/ _` |
	| |  | | (_) | (_| | |_| | | (_| | | | (_| |
	\_|  |_/\___/ \__,_|\__,_|_|\__,_|_|  \__,_|
                                                                            
                                                                            
# Modulara Code Index
Directories and their relevant files will be briefly documented here for their description, purpose, and explanation of their implementation.
  

## Table of Contents (🠉)
### Components
 >1. [AboutUs](#AboutUs)
 >2. [BackgroundFade](#BackgroundFade)
 >3. [Card](#Card)
 >4. [CardShow](#CardShow)
 >5. [ContactForm](#ContactForm)
 >6. [Footer](#Footer)
 >7. [Header](#Header)
 >8. [Landing](#Landing)
 >9. [MediaShow](#MediaShow)
 >10. [Mission](#Mission)
 >11. [ProcessSection](#ProcessSection)

### Images
>1. [images--](#Images)

#### <a id="AboutUs">AboutUs</a> [🠉](#table-of-contents-)
 - Page for describing who, what, where, why, when
 - Made for organization of content
 - Code involved: Header component

#### <a id="BackgroundFade">BackgroundFade</a>  [🠉](#table-of-contents-)
- Animation for the Landing page that fades four images
- Made to separate as much logic code (i.e., JavaScript) from presentational code (i.e. HTML) as possible
- Code/API involved: GSAP (timelines used to control animation), React lifecycle methods

#### <a id="Card">Card</a>  [🠉](#table-of-contents-)
- Box for the user to click and navigate through images/videos/media on the Landing page
- Made to break down a section while having the ability to be used elsewhere
- Code/API involved: GSAP (timelines, conditional effects), React hooks, global variables (window)

#### <a id="CardShow">CardShow</a>  [🠉](#table-of-contents-)
- Displays cards and arrow boxes for user interaction on the Landing page
- Made to control and create necessary cards, which would be connected to relevant images
- Code/API involved: GSAP (initializes timeline?), Card component

#### <a id="ContactForm">ContactForm</a>  [🠉](#table-of-contents-)
- Shows a modal for messaging and email addresses
- Made allow communication between visitors and the Modulara team
- Code/API involved: Formik (forms), Yup (validation), Firebase + database (initial endpoint for receiving messages)

#### <a id="Footer">Footer</a>  [🠉](#table-of-contents-)
- Shows text links to the many places of the site
- Made to complete the appearance for a website
- Code involved: HTML

#### <a id="Header">Header</a>  [🠉](#table-of-contents-)
- Shows the Modulara logoo and site's links
- Made to be a core component of the website for navigation
- Code/API involved: Material UI (buttons), React Router DOM

#### <a id="Landing">Landing</a>  [🠉](#table-of-contents-)
- Annihilates the user with Modularity
- Made to clickbait the user into cult services
- Code/API involved: BackgroundFade component, ContactForm component, Header component

#### <a id="MediaShow">MediaShow</a>  [🠉](#table-of-contents-)
- Presents images/videos/media to the user depending on the selected card
- Made to control media display without regards to Card components
- Code/API: GSAP (timelines), React hooks

#### <a id="Mission">Mission</a>  [🠉](#table-of-contents-)
- States Modulara's mission in a light design
- Made to offer possible website views for specific pages
- Code/API: Header component

#### <a id="ProcessSection">ProcessSection</a>  [🠉](#table-of-contents-)
- Showcases cards and their media depending on user selection
- Made to wrap both media display and card interaction
- Code/API: CardShow component, MediaShow component

#### <a id="Images">Images</a>  [🠉](#table-of-contents-)
- Stores and organizes images (e.g., directories used for MediaShow or BackgroundFade)
- Made to hold images while standardizing image names for efficient replacement
-  In src/index.css, the directory paths for used images are found under " background-image ". Images can be replaced in the images folder or adjusted (through CSS) under their names, which should be relevant acronyms. 
- The following images are used:
 -- ADU1, ADU2, ADU3, ADU4
 -- MP1, MP2, MP3, MP4
 -- AboutUs
 -- MissionWide