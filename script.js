const possible_categories = ['shower thought', 'financial', 'biblical', 'shakespeare', 'headline'];

const shower_thought = ["Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.", "\"Go to bed, you'll feel better in the morning\" is the human version of \"Did you turn it off and turn it back on again?\"", "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume", "Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.", "If my calculator had a history, it would be more embarrassing than my browser history.", "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.", "As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook.", "The Olympics should have a 'For Fun' section at the end of all the games so all the athletes can try different sports.", "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting.", "What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we're here but they've agreed not to contact us until we figure it out for ourselves."];

const financial = ["In the precious metals marketplace, always cover subprime estimated losses.", "The smart trader nowadays will be sure not to underwrite exchange-traded GSEs.", "Liquid derivatives: in mezzanine sectors, plan to prorate them.", "In the high frequency trading market, be sure to diversify mortgage-backed acquisition costs.", "The smart investor this season will never securitize lower-classed forward rate agreements.", "Non-defaulted HELOCs: in deferred market segments, be sure to restructure them.", "Revenue-neutral credit exposures: in the foreign currency sector, be sure not to collateralize them.", "Revenue-neutral credit exposures: in the foreign currency sector, be sure not to collateralize them.", "In uninsured markets, never leverage unpooled loan portfolios.", "In credit-linked markets, always redistribute low-IRR special-purpose entities."];

const biblical = ["Believe in the everlasting God and thou shalt restore thy restraint; thou shalt be sheltered from the cancer.", "Massa, son of Anub did procureth wagons full of noodles and was an abomination in the eyes of the God of Israel.", "Thus saith God the Father: make ye not crates of moonshine, but barns full of chaff.", "The Lord God hath not given us the spirit of weakness, but of abundance and haggling skills.", "For God hath not given us the spirit of vice, but of love and courage.", "Totally dig the Lord and thou shalt be immune to the gout; thou shalt remove fear.", "Mareshah did openeth satchels of foreskins and was a loser in the eyes of the Holy One.", "They that honor the Lord shalt drive away villainy; they shalt replenish their Twitter followers.", "I say unto thee: bury ye not boxes of waterfowl, but piles of curvy swords.", "For God hath not given us the spirit of lust, but of wealth and purity."];

const shakespeare = ["O sinful burden! Hark! Thou art th’ cloud’s unworthy misgivings.", "Lo! Wherefore doth despis’d infirmity abstain from thy suspicion’s hopes?", "From whence doth regal death appease thy kin’s hands? Yea!", "O evil commerce! Thou art the angels’ celestial ears.", "Why doth trivial auspice stain thy chastity’s blood? O base fear!", "Why doth never-dying merit tease not upon thy virtue’s troubles?", "O weary honor! Nay! Thou art th’ Devil’s own womanly nightmares.", "Wherefore doth uncouth fortune expostulate not the flood’s zeal? O bruising history!", "From whence doth foul indignity burn not for woman’s faults?", "From whence doth debased heaven grant pardon for these Princes’ ancient toes?"];

const headline = ["10 Scary Facts That Will Make Your Doctor Stronger", "12 Secrets Professors Are Hiding From You", "Harvey Weinstein’s 15 Parenting Tips", "5 Drunk Driving Tips From Angelina Jolie", "Will Martin Scorsese Save HTML?", "6 Unbelievable Things Your Elected Official Writes About", "The Dangerous Truth About Kim Kardashian", "20 Fascinating Truths That Make Local Politicians Eat More Vegetables", "8 Dirty Truths Contractors Won’t Tell You", "5 Surprising Windsurfing Secrets From Mila Kunis"];


const randomizeData = () => {
    const category = Math.floor(Math.random() * 5);
    const rand = Math.floor(Math.random() * 10);
    if (category === 0) {
        return '<h2>Your shower thought of the day: </h2><br>\n' + shower_thought[rand];
    } else if (category === 1) {
        return '<h2>Your financial advice for the day: </h2><br>\n' + financial[rand];
    } else if (category === 2) {
        return '<h2>Your bible scripture for the day: </h2><br>\n' + biblical[rand];
    } else if (category === 3) {
        return '<h2>Your shakespeare monologue for the day: </h2><br>\n' + shakespeare[rand];
    } else {
        return '<h2>Recommended headlines for you: </h2><br>\n' + headline[rand];
    }
};


const messageOne = randomizeData();
const messageTwo = randomizeData();
const messageThree = randomizeData();


let overviewButton = document.getElementById('overview-button');
let overviewTitle = document.getElementById('overview-title');
let mainContent = document.getElementById('main');

let container1 = document.getElementById('1');
let container2 = document.getElementById('2');
let container3 = document.getElementById('3');

mainContent.hidden = true;

overviewButton.onclick = function() {
    overviewButton.hidden = true;
    overviewTitle.hidden = true;

    mainContent.hidden = false;

    container1.innerHTML = messageOne;
    container2.innerHTML = messageTwo;
    container3.innerHTML = messageThree;
}

document.getElementById('reload').onclick = function() {
    location.reload();
}