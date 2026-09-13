(() => {
  "use strict";

  /* =======================================================
     ERA DATA
     Atmospheric home-page previews, not a historical database.
     ======================================================= */

  const ERAS = [
    {
      year: 1960,
      title: "THE SEEDS OF A CONNECTED WORLD",
      description:
        "The internet doesn't exist yet, but the ideas, research and technology that will eventually connect the world are beginning to emerge.",
      introduction:
        "The foundations of a connected world are beginning to form.",
      categories: ["TECHNOLOGY", "RESEARCH", "CULTURE", "EVENTS"],
      theme: "early",
      accent: "#83c5ff",
      secondary: "#8d7dff",
      symbol: "cpu",
      shortLabel: "ORIGIN",
      signal: "ANALOG → DIGITAL",
      browserTitle: "CONNECTION LAB",
      address: "research://a-connected-world",
      windowHeading: "A WORLD WAITING TO CONNECT.",
      screenStatus: "CONNECTING...",
      screenLine: "THE IDEAS ARE BEGINNING...",
      backWindow: "SIGNAL RESEARCH",
      frontWindow: "EARLY NETWORKS",
      web: {
        system: "RESEARCH TERMINAL 01",
        chrome: "MAINFRAME CONSOLE / BATCH LINK",
        address: "research://origin-node/session-01",
        host: "NODE 01 / ORIGIN",
        signal: "CARRIER DETECTED",
        overview: {
          heading: "A WORLD WAITING TO CONNECT.",
          line:
            "There is no web yet — only rooms of machines, stacks of cards, and researchers learning to speak across distance.",
          facts: [
            ["LINK", "BATCH TERMINAL"],
            ["STORAGE", "PUNCH CARD"],
            ["OPERATORS", "4 STATIONS"]
          ]
        },
        sections: {
          WEB: {
            meta: "FILE INDEX",
            title: "THE WEB DOES NOT EXIST YET.",
            line:
              "Pages are files. Links are references written in someone's notebook.",
            items: [
              "A shared file index, updated by hand",
              "No addresses — only machine room numbers",
              "Every connection is scheduled in advance"
            ]
          },
          MUSIC: {
            meta: "TAPE ARCHIVE",
            title: "SIGNALS, NOT STREAMS.",
            line:
              "Sound is measured, printed and stored on reels that weigh more than the terminal.",
            items: [
              "Waveforms printed onto paper",
              "Radio still carries the culture",
              "Audio kept on magnetic tape"
            ]
          },
          GAMES: {
            meta: "TEXT MODES",
            title: "GAMES RUN AFTER HOURS.",
            line:
              "Play happens when the machine is finally free, in characters on a glowing line.",
            items: [
              "Prompts typed at a shared terminal",
              "No graphics beyond typed characters",
              "Sessions squeezed between real work"
            ]
          },
          SOCIAL: {
            meta: "TERMINAL MAIL",
            title: "A SMALL, KNOWN NETWORK.",
            line:
              "Everyone on the project knows everyone. Messages wait for the next session.",
            items: [
              "Notes left at the terminal",
              "A network you could count on one hand",
              "Replies that arrive the next day"
            ]
          },
          DESIGN: {
            meta: "LINE PRINTER",
            title: "FORM FOLLOWS THE MACHINE.",
            line:
              "Interfaces are limited by what a printer can draw, so structure leads.",
            items: [
              "Layouts set by the width of a line",
              "Letterforms chosen by the hardware",
              "Diagrams drawn by hand first"
            ]
          },
          RESEARCH: {
            meta: "LAB NOTES",
            title: "THE ORIGINAL PURPOSE.",
            line:
              "Papers move between labs faster than the hardware that will one day carry them.",
            items: [
              "Findings circulated as printed papers",
              "Protocols written before networks exist",
              "Ideas shared in long meetings"
            ]
          },
          CULTURE: {
            meta: "SPACE AGE",
            title: "THE COMPUTER AS A SYMBOL.",
            line:
              "Machines are photographed like monuments, and the future is a noun everyone uses.",
            items: [
              "Computers filmed as icons of progress",
              "Space-age optimism in every poster",
              "The future imagined as a single room"
            ]
          },
          EVENTS: {
            meta: "LOG ENTRIES",
            title: "MILESTONES IN A QUIET ROOM.",
            line:
              "The biggest steps happen in rooms where almost nobody is watching.",
            items: [
              "First messages between distant machines",
              "Time-sharing shown to small crowds",
              "Standards agreed one meeting at a time"
            ]
          }
        }
      }
    },
    {
      year: 1995,
      title: "THE WEB GOES PUBLIC",
      description:
        "A modem breaks the silence. Home pages open like little doors, and following a blue link feels like discovering another world.",
      introduction:
        "The connection is slow. The possibilities are suddenly everywhere.",
      categories: ["WEB", "TECHNOLOGY", "DESIGN", "CULTURE"],
      theme: "dialup",
      accent: "#77dded",
      secondary: "#6485ff",
      symbol: "browser",
      shortLabel: "OPEN WEB",
      signal: "DIAL-UP DREAMS",
      browserTitle: "WELCOME.WINDOW",
      address: "web://your-first-home-page",
      windowHeading: "WELCOME TO THE INTERNET!",
      screenStatus: "DIALING...",
      screenLine: "A NEW WORLD IS LOADING...",
      backWindow: "EARLY WEB",
      frontWindow: "DIGITAL WORLD",
      web: {
        system: "HOME CONNECTION 95",
        chrome: "FIRST BROWSER / 28.8K",
        address: "http://www.first-home-page.net/index.html",
        host: "DIAL-UP / LINE 1",
        signal: "CONNECTING AT 28.8 KBPS",
        overview: {
          heading: "WELCOME TO THE INTERNET!",
          line:
            "Home pages open like little doors, and following one blue link can hold the phone line for an hour.",
          facts: [
            ["MODEM", "28.8 KBPS"],
            ["LINE", "PHONE / SHARED"],
            ["PAGES", "HAND-CODED"]
          ]
        },
        sections: {
          WEB: {
            meta: "HOME PAGES",
            title: "EVERY PAGE IS SOMEONE'S ROOM.",
            line:
              "Sites are built by hand and signed at the bottom like a note.",
            items: [
              "Under construction signs everywhere",
              "A visitor counter near the footer",
              "Guestbooks instead of comments"
            ]
          },
          MUSIC: {
            meta: "SOUND CLIPS",
            title: "AUDIO THAT MADE YOU WAIT.",
            line: "A three-minute song takes longer than that to arrive.",
            items: [
              "Clips downloaded in the background",
              "Playlists were folders on a desk",
              "Lyrics typed out by fans"
            ]
          },
          GAMES: {
            meta: "SHAREWARE",
            title: "DEMOS AND SHAREWARE.",
            line:
              "Games arrive in pieces, passed between people who trust each other.",
            items: [
              "Download bars that run all night",
              "Disks traded at school",
              "High scores kept on paper"
            ]
          },
          SOCIAL: {
            meta: "CHAT ROOMS",
            title: "LATE NIGHT, ONE LINE AT A TIME.",
            line:
              "A handful of strangers, one channel, and no way to scroll back.",
            items: [
              "Rooms with six people in them",
              "Signing off felt like leaving a place",
              "Everyone used a nickname"
            ]
          },
          DESIGN: {
            meta: "RAW HTML",
            title: "BOLD, LOUD, PERSONAL.",
            line:
              "Nobody agreed on anything, and that was the best part.",
            items: [
              "Tiled backgrounds and bright rules",
              "Animated icons in every corner",
              "Tables used as scaffolding"
            ]
          },
          RESEARCH: {
            meta: "DIRECTORIES",
            title: "FINDING THINGS BY HAND.",
            line: "Discovery is a list curated by a person who cared.",
            items: [
              "Directories edited by volunteers",
              "Search meant knowing the right site",
              "Links traded like recommendations"
            ]
          },
          CULTURE: {
            meta: "FIRST ONLINE",
            title: "BEING ONLINE WAS AN EVENT.",
            line:
              "The connection has a sound, and everyone in the house knows it.",
            items: [
              "The modem announced your arrival",
              "Magazines printed web addresses",
              "The internet was somewhere you went"
            ]
          },
          EVENTS: {
            meta: "GOING PUBLIC",
            title: "THE PUBLIC ARRIVES.",
            line:
              "Ordinary people start building pages for the very first time.",
            items: [
              "Home pages printed onto cards",
              "Sites built by people, not companies",
              "Traffic counted in daily hits"
            ]
          }
        }
      }
    },
    {
      year: 2000,
      title: "THE WEB ENTERS THE MAINSTREAM",
      description:
        "Inbox greetings, portal pages and late-night chats. The family computer becomes a doorway to a much bigger neighborhood.",
      introduction:
        "The future has an inbox, an away message, and a place on your desktop.",
      categories: ["WEB", "MUSIC", "GAMES", "SOCIAL"],
      theme: "desktop",
      accent: "#a2b4ff",
      secondary: "#7187ef",
      symbol: "mail",
      shortLabel: "PORTALS",
      signal: "YOU HAVE A CONNECTION",
      browserTitle: "DESKTOP GATEWAY",
      address: "portal://the-new-millennium",
      windowHeading: "YOUR WORLD. NOW ONLINE.",
      screenStatus: "SIGNING IN...",
      screenLine: "THE DESKTOP IS A DOORWAY...",
      backWindow: "MAIL / INBOX",
      frontWindow: "THE WEB PORTAL",
      web: {
        system: "DESKTOP GATEWAY 2000",
        chrome: "PORTAL BROWSER / HOME EDITION",
        address: "http://www.deskportal.net/start",
        host: "DESKTOP / FAMILY COMPUTER",
        signal: "LINE BUSY / CONNECTED",
        overview: {
          heading: "YOUR WORLD. NOW ONLINE.",
          line:
            "News, weather and mail share one screen, and the family computer becomes the front door.",
          facts: [
            ["SESSION", "DIAL-UP / SHARED"],
            ["INBOX", "1 NEW GREETING"],
            ["DESKTOP", "FULL OF ICONS"]
          ]
        },
        sections: {
          WEB: {
            meta: "PORTAL PAGE",
            title: "THE FRONT DOOR TO EVERYTHING.",
            line:
              "You don't search yet — you start on a page someone arranged for you.",
            items: [
              "News, weather and mail on one screen",
              "Links to links to links",
              "Homepages set as the starting line"
            ]
          },
          MUSIC: {
            meta: "FILE SHARING",
            title: "FILES WITH NAMES YOU TRUSTED.",
            line:
              "Songs travel as files, renamed by hand, traded between strangers.",
            items: [
              "Tracks renamed and re-tagged by hand",
              "Transfers measured in minutes",
              "Playlists burned onto discs"
            ]
          },
          GAMES: {
            meta: "LAN NIGHTS",
            title: "MULTIPLAYER, IN ONE ROOM.",
            line: "The network is a cable running between desks.",
            items: [
              "Computers carried into one room",
              "Clans with their own websites",
              "Patches downloaded before playing"
            ]
          },
          SOCIAL: {
            meta: "BUDDY LIST",
            title: "AWAY MESSAGES AND BUDDY LISTS.",
            line:
              "A status line says more about you than a profile ever could.",
            items: [
              "Away messages written like diary entries",
              "Friends ranked in a visible list",
              "Group chats that never really ended"
            ]
          },
          DESIGN: {
            meta: "WEB 1.0",
            title: "STRUCTURED, BOXED, SHINY.",
            line:
              "Everything lives inside a box, and every box has a border.",
            items: [
              "Rounded corners and drop shadows",
              "Nested tables holding the layout",
              "An intro screen before the content"
            ]
          },
          RESEARCH: {
            meta: "SEARCH BOX",
            title: "SEARCH BECOMES A VERB.",
            line: "Ten blue links and a guess is still a kind of literacy.",
            items: [
              "Results ranked by simple guesses",
              "Forums holding the real answers",
              "Bookmark folders growing unchecked"
            ]
          },
          CULTURE: {
            meta: "FAMILY DESKTOP",
            title: "THE DESKTOP AS A ROOM.",
            line:
              "The computer sits where everyone can see it — and so does your taste.",
            items: [
              "Wallpapers chosen like posters",
              "Screensavers as a personality",
              "One machine for the whole house"
            ]
          },
          EVENTS: {
            meta: "NEW MILLENNIUM",
            title: "A CENTURY TURNS OVER.",
            line:
              "Everyone builds a page at once, then waits to see who visits.",
            items: [
              "Sites rebuilt for the new year",
              "Inboxes full of forwarded mail",
              "The internet entering everyday speech"
            ]
          }
        }
      }
    },
    {
      year: 2005,
      title: "THE RISE OF THE SOCIAL WEB",
      description:
        "Your profile is a place. Your playlist is a personality. Blogs, shared videos and blinking messages make the web feel like us.",
      introduction:
        "Make a profile. Leave a comment. Find your people.",
      categories: ["SOCIAL", "WEB", "MUSIC", "CULTURE"],
      theme: "social",
      accent: "#d19bff",
      secondary: "#f08ccf",
      symbol: "network",
      shortLabel: "SOCIAL",
      signal: "LESS BROWSING. MORE BELONGING.",
      browserTitle: "PERSONAL SPACE",
      address: "social://make-yourself-at-home",
      windowHeading: "YOU ARE NOT ONLINE ALONE.",
      screenStatus: "FRIENDS ONLINE...",
      screenLine: "THE WEB IS GETTING PERSONAL...",
      backWindow: "VIDEO / BLOGS",
      frontWindow: "FRIENDS ONLINE",
      web: {
        system: "PERSONAL SPACE 05",
        chrome: "SOCIAL BROWSER / PROFILE MODE",
        address: "http://www.personal-space.net/profile",
        host: "PROFILE / ONLINE",
        signal: "12 FRIENDS ONLINE",
        overview: {
          heading: "YOU ARE NOT ONLINE ALONE.",
          line:
            "Your profile is a place, your playlist is a personality, and comments arrive faster than posts.",
          facts: [
            ["PROFILE", "EDITED TODAY"],
            ["COMMENTS", "3 NEW"],
            ["PLAYLIST", "ON REPEAT"]
          ]
        },
        sections: {
          WEB: {
            meta: "BLOGS",
            title: "BLOGS AND PERSONAL SITES.",
            line:
              "Pages are written like letters, and everyone is publishing one.",
            items: [
              "Posts written in the first person",
              "Blogrolls used as recommendations",
              "Feeds checked every morning"
            ]
          },
          MUSIC: {
            meta: "PROFILE SONG",
            title: "YOUR PLAYLIST IS YOUR PERSONALITY.",
            line:
              "A song starts playing the moment someone visits, whether they asked or not.",
            items: [
              "A profile song that auto-plays",
              "Bands found through friends",
              "Mixtapes rebuilt as playlists"
            ]
          },
          GAMES: {
            meta: "BROWSER GAMES",
            title: "THE BROWSER BECOMES AN ARCADE.",
            line: "Short games, endless retries, a high score on your wall.",
            items: [
              "Games loaded in a browser tab",
              "Scores posted where friends can see",
              "Mods shared through forums"
            ]
          },
          SOCIAL: {
            meta: "FRIENDS",
            title: "PROFILES BECOME PLACES.",
            line: "You decorate a room other people can walk into.",
            items: [
              "Top friends, ranked in public",
              "Comments left like notes",
              "Walls full of inside jokes"
            ]
          },
          DESIGN: {
            meta: "CUSTOM SKINS",
            title: "PERSONAL, CHAOTIC, YOURS.",
            line:
              "Layouts change every week because nobody has agreed on the rules.",
            items: [
              "Custom backgrounds and cursors",
              "Widgets added until the page broke",
              "Layouts edited every few days"
            ]
          },
          RESEARCH: {
            meta: "WIKIS",
            title: "WIKIS AND FORUM THREADS.",
            line:
              "Strangers edit the answers, and long threads become the archive.",
            items: [
              "Answers edited by whoever shows up",
              "Threads that run for years",
              "Sources argued over in comments"
            ]
          },
          CULTURE: {
            meta: "VIDEO",
            title: "VIDEO GOES PUBLIC.",
            line:
              "Clips travel long before anyone works out what they are for.",
            items: [
              "Videos shared before they were polished",
              "Catchphrases crossing overnight",
              "Everyone learning to embed"
            ]
          },
          EVENTS: {
            meta: "VIRAL YEARS",
            title: "THE WEB GETS AN AUDIENCE.",
            line:
              "One clip can be seen by more people than a television slot.",
            items: [
              "Videos passing a million views",
              "Comments becoming the main event",
              "Being online turning ordinary"
            ]
          }
        }
      }
    },
    {
      year: 2010,
      title: "THE SMARTPHONE WEB",
      description:
        "The browser leaves the desk. Touchscreens, pocket-sized maps and app icons bring the internet along for the ride.",
      introduction:
        "A connected world is now small enough to fit in your hand.",
      categories: ["TECHNOLOGY", "SOCIAL", "GAMES", "DESIGN"],
      theme: "smartphone",
      accent: "#78c7ff",
      secondary: "#7e89ff",
      symbol: "phone",
      shortLabel: "APPS",
      signal: "THE WORLD IN YOUR HAND",
      browserTitle: "POCKET CONNECTION",
      address: "mobile://everywhere-you-go",
      windowHeading: "THE WEB IS COMING WITH YOU.",
      screenStatus: "SYNCING...",
      screenLine: "CONNECTED BEYOND THE DESKTOP...",
      backWindow: "APP NETWORK",
      frontWindow: "THE POCKET WEB",
      web: {
        system: "POCKET CONNECTION 10",
        chrome: "MOBILE BROWSER / TOUCH MODE",
        address: "https://m.pocketweb.net/feed",
        host: "POCKET / 3G",
        signal: "SYNCED ACROSS DEVICES",
        overview: {
          heading: "THE WEB IS COMING WITH YOU.",
          line:
            "The browser leaves the desk. Maps, messages and music fit in one hand.",
          facts: [
            ["DEVICE", "ONE POCKET SCREEN"],
            ["APPS", "INSTALLED: 24"],
            ["SIGNAL", "3G / MOVING"]
          ]
        },
        sections: {
          WEB: {
            meta: "MOBILE WEB",
            title: "A SMALLER VERSION OF EVERYTHING.",
            line:
              "Pages are rebuilt for one thumb and a connection that drops.",
            items: [
              "Layouts built for a phone first",
              "Web addresses printed on signs",
              "Scrolling replacing clicking"
            ]
          },
          MUSIC: {
            meta: "STREAMING",
            title: "MUSIC LEAVES THE SHELF.",
            line:
              "Songs follow you down the street instead of sitting on a disc.",
            items: [
              "Streaming on the way somewhere",
              "Playlists synced between screens",
              "Songs recognised by sound"
            ]
          },
          GAMES: {
            meta: "TOUCH GAMES",
            title: "A GAME IN EVERY QUEUE.",
            line: "Sessions shrink to the length of a wait.",
            items: [
              "Short rounds, endless retries",
              "Scores compared with friends",
              "Touch controls replacing keys"
            ]
          },
          SOCIAL: {
            meta: "LIVE FEED",
            title: "UPDATES, ALL DAY.",
            line:
              "The feed refreshes on reflex, and everything happens in real time.",
            items: [
              "Feeds checked without deciding to",
              "Photos posted before arriving",
              "Conversations that never pause"
            ]
          },
          DESIGN: {
            meta: "TOUCH UI",
            title: "BUILT FOR THUMBS.",
            line: "Big targets, flat layers, and icons instead of menus.",
            items: [
              "Buttons sized for a thumb",
              "Icons replacing long menus",
              "Layouts collapsing to one column"
            ]
          },
          RESEARCH: {
            meta: "ON THE GO",
            title: "ANSWERS ON THE MOVE.",
            line:
              "Questions get answered while walking, not after sitting down.",
            items: [
              "Maps pulled from a pocket",
              "Questions asked mid-conversation",
              "Search finishing your sentence"
            ]
          },
          CULTURE: {
            meta: "ALWAYS ON",
            title: "ALWAYS CARRYING A SCREEN.",
            line:
              "Ordinary moments get photographed because the camera is always there.",
            items: [
              "Photos of everyday moments",
              "Messages answered instantly",
              "Spare minutes filled with a screen"
            ]
          },
          EVENTS: {
            meta: "POCKET SHIFT",
            title: "THE POCKET TURNING POINT.",
            line: "The desk stops being the centre of the internet.",
            items: [
              "Mobile traffic passing the desktop",
              "Apps replacing bookmarks",
              "The web becoming portable"
            ]
          }
        }
      }
    },
    {
      year: 2015,
      title: "THE MOBILE INTERNET",
      description:
        "Swipe, stream, share. Music follows you, moments become stories, and the cloud quietly connects the screens in your life.",
      introduction:
        "The internet is no longer somewhere you go. It moves with you.",
      categories: ["MUSIC", "SOCIAL", "DESIGN", "WEB"],
      theme: "mobile",
      accent: "#e9a2d9",
      secondary: "#a28bff",
      symbol: "cloud",
      shortLabel: "MOBILE",
      signal: "EVERYWHERE, ALL AT ONCE",
      browserTitle: "ALWAYS WITH YOU",
      address: "cloud://your-connected-life",
      windowHeading: "SWIPE. STREAM. REPEAT.",
      screenStatus: "STREAM READY...",
      screenLine: "YOUR WORLD IS IN SYNC...",
      backWindow: "STREAMING",
      frontWindow: "CLOUD CONNECTION",
      web: {
        system: "ALWAYS WITH YOU 15",
        chrome: "MOBILE SHELL / STREAM READY",
        address: "https://stream.pocketweb.net/home",
        host: "CLOUD / SYNCED",
        signal: "STREAM READY",
        overview: {
          heading: "SWIPE. STREAM. REPEAT.",
          line:
            "Music follows you, moments become stories, and the cloud quietly connects your screens.",
          facts: [
            ["SCREENS", "3 CONNECTED"],
            ["STREAM", "READY"],
            ["STORAGE", "SOMEWHERE ELSE"]
          ]
        },
        sections: {
          WEB: {
            meta: "MOBILE FIRST",
            title: "MOBILE FIRST, EVERY TIME.",
            line: "If it works on a phone, it counts as finished.",
            items: [
              "Pages designed for phones first",
              "Loading spinners replacing dial tones",
              "Scrolling that never quite ends"
            ]
          },
          MUSIC: {
            meta: "STREAMS",
            title: "STREAMING BECOMES DEFAULT.",
            line: "Owning a song becomes a choice instead of a habit.",
            items: [
              "Playlists assembled by algorithms",
              "Albums released straight into feeds",
              "Listening shared in real time"
            ]
          },
          GAMES: {
            meta: "QUICK PLAY",
            title: "FREE, EVERYWHERE, SOCIAL.",
            line: "Games fit into the gaps of a day.",
            items: [
              "Short rounds between stops",
              "Progress saved in the cloud",
              "Scores shared as screenshots"
            ]
          },
          SOCIAL: {
            meta: "STORIES",
            title: "STORIES AND STREAKS.",
            line: "Moments are posted before they finish happening.",
            items: [
              "Stories posted as they happen",
              "Followers counted out loud",
              "Feeds tuned to a mood"
            ]
          },
          DESIGN: {
            meta: "FLAT DESIGN",
            title: "CLEAN, FLAT, CALM.",
            line:
              "Colour and space replace texture, and type carries the hierarchy.",
            items: [
              "Flat colour and generous spacing",
              "Cards everywhere, borders gone",
              "Type doing the heavy lifting"
            ]
          },
          RESEARCH: {
            meta: "CLOUD SYNC",
            title: "THE CLOUD REMEMBERS.",
            line: "Files follow every device you own without being asked.",
            items: [
              "Files synced across screens",
              "Answers arriving before the question",
              "Notes shared as a link"
            ]
          },
          CULTURE: {
            meta: "FEED CULTURE",
            title: "CONTENT IS THE CULTURE.",
            line: "Clips are made for the feed, and trends last a week.",
            items: [
              "Clips shaped for the feed",
              "Creating becoming a job title",
              "Trends measured in days"
            ]
          },
          EVENTS: {
            meta: "ALWAYS CONNECTED",
            title: "THE INTERNET GOES EVERYWHERE.",
            line:
              "The connection stops being announced because it is assumed.",
            items: [
              "Video calls becoming ordinary",
              "Events watched on a phone",
              "The signal assumed, not mentioned"
            ]
          }
        }
      }
    },
    {
      year: 2020,
      title: "THE INTERNET BECOMES ESSENTIAL",
      description:
        "Rooms become windows. Work, friendship and everyday rituals find new spaces online. Distance feels different through a screen.",
      introduction:
        "Apart, but still connected. The screen becomes a shared place.",
      categories: ["TECHNOLOGY", "SOCIAL", "CULTURE", "EVENTS"],
      theme: "connected",
      accent: "#85dfd8",
      secondary: "#789ee7",
      symbol: "users",
      shortLabel: "TOGETHER",
      signal: "PRESENCE, ACROSS DISTANCE",
      browserTitle: "SHARED CONNECTION",
      address: "online://still-together",
      windowHeading: "YOU ARE HERE. SO ARE WE.",
      screenStatus: "JOINING...",
      screenLine: "DISTANCE IS NOT DISCONNECTION...",
      backWindow: "TOGETHER ONLINE",
      frontWindow: "REMOTE WORLD",
      web: {
        system: "SHARED CONNECTION 20",
        chrome: "REMOTE DESKTOP / LIVE ROOMS",
        address: "https://rooms.still-together.net/lobby",
        host: "HOME / REMOTE",
        signal: "PRESENCE: 14 ONLINE",
        overview: {
          heading: "YOU ARE HERE. SO ARE WE.",
          line:
            "Rooms become windows. Work, friendship and everyday rituals find new places to happen.",
          facts: [
            ["ROOM", "14 PARTICIPANTS"],
            ["LINK", "STABLE ENOUGH"],
            ["DAY", "SPENT ON SCREEN"]
          ]
        },
        sections: {
          WEB: {
            meta: "LIVE ROOMS",
            title: "THE WEB BECOMES THE ROOM.",
            line:
              "Pages turn into places people gather rather than things you visit.",
            items: [
              "Pages rebuilt as places to gather",
              "Entire days spent in one tab",
              "Browsers carrying whole workdays"
            ]
          },
          MUSIC: {
            meta: "SHARED AUDIO",
            title: "LISTENING, TOGETHER.",
            line:
              "Concerts happen in kitchens and playlists are shared across distance.",
            items: [
              "Playlists shared across distance",
              "Live sets streamed into kitchens",
              "Shows watched from bed"
            ]
          },
          GAMES: {
            meta: "ONLINE WORLDS",
            title: "WORLDS USED AS MEETING PLACES.",
            line: "Games become the third space when the real ones close.",
            items: [
              "Worlds used as somewhere to meet",
              "Nights out held online",
              "Play replacing the commute"
            ]
          },
          SOCIAL: {
            meta: "GROUP CALLS",
            title: "DISTANCE, NEGOTIATED.",
            line:
              "Presence is measured in green dots and whether you remembered to unmute.",
            items: [
              "Video calls replacing visits",
              "Group chats that never close",
              "Presence measured in small green dots"
            ]
          },
          DESIGN: {
            meta: "SOFT UI",
            title: "CALM INTERFACES FOR LOUD TIMES.",
            line: "Softer edges, clearer states, and dark mode everywhere.",
            items: [
              "Soft shadows and generous spacing",
              "Dark mode becoming the default",
              "Fewer clicks, clearer states"
            ]
          },
          RESEARCH: {
            meta: "LIVE DATA",
            title: "INFORMATION AT SCALE.",
            line:
              "Numbers update by the hour and everyone becomes an amateur statistician.",
            items: [
              "Data updated every hour",
              "Dashboards on every screen",
              "Sources checked, then checked again"
            ]
          },
          CULTURE: {
            meta: "SCREEN LIFE",
            title: "CULTURE MADE IN SMALL ROOMS.",
            line:
              "Everything premieres at home, and shared moments are watched apart.",
            items: [
              "Culture made in small rooms",
              "Premieres watched from the sofa",
              "Shared moments, watched separately"
            ]
          },
          EVENTS: {
            meta: "REMOTE YEAR",
            title: "THE YEAR THE SCREEN HELD.",
            line: "Work, school and ritual move online and stay there.",
            items: [
              "Work and school moving online",
              "Distance feeling different through glass",
              "Everyone learning to unmute"
            ]
          }
        }
      }
    },
    {
      year: 2026,
      title: "THE NEXT INTERNET",
      description:
        "The web answers back. Intelligent tools, generative interfaces and immersive possibilities reshape how we search, create and connect.",
      introduction:
        "The next version of the internet is still being imagined.",
      categories: ["TECHNOLOGY", "RESEARCH", "DESIGN", "WEB"],
      theme: "intelligent",
      accent: "#b4b2ff",
      secondary: "#e98bde",
      symbol: "spark",
      shortLabel: "NEXT",
      signal: "HUMAN × MACHINE",
      browserTitle: "POSSIBILITY ENGINE",
      address: "future://the-next-connection",
      windowHeading: "WHAT WILL YOU CREATE NEXT?",
      screenStatus: "THINKING...",
      screenLine: "THE INTERFACE IS EVOLVING...",
      backWindow: "IMMERSIVE SYSTEMS",
      frontWindow: "INTELLIGENT WEB",
      web: {
        system: "POSSIBILITY ENGINE 26",
        chrome: "SPATIAL SHELL / GENERATIVE",
        address: "future://next-connection/space-01",
        host: "SPATIAL / AMBIENT",
        signal: "INTERFACE: ADAPTIVE",
        overview: {
          heading: "WHAT WILL YOU CREATE NEXT?",
          line:
            "The web answers back. Interfaces assemble themselves, and the next version is still being imagined.",
          facts: [
            ["MODE", "GENERATIVE"],
            ["SPACE", "IMMERSIVE"],
            ["AGENT", "IDLE, LISTENING"]
          ]
        },
        sections: {
          WEB: {
            meta: "GENERATIVE",
            title: "PAGES THAT ANSWER BACK.",
            line:
              "Interfaces are assembled on request, shaped around what you came to do.",
            items: [
              "Interfaces assembled on request",
              "Search returning a point of view",
              "Pages shaped around the reader"
            ]
          },
          MUSIC: {
            meta: "ADAPTIVE AUDIO",
            title: "SOUND THAT ADAPTS.",
            line: "Scores are written in real time and tracks finish themselves.",
            items: [
              "Scores written as you listen",
              "Tracks that resolve themselves",
              "Listening rooms without walls"
            ]
          },
          GAMES: {
            meta: "LIVE WORLDS",
            title: "WORLDS THAT REWRITE THEMSELVES.",
            line:
              "Stories respond to how you play, and play moves between devices.",
            items: [
              "Stories responding to how you play",
              "Environments generated as you move",
              "Play continuing across devices"
            ]
          },
          SOCIAL: {
            meta: "SHARED SPACE",
            title: "PRESENCE WITHOUT SCREENS.",
            line:
              "Rooms are shared across distance, and conversation is summarised rather than lost.",
            items: [
              "Rooms shared across distance",
              "Avatars carrying the tone of a room",
              "Conversations summarised, never lost"
            ]
          },
          DESIGN: {
            meta: "SPATIAL UI",
            title: "INTERFACES AS MATERIAL.",
            line: "Layouts resolve like liquid, and depth and light become structure.",
            items: [
              "Layouts that resolve like liquid",
              "Depth and light used as structure",
              "One interface language per moment"
            ]
          },
          RESEARCH: {
            meta: "ASSISTED",
            title: "THINKING OUT LOUD.",
            line:
              "Questions are answered with reasoning, and sources sit beside the answer.",
            items: [
              "Questions answered with reasoning",
              "Sources surfaced beside the answer",
              "Work reviewed by a quiet assistant"
            ]
          },
          CULTURE: {
            meta: "CO-CREATION",
            title: "MADE WITH, NOT JUST BY.",
            line:
              "Ideas are remixed in public, and authorship becomes a conversation.",
            items: [
              "Ideas remixed in public",
              "Formats invented every week",
              "Authorship becoming a conversation"
            ]
          },
          EVENTS: {
            meta: "NEXT CHAPTER",
            title: "THE NEXT CONNECTION.",
            line:
              "Interfaces anticipate intent, spaces remember you, and the web is still being imagined.",
            items: [
              "Interfaces anticipating intent",
              "Spaces that remember how you work",
              "The next web still being written"
            ]
          }
        }
      }
    }
  ];

  const SOUND_STORAGE_KEY = "rewindyr-era:sound-enabled";

  /* =======================================================
     ELEMENTS AND STATE
     ======================================================= */

  const byId = (id) => document.getElementById(id);

  const elements = {
    machine: byId("time-machine"),
    main: byId("main-content"),

    yearGrid: byId("year-grid"),
    yearTemplate: byId("year-template"),
    milestoneCount: byId("milestone-count"),

    heroYear: byId("hero-year"),
    eraPanel: byId("era-panel"),
    selectedYear: byId("selected-year"),
    eraIndex: byId("era-index"),
    eraTitle: byId("era-title"),
    eraDescription: byId("era-description"),
    eraCategories: byId("era-categories"),
    eraSignal: byId("era-signal"),
    eraSymbol: byId("era-symbol"),
    selectionAnnouncement: byId("selection-announcement"),

    browserTitle: byId("decor-browser-title"),
    browserAddress: byId("decor-address"),
    browserHeading: byId("decor-heading"),
    decorYear: byId("decor-year"),
    crtStatus: byId("crt-status"),
    crtLine: byId("crt-line"),
    backWindow: byId("window-back-title"),
    frontWindow: byId("window-front-title"),
    signalSymbol: byId("signal-symbol"),
    signalText: byId("signal-text"),

    soundButton: byId("sound-button"),
    soundLabel: byId("sound-label"),
    soundIcon: byId("sound-icon"),

    aboutButton: byId("about-button"),
    aboutDialog: byId("about-dialog"),

    portal: byId("era-portal"),
    portalHeading: byId("portal-heading"),
    closePortal: byId("close-portal"),
    portalProgress: byId("portal-progress"),
    transferYear: byId("transfer-year"),
    transferStatus: byId("transfer-status"),
    transferMeter: byId("transfer-meter"),

    portalIntro: byId("portal-intro"),
    introYear: byId("intro-year"),
    introTitle: byId("intro-title"),
    introDescription: byId("intro-description"),
    introSymbol: byId("intro-symbol"),
    enterWeb: byId("enter-web"),
    webNotice: byId("web-notice"),

    toast: byId("toast"),
    toastMessage: byId("toast-message"),
    dismissToast: byId("dismiss-toast"),
    particles: byId("particles"),

    enterButtons: Array.from(document.querySelectorAll("[data-enter-era]"))
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const state = {
    selectedYear: 1960,
    phase: "idle",
    soundEnabled: readSoundPreference(),
    travelEra: null,
    webEra: null,
    webSection: null
  };

  const yearButtons = new Map();

  let cardTimer = null;
  let toastTimer = null;
  let transitionController = null;
  let portalTrigger = null;

  function currentEra() {
    return ERAS.find((era) => era.year === state.selectedYear) || ERAS[0];
  }

  function eraIndex(year) {
    return ERAS.findIndex((era) => era.year === year);
  }

  function setSymbol(element, symbol) {
    element.setAttribute("href", `#icon-${symbol}`);
  }

  /* =======================================================
     TIMELINE CREATION
     ======================================================= */

  function buildTimeline() {
    const fragment = document.createDocumentFragment();

    ERAS.forEach((era) => {
      const button = elements.yearTemplate.content
        .firstElementChild
        .cloneNode(true);

      button.dataset.year = String(era.year);
      button.setAttribute("aria-label", `${era.year}: ${era.title}`);

      button.querySelector(".year-node__year").textContent = era.year;
      button.querySelector(".year-node__caption").textContent = era.shortLabel;

      button.addEventListener("click", () => {
        selectEra(era.year);
      });

      yearButtons.set(era.year, button);
      fragment.appendChild(button);
    });

    elements.yearGrid.replaceChildren(fragment);
    elements.milestoneCount.textContent = `${ERAS.length} DESTINATIONS`;
  }

  function updateYearNodes() {
    ERAS.forEach((era) => {
      const button = yearButtons.get(era.year);
      const selected = era.year === state.selectedYear;

      button.setAttribute("aria-checked", String(selected));
      button.tabIndex = selected ? 0 : -1;

      button.querySelector(".year-node__caption").textContent =
        selected ? "LOCKED" : era.shortLabel;
    });
  }

  function handleTimelineKeyboard(event) {
    if (state.phase !== "idle") return;

    const index = eraIndex(state.selectedYear);
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % ERAS.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + ERAS.length) % ERAS.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = ERAS.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextEra = ERAS[nextIndex];
    selectEra(nextEra.year);

    yearButtons.get(nextEra.year).focus({
      preventScroll: true
    });
  }

  /* =======================================================
     ERA CONTENT AND ATMOSPHERE
     ======================================================= */

  function updateAtmosphere(era) {
    document.documentElement.style.setProperty("--accent", era.accent);
    document.documentElement.style.setProperty("--secondary", era.secondary);

    elements.machine.dataset.year = String(era.year);
    elements.machine.dataset.theme = era.theme;
    elements.heroYear.textContent = era.year;
  }

  function renderCategories(categories) {
    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
      const item = document.createElement("li");
      item.textContent = category;
      fragment.appendChild(item);
    });

    elements.eraCategories.replaceChildren(fragment);
  }

  function renderEraContent(era, announce = false) {
    const index = eraIndex(era.year) + 1;
    const indexLabel = String(index).padStart(2, "0");
    const totalLabel = String(ERAS.length).padStart(2, "0");

    elements.selectedYear.textContent = era.year;
    elements.eraIndex.textContent = `ERA ${indexLabel} / ${totalLabel}`;
    elements.eraTitle.textContent = era.title;
    elements.eraDescription.textContent = era.description;
    elements.eraSignal.textContent = era.signal;

    setSymbol(elements.eraSymbol, era.symbol);
    renderCategories(era.categories);

    elements.browserTitle.textContent = era.browserTitle;
    elements.browserAddress.textContent = era.address;
    elements.browserHeading.textContent = era.windowHeading;
    elements.decorYear.textContent = era.year;

    elements.crtStatus.textContent = era.screenStatus;
    elements.crtLine.textContent = era.screenLine;
    elements.backWindow.textContent = era.backWindow;
    elements.frontWindow.textContent = era.frontWindow;
    elements.signalText.textContent = era.signal;

    setSymbol(elements.signalSymbol, era.symbol);

    if (announce) {
      elements.selectionAnnouncement.textContent =
        `${era.year}. ${era.title}. ${era.description}`;
    }
  }

  function finishCardTransition(announce = false) {
    window.clearTimeout(cardTimer);
    cardTimer = null;

    renderEraContent(currentEra(), announce);

    elements.eraPanel.classList.remove("is-changing");
    elements.eraPanel.setAttribute("aria-busy", "false");
  }

  function selectEra(year) {
    if (state.phase !== "idle") return;
    if (state.selectedYear === year) return;

    const era = ERAS.find((item) => item.year === year);
    if (!era) return;

    state.selectedYear = era.year;

    updateYearNodes();
    updateAtmosphere(era);

    window.clearTimeout(cardTimer);

    if (reducedMotion.matches) {
      finishCardTransition(true);
      return;
    }

    elements.eraPanel.classList.add("is-changing");
    elements.eraPanel.setAttribute("aria-busy", "true");

    /*
     * A single replaceable timer ensures rapid selections always
     * finish on the latest requested era.
     */
    cardTimer = window.setTimeout(() => {
      finishCardTransition(true);
    }, 180);
  }

  /* =======================================================
     SOUND PREFERENCE — NO AUDIO PLAYBACK
     ======================================================= */

  function readSoundPreference() {
    try {
      return sessionStorage.getItem(SOUND_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }

  function saveSoundPreference(enabled) {
    try {
      sessionStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
    } catch {
      // The interface still works when browser storage is unavailable.
    }
  }

  function renderSoundPreference() {
    const enabled = state.soundEnabled;

    /*
     * These labels describe the action:
     * TURN SOUND ON -> enables the preference.
     * SOUND OFF    -> turns the preference off again.
     */
    elements.soundLabel.textContent = enabled
      ? "SOUND OFF"
      : "TURN SOUND ON";

    elements.soundButton.setAttribute("aria-pressed", String(enabled));

    elements.soundButton.setAttribute(
      "aria-label",
      enabled ? "Turn sound preference off" : "Turn sound preference on"
    );

    elements.soundButton.title = enabled
      ? "Preference is on. Click to turn it off. Ambient audio comes later."
      : "Preference is off. Click to turn it on. Ambient audio comes later.";

    setSymbol(
      elements.soundIcon,
      enabled ? "volume" : "volume-off"
    );
  }

  function toggleSoundPreference() {
    if (state.phase !== "idle") return;

    state.soundEnabled = !state.soundEnabled;

    saveSoundPreference(state.soundEnabled);
    renderSoundPreference();

    showToast(
      `Sound preference ${state.soundEnabled ? "ON" : "OFF"}. ` +
      "Saved for this session. Ambient audio is coming later."
    );
  }

  /* =======================================================
     SMALL NOTIFICATIONS
     ======================================================= */

  function showToast(message) {
    window.clearTimeout(toastTimer);

    elements.toastMessage.textContent = message;
    elements.toast.hidden = false;

    toastTimer = window.setTimeout(hideToast, 4800);
  }

  function hideToast() {
    window.clearTimeout(toastTimer);
    toastTimer = null;
    elements.toast.hidden = true;
  }

  /* =======================================================
     ERA ENTRY STATE MACHINE
     idle -> initializing -> entering -> intro -> idle
     ======================================================= */

  function setPhase(phase) {
    state.phase = phase;
    elements.machine.dataset.phase = phase;

    const traveling = phase === "initializing" || phase === "entering";
    elements.machine.classList.toggle("is-traveling", traveling);

    elements.main.setAttribute("aria-busy", String(traveling));
  }

  function lockControls(locked) {
    yearButtons.forEach((button) => {
      button.disabled = locked;
    });

    elements.enterButtons.forEach((button) => {
      button.disabled = locked;
    });

    elements.soundButton.disabled = locked;
    elements.aboutButton.disabled = locked;
  }

  function wait(duration, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(new DOMException("Transition cancelled", "AbortError"));
        return;
      }

      const timer = window.setTimeout(() => {
        signal.removeEventListener("abort", handleAbort);
        resolve();
      }, duration);

      function handleAbort() {
        window.clearTimeout(timer);
        signal.removeEventListener("abort", handleAbort);
        reject(new DOMException("Transition cancelled", "AbortError"));
      }

      signal.addEventListener("abort", handleAbort, { once: true });
    });
  }

  function preparePortal(era) {
    elements.portal.dataset.stage = "idle";

    elements.portalProgress.hidden = false;
    elements.portalIntro.hidden = true;

    elements.webNotice.hidden = true;
    elements.webNotice.textContent = "";

    elements.transferYear.textContent = era.year;
    elements.transferStatus.textContent = `INITIALIZING ${era.year}...`;

    elements.transferMeter.setAttribute("aria-valuenow", "0");
    elements.transferMeter.setAttribute(
      "aria-valuetext",
      `Preparing the ${era.year} era introduction`
    );

    elements.portalHeading.textContent = `Travel to ${era.year}`;

    elements.introYear.textContent = era.year;
    elements.introTitle.textContent = era.title;
    elements.introDescription.textContent = era.introduction;

    setSymbol(elements.introSymbol, era.symbol);

    elements.closePortal.setAttribute(
      "aria-label",
      "Cancel transition and return to the time machine"
    );
  }

  async function enterEra(trigger) {
    if (state.phase !== "idle") return;
    if (elements.portal.open || elements.aboutDialog.open) return;

    /*
     * Commit any pending card update before capturing the destination.
     * The transition uses this snapshot, not a changing global year.
     */
    finishCardTransition(false);

    const era = currentEra();
    const controller = new AbortController();

    transitionController = controller;
    portalTrigger = trigger;
    state.travelEra = era;

    preparePortal(era);
    hideToast();

    lockControls(true);
    document.body.classList.add("modal-open");
    setPhase("initializing");

    try {
      elements.portal.showModal();

      /*
       * Native showModal() makes the rest of the page inert and
       * handles keyboard focus containment.
       */
      elements.portal.dataset.stage = "initializing";
      elements.transferMeter.setAttribute("aria-valuenow", "40");

      await wait(reducedMotion.matches ? 450 : 1100, controller.signal);

      setPhase("entering");
      elements.portal.dataset.stage = "entering";
      elements.transferStatus.textContent = `ENTERING ${era.year}...`;
      elements.transferMeter.setAttribute("aria-valuenow", "92");

      await wait(reducedMotion.matches ? 450 : 1000, controller.signal);

      if (controller.signal.aborted) return;

      showEraIntroduction(era);
    } catch (error) {
      if (error.name === "AbortError") return;

      if (elements.portal.open) {
        elements.portal.close();
      } else {
        resetPortal();
      }

      showToast("The portal could not open. Please try again.");
    }
  }

  function showEraIntroduction(era) {
    setPhase("intro");

    elements.transferMeter.setAttribute("aria-valuenow", "100");
    elements.transferMeter.setAttribute(
      "aria-valuetext",
      `${era.year} era introduction ready`
    );

    elements.portal.dataset.stage = "intro";
    elements.portalProgress.hidden = true;
    elements.portalIntro.hidden = false;

    elements.portalHeading.textContent = `${era.year}: ${era.title}`;

    elements.closePortal.setAttribute(
      "aria-label",
      "Close era introduction and return to the time machine"
    );

    elements.introTitle.focus({
      preventScroll: true
    });
  }

  function closePortal() {
    if (transitionController) {
      transitionController.abort();
    }

    if (elements.portal.open) {
      elements.portal.close();
    }
  }

  function resetPortal() {
    /* The era portal can never outlive the web environment it hosts. */
    if (webEls.dialog.open) {
      webExitMode = "exit";
      webEls.dialog.close();
    }

    if (transitionController) {
      transitionController.abort();
      transitionController = null;
    }

    state.travelEra = null;
    state.webEra = null;

    setPhase("idle");
    lockControls(false);

    document.body.classList.remove("modal-open");

    elements.portal.dataset.stage = "idle";
    elements.portalProgress.hidden = false;
    elements.portalIntro.hidden = true;
    elements.webNotice.hidden = true;

    /*
     * Restore focus without scrolling the visitor away from the
     * control they used to enter the era.
     */
    const trigger = portalTrigger;
    portalTrigger = null;

    window.requestAnimationFrame(() => {
      if (trigger && document.contains(trigger)) {
        trigger.focus({ preventScroll: true });
      }
    });
  }

  /* =======================================================
     TAB 03 — SIMULATED INTERNET / ENTER THE WEB
     A second native dialog layered over the era portal, so
     returning to the era introduction never loses the year.
     ======================================================= */

  /* One shared branding line, rendered for whatever year is selected. */
  const WEB_BRAND_LINE = "THE PAST IS NOT OFFLINE.";

  const WEB_SECTIONS = [
    { id: "WEB", label: "WEB", icon: "globe" },
    { id: "MUSIC", label: "MUSIC", icon: "note" },
    { id: "GAMES", label: "GAMES", icon: "gamepad" },
    { id: "SOCIAL", label: "SOCIAL", icon: "users" },
    { id: "DESIGN", label: "DESIGN", icon: "pen" },
    { id: "RESEARCH", label: "RESEARCH", icon: "flask" },
    { id: "CULTURE", label: "CULTURE", icon: "film" },
    { id: "EVENTS", label: "EVENTS", icon: "calendar" }
  ];

  const webEls = {
    dialog: byId("web-environment"),

    loading: byId("web-loading"),
    loadingYear: byId("web-loading-year"),
    loadingLog: byId("web-loading-log"),
    loadingMeter: byId("web-loading-meter"),

    console: byId("web-console"),
    shell: byId("web-shell"),

    year: byId("web-year"),
    eraIndex: byId("web-era-index"),
    system: byId("web-system"),
    chrome: byId("web-chrome"),
    address: byId("web-address"),
    host: byId("web-host"),
    signal: byId("web-signal"),

    sections: byId("web-sections"),
    sectionTemplate: byId("web-section-template"),
    stageWrap: document.querySelector(".web-stage-wrap"),

    overview: byId("web-overview"),
    overviewEyebrow: byId("web-overview-eyebrow"),
    overviewHeading: byId("web-overview-heading"),
    overviewLine: byId("web-overview-line"),
    overviewHint: byId("web-overview-hint"),
    facts: byId("web-facts"),
    brandStatement: byId("web-brand-statement"),

    panel: byId("web-section-panel"),
    panelBack: byId("web-section-back"),
    panelEyebrow: byId("web-section-eyebrow"),
    panelTitle: byId("web-section-title"),
    panelLine: byId("web-section-line"),
    panelItems: byId("web-section-items"),
    panelBrand: byId("web-section-brand"),

    brandLine: byId("web-brand-line"),
    footerMeta: byId("web-footer-meta"),

    backEra: byId("web-back-era"),
    exitWeb: byId("web-exit")
  };

  const webSectionButtons = new Map();

  let webController = null;
  let webExitMode = "intro";

  function webEraIndexLabel(era) {
    const label = String(eraIndex(era.year) + 1).padStart(2, "0");
    const total = String(ERAS.length).padStart(2, "0");
    return `${label} / ${total}`;
  }

  function webAddress(base, sectionId) {
    return sectionId ? `${base}#${sectionId.toLowerCase()}` : base;
  }

  function renderWebChrome(era) {
    const web = era.web;

    webEls.dialog.dataset.era = String(era.year);

    webEls.year.textContent = era.year;
    webEls.eraIndex.textContent = webEraIndexLabel(era);
    webEls.system.textContent = web.system;
    webEls.chrome.textContent = web.chrome;
    webEls.address.textContent = webAddress(web.address, state.webSection);
    webEls.host.textContent = web.host;
    webEls.signal.textContent = web.signal;

    webEls.footerMeta.textContent =
      `${era.shortLabel} / ${WEB_SECTIONS.length} SECTIONS / REWINDYR-ERA`;

    /* Branding rendered from state, never hard-coded per era. */
    webEls.brandLine.textContent = WEB_BRAND_LINE;
    webEls.brandStatement.textContent = WEB_BRAND_LINE;
    webEls.panelBrand.textContent = WEB_BRAND_LINE;
  }

  function buildWebSections() {
    const fragment = document.createDocumentFragment();

    WEB_SECTIONS.forEach((section, index) => {
      const button = webEls.sectionTemplate.content
        .firstElementChild
        .cloneNode(true);

      button.dataset.section = section.id;

      button.querySelector(".web-section__index").textContent =
        String(index + 1).padStart(2, "0");

      button
        .querySelector(".web-section__icon use")
        .setAttribute("href", `#icon-${section.icon}`);

      button.querySelector(".web-section__label").textContent = section.label;

      button.addEventListener("click", () => {
        openWebSection(section.id);
      });

      webSectionButtons.set(section.id, button);
      fragment.appendChild(button);
    });

    webEls.sections.replaceChildren(fragment);
  }

  function updateWebSections(era) {
    WEB_SECTIONS.forEach((section) => {
      const button = webSectionButtons.get(section.id);
      const data = era.web.sections[section.id];
      const meta = button.querySelector(".web-section__meta");

      meta.textContent = data ? data.meta : "";
    });
  }

  function renderWebFacts(facts) {
    const fragment = document.createDocumentFragment();

    facts.forEach(([label, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const detail = document.createElement("dd");

      term.textContent = label;
      detail.textContent = value;

      row.append(term, detail);
      fragment.appendChild(row);
    });

    webEls.facts.replaceChildren(fragment);
  }

  function renderWebOverview(era) {
    const overview = era.web.overview;

    webEls.overviewEyebrow.textContent =
      `ERA ${webEraIndexLabel(era)} · ${era.shortLabel} · CONSOLE`;

    webEls.overviewHeading.textContent = overview.heading;
    webEls.overviewLine.textContent = overview.line;
    webEls.overviewHint.textContent =
      `CHOOSE ONE OF ${WEB_SECTIONS.length} SECTIONS TO OPEN IT.`;

    renderWebFacts(overview.facts);
  }

  function markWebSection(openId) {
    webSectionButtons.forEach((button, id) => {
      if (id === openId) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  function openWebSection(id) {
    const era = state.webEra;
    if (!era) return;

    const data = era.web.sections[id];
    if (!data) return;

    state.webSection = id;

    const position = WEB_SECTIONS.findIndex((section) => section.id === id) + 1;

    webEls.panelEyebrow.textContent =
      `SECTION ${String(position).padStart(2, "0")} / ` +
      `${String(WEB_SECTIONS.length).padStart(2, "0")} · ` +
      `${era.year} · ${data.meta}`;

    webEls.panelTitle.textContent = data.title;
    webEls.panelLine.textContent = data.line;

    webEls.panelItems.replaceChildren(
      data.items.reduce((fragment, item) => {
        const entry = document.createElement("li");
        entry.textContent = item;
        fragment.appendChild(entry);
        return fragment;
      }, document.createDocumentFragment())
    );

    webEls.panelBrand.textContent = WEB_BRAND_LINE;

    if (state.webEra) {
      webEls.address.textContent = webAddress(state.webEra.web.address, id);
    }

    webEls.overview.hidden = true;
    webEls.panel.hidden = false;

    markWebSection(id);

    webEls.panelTitle.focus({ preventScroll: true });

    if (webEls.stageWrap) {
      webEls.stageWrap.scrollTop = 0;
    }
  }

  function closeWebSection(restoreFocus = true) {
    const previous = state.webSection;

    state.webSection = null;
    webEls.panel.hidden = true;
    webEls.overview.hidden = false;

    if (state.webEra) {
      webEls.address.textContent = webAddress(state.webEra.web.address, null);
    }

    markWebSection(null);

    if (!restoreFocus) return;

    const target = previous && webSectionButtons.get(previous);

    if (target) {
      target.focus({ preventScroll: true });
    }
  }

  function setWebMeter(value) {
    webEls.loadingMeter.setAttribute("aria-valuenow", String(value));

    webEls.loadingMeter.firstElementChild.style.transform =
      `scaleX(${value / 100})`;
  }

  async function bootWebEnvironment(era, controller) {
    webEls.console.hidden = true;
    webEls.loading.hidden = false;
    webEls.loadingYear.textContent = era.year;
    webEls.loadingLog.replaceChildren();
    setWebMeter(0);

    const steps = [
      "CONNECTING TO THE INTERNET...",
      "ESTABLISHING ERA CONNECTION...",
      `LOADING ${era.year} WEB ENVIRONMENT...`,
      "ACCESS GRANTED"
    ];

    const stepDuration = reducedMotion.matches ? 190 : 340;

    for (let index = 0; index < steps.length; index += 1) {
      const entry = document.createElement("li");

      entry.textContent = steps[index];
      entry.classList.toggle("is-granted", index === steps.length - 1);

      webEls.loadingLog.appendChild(entry);
      setWebMeter(Math.round(((index + 1) / steps.length) * 100));

      await wait(stepDuration, controller.signal);
    }

    await wait(reducedMotion.matches ? 140 : 260, controller.signal);
  }

  async function openWebEnvironment() {
    if (state.phase !== "intro" || !state.travelEra) return;
    if (webEls.dialog.open) return;

    const era = state.travelEra;
    const controller = new AbortController();

    webController = controller;
    webExitMode = "intro";

    hideToast();
    elements.webNotice.hidden = true;
    elements.enterWeb.disabled = true;

    /* Fade the era introduction into darkness before the machine boots. */
    elements.portalIntro.classList.add("is-leaving");

    try {
      await wait(reducedMotion.matches ? 90 : 240, controller.signal);
      if (controller.signal.aborted) return;

      state.webEra = era;
      state.webSection = null;

      renderWebChrome(era);
      updateWebSections(era);
      renderWebOverview(era);
      closeWebSection(false);

      webEls.dialog.showModal();
      setPhase("web");

      await bootWebEnvironment(era, controller);

      webEls.loading.hidden = true;
      webEls.console.hidden = false;
      webEls.shell.focus({ preventScroll: true });
    } catch (error) {
      if (error.name !== "AbortError") {
        if (webEls.dialog.open) {
          webEls.dialog.close();
        }

        elements.portalIntro.classList.remove("is-leaving");

        elements.webNotice.textContent =
          `The ${era.year} web environment could not open. ` +
          "Return to the era introduction and try again.";

        elements.webNotice.hidden = false;
        elements.webNotice.focus({ preventScroll: true });
      }
    } finally {
      elements.enterWeb.disabled = false;
      webController = null;
    }
  }

  function closeWebEnvironment(mode) {
    webExitMode = mode;

    if (webController) {
      webController.abort();
      webController = null;
    }

    if (webEls.dialog.open) {
      webEls.dialog.close();
    }
  }

  function handleWebClosed() {
    state.webEra = null;
    state.webSection = null;

    webEls.loading.hidden = false;
    webEls.console.hidden = true;
    setWebMeter(0);

    closeWebSection(false);
    elements.enterWeb.disabled = false;

    /* EXIT WEB leaves the simulated internet and the era together. */
    if (webExitMode === "exit" && elements.portal.open) {
      closePortal();
      return;
    }

    elements.portalIntro.classList.remove("is-leaving");

    if (state.phase === "web") {
      setPhase("intro");
    }

    elements.enterWeb.focus({ preventScroll: true });
  }

  function webColumnCount() {
    const tracks = window
      .getComputedStyle(webEls.sections)
      .gridTemplateColumns
      .split(" ")
      .filter(Boolean);

    return Math.max(1, tracks.length);
  }

  function handleWebSectionsKeyboard(event) {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const buttons = WEB_SECTIONS
      .map((section) => webSectionButtons.get(section.id))
      .filter(Boolean);

    const current = buttons.indexOf(document.activeElement);
    if (current === -1) return;

    event.preventDefault();

    const columns = webColumnCount();
    let next = current;

    switch (event.key) {
      case "ArrowRight":
        next = (current + 1) % buttons.length;
        break;

      case "ArrowLeft":
        next = (current - 1 + buttons.length) % buttons.length;
        break;

      case "ArrowDown":
        next = Math.min(current + columns, buttons.length - 1);
        break;

      case "ArrowUp":
        next = Math.max(current - columns, 0);
        break;

      case "Home":
        next = 0;
        break;

      default:
        next = buttons.length - 1;
        break;
    }

    if (next === current && event.key !== "Home" && event.key !== "End") {
      next = (current + 1) % buttons.length;
    }

    buttons[next].focus({ preventScroll: true });
  }

  /* =======================================================
     ABOUT DIALOG
     ======================================================= */

  function openAbout() {
    if (state.phase !== "idle") return;
    if (elements.aboutDialog.open || elements.portal.open) return;

    hideToast();
    document.body.classList.add("modal-open");
    elements.aboutDialog.showModal();
  }

  function closeAbout() {
    if (elements.aboutDialog.open) {
      elements.aboutDialog.close();
    }
  }

  function handleAboutClosed() {
    document.body.classList.remove("modal-open");

    elements.aboutButton.focus({
      preventScroll: true
    });
  }

  /* =======================================================
     DECORATIVE PARTICLES
     Deterministic positions avoid layout changes on selection.
     ======================================================= */

  function createParticles() {
    const fragment = document.createDocumentFragment();
    const particleCount = 18;

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");

      particle.className = "particle";

      particle.style.setProperty("--x", `${(index * 37 + 7) % 100}%`);
      particle.style.setProperty("--y", `${(index * 23 + 11) % 100}%`);
      particle.style.setProperty("--size", index % 3 === 0 ? "2px" : "1px");
      particle.style.setProperty("--duration", `${12 + (index % 5) * 3}s`);
      particle.style.setProperty("--delay", `${index * -1.7}s`);

      fragment.appendChild(particle);
    }

    elements.particles.replaceChildren(fragment);
  }

  /* =======================================================
     EVENTS
     ======================================================= */

  function bindEvents() {
    elements.yearGrid.addEventListener("keydown", handleTimelineKeyboard);

    elements.enterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        enterEra(button);
      });
    });

    elements.soundButton.addEventListener("click", toggleSoundPreference);
    elements.dismissToast.addEventListener("click", hideToast);

    elements.aboutButton.addEventListener("click", openAbout);

    elements.aboutDialog
      .querySelectorAll("[data-close-about]")
      .forEach((button) => {
        button.addEventListener("click", closeAbout);
      });

    elements.aboutDialog.addEventListener("close", handleAboutClosed);

    elements.closePortal.addEventListener("click", closePortal);
    elements.portal.addEventListener("close", resetPortal);

    /*
     * Escape cancels the timer sequence as well as closing the dialog.
     * This prevents a cancelled transition from reopening later.
     */
    elements.portal.addEventListener("cancel", (event) => {
      event.preventDefault();
      closePortal();
    });

    elements.enterWeb.addEventListener("click", openWebEnvironment);

    /* TAB 03 — simulated internet controls. */
    webEls.backEra.addEventListener("click", () => {
      closeWebEnvironment("intro");
    });

    webEls.exitWeb.addEventListener("click", () => {
      closeWebEnvironment("exit");
    });

    webEls.panelBack.addEventListener("click", () => {
      closeWebSection();
    });

    webEls.sections.addEventListener("keydown", handleWebSectionsKeyboard);

    webEls.dialog.addEventListener("close", handleWebClosed);

    webEls.dialog.addEventListener("cancel", (event) => {
      event.preventDefault();

      /* Escape leaves the open section first, then the environment. */
      if (state.webSection) {
        closeWebSection();
        return;
      }

      closeWebEnvironment("intro");
    });

    document.addEventListener("visibilitychange", () => {
      elements.machine.classList.toggle("is-paused", document.hidden);
    });

    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches && cardTimer !== null) {
        finishCardTransition(true);
      }
    });

    window.addEventListener("pagehide", () => {
      window.clearTimeout(cardTimer);
      window.clearTimeout(toastTimer);

      if (transitionController) {
        transitionController.abort();
      }

      if (webController) {
        webController.abort();
        webController = null;
      }
    });
  }

  /* =======================================================
     INITIALIZATION
     ======================================================= */

  function initialize() {
    buildTimeline();
    buildWebSections();
    createParticles();

    const startingEra = currentEra();

    updateYearNodes();
    updateAtmosphere(startingEra);
    renderEraContent(startingEra);
    renderSoundPreference();

    bindEvents();
  }

  initialize();
})();
