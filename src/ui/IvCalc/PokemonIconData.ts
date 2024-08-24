interface RectElement {
    x: number;
    y: number;
    w: number;
    h: number;
    r?: number;
    color: string;
};

const pokemonRectData: {[id: string]: RectElement[]} = {
    // Bulbasaur
    '1': [
        {x: 0, y: 0, w: 1, h: 0.35, color: '#84c886'},
        {x: 0, y: 0.35, w: 1, h: 0.65, color: '#a3eece'},
    ],
    // Ivysaur
    '2': [
        {x: 0, y: 0, w: 1, h: 0.4, color: '#58c77d'},
        {x: 0.35, y: 0.05, w: 0.3, h: 0.3, r: 0.3, color: '#f5788d'},
        {x: 0, y: 0.4, w: 1, h: 0.6, color: '#82e4e6'},
    ],
    // Venusaur
    '3': [
        {x: 0, y: 0, w: 1, h: 0.3, color: '#fa6e8b'},
        {x: 0, y: 0.3, w: 1, h: 0.6, color: '#4bd079'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#63e8e7'},
    ],
    // Charmander
    '4': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f49a5b'},
        {x: 0.2, y: 0.5, w: 0.6, h: 0.8, r: 0.3, color: '#f2e7b5'},
    ],
    // Charmeleon
    '5': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f37b67'},
        {x: 0.25, y: 0.55, w: 0.5, h: 0.7, r: 0.25, color: '#e9cfb6'},
    ],
    // Charizard
    '6': [
        {x: 0, y: 0, w: 1, h: 1, color: '#e9aa70'},
        {x: 0.25, y: 0.5, w: 0.5, h: 0.7, r: 0.25, color: '#fef8be'},
    ],
    // Squirtle
    '7': [
        {x: 0, y: 0, w: 1, h: 1, color: '#89d4f0'},
        {x: 0.2, y: 0.6, w: 0.6, h: 0.6, r: 0.2, color: '#eaddbf'},
    ],
    // Wartortle
    '8': [
        {x: 0, y: 0, w: 1, h: 1, color: '#a4bcfa'},
        {x: 0.2, y: 0.55, w: 0.6, h: 0.6, r: 0.2, color: '#e4d3b5'},
    ],
    // Blastoise
    '9': [
        {x: 0, y: 0, w: 1, h: 1, color: '#7fb5e1'},
        {x: 0.18, y: 0.5, w: 0.64, h: 0.6, r: 0.2, color: '#e9ddc2'},
    ],
    // Caterpie
    '10': [
        {x: 0, y: 0, w: 1, h: 1, color: '#93dc77'},
        {x: 0.25, y: 0.5, w: 0.5, h: 0.6, r: 0.1, color: '#feec9e'},
    ],
    // Metapod
    '11': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b8d777'},
    ],
    // Butterfree
    '12': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ebeef0'},
        {x: 0.4, y: 0, w: 0.2, h: 1, color: '#8d82c9'},
    ],
    // Rattata
    '19': [
        {x: 0, y: 0, w: 1, h: 0.55, color: '#ba90ce'},
        {x: 0, y: 0.55, w: 1, h: 0.45, color: '#eddcb6'},
    ],
    // Raticate
    '20': [
        {x: 0, y: 0, w: 1, h: 0.45, color: '#dca752'},
        {x: 0, y: 0.45, w: 1, h: 0.55, color: '#ebdda9'},
    ],
    // Ekans
    '23': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c499ec'},
    ],
    // Arbok
    '24': [
        {x: 0, y: 0, w: 1, h: 1, color: '#aba4ce'},
        {x: 0, y: 0.5, w: 1, h: 0.15, color: '#272833'},
    ],
    // Pikachu
    '25': [
        {x: 0, y: 0, w: 1, h: 0.15, color: '#3d3532'},
        {x: 0, y: 0.15, w: 1, h: 0.85, color: '#ffe14f'},
    ],
    // Raichu
    '26': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f9cb60'},
        {x: 0.2, y: 0.55, w: 0.6, h: 0.6, r: 0.1, color: '#fefefd'},
    ],
    // Clefairy
    '35': [
        {x: 0, y: 0, w: 1, h: 0.15, color: '#674328'},
        {x: 0, y: 0.15, w: 1, h: 0.85, color: '#ffd9e0'},
    ],
    // Clefable
    '36': [
        {x: 0, y: 0, w: 1, h: 0.1, color: '#714e2d'},
        {x: 0, y: 0.1, w: 1, h: 0.9, color: '#f7d7d6'},
    ],
    // Vulpix
    '37': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f5a478'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#ffa76c'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#e48860'},
    ],
    // Ninetales
    '38': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffffce'},
    ],
    // Jigglypuff
    '39': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fce3ea'},
    ],
    // Wigglytuff
    '40': [
        {x: 0, y: 0, w: 1, h: 0.7, color: '#fce3ea'},
        {x: 0, y: 0.5, w: 1, h: 0.6, r: 0.4, color: '#f9f9fa'},
    ],
    // Diglett
    '50': [
        {x: 0, y: 0, w: 1, h: 0.6, color: '#dea790'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#d7d8d9'},
        {x: 0.4, y: 0.35, w: 0.2, h: 0.1, r: 0.05, color: '#fed8fb'},
    ],
    // Dugtrio
    '51': [
        {x: 0, y: 0, w: 1, h: 0.7, color: '#dea790'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#d7d8d9'},
        {x: 0.12, y: 0.45, w: 0.2, h: 0.1, r: 0.05, color: '#fed8fb'},
        {x: 0.4, y: 0.2, w: 0.2, h: 0.1, r: 0.05, color: '#fed8fb'},
        {x: 0.68, y: 0.45, w: 0.2, h: 0.1, r: 0.05, color: '#fed8fb'},
    ],
    // Meowth
    '52': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f9f1d2'},
        {x: 0.35, y: 0.1, w: 0.3, h: 0.35, r: 0.15, color: '#fff090'},
    ],
    // Persian
    '53': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4eabf'},
        {x: 0.45, y: 0.1, w: 0.1, h: 0.1, r: 0.05, color: '#c54957'},
    ],
    // Psyduck
    '54': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffd962'},
        {x: 0.3, y: 0.4, w: 0.4, h: 0.2, color: '#fdefa8'},
        {x: 0.3, y: 0.4, w: 0.4, h: 0.4, r: 0.2, color: '#fdefa8'},
    ],
    // Golduck
    '55': [
        {x: 0, y: 0, w: 1, h: 1, color: '#80b5db'},
        {x: 0.35, y: 0.4, w: 0.3, h: 0.2, color: '#f6ecad'},
        {x: 0.35, y: 0.4, w: 0.3, h: 0.35, r: 0.15, color: '#f6ecad'},
    ],
    // Mankey
    '56': [
        {x: 0, y: 0, w: 1, h: 0.95, color: '#f6f0e8'},
        {x: 0, y: 0.95, w: 1, h: 0.05, color: '#bf9a7c'},
        {x: 0.4, y: 0.45, w: 0.2, h: 0.14, r: 0.07, color: '#edd3db'},
    ],
    // Primeape
    '57': [
        {x: 0, y: 0, w: 1, h: 0.95, color: '#f8f1ea'},
        {x: 0, y: 0.95, w: 1, h: 0.05, color: '#c29c7c'},
        {x: 0.35, y: 0.45, w: 0.3, h: 0.2, r: 0.1, color: '#e9bfc9'},
    ],
    // Growlithe
    '58': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f8a94a'},
        {x: 0, y: 0.4, w: 0.4, h: 0.6, color: '#f9e3bc'},
        {x: 0.4, y: 0, w: 0.6, h: 0.4, color: '#72685d'},
    ],
    // Arcanine
    '59': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f8a94a'},
        {x: 0, y: 0, w: 0.5, h: 1, color: '#f9e3bc'},
        {x: 0.5, y: 0, w: 0.5, h: 0.4, color: '#72685d'},
    ],
    // Bellsprout
    '69': [
        {x: 0, y: 0, w: 1, h: 0.6, color: '#fbff52'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#6bd473'},
    ],
    // Weepinbell
    '70': [
        {x: 0, y: 0, w: 1, h: 0.9, color: '#fbff52'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#f1b7ac'},
    ],
    // Victreebel
    '71': [
        {x: 0, y: 0, w: 1, h: 0.2, color: '#94ca7c'},
        {x: 0, y: 0.2, w: 1, h: 0.1, color: '#e6b8b1'},
        {x: 0, y: 0.3, w: 1, h: 0.7, color: '#fcfc75'},
    ],
    // Geodude
    '74': [
        {x: 0, y: 0, w: 1, h: 1, color: '#bfc0b5'},
    ],
    // Graveler
    '75': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c9c9bf'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#b5b5a8'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#b5b5a8'},
    ],
    // Golem
    '76': [
        {x: 0, y: 0, w: 1, h: 0.7, color: '#adb1a8'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#c7ad9e'},
    ],
    // Slowpoke
    '79': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f7c0d5'},
        {x: 0, y: 0.7, w: 1, h: 0.5, r: 0.3, color: '#fbf4d7'},
    ],
    // Slowbro
    '80': [
        {x: 0, y: 0, w: 0.6, h: 0.6, color: '#f7c0d5'},
        {x: 0, y: 0.6, w: 0.6, h: 0.4, color: '#fbf4d7'},
        {x: 0.6, y: 0, w: 0.4, h: 1, color: '#bed6e2'},
    ],
    // Magnemite
    '81': [
        {x: 0, y: 0, w: 0.85, h: 1, color: '#bad4d7'},
        {x: 0.85, y: 0, w: 0.15, h: 0.5, color: '#7dbeee'},
        {x: 0.85, y: 0.5, w: 0.15, h: 0.5, color: '#e46658'},
    ],
    // Magneton
    '82': [
        {x: 0, y: 0, w: 0.85, h: 1, color: '#bad4d7'},
        {x: 0.85, y: 0, w: 0.15, h: 0.5, color: '#7dbeee'},
        {x: 0.85, y: 0.5, w: 0.15, h: 0.5, color: '#e46658'},
        {x: 0, y: 0, w: 0.15, h: 0.5, color: '#7dbeee'},
        {x: 0, y: 0.5, w: 0.15, h: 0.5, color: '#e46658'},
    ],
    // Doduo
    '84': [
        {x: 0, y: 0, w: 1, h: 1, color: '#d6a070'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#f5e3d1'},
    ],
    // Dodrio
    '85': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ca9667'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#fce7ca'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#515151'},
    ],
    // Gastly
    '92': [
        {x: 0, y: 0, w: 1, h: 1, color: '#846e92'},
        {x: 0.1, y: 0.1, w: 0.8, h: 0.8, r: 0.4, color: '#3e3c44'},
    ],
    // Haunter
    '93': [
        {x: 0, y: 0, w: 1, h: 1, color: '#9389cb'},
        {x: 0.25, y: 0.4, w: 0.5, h: 0.15, r: 0.07, color: '#f78d8d'},
    ],
    // Gengar
    '94': [
        {x: 0, y: 0, w: 1, h: 1, color: '#7d75ab'},
        {x: 0.25, y: 0.4, w: 0.5, h: 0.15, r: 0.07, color: '#e2e6ea'},
    ],
    // Onix
    '95': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b5b3b6'},
    ],
    // Cubone
    '104': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ddba7f'},
        {x: 0, y: 0, w: 1, h: 0.5, color: '#f2f2f2'},
        {x: 0.1, y: 0.6, w: 0.8, h: 0.8, r: 0.2, color: '#f2ebd0'},
    ],
    // Marowak
    '105': [
        {x: 0, y: 0, w: 1, h: 1, color: '#debb80'},
        {x: 0, y: 0, w: 1, h: 0.5, color: '#f2f2f2'},
        {x: 0.2, y: 0.6, w: 0.6, h: 0.8, r: 0.2, color: '#f2ebd0'},
    ],
    // Kangaskhan
    '115': [
        {x: 0, y: 0, w: 1, h: 1, color: '#be8f6a'},
        {x: 0.1, y: 0.4, w: 0.8, h: 0.8, r: 0.3, color: '#f9e39a'},
        {x: 0.35, y: 0.8, w: 0.3, h: 0.3, r: 0.5, color: '#958575'},
    ],
    // Mr. Mime
    '122': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffe3e8'},
        {x: 0, y: 0.5, w: 1, h: 0.5, color: '#eff0f0'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#e88099'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#29718c'},
    ],
    // Pinsir
    '127': [
        {x: 0, y: 0, w: 1, h: 1, color: '#cd9d8a'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#e0dadd'},
    ],
    // Ditto
    '132': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c0b0ee'},
    ],
    // Eevee
    '133': [
        {x: 0, y: 0, w: 1, h: 1, color: '#e9b860'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#f8eabf'},
    ],
    // Vaporeon
    '134': [
        {x: 0, y: 0, w: 1, h: 1, color: '#93cae0'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#356c8e'},
    ],
    // Jolteon
    '135': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fae365'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#fefaef'},
    ],
    // Flareon
    '136': [
        {x: 0, y: 0, w: 1, h: 1, color: '#e7975e'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#fcf2a5'},
    ],
    // Dratini
    '147': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b4c4e3'},
        {x: 0.25, y: 0.4, w: 0.5, h: 1, r: 0.1, color: '#f8f9f8'},
    ],
    // Dragonair
    '148': [
        {x: 0, y: 0, w: 1, h: 1, color: '#82b0dd'},
        {x: 0.35, y: 0.5, w: 0.3, h: 1, r: 0.1, color: '#f7fbfb'},
    ],
    // Dragonite
    '149': [
        {x: 0, y: 0, w: 1, h: 1, color: '#faba50'},
        {x: 0.25, y: 0.55, w: 0.5, h: 1, r: 0.1, color: '#f7ecbf'},
    ],
    // Chikorita
    '152': [
        {x: 0, y: 0, w: 1, h: 1, color: '#d6e1ae'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#9cbb82'},
    ],
    // Bayleef
    '153': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f3ee9a'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#9fb365'},
    ],
    // Meganium
    '154': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c2e692'},
        {x: 0.2, y: 0.35, w: 0.6, h: 0.3, r: 0.25, color: '#e26093'},
    ],
    // Cyndaquil
    '155': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fceaa3'},
        {x: 0, y: 0, w: 1, h: 0.5, color: '#116e73'},
    ],
    // Quilava
    '156': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fceaa2'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#107377'},
    ],
    // Typhlosion
    '157': [
        {x: 0, y: 0, w: 1, h: 1, color: '#145a5f'},
        {x: 0, y: 0, w: 0.6, h: 1, color: '#fde56d'},
    ],
    // Totodile
    '158': [
        {x: 0, y: 0, w: 1, h: 1, color: '#70e9ea'},
        {x: 0, y: 0.5, w: 1, h: 0.2, color: '#eee29f'},
    ],
    // Croconaw
    '159': [
        {x: 0, y: 0, w: 1, h: 1, color: '#50cae5'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#fedc89'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#ee6c77'},
    ],
    // Feraligatr
    '160': [
        {x: 0, y: 0, w: 1, h: 1, color: '#50cae5'},
        {x: 0, y: 0.8   , w: 1, h: 0.2, color: '#fbdc91'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#e4565f'},
    ],
    // Pichu
    '172': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fcfb8c'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#373c3e'},
    ],
    // Cleffa
    '173': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffdcd5'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#9a7b55'},
    ],
    // Igglybuff
    '174': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fef2f2'},
    ],
    // Togepi
    '175': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f9f0c2'},
        {x: 0, y: 0.5, w: 1, h: 0.5, color: '#fffff2'},
        {x: 0, y: 0.9, w: 0.5, h: 0.1, color: '#83c5e8'},
        {x: 0.5, y: 0.9, w: 0.5, h: 0.1, color: '#df7753'},
    ],
    // Togetic
    '176': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f9f8f6'},
        {x: 0, y: 0.9, w: 0.5, h: 0.1, color: '#83c5e8'},
        {x: 0.5, y: 0.9, w: 0.5, h: 0.1, color: '#df7753'},
    ],
    // Mareep
    '179': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fff4c2'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#76b1e2'},
    ],
    // Flaaffy
    '180': [
        {x: 0, y: 0, w: 1, h: 1, color: '#eff4ee'},
        {x: 0, y: 0.4, w: 1, h: 0.6, color: '#f2b1c7'},
    ],
    // Ampharos
    '181': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fbd354'},
        {x: 0.2, y: 0.5, w: 0.6, h: 0.7, r: 0.3, color: '#fefffe'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#46463e'},
    ],
    // Sudowoodo
    '185': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c1907a'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#8fc261'},
    ],
    // Wooper
    '194': [
        {x: 0.1, y: 0.15, w: 0.8, h: 0.6, r: 0.35, color: '#6cecff'},
        {x: 0.3, y: 0.65, w: 0.4, h: 0.4, r: 0.2, color: '#6cecff'},
        {x: 0.46, y: 0.78, w: 0.08, h: 0.04, r: 0.025, color: '#0c5a8f'},
        {x: 0.43, y: 0.85, w: 0.14, h: 0.04, r: 0.025, color: '#0c5a8f'},
        {x: 0.4, y: 0.92, w: 0.2, h: 0.04, r: 0.025, color: '#0c5a8f'},
    ],
    // Quagsire
    '195': [
        {x: 0.1, y: 0, w: 0.8, h: 1, r: 0.3, color: '#95ecff'},
        {x: 0.05, y: 0.4, w: 0.9, h: 0.6, r: 0.2, color: '#95ecff'}
    ],
    // Espeon
    '196': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ebd9e8'},
        {x: 0.43, y: 0.2, w: 0.14, h: 0.14, r: 0.07, color: '#d85861'},
    ],
    // Umbreon
    '197': [
        {x: 0, y: 0, w: 1, h: 1, color: '#5b6365'},
        {x: 0, y: 0.1, w: 1, h: 0.1, color: '#f2da66'},
    ],
    // Slowking
    '199': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f6c2d5'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#eff0f0'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#fbf4d6'},
        {x: 0, y: 0.3, w: 0.5, h: 0.1, color: '#fefdfd'},
        {x: 0.5, y: 0.3, w: 0.5, h: 0.1, color: '#d75e50'},
    ],
    // Wobbuffet
    '202': [
        {x: 0.7, y: 0.8, w: 0.3, h: 0.25, r: 0.2, color: '#484848'},
        {x: 0.2, y: 0.05, w: 0.6, h: 1.2, r: 0.2, color: '#8ce0f8'},
        {x: 0.87, y: 0.87, w: 0.08, h: 0.08, r: 0.04, color: '#ffffff'}
    ],
    // Steelix
    '208': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b6bccd'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#858da5'},
    ],
    // Heracross
    '214': [
        {x: 0, y: 0, w: 1, h: 1, color: '#5f87ae'},
    ],
    // Delibird
    '225': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ec5551'},
        {x: 0, y: 0, w: 1, h: 0.4, color: '#f6fdff'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#ffe882'},
    ],
    // Houndour
    '228': [
        {x: 0, y: 0, w: 1, h: 1, color: '#5f5b56'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#e4e0db'},
        {x: 0, y: 0.6, w: 1, h: 0.2, color: '#eb8b59'},
    ],
    // Houndoom
    '229': [
        {x: 0, y: 0, w: 1, h: 1, color: '#575045'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#d7d0c6'},
        {x: 0, y: 0.5, w: 1, h: 0.2, color: '#eb8c53'},
    ],
    // Raikou
    '243': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fae04a'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#c4a4d9'},
        {x: 0, y: 0, w: 0.3, h: 1, color: '#dff0fa'},
    ],
    // Entei
    '244': [
        {x: 0, y: 0, w: 1, h: 1, color: '#cda269'},
        {x: 0, y: 0, w: 0.5, h: 0.3, color: '#ea4c45'},
        {x: 0, y: 0, w: 0.5, h: 0.1, color: '#ffef56'},
        {x: .5, y: 0, w: 0.7, h: 0.4, color: '#f7fef8'},
    ],
    // Suicune
    '245': [
        {x: 0, y: 0, w: 1, h: 1, color: '#63eaf9'},
        {x: 0, y: 0, w: 0.5, h: 0.3, color: '#0fcce3'},
        {x: .5, y: 0, w: 0.7, h: 0.5, color: '#9284d5'},
    ],
    // Larvitar
    '246': [
        {x: 0, y: 0, w: 1, h: 1, color: '#a6c06d'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#ca4f6a'},
    ],
    // Pupitar
    '247': [
        {x: 0, y: 0, w: 1, h: 1, color: '#89a5d0'},
    ],
    // Tyranitar
    '248': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c2dba1'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#788bb7'},
    ],
    // Ralts
    '280': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b6d7af'},
        {x: 0, y: 0, w: 1, h: 0.05, color: '#dd717c'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#f3f6fa'},
    ],
    // Kirlia
    '281': [
        {x: 0, y: 0, w: 1, h: 1, color: '#aed8ab'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#dd717c'},
        {x: 0, y: 0.4, w: 1, h: 0.4, color: '#f2f6fa'},
    ],
    // Gardevoir
    '282': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f2f6fa'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#aed8ab'},
        {x: 0.45, y: 0.4, w: 0.1, h: 0.15, r: 0.1, color: '#dd717c'},
    ],
    // Slakoth
    '287': [
        {x: 0, y: 0, w: 1, h: 1, color: '#e8ded2'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#a18370'},
    ],
    // Vigoroth
    '288': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f2f2f2'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#e7767d'},
        {x: 0, y: 0.2, w: 1, h: 0.1, color: '#a98b6e'},
    ],
    // Slaking
    '289': [
        {x: 0, y: 0, w: 1, h: 1, color: '#87714f'},
        {x: 0.4, y: 0, w: 0.4, h: 1, color: '#d0b993'},
        {x: 0.8, y: 0, w: 0.2, h: 1, color: '#f3f4f4'},
    ],
    // Sableye
    '302': [
        {x: 0, y: 0, w: 1, h: 1, color: '#977ecf'},
        {x: 0.4, y: 0.4, w: 0.2, h: 0.25, r: 0.1, color: '#f06686'},
    ],
    // Gulpin
    '316': [
        {x: 0, y: 0, w: 1, h: 1, color: '#add5a8'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#fae18b'},
    ],
    // Swalot
    '317': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b9abd9'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#5e5c5d'},
    ],
    // Swablu
    '333': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4f4f4'},
        {x: 0.25, y: 0.4, w: 0.5, h: 0.5, r: 0.25, color: '#3edbff'},
    ],
    // Altaria
    '334': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4f4f4'},
        {x: 0.35, y: 0.2, w: 0.3, h: 0.4, color: '#3ddbfe'},
        {x: 0.35, y: 0.1, w: 0.3, h: 0.3, r: 0.15, color: '#3ddbfe'},
    ],
    // Shuppet
    '353': [
        {x: 0, y: 0, w: 1, h: 1, color: '#878bb7'},
    ],
    // Banette
    '354': [
        {x: 0, y: 0, w: 1, h: 1, color: '#8d8d8d'},
        {x: 0, y: 0.4, w: 1, h: 0.1, color: '#fbe492'},
    ],
    // Absol
    '359': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fdfdfd'},
        {x: 0, y: 0, w: 1, h: 0.2, color: '#637cb7'},
    ],
    // Wynaut
    '360': [
        {x: 0.15, y: 0.15, w: 0.7, h: 0.7, r: 0.33, color: '#96e9f0'},
        {x: 0.6, y: 0.85, w: 0.35, h: 0.15, r: 0.1, color: '#494949'},
        {x: 0.83, y: 0.89, w: 0.08, h: 0.08, r: 0.04, color: '#ffffff'},
        {x: 0.26, y: 0.65, w: 0.48, h: 0.4, r: 0.3, color: '#96e9f0'},
        {x: 0.25, y: 0.8, w: 0.5, h: 0.2, r: 0.1    , color: '#96e9f0'},
    ],
    // Spheal
    '363': [
        {x: 0, y: 0, w: 1, h: 1, color: '#90c2fb'},
        {x: 0, y: 0.5, w: 1, h: 0.5, color: '#fff7dd'},
    ],
    // Sealeo
    '364': [
        {x: 0, y: 0, w: 1, h: 1, color: '#69defe'},
        {x: 0, y: 0.55, w: 1, h: 0.45, color: '#fef4d6'},
    ],
    // Walrein
    '365': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fafafa'},
        {x: 0, y: 0.45, w: 1, h: 0.1, color: '#fff1d4'},
        {x: 0, y: 0.55, w: 1, h: 0.55, color: '#6dcce8'},
    ],
    // Bonsly
    '438': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c1907a'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#8fc261'},
    ],
    // Mime Jr.
    '439': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffe0ee'},
        {x: 0, y: 0, w: 1, h: 0.35, color: '#4479ab'},
        {x: 0.4, y: 0.6, w: 0.2, h: 0.2, r: 0.1, color: '#f97b95'},
    ],
    // Riolu
    '447': [
        {x: 0, y: 0, w: 1, h: 1, color: '#7ab9d5'},
        {x: 0, y: 0.3, w: 1, h: 0.3, color: '#57646b'},
    ],
    // Lucario
    '448': [
        {x: 0, y: 0, w: 1, h: 1, color: '#42b4dd'},
        {x: 0, y: 0.3, w: 1, h: 0.3, color: '#58646b'},
        {x: 0, y: 0.6, w: 1, h: 0.1, color: '#f9f5b1'},
    ],
    // Croagunk
    '453': [
        {x: 0, y: 0, w: 1, h: 1, color: '#5597c2'},
        {x: 0, y: 0.4, w: 1, h: 0.2, color: '#f5f4f1'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#56534e'},
    ],
    // Toxicroak
    '454': [
        {x: 0, y: 0, w: 1, h: 1, color: '#60a1ce'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#d77a73'},
    ],
    // Snover
    '459': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4f4f4'},
        {x: 0, y: 0.5, w: 1, h: 0.3, color: '#62a3ab'},
        {x: 0, y: 0.7, w: 1, h: 0.3, color: '#b39888'},
    ],
    // Abomasnow
    '460': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4f4f4'},
        {x: 0, y: 0.65, w: 1, h: 0.35, color: '#62a3ab'},
    ],
    // Magnezone
    '462': [
        {x: 0, y: 0, w: 1, h: 1, color: '#b8d2ee'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#c1c6c9'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#ffdc3e'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#878587'},
    ],
    // Togekiss
    '468': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f2f9fa'},
        {x: 0, y: 0, w: 0.35, h: 0.2, color: '#fc5300'},
        {x: 0.65, y: 0, w: 0.35, h: 0.2, color: '#49b9d8'},
    ],
    // Leafeon
    '470': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fcf3c2'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#77d099'},
        {x: 0, y: 0.3, w: 1, h: 0.1, color: '#aedb9e'},
    ],
    // Glaceon
    '471': [
        {x: 0, y: 0, w: 1, h: 1, color: '#c3e4e3'},
        {x: 0, y: 0, w: 1, h: 0.4, color: '#5ebbd2'},
    ],
    // Gallade
    '475': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f2f6fa'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#0dba6d'},
        {x: 0.45, y: 0.4, w: 0.1, h: 0.15, r: 0.1, color: '#dd717c'},
    ],
    // Sylveon
    '700': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffffff'},
        {x: 0, y: 0, w: 1, h: 0.25, color: '#f5a6b7'},
        {x: 0, y: 0.2, w: 1, h: 0.1, color: '#a9e2fb'},
        {x: 0, y: 0.8, w: 1, h: 0.2, color: '#f5a6b7'},
    ],
    // Dedenne
    '702': [
        {x: 0, y: 0, w: 1, h: 1, color: '#efb44e'},
        {x: 0, y: 0.5, w: 1, h: 0.7, r: 0.25, color: '#fefaaa'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#4b4441'},
    ],
    // Stufful
    '759': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffc2d0'},
        {x: 0, y: 0.2, w: 1, h: 0.2, color: '#fffcfc'},
        {x: 0, y: 0.6, w: 1, h: 0.4, color: '#715449'},
    ],
    // Bewear
    '760': [
        {x: 0, y: 0, w: 1, h: 1, color: '#ffc2d0'},
        {x: 0, y: 0.4, w: 1, h: 0.6, color: '#49504c'},
    ],
    // Comfey
    '764': [
        {x: 0, y: 0, w: 0.34, h: 0.34, color: '#f6f6ea'},
        {x: 0, y: 0.66, w: 0.34, h: 0.34, color: '#f55d5e'},
        {x: 0, y: 0.30, w: 0.42, h: 0.42, r: 0.05, color: '#f0f49a'},
        {x: 0.34, y: 0.66, w: 0.34, h: 0.34, color: '#fded59'},
        {x: 0.66, y: 0.66, w: 0.34, h: 0.34, color: '#f38bc8'},
        {x: 0.66, y: 0.34, w: 0.34, h: 0.34, color: '#e33336'},
        {x: 0.66, y: 0, w: 0.34, h: 0.34, color: '#f5d266'},
        {x: 0.34, y: 0, w: 0.34, h: 0.34, color: '#feadd3'},
    ],
    // Cramorant
    '845': [
        {x: 0, y: 0, w: 1, h: 1, color: '#339eff'},
        {x: 0.2, y: 0.5, w: 0.6, h: 0.5, r: 0.2, color: '#e3ecff'},
        {x: 0.3, y: 0.2, w: 0.4, h: 0.15, r: 0.2, color: '#ffea63'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#5f6f73'},
    ],
    // Sprigatito
    '906': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fcffe0'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#7dc556'},
        {x: 0.15, y: 0.25, w: 0.7, h: 0.55, r: 0.32, color: '#7dc556'},
    ],
    // Floragato
    '907': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fcffe0'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#73d168'},
        {x: 0.2, y: 0.3, w: 0.6, h: 0.4, r: 0.3, color: '#4e8351'},
        {x: 0.1, y: 0.9, w: 0.8, h: 0.8, r: 0.1, color: '#75d169'},
        {x: 0.7, y: 0.7, w: 0.3, h: 0.3, r: 0.15, color: '#e05a8e'},
    ],
    // Meowscarada
    '908': [
        {x: 0, y: 0, w: 1, h: 1, color: '#feffed'},
        {x: 0.1, y: 0, w: 0.8, h: 1, color: '#485440'},
        {x: 0.42, y: 0.3, w: 0.16, h: 0.16, r: 0.05, color: '#57aa5e'},
        {x: 0.25, y: 0.5, w: 0.16, h: 0.16, r: 0.05, color: '#57aa5e'},
        {x: 0.59, y: 0.5, w: 0.16, h: 0.16, r: 0.05, color: '#57aa5e'},
        {x: 0.3, y: -0.2, w: 0.4, h: 0.4, r: 0.2, color: '#feffed'},
        {x: 0.3, y: 0.8, w: 0.4, h: 0.19, r: 0.1, color: '#feffed'},
        {x: 0, y: 0.9, w: 1, h: 0.2, color: '#e36586'},
    ],
    // Fuecoco
    '909': [
        {x: 0, y: 0, w: 1, h: 1, color: '#f4693f'},
        {x: 0.1, y: 0.2, w: 0.8, h: 0.5, r: 0.25, color: '#fffffb'},
        {x: 0.1, y: 0.4, w: 0.8, h: 0.3, r: 0.15, color: '#fffffb'},
        {x: 0, y: 0, w: 1, h: 0.1, color: '#feef7b'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#51545c'},
        {x: 0.2, y: 0.9, w: 0.6, h: 0.1, color: '#fffada'},
    ],
    // Crocalor
    '910': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fb6855'},
        {x: 0.2, y: 0.3, w: 0.6, h: 0.5, r: 0.2, color: '#fffffb'},
        {x: 0.2, y: 0.6, w: 0.6, h: 0.2, color: '#fffffb'},
        {x: 0, y: 0, w: 1, h: 0.3, color: '#fec960'},
        {x: 0.4, y: 0, w: 0.2, h: 0.25, r: 0.2, color: '#fffe86'},
        {x: 0, y: 0.9, w: 1, h: 0.2, color: '#56534b'},
    ],
    // Skeledirge
    '911': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fe5d5c'},
        {x: 0, y: 0, w: 1, h: 0.25, color: '#fea51d'},
        {x: 0, y: 0.25, w: 1, h: 0.25, color: '#ffff4c'},
        {x: 0.3, y: 0.2, w: 0.4, h: 0.5, r: 0.15, color: '#ffffff'},
        {x: 0.3, y: 0.5, w: 0.4, h: 0.5, color: '#ffffff'},
        {x: 0.4, y: 0.6, w: 0.2, h: 0.2, r: 0.1, color: '#f3a919'},
        {x: 0.45, y: 0.65, w: 0.1, h: 0.1, r: 0.05, color: '#ffff4d'},
        {x: 0.4, y: 0.25, w: 0.2, h: 0.18, color: '#de5dff'},
        {x: 0, y: 0.9, w: 1, h: 0.2, color: '#56534b'},
    ],
    // Quaxly
    '912': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fefefe'},
        {x: 0, y: 0, w: 1, h: 0.55, r: 0.5, color: '#72f5fa'},
        {x: 0.2, y: 0.65, w: 0.6, h: 0.3, r: 0.5, color: '#fff575'},
    ],
    // Quaxwell
    '913': [
        {x: 0, y: 0, w: 1, h: 1, color: '#fefefe'},
        {x: 0.25, y: 0, w: 0.5, h: 0.4, r: 0.5, color: '#48a4f4'},
        {x: 0.25, y: 0.25, w: 0.5, h: 0.2, color: '#48a4f4'},
        {x: 0.35, y: 0.25, w: 0.3, h: 0.2, color: '#fefefe'},
        {x: 0.25, y: 0.25, w: 0.5, h: 0.1, color: '#5adcec'},
        {x: 0.35, y: 0.4, w: 0.3, h: 0.2, r: 0.5, color: '#fff575'},
        {x: 0, y: 0.65, w: 1, h: 0.15, color: '#48a4f4'},
        {x: 0.3, y: 0.9, w: 0.4, h: 0.1, color: '#fff575'},
    ],
    // Quaquaval
    '914': [
        {x: 0, y: 0, w: 1, h: 1, color: '#5878e8'},
        {x: 0.45, y: 0, w: 0.1, h: 0.2, r: 0.2, color: '#b9ffff'},
        {x: 0, y: 0.2, w: 1, h: 0.1, color: '#ff4217'},
        {x: 0, y: 0.3, w: 0.3, h: 0.7, color: '#bdffff'},
        {x: 0.7, y: 0.3, w: 0.3, h: 0.7, color: '#bdffff'},
        {x: 0.3, y: 0.3, w: 0.4, h: 0.3, color: '#f0ffff'},
        {x: 0.35, y: 0.4, w: 0.3, h: 0.2, r: 0.5, color: '#fff575'},
        {x: 0, y: 0.9, w: 1, h: 0.1, color: '#ffdd6e'},
        {x: 0, y: 0.96, w: 1, h: 0.1, color: '#f87e53'},
    ],
};

export default pokemonRectData;
