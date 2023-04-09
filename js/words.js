const objects = [
    "CD",
    "Christmas ornament",
    "acorn",
    "apple",
    "bag",
    "bag of cotton balls",
    "bag of popcorn",
    "bag of rubber bands",
    "ball of yarn",
    "balloon",
    "banana",
    "bandana",
    "bangle bracelet",
    "bar of soap",
    "baseball",
    "baseball bat",
    "baseball hat",
    "basketball",
    "beaded bracelet",
    "beaded necklace",
    "bed",
    "beef",
    "bell",
    "belt",
    "blouse",
    "blowdryer",
    "bonesaw",
    "book",
    "book of jokes",
    "book of matches",
    "bookmark",
    "boom box",
    "bottle",
    "bottle cap",
    "bottle of glue",
    "bottle of honey",
    "bottle of ink",
    "bottle of lotion",
    "bottle of nail polish",
    "bottle of oil",
    "bottle of paint",
    "bottle of perfume",
    "bottle of pills",
    "bottle of soda",
    "bottle of sunscreen",
    "bottle of syrup",
    "bottle of water",
    "bouquet of flowers",
    "bow",
    "bow tie",
    "bowl",
    "box",
    "box of Q-tips",
    "box of baking soda",
    "box of chalk",
    "box of chocolates",
    "box of crayons",
    "box of markers",
    "box of tissues",
    "bracelet",
    "bread",
    "broccoli",
    "brush",
    "buckle",
    "butter knife",
    "button",
    "camera",
    "can of beans",
    "can of chili",
    "can of peas",
    "can of whipped cream",
    "candle",
    "candlestick",
    "candy bar",
    "candy cane",
    "candy wrapper",
    "canteen",
    "canvas",
    "car",
    "card",
    "carrot",
    "carrots",
    "cars",
    "carton of ice cream",
    "cat",
    "catalogue",
    "cell phone",
    "cellphone",
    "cement stone",
    "chain",
    "chair",
    "chalk",
    "chapter book",
    "check book",
    "chenille stick",
    "chicken",
    "children's book",
    "chocolate",
    "class ring",
    "clay pot",
    "clock",
    "clothes",
    "clothes pin",
    "coffee mug",
    "coffee pot",
    "comb",
    "comic book",
    "computer",
    "conditioner",
    "container of pudding",
    "cookie jar",
    "cookie tin",
    "cork",
    "couch",
    "cow",
    "cowboy hat",
    "craft book",
    "credit card",
    "crow",
    "crowbar",
    "cucumber",
    "cup",
    "dagger",
    "deodorant",
    "desk",
    "dictionary",
    "dog",
    "dolphin",
    "domino set",
    "door",
    "dove",
    "drawer",
    "drill press",
    "egg",
    "egg beater",
    "egg timer",
    "empty bottle",
    "empty jar",
    "empty tin can",
    "eraser",
    "extension cord",
    "eye liner",
    "face wash",
    "fake flowers",
    "feather",
    "feather duster",
    "few batteries",
    "fish",
    "fishing hook",
    "flag",
    "flashlight",
    "floor",
    "flowers",
    "flyswatter",
    "food",
    "football",
    "fork",
    "fridge",
    "frying pan",
    "game CD",
    "game cartridge",
    "garden spade",
    "giraffe",
    "glass",
    "glasses",
    "glow stick",
    "grid paper",
    "grocery list",
    "hair brush",
    "hair clip",
    "hair pin",
    "hair ribbon",
    "hair tie",
    "hammer",
    "hamster",
    "hand bag",
    "hand fan",
    "hand mirror",
    "handbasket",
    "handful of change",
    "handheld game system",
    "hanger",
    "harmonica",
    "helmet",
    "house",
    "ice cream stick",
    "ice cube",
    "ice pick",
    "incense holder",
    "ipod",
    "ipod charger",
    "jar of jam",
    "jar of peanut butter",
    "jar of pickles",
    "jigsaw puzzle",
    "key",
    "key chain",
    "keyboard",
    "keychain",
    "keys",
    "kitchen knife",
    "knife",
    "lace",
    "ladle",
    "lamp",
    "lamp shade",
    "laser pointer",
    "leg warmers",
    "lemon",
    "letter opener",
    "light",
    "light bulb",
    "lighter",
    "lime",
    "lion",
    "lip gloss",
    "locket",
    "lotion",
    "magazine",
    "magnet",
    "magnifying glass",
    "map",
    "marble",
    "martini glass",
    "matchbook",
    "microphone",
    "milk",
    "miniature portrait",
    "mirror",
    "mobile phone",
    "model car",
    "money",
    "monitor",
    "mop",
    "mouse pad",
    "mp3 player",
    "multitool",
    "music CD",
    "nail",
    "nail clippers",
    "nail filer",
    "necktie",
    "needle",
    "notebook",
    "notepad",
    "novel",
    "ocarina",
    "orange",
    "outlet",
    "pack of cards",
    "package of crisp and crunchy edibles",
    "package of glitter",
    "packet of seeds",
    "pail",
    "paint brush",
    "paintbrush",
    "pair of binoculars",
    "pair of dice",
    "pair of earrings",
    "pair of glasses",
    "pair of handcuffs",
    "pair of knitting needles",
    "pair of rubber gloves",
    "pair of safety goggles",
    "pair of scissors",
    "pair of socks",
    "pair of sunglasses",
    "pair of tongs",
    "pair of water goggles",
    "panda",
    "pants",
    "paper",
    "paperclip",
    "pasta strainer",
    "pearl necklace",
    "pen",
    "pencil",
    "pencil holder",
    "pepper shaker",
    "perfume",
    "phone",
    "photo album",
    "picture frame",
    "piece of gum",
    "pillow",
    "pinecone",
    "plastic fork",
    "plate",
    "plush bear",
    "plush cat",
    "plush dinosaur",
    "plush dog",
    "plush frog",
    "plush octopus",
    "plush pony",
    "plush rabbit",
    "plush unicorn",
    "pocketknife",
    "pocketwatch",
    "pool stick",
    "pop can",
    "postage stamp",
    "puddle",
    "purse",
    "purse/bag",
    "quartz crystal",
    "quilt",
    "rabbit",
    "radio",
    "rat",
    "remote",
    "rhino",
    "ring",
    "rock",
    "roll of duct tape",
    "roll of gauze",
    "roll of masking tape",
    "roll of stickers",
    "roll of toilet paper",
    "rolling pin",
    "rope",
    "rubber band",
    "rubber duck",
    "rubber stamp",
    "rug",
    "rusty nail",
    "safety pin",
    "sailboat",
    "salt shaker",
    "sand paper",
    "sandal",
    "sandglass",
    "scallop shell",
    "scarf",
    "scotch tape",
    "screw",
    "screwdriver",
    "seat belt",
    "shampoo",
    "shark",
    "sharpie",
    "shawl",
    "sheep",
    "sheet of paper",
    "shirt",
    "shirt button",
    "shoe lace",
    "shoes",
    "shopping bag",
    "shovel",
    "sidewalk",
    "sketch pad",
    "slipper",
    "small pouch",
    "snail shell",
    "snowglobe",
    "soap",
    "soccer ball",
    "socks",
    "sofa",
    "spatula",
    "speakers",
    "spectacles",
    "spice bottle",
    "sponge",
    "spool of ribbon",
    "spool of string",
    "spool of thread",
    "spool of wire",
    "spoon",
    "spring",
    "squirrel",
    "squirt gun",
    "statuette",
    "steak knife",
    "stick",
    "stick of incense",
    "sticker book",
    "sticky note",
    "stockings",
    "stop sign",
    "straw",
    "street lights",
    "sun glasses",
    "sword",
    "table",
    "tea cup",
    "tea pot",
    "teddies",
    "television",
    "tennis ball",
    "tennis racket",
    "thermometer",
    "thimble",
    "thread",
    "tiger",
    "tire swing",
    "tissue box",
    "toe ring",
    "toilet",
    "toilet paper tube",
    "tomato",
    "tooth pick",
    "toothbrush",
    "toothpaste",
    "toothpick",
    "towel",
    "toy boat",
    "toy car",
    "toy plane",
    "toy robot",
    "toy soldier",
    "toy top",
    "trash bag",
    "tree",
    "trucks",
    "tube of lip balm",
    "tube of lipstick",
    "turtle",
    "tv",
    "tweezers",
    "twister",
    "umbrella",
    "vase",
    "video games",
    "wallet",
    "washcloth",
    "washing machine",
    "watch",
    "water",
    "water bottle",
    "wedding ring",
    "whale",
    "whip",
    "whistle",
    "white out",
    "window",
    "wine glass",
    "wireless control",
    "wishbone",
    "wooden spoon",
    "word search",
    "wrench",
    "wristwatch",
    "zebra",
    "zipper",
    "baby grow",
    "ball gown",
    "belt",
    "bikini",
    "blazer",
    "blouse",
    "boots",
    "bow tie",
    "boxers",
    "bra",
    "bra & knicker set",
    "briefs",
    "camisole",
    "cap",
    "cardigan",
    "cargos",
    "catsuit",
    "chemise",
    "coat",
    "corset",
    "cravat",
    "cufflinks",
    "cummerbund",
    "dinner jacket",
    "dress",
    "dressing gown",
    "dungarees",
    "fleece",
    "gloves",
    "hat",
    "hoody",
    "jacket",
    "jeans",
    "jogging suit",
    "jumper",
    "kaftan",
    "kilt",
    "knickers",
    "kurta",
    "lingerie",
    "nightgown",
    "nightwear",
    "pants",
    "pashmina",
    "polo shirt",
    "poncho",
    "pyjamas",
    "raincoat",
    "robe",
    "romper",
    "sandals",
    "sarong",
    "scarf",
    "shawl",
    "shellsuit",
    "shirt",
    "shoes",
    "shorts",
    "skirt",
    "slacks",
    "slippers",
    "socks",
    "stockings",
    "suit",
    "sunglasses",
    "sweater",
    "sweatshirt",
    "swimming costume",
    "swimming shorts",
    "swimming trunks",
    "swimwear",
    "t-shirt",
    "tailcoat",
    "tankini",
    "thong",
    "tie",
    "tights",
    "top",
    "tracksuit",
    "trainers",
    "trousers",
    "underclothes",
    "underpants",
    "undershirt",
    "underwear",
    "vest",
    "vest underwear",
    "waistcoat",
    "waterproof",
    "zip"
];
const adjectives = [
    "Aristotelian",
    "Arthurian",
    "Bohemian",
    "Brethren",
    "Mosaic",
    "Oceanic",
    "Proctor",
    "Terran",
    "Tudor",
    "abroad",
    "absorbing",
    "abstract",
    "academic",
    "accelerated",
    "accented",
    "accountant",
    "acquainted",
    "acute",
    "addicting",
    "addictive",
    "adjustable",
    "admired",
    "adult",
    "adverse",
    "advised",
    "aerosol",
    "afraid",
    "aggravated",
    "aggressive",
    "agreeable",
    "alienate",
    "aligned",
    "all-round",
    "alleged",
    "almond",
    "alright",
    "altruistic",
    "ambient",
    "ambivalent",
    "amiable",
    "amino",
    "amorphous",
    "amused",
    "anatomical",
    "ancestral",
    "angelic",
    "angrier",
    "answerable",
    "antiquarian",
    "antiretroviral",
    "appellate",
    "applicable",
    "apportioned",
    "approachable",
    "appropriated",
    "archer",
    "aroused",
    "arrested",
    "assertive",
    "assigned",
    "athletic",
    "atrocious",
    "attained",
    "authoritarian",
    "autobiographical",
    "avaricious",
    "avocado",
    "awake",
    "awesome",
    "backstage",
    "backwoods",
    "balding",
    "bandaged",
    "banded",
    "banned",
    "barreled",
    "battle",
    "beaten",
    "begotten",
    "beguiled",
    "bellied",
    "belted",
    "beneficent",
    "besieged",
    "betting",
    "big-money",
    "biggest",
    "biochemical",
    "bipolar",
    "blackened",
    "blame",
    "blessed",
    "blindfolded",
    "bloat",
    "blocked",
    "blooded",
    "blue-collar",
    "blushing",
    "boastful",
    "bolder",
    "bolstered",
    "bonnie",
    "bored",
    "boundary",
    "bounded",
    "bounding",
    "branched",
    "brawling",
    "brazen",
    "breeding",
    "bridged",
    "brimming",
    "brimstone",
    "broadest",
    "broiled",
    "broker",
    "bronze",
    "bruising",
    "buffy",
    "bullied",
    "bungling",
    "burial",
    "buttery",
    "candied",
    "canonical",
    "cantankerous",
    "cardinal",
    "carefree",
    "caretaker",
    "casual",
    "cathartic",
    "causal",
    "chapel",
    "characterized",
    "charcoal",
    "cheeky",
    "cherished",
    "chipotle",
    "chirping",
    "chivalrous",
    "circumstantial",
    "civic",
    "civil",
    "civilised",
    "clanking",
    "clapping",
    "claptrap",
    "classless",
    "cleansed",
    "cleric",
    "cloistered",
    "codified",
    "colloquial",
    "colour",
    "combat",
    "combined",
    "comely",
    "commissioned",
    "commonplace",
    "commuter",
    "commuting",
    "comparable",
    "complementary",
    "compromising",
    "conceding",
    "concentrated",
    "conceptual",
    "conditioned",
    "confederate",
    "confident",
    "confidential",
    "confining",
    "confuse",
    "congressional",
    "consequential",
    "conservative",
    "constituent",
    "contaminated",
    "contemporaneous",
    "contraceptive",
    "convertible",
    "convex",
    "cooked",
    "coronary",
    "corporatist",
    "correlated",
    "corroborated",
    "cosmic",
    "cover",
    "crash",
    "crypto",
    "culminate",
    "cushioned",
    "dandy",
    "dashing",
    "dazzled",
    "decreased",
    "decrepit",
    "dedicated",
    "defaced",
    "defective",
    "defenseless",
    "deluded",
    "deodorant",
    "departed",
    "depress",
    "designing",
    "despairing",
    "destitute",
    "detective",
    "determined",
    "devastating",
    "deviant",
    "devilish",
    "devoted",
    "diagonal",
    "dictated",
    "didactic",
    "differentiated",
    "diffused",
    "dirtier",
    "disabling",
    "disconnected",
    "discovered",
    "disdainful",
    "diseased",
    "disfigured",
    "disheartened",
    "disheveled",
    "disillusioned",
    "disparate",
    "dissident",
    "doable",
    "doctrinal",
    "doing",
    "dotted",
    "double-blind",
    "downbeat",
    "dozen",
    "draining",
    "draught",
    "dread",
    "dried",
    "dropped",
    "dulled",
    "duplicate",
    "eaten",
    "echoing",
    "economical",
    "elaborated",
    "elastic",
    "elective",
    "electoral",
    "elven",
    "embryo",
    "emerald",
    "emergency",
    "emissary",
    "emotional",
    "employed",
    "enamel",
    "encased",
    "encrusted",
    "endangered",
    "engraved",
    "engrossing",
    "enlarged",
    "enlisted",
    "enlivened",
    "ensconced",
    "entangled",
    "enthralling",
    "entire",
    "envious",
    "eradicated",
    "eroded",
    "esoteric",
    "essential",
    "evaporated",
    "ever-present",
    "evergreen",
    "everlasting",
    "exacting",
    "exasperated",
    "excess",
    "exciting",
    "executable",
    "existent",
    "exonerated",
    "exorbitant",
    "exponential",
    "export",
    "extraordinary",
    "exultant",
    "exulting",
    "facsimile",
    "fading",
    "fainter",
    "faith-based",
    "fallacious",
    "faltering",
    "famous",
    "fancier",
    "fast-growing",
    "fated",
    "favourable",
    "fearless",
    "feathered",
    "fellow",
    "fermented",
    "ferocious",
    "fiddling",
    "filling",
    "firmer",
    "fitted",
    "flammable",
    "flawed",
    "fledgling",
    "fleshy",
    "flexible",
    "flickering",
    "floral",
    "flowering",
    "flowing",
    "foggy",
    "folic",
    "foolhardy",
    "foolish",
    "footy",
    "forehand",
    "forked",
    "formative",
    "formulaic",
    "foul-mouthed",
    "fractional",
    "fragrant",
    "fraudulent",
    "freakish",
    "freckled",
    "freelance",
    "freight",
    "fresh",
    "fretted",
    "frugal",
    "fulfilling",
    "fuming",
    "funded",
    "funny",
    "garbled",
    "gathered",
    "geologic",
    "geometric",
    "gibberish",
    "gilded",
    "ginger",
    "glare",
    "glaring",
    "gleaming",
    "glorified",
    "glorious",
    "goalless",
    "gold-plated",
    "goody",
    "grammatical",
    "grande",
    "grateful",
    "gratuitous",
    "graven",
    "greener",
    "grinding",
    "grizzly",
    "groaning",
    "grudging",
    "guaranteed",
    "gusty",
    "half-breed",
    "hand-held",
    "handheld",
    "hands-off",
    "hard-pressed",
    "harlot",
    "healing",
    "healthier",
    "healthiest",
    "heart",
    "heart-shaped",
    "heathen",
    "hedonistic",
    "heralded",
    "herbal",
    "high-density",
    "high-performance",
    "high-res",
    "high-yield",
    "hissy",
    "hitless",
    "holiness",
    "homesick",
    "honorable",
    "hooded",
    "hopeless",
    "horrendous",
    "horrible",
    "hot-button",
    "huddled",
    "human",
    "humbling",
    "humid",
    "humiliating",
    "hypnotized",
    "idealistic",
    "idiosyncratic",
    "ignited",
    "illustrated",
    "illustrative",
    "imitated",
    "immense",
    "immersive",
    "immigrant",
    "immoral",
    "impassive",
    "impressionable",
    "improbable",
    "impulsive",
    "in-between",
    "in-flight",
    "inattentive",
    "inbound",
    "inbounds",
    "incalculable",
    "incomprehensible",
    "indefatigable",
    "indigo",
    "indiscriminate",
    "indomitable",
    "inert",
    "inflate",
    "inform",
    "inheriting",
    "injured",
    "injurious",
    "inking",
    "inoffensive",
    "insane",
    "insensible",
    "insidious",
    "insincere",
    "insistent",
    "insolent",
    "insufferable",
    "intemperate",
    "interdependent",
    "interesting",
    "interfering",
    "intern",
    "interpreted",
    "intersecting",
    "intolerable",
    "intolerant",
    "intuitive",
    "irresolute",
    "irritate",
    "jealous",
    "jerking",
    "joining",
    "joint",
    "journalistic",
    "joyful",
    "keyed",
    "knowing",
    "lacklustre",
    "laden",
    "lagging",
    "lamented",
    "laughable",
    "layered",
    "leather",
    "leathern",
    "leery",
    "left-footed",
    "legible",
    "leisure",
    "lessening",
    "liberating",
    "life-size",
    "lifted",
    "lightest",
    "limitless",
    "listening",
    "literary",
    "liver",
    "livid",
    "lobster",
    "locked",
    "long-held",
    "long-lasting",
    "long-running",
    "long-suffering",
    "loudest",
    "loveliest",
    "low-budget",
    "low-carb",
    "lowering",
    "lucid",
    "luckless",
    "lusty",
    "luxurious",
    "magazine",
    "maniac",
    "manmade",
    "maroon",
    "mastered",
    "mated",
    "material",
    "materialistic",
    "meaningful",
    "measuring",
    "mediaeval",
    "medical",
    "meditated",
    "medley",
    "melodic",
    "memorable",
    "memorial",
    "metabolic",
    "metallic",
    "metallurgical",
    "metering",
    "midair",
    "midterm",
    "midway",
    "mighty",
    "migrating",
    "mind-blowing",
    "mind-boggling",
    "minor",
    "mirrored",
    "misguided",
    "misshapen",
    "mitigated",
    "mixed",
    "modernized",
    "molecular",
    "monarch",
    "monastic",
    "morbid",
    "motley",
    "motorized",
    "mounted",
    "multi-million",
    "multidisciplinary",
    "muscled",
    "muscular",
    "muted",
    "mysterious",
    "mythic",
    "nail-biting",
    "natural",
    "nauseous",
    "negative",
    "networked",
    "neurological",
    "neutered",
    "newest",
    "night",
    "nitrous",
    "no-fly",
    "noncommercial",
    "nonsense",
    "north",
    "nuanced",
    "occurring",
    "offensive",
    "oldest",
    "oncoming",
    "one-eyed",
    "one-year",
    "onstage",
    "onward",
    "opaque",
    "open-ended",
    "operating",
    "opportunist",
    "opposing",
    "opt-in",
    "ordinate",
    "outdone",
    "outlaw",
    "outsized",
    "overboard",
    "overheated",
    "oversize",
    "overworked",
    "oyster",
    "paced",
    "panting",
    "paralyzed",
    "paramount",
    "parental",
    "parted",
    "partisan",
    "passive",
    "pastel",
    "patriot",
    "peacekeeping",
    "pedestrian",
    "peevish",
    "penal",
    "penned",
    "pensive",
    "perceptual",
    "perky",
    "permissible",
    "pernicious",
    "perpetuate",
    "perplexed",
    "pervasive",
    "petrochemical",
    "philosophical",
    "picturesque",
    "pillaged",
    "piped",
    "piquant",
    "pitching",
    "plausible",
    "pliable",
    "plumb",
    "politician",
    "polygamous",
    "poorest",
    "portmanteau",
    "posed",
    "positive",
    "possible",
    "postpartum",
    "prank",
    "pre-emptive",
    "precocious",
    "predicted",
    "premium",
    "preparatory",
    "prerequisite",
    "prescient",
    "preserved",
    "presidential",
    "pressed",
    "pressurized",
    "presumed",
    "prewar",
    "priced",
    "pricier",
    "primal",
    "primer",
    "primetime",
    "printed",
    "private",
    "problem",
    "procedural",
    "process",
    "prodigious",
    "professional",
    "programmed",
    "progressive",
    "prolific",
    "promising",
    "promulgated",
    "pronged",
    "proportionate",
    "protracted",
    "pulled",
    "pulsed",
    "purgatory",
    "quick",
    "rapid-fire",
    "raunchy",
    "razed",
    "reactive",
    "readable",
    "realizing",
    "recognised",
    "recovering",
    "recurrent",
    "recycled",
    "redeemable",
    "reflecting",
    "regal",
    "registering",
    "reliable",
    "reminiscent",
    "remorseless",
    "removable",
    "renewable",
    "repeating",
    "repellent",
    "reserve",
    "resigned",
    "respectful",
    "rested",
    "restrict",
    "resultant",
    "retaliatory",
    "retiring",
    "revelatory",
    "reverend",
    "reversing",
    "revolving",
    "ridiculous",
    "right-hand",
    "ringed",
    "risque",
    "robust",
    "roomful",
    "rotating",
    "roused",
    "rubber",
    "run-down",
    "running",
    "runtime",
    "rustling",
    "safest",
    "salient",
    "sanctioned",
    "saute",
    "saved",
    "scandalized",
    "scarlet",
    "scattering",
    "sceptical",
    "scheming",
    "scoundrel",
    "scratched",
    "scratchy",
    "scrolled",
    "seated",
    "second-best",
    "segregated",
    "self-taught",
    "semiautomatic",
    "senior",
    "sensed",
    "sentient",
    "sexier",
    "shadowy",
    "shaken",
    "shaker",
    "shameless",
    "shaped",
    "shiny",
    "shipped",
    "shivering",
    "shoestring",
    "short",
    "short-lived",
    "signed",
    "simplest",
    "simplistic",
    "sizable",
    "skeleton",
    "skinny",
    "skirting",
    "skyrocketed",
    "slamming",
    "slanting",
    "slapstick",
    "sleek",
    "sleepless",
    "sleepy",
    "slender",
    "slimmer",
    "smacking",
    "smokeless",
    "smothered",
    "smouldering",
    "snuff",
    "socialized",
    "solid-state",
    "sometime",
    "sought",
    "spanking",
    "sparing",
    "spattered",
    "specialized",
    "specific",
    "speedy",
    "spherical",
    "spiky",
    "spineless",
    "sprung",
    "squint",
    "stainless",
    "standing",
    "starlight",
    "startled",
    "stately",
    "statewide",
    "stereoscopic",
    "sticky",
    "stimulant",
    "stinky",
    "stoked",
    "stolen",
    "storied",
    "strained",
    "strapping",
    "strengthened",
    "stubborn",
    "stylized",
    "suave",
    "subjective",
    "subjugated",
    "subordinate",
    "succeeding",
    "suffering",
    "summary",
    "sunset",
    "sunshine",
    "supernatural",
    "supervisory",
    "supply-side",
    "surrogate",
    "suspended",
    "suspenseful",
    "swarthy",
    "sweating",
    "sweeping",
    "swinging",
    "swooning",
    "sympathize",
    "synchronized",
    "synonymous",
    "synthetic",
    "tailed",
    "tallest",
    "tangible",
    "tanked",
    "tarry",
    "technical",
    "tectonic",
    "telepathic",
    "tenderest",
    "territorial",
    "testimonial",
    "theistic",
    "thicker",
    "threatening",
    "tight-lipped",
    "timed",
    "timely",
    "timid",
    "torrent",
    "totalled",
    "tougher",
    "traditional",
    "transformed",
    "trapped",
    "traveled",
    "traverse",
    "treated",
    "trial",
    "trunk",
    "trusting",
    "trying",
    "twisted",
    "two-lane",
    "tyrannical",
    "unaided",
    "unassisted",
    "unassuming",
    "unattractive",
    "uncapped",
    "uncomfortable",
    "uncontrolled",
    "uncooked",
    "uncooperative",
    "underground",
    "undersea",
    "undisturbed",
    "unearthly",
    "uneasy",
    "unequal",
    "unfazed",
    "unfinished",
    "unforeseen",
    "unforgivable",
    "unidentified",
    "unimaginative",
    "uninspired",
    "unintended",
    "uninvited",
    "universal",
    "unmasked",
    "unorthodox",
    "unparalleled",
    "unpleasant",
    "unprincipled",
    "unread",
    "unreasonable",
    "unregulated",
    "unreliable",
    "unremitting",
    "unsafe",
    "unsanitary",
    "unsealed",
    "unsuccessful",
    "unsupervised",
    "untimely",
    "unwary",
    "unwrapped",
    "uppity",
    "upstart",
    "useless",
    "utter",
    "valiant",
    "valid",
    "valued",
    "vanilla",
    "vaulting",
    "vaunted",
    "veering",
    "vegetative",
    "vented",
    "verbal",
    "verifying",
    "veritable",
    "versed",
    "vinyl",
    "virgin",
    "visceral",
    "visual",
    "voluptuous",
    "walk-on",
    "wanton",
    "warlike",
    "washed",
    "waterproof",
    "waved",
    "weakest",
    "well-bred",
    "well-chosen",
    "well-informed",
    "wetting",
    "wheeled",
    "whirlwind",
    "widen",
    "widening",
    "willful",
    "willing",
    "winnable",
    "winningest",
    "wireless",
    "wistful",
    "woeful",
    "wooded",
    "woodland",
    "wordless",
    "workable",
    "worldly",
    "worldwide",
    "worst-case",
    "worsted",
    "worthless"
];