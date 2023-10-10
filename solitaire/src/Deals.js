import Card from './Card.js';
import NullCard from './NullCard.js';

let deals = [
    [
        [
            {"card": <NullCard />, "used": false}
        ], //Diamond Stack
        [
            {"card": <NullCard />, "used": false}
        ], //Heart Stack
        [
            {"card": <NullCard />, "used": false}
        ], //Club Stack
        [
            {"card": <NullCard />, "used": false}
        ], //Spade Stack
        [
            {"card": <Card id={"sa"} number={"Ace"} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"c5"} number={5} suit={"club"} clickable={false} />, "used": false},
            {"card": <Card id={"d7"} number={7} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"hj"} number={"Jack"} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"s2"} number={2} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"s8"} number={8} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"d10"} number={10} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"hq"} number={"Queen"} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"c5"} number={5} suit={"club"} clickable={false} />, "used": false},
            {"card": <Card id={"d2"} number={2} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"h9"} number={9} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"sj"} number={"Jack"} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"c3"} number={3} suit={"club"} clickable={false} />, "used": false},
            {"card": <Card id={"d8"} number={8} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"c9"} number={9} suit={"club"} clickable={false} />, "used": false},
            {"card": <Card id={"sk"} number={"King"} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"h2"} number={2} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"da"} number={"Ace"} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"s2"} number={2} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"s6"} number={6} suit={"spade"} clickable={false} />, "used": false},
            {"card": <Card id={"h8"} number={8} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"d10"} number={10} suit={"diamond"} clickable={false} />, "used": false},
            {"card": <Card id={"ha"} number={"Ace"} suit={"heart"} clickable={false} />, "used": false},
            {"card": <Card id={"c7"} number={7} suit={"club"} clickable={false} />, "used": false}
        ], //Deal
        [
            {"card": <Card id={"dk"} number={"King"} suit={"diamond"} z={1} clickable={false} />, "used": false}
        ], //playing-1
        [
            {"card": <Card id={"h10"} number={10} suit={"heart"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"sk"} number={"King"} suit={"spade"} z={2} clickable={false} />, "used": false}
        ], //playing-2
        [
            {"card": <Card id={"c9"} number={9} suit={"club"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"h6"} number={6} suit={"heart"} z={2} clickable={false} />, "used": false},
            {"card": <Card id={"d3"} number={3} suit={"diamond"} z={3} clickable={false} />, "used": false}
        ], //playing-3
        [
            {"card": <Card id={"h4"} number={4} suit={"heart"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"sq"} number={"Queen"} suit={"spade"} z={2} clickable={false} />, "used": false},
            {"card": <Card id={"h4"} number={4} suit={"heart"} z={3} clickable={false} />, "used": false},
            {"card": <Card id={"cq"} number={"Queen"} suit={"club"} clickable={false} z={4} />, "used": false}
        ], //playing-4
        [
            {"card": <Card id={"c3"} number={3} suit={"club"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"h10"} number={10} suit={"heart"} z={2} clickable={false} />, "used": false},
            {"card": <Card id={"s7"} number={7} suit={"spade"} z={3} clickable={false} />, "used": false},
            {"card": <Card id={"sj"} number={"Jack"} suit={"spade"} z={4} clickable={false} />, "used": false},
            {"card": <Card id={"c5"} number={5} suit={"club"} z={5} clickable={false} />, "used": false}
        ], //playing-5
        [
            {"card": <Card id={"d5"} number={5} suit={"diamond"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"c4"} number={4} suit={"club"} z={2} clickable={false} />, "used": false},
            {"card": <Card id={"da"} number={"Ace"} suit={"diamond"} z={3} clickable={false} />, "used": false},
            {"card": <Card id={"h6"} number={6} suit={"heart"} z={4} clickable={false} />, "used": false},
            {"card": <Card id={"c9"} number={9} suit={"club"} z={5} clickable={false} />, "used": false},
            {"card": <Card id={"s3"} number={3} suit={"spade"} z={6} clickable={false} />, "used": false}
        ], //playing-6
        [
            {"card": <Card id={"c7"} number={7} suit={"club"} z={1} clickable={false} />, "used": false},
            {"card": <Card id={"dq"} number={"Queen"} suit={"diamond"} clickable={false} z={2} />, "used": false},
            {"card": <Card id={"s4"} number={4} suit={"spade"} z={3} clickable={false} />, "used": false},
            {"card": <Card id={"dk"} number={"King"} suit={"diamond"} z={4} clickable={false} />, "used": false},
            {"card": <Card id={"h6"} number={6} suit={"heart"} z={5} clickable={false} />, "used": false},
            {"card": <Card id={"d8"} number={8} suit={"diamond"} z={6} clickable={false} />, "used": false},
            {"card": <Card id={"cj"} number={"Jack"} suit={"club"} z={7} clickable={false} />, "used": false}
        ], //playing-7
    ],
]

export default deals;