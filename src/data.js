const data = [
    {
        Title: "Board demo with posts",
        color: '#CAF8FF',
        Posts: [
            {
                Title: "Galapogos Islands, Ecuador",
                img: '/img/post1.jpg',
                bookMarked: false,
                desc: "he Galápagos Islands are a chain of islands, or archipelago, in the eastern Pacific Ocean. They are part of the country of Ecuador, in South America. The Galápagos lie about 966 kilometers (600 miles) off of the Ecuadorian coast. There are thirteen major islands and a handful of smaller islands that make up the Galápagos archipelago. The largest of the islands is called Isabela. It is approximately 129 kilometers (80 miles) long. Repeated volcanic eruptions helped to form the rugged mountain landscape of the Galápagos Islands."
            },
            {
                Title: "Tamu Massif",
                img: '/img/post2.jpg',
                bookMarked: false,
                desc: "The Tamu Massif was formed about 145 million years ago during the Late Jurassic to Early Cretaceous period over a relatively short period of time (a few million years) and then became extinct. Tamu Massif was formed during a single geologically brief eruptive period, which scientists had previously thought was impossible on Earth. If confirmed, the suggestion that it could be a single volcano would make the Tamu Massif the largest known volcano on Earth, dwarfing the current record-holder, Pūhāhonu, in the Hawaiian Islands. "
            },
            {
                Title: "Dragon blood Tree",
                img: '/img/post3.jpg',
                bookMarked: true,
                desc: "The dragon blood tree has a unique and strange appearance, with an upturned, densely packed crown having the shape of an uprightly held umbrella. This evergreen species is named after its dark red resin, which is known as dragon's blood. Unlike most monocot plants, Dracaena displays secondary growth, D. cinnabari even has growth zones resembling tree rings found in dicot tree species."
            }
        ]
        
    },
    {
        Title: "Board demo empty post",
        color: '#FFEDC1',
        Posts: []
    },
    {
        Title: "Global Warming",
        color: '#C5C5FC',
        Posts: []
    },
    {
        Title: "Health is Wealth",
        color: '#FFAEC0',
        Posts: []
    }
]

const BoardColors = [
    {
        color:'#A7F0F9',
        background: ''
    },
    {
        color:'#C5C5FC',
        background: ''
    },
    {
        color:'#FFCC66',
        background: ''
    },
    {
        color:'#FFAEC0',
        background: ''
    }
]
const posts = [
    
        {
            boardTitle: "Football",
            Title: "History",
            desc: "djkfa dfjkjdskj fjskdfj kdfs;s ; fdsj;"
        },
        {
            boardTitle: "Bollyball",
            Title: "Alpha",
            desc: "djkfa dfjkjdskj fjskdfj kdfs;s ; fdsj;"
        },
        {
            board: "Football",
            Title: "gamma",
            desc: "djkfa dfjkjdskj fjskdfj kdfs;s ; fdsj;"
        },
        {
            boardTitle: "Fooatball",
            Title: "gamma",
            desc: "djkfa dfjkjdskj fjskdfj kdfs;s ; fdsj;"
        }
    
]
export {data, posts,BoardColors};