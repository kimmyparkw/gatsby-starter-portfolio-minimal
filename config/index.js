module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Kimmy Park-Wolmarans",
    siteShortTitle: "KPW", // Used as logo text in header, footer, and splash screen
    siteDescription: "A minimal portfolio site to showcase my projects and experience.",
    siteUrl: "https://kimmypark.com",
    siteLanguage: "en_US",
    siteIcon: "content/favicon1.png", // Relative to gatsby-config file
    seoTitleSuffix: "Kimmy Park-Wolmarans Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/kimmy-park-wolmarans/"
        },
        {
            name: "Github",
            url: "https://github.com/kimmyparkw"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}