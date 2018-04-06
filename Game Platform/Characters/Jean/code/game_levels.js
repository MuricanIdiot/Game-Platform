var GAME_LEVELS = [

   ["                                                                                 x",
   "                                                                                 x ",
   "                                                                                 x ",
   "                                                                               o x ",
   "                                                  g x =   g   = o     =gx        x ",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxx   x ",
   "                                        =      g          =                  x   x ",
   "                               xyyyyyxxxxyyyyyyx          o         o        x   x ",
   "                                               xxx        xxxxxxxxxxxx       x   x ",
   "                                                                 xxxxxx      x   x ",
   "                                                      xx        xxx!!xxx     x   x ",
   "                                             xxxxxx     xx      xx!!!!xx     x   x ",
   "                                                         xx      xx!!xx      x   x ",
   "                                         xx               xx      x!!x o     x   x ",
   "                             o                             x       vvxxxxxx  x   x ",
   "                                  xxxxxxxxxyyyyyyyy x!!!!!!x                 x   x ",
   "                                                    xyyyyyyx      o          x   x ",
   "                             xx                                  xxx         x   x ",
   "                             x                                  x            x   x ",
   "                      xxxxxxxxxx       o                       x        o    x   x ",
   "            x   x             x      x  x                     x        ooo   x   x ",
   "    m   @   xx  x s           x      x  x                             ooooo  x   x ",
   "xyyyxxxxxxxxx   xxxxxxxxxxxxxxxyxyyyyxyyxxxyxxyxxxxyyxxyyyxx     x   yyyxxx!!x   x ",
   "x              x              x      x  x         x  x     xx      o       !!x   x ",
   "x      o     x   |            x      x  x         x  x     x  o    x      o!!x   x ",
   "x           |                 x!!!!!!x!!xxxxx!!!xxx  x!!!!!xxxxxxx    xxxxx!!x   x ",
   "x             yxxxxxx         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x ",
   "x        xxxxx       x        x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x ",
   "xooooooox                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!x   x ",
   "xxxxxxxxx            xyyx                                                  !!x   x ",
   "x                        x                                               o !!x   x ",
   "x                            o        o          o                      xxx!!x   x ",
   "x                         xxxxxxxxxxxxx       xxxxxxxxx  x  s x        x   !!x   x ",
   "x                                        xxx             xxxxxxxxx    xx   !!x   x ",
   "x                                                                  x       !!x   x ",
   "x                                                                          !!x   x ",
   "x                                                                          !!x   x ",
   "x                                                                          !!x   x ",
   "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   x ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                                                   ",
   "                                                                                   ",
   "                                                                                   ",
   "                                                                                   ",
   "                                                                                   ",
   "                                                                                   ",
   "                                                                                   "],






  ["!!x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x @ x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!x   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!x   x!!!!!x g        =                  =                =       o       =         =                =                    =              x",
   "!!x   x!!!!!x                                                                              o                                              x",
   "!!x   xxxvxxx           xxxxxxxxxxx                                                       xxxx             o                              x",
   "!!x   x               x            x!!x      xxxxx                xxxx                            o      xxxxyyy                          x",
   "!!x   x        xxxx                x!!xo                                          xxxxxx        xxxyyx                                    x",
   "!!x   xo= g                xxxxx  xx!!xxxxx         xxyyxyyyxxx           x  x                                                            x",
   "!!x   xxxxxx                   x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x      x  o              xx  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x        xxx             x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x           x       g    x  xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x            xx  = xxx   x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x                        xx  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!xvx!!!!!!!xvx!!!!!xvx!!!!!!!!x  x!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!x   x!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxx  xxxx xxxxxxxxx xxxxxxxx xxxxxx!!!xyyxxxxvvxxxxvvxxxxvvxxxxxxxxx",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!x  xx!!!!!!!!!!!!!!!!!x                                                   x!!!x                            x",
   "!!x   x!!!!!!!!!!!!!!!!!!!!!!!!x   x!!!!!!!!!!!!!!!!!x   o   o   o   o   o   o   o   o   o   o  o   o    x!!!x                            x",
   "!!x   xxxxxxxxxxxxxxxxxxxxxxxxxxx  x!!!!!!!!!!!!!!!!!x  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!xxx                       xyyx",
   "!!x                                x!!!!!!!!!!!!!!!!!x  x!!!x                                    x!!!x   x!!!  x          xx          x   x",
   "!!x      o               o        xx!!!!!!!!!!!!!!!!!x  x!!!x      o                  o          x!!!x   x!!!x  x        x  x        x    x",
   "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!x  x!!!x   xxxxxxxxxx   o    xxxxxxxxxxxx   x!!!x   x!!!x   x      x    x      x     x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  x!!!x   x!!!x                    x!!!x  xx!!!x   x!!!x    x    x      x    x      x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  x!!!x o x!!!x  = g  xxxx       s x!!!x o x!!!x   x!!!x     xyyx        xyyx       x",
   "x                                                    x  x!!!x   x!!!xxxxx           xxxxxx!!!xx  x!!!x   x!!!x                            x",
   "x  g      =          =              =          =     x  xxvxx   xxvxx    x    o    x     xxvxx   xxvxx   xxvx!!!!!!!!!!!!!!!!!!!!!!!!!!!! x",
   "x                            o                       x  x   xyyyx   x                    xx xx  xx   x   x   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x       o                                                                  xxxxx            x                                             x",
   "x  m             x  x         s       x  x                                                    x                                      o    x",
   "xxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxyyxyxxxxxxxxxyyyyyyyyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!  !!!!!!!!!!!!!!!!!!!  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                                                                                                           ",
   "                                                                                                                                           "],
















  ["                                                                                                                                                                                            ",
  "                                                                                                                                                                                             ",
  "                                                                                                                                                                                             ",
  "                                                                                                                                                                                             ",
  "                                                                                                                                                                                             ",
  "               xxxxxxxxxxxx                xxxxxxxxxxxx      xxvxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxvxx      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       xxxvxxxx                        xvxx     ",
  "                x!!!!!!!!!!x              x!!!!!!!!!!x       x    x!!!!!!!!!!!!!!!!!!!!!!!!!!!x    x      x!!x                               x      x     | x                      x   x     ",
  "                 x!!!!!!!!!!x            x!!!!!!!!!!x        x     x!!!!!!!!!!!!!!!!!!!!!!!!!x     x      x!!x                               x      x        x                    x    x     ",
  "                  x!!!!!!!!!!x          x!!!!!!!!!!x         x      x!!!!!!!!!!!!!!!!!!!!!!!x      x      x!!x p                             x      x         x                  v     x     ",
  "                   x!!!!!!!!!!x        x!!!!!!!!!!x          x       x!!!!!!!!!!!!!!!!!!!!!x       x      x  xxxxx                       oo  x      x          v                x      x     ",
  "                    x!!!!!!!!!!x      x!!!!!!!!!!x           x        x!!!!!!!!!!!!!!!!!!!x        x      x              x xxxxxxxxxxxxxxxxxxx      x          x               x       x     ",
  "                     x!!!!!!!!!!x    x!!!!!!!!!!x            x         x!!!!!!!!!!!!!!!!!x         x      x o =      g  x  x                        x           x             v        x     ",
  "                      x!!!!!!!!!!x  x!!!!!!!!!!x             x          x!!!!!!!!!!!!!!!x          x      x xx         x   x                        x            x           x         x     ",
  "                       x!!!!!!!!!!xx!!!!!!!!!!x              x           x!!!!!!!!!!!!!x           x!!!!!!x    x      x    x                        x             x         x          x     ",
  "                        x!!!!!!!!!vv!!!!!!!!!x!!!!!!!!!!!!!!!x            x!!!!!!!!!!!x            x!!!!!!x       =g x     x!!!!!!!!!!!!!!!!!!!!!!!!x              x!!!!!!!x           x     ",
  "!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!x  x!!!!!!!x!!!!!!!!!!!!!!!!x             x!!!!!!!!!x             x!!!!!!x o       x      x!!!!!!!!!!!!!!!!!!!!!!!!x               x!!!!!x            x     ",
  "!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!x    x!!!!!x!!!!!!!!!!!!!!!!!x              x!!!!!!!x              x!!!!!!x xx     x       xxxxxxxxxxxx!!!!!!!!!!!!!x                x!!!x             x     ",
  "xxxxxvxxvxxvxxvxvxxxxxxxxxxxvxxx      xxxvxxxxxxxxxxxxxxxxxxxx               xvxvxvx               xxxxxxxx       x                   xxxxxxxxvxxxxxx                 xxx              x     ",
  "                                                                                                                 x                                                         xxxxxxx     x     ",
  "                                                                                 g =        =             =     x       =            =       =                            xx       x   x     ",
  "                                                                             o      o                         xx                                            o                  o    x  x     ",
  "  g =           =                  =                     =           =     xxxxxxxxxxxxxxxx                                          xxxxxxxxxxxxxxx  yxy xxxxxxxxxx          o o  x   x     ",
  "                                                             x                   o                          x                        x!!!!!!!!!!!!!x      x!!!!!!!!!x   xxxx    m x    x     ",
  " @     m  xs    x          xx           xx                   x     xxx                        xx                              o      x!!!!!!!!!!!!!x      x          x      xxxxxx     x     ",
  "xxxxxxxxxxxxyxxxxxxxxxxxx         xx          xxxxxxxxxxxxxxxx          xxxxxyxyxyxyxxxxx           xxxxxxx         xxx   xxxxxxxxxxxx!!!!!!!!!!!!!x      x           x                x     ",
  "!!!!!!!!!!!!!!!!!!!!!!!!x         xx          x!!!!!!!!!!!!!!xxx        x!!!!!!!!!!!!!!!xxx        x!!!!!!x   x           x!!!!!!!!!!!!!!!!!!!!!!!!x      x            x               x     ",
  "!!!!!!!!!!!!!!!!!!!!!!!x         x!!x          x!!!!!!!!!!!!!x xx       x!!!!!!!!!!!!!!!x xx       x!!!!!!x    x          x!!!!!!!!!!!!!!!!!!!!!!!!x      x             x              x     ",
  "!!!!!!!!!!!!!!!!!!!!!!x         x!!!!x          x!!!!!!!!!!!!x        xxx!!!!!!!!!!!!!!!x        xxx!!!!!!x     x         x!!!!!!!!!!!!!!!!!!!!!!!!x      x              x             x     ",
  "!!!!!!!!!!!!!!!!!!!!!x         x!!!!!!x          x!!!!!!!!!!!x      xx  x!!!!!!!!!!!!!!!x      xx  x!!!!!!x      x        xxxxxxxxxxxxxxxxxxx!!!!!!x      x               x            x     ",
  "!!!!!!!!!!!!!!!!!!!!x         x!!!!!!!!x          x!!!!!!!!!!xxxx       x!!!!!!!!!!!!!!!xxxx       x!!!!!!x       x                      =  x!!!!!!x      x                x           x     ",
  "!!!!!!!!!!!!!!!!!!!x         x!!!!!!!!!!x          x!!!!!!!!!x  xx      x!!!!!!!!!!!!!!!x  xx      x!!!!!!x   =    x           =            x!!!!!!x      x                 x          x     ",
  "!!!!!!!!!!!!!!!!!!x         x!!!!!!!!!!!!x          x!!!!!!!!x     o    x!!!!!!!!!!!!!!!x    o     x!!!!!!x =       x                  oo   x!!!!!!x      x                  x         x     ",
  "!!!!!!!!!!!!!!!!!x oo o oo x!!!!!!!!!!!!!!xo o o o o x!!!!!!!x   m x   sx!!!!!!!!!!!!!!!x   sx  m  x!!!!!!x   =      x =              oooo  x!!!!!!x!!!!!!x                   x!!!!!!!!x     ",
  "!!!!!!!!!!!!!!!!!xxxxxxxxxx!!!!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!xxxxxxxxxxxx!!!!!!!!!!!!!!!xxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!xxxxxxxx                    xxxxxxxxx     ",
  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  "                                                                                                                                                                                             ",  "                                                                                                                                                                                     ",
  "                                                                                                                                                                                             "],


["t                                                                        t",
"t        t  t   ttttt   t   t        t       t  ttttt  ttttt   t   t     t ",
"t        t  t   t   t   t   t        t  ttt  t  t   t  t   t   t   t     t ",
"t        tttt   t   t   t   t        t  t t  t  t   t  t   t   t   t     t ",
"t          t    t   t   t   t        t  t t  t  t   t  t   t             t ",
"t          t    ttttt   ttttt        tttt tttt  ttttt  t   t   t   t     t ",
"t                                                                        t ",
"t                                                                        t ",
"t    @                                                                   t ",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],

















];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
