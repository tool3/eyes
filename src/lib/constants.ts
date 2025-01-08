export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof document !== 'undefined'
export const isServer = !isClient

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.
    
1. Create .env file at the root of your project.
2. Add NEXT_PUBLIC_SITE_URL=http://localhost:3000
3. For other environments (like production), make sure you set the correct URL.
    `
  )
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL)
export const siteOrigin = siteURL.origin

// we like putting this in the JavaScript console,
// as our signature.
// you can delete it if not needed.
export const basementLog = `
                                                                                                                                                            
    
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAA                                                                   AAAAAAAAA       
   AAAAAAAAAAAA       xXAAACQ4ddeeeefcdddddedededdfeeeedeeedcfc4HAAAATz       AAAAAAAAAAA       
   AAAAAAAAAAAAA   rsy      wBAAAIU6bdeeecdcccceccedddddb4MAAAAAz       zy   AAAAAAAAAAAA       
   AAAAAAAAAAAAAA   ssssstvy      7JAAAJY0dddecddcd9RAAAAA1        yyyzzz   AAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAA  zssssstprrtu       VAAADMOEAAAAG        xyzyyzzzyyz  AAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAA   rrrrrrspqrqrsprt      lNt      yyxxyyyyyyyyyyxz   AAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAg  sqqqqrsqrsrpqpqrprnqxy  zyvxxxxxwxyyyyyyzyyzy   AAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAA  xrrrrsoppqrpqoprnpnofm xwvvxxvxxywyyyyxyyy   AAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAA   pppqqqppqrqrsnpnopgq xwvyyvwyxwxyyyyyyx   AAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAo  qqqqqrpqrmnopropohn rxwtwwxxxxyxwyyyy   AAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAA  vqqqrqropqrnonpqeo syxvxxvwyxxyyxy   AAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAA   ooopmnoompopmnfn twvwuwxvwxxxxx   AAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAA   oooppopppqnomfo uxxvvywxwxvyy   AAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAA  tpppqmnnomnogk sswwuvxxwxwx  AAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAA   oomnnnoopngm uuywxvuvuy   AAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy  ooooooopkcl tuuswwwyx   AAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  sllllllmen suvtuttw  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   onnnnodn ututvv   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   nmmmndk swvut   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  rnnobj susz  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ymlck sv   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   ncn t  iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  gj   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA      
                                                                                
   Tal Hayut. 
   https://github.com/tool3
   https://linkedin.com/in/talhayut
`

// TODO: add variable (NEXT_PUBLIC_GA_TRACKING_ID) to env if necessary
export const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
