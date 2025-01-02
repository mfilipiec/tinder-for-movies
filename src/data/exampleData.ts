// Movies with images were taken from tmdb.org database.
const movies = [
  {
    page: 0,
    list: [
      {
        id: '1005331',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/sjMN7DRi4sGiledsmllEw5HJjPy.jpg',
        title: 'Carry-On',
        summary:
          'An airport security officer races to outsmart a mysterious traveler forcing him to let a dangerous item slip onto a Christmas Eve flight.',
        rating: 6.9
      },
      {
        id: '35sa23f',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg',
        title: 'Avengers: Endgame',
        summary:
          'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.',
        rating: 8.1
      },
      {
        id: 'a2da312',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        title: 'Star Wars',
        summary:
          'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        rating: 8.2
      },
      {
        id: '323edfj',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
        title: 'Deadpool & Wolverine',
        summary:
          'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
        rating: 7.7
      },
      {
        id: '839033',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/hE9SAMyMSUGAPsHUGdyl6irv11v.jpg',
        title: 'The Lord of the Rings: The War of the Rohirrim',
        summary:
          '183 years before the events chronicled in the original trilogy, a sudden attack by Wulf, a clever and ruthless Dunlending lord seeking vengeance for the death of his father, forces Helm Hammerhand and his people to make a daring last stand in the ancient stronghold of the Hornburg. Finding herself in an increasingly desperate situation, Héra, the daughter of Helm, must summon the will to lead the resistance against a deadly enemy intent on their total destruction.',
        rating: 6.8
      },
      {
        id: 'g242acd',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        title: 'Avengers: Infinity War',
        summary:
          'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        rating: 8.2
      },
      {
        id: '1100782',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg',
        title: 'Smile 2',
        summary:
          'About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.',
        rating: 6.6,
        release_date: '2024-10-16',
        genres: ['Horror', 'Mystery']
      },
      {
        id: '772',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg',
        title: 'Home Alone 2: Lost in New York',
        summary:
          "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
        rating: 6.8,
        release_date: '1992-11-15',
        genres: ['Comedy', 'Family', 'Adventure']
      },
      {
        id: '698687',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iRCgqpdVE4wyLQvGYU3ZP7pAtUc.jpg',
        title: 'Transformers One',
        summary:
          'The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.',
        rating: 8.1,
        release_date: '2024-09-11',
        genres: ['Animation', 'Science Fiction', 'Adventure', 'Family']
      },
      {
        id: '1299652',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/wUSXPLD3tLWdesY7nYwUitYRI50.jpg',
        title: 'Watchmen: Chapter II',
        summary:
          'Suspicious of the events ensnaring their former colleagues, Nite Owl and Silk Spectre are spurred out of retirement to investigate. As they grapple with personal ethics, inner demons and a society turned against them, they race the clock to uncover a deepening plot that might trigger global nuclear war.',
        rating: 7.5,
        release_date: '2024-11-25',
        genres: ['Animation', 'Mystery', 'Science Fiction', 'Action']
      }
    ]
  },
  {
    page: 1,
    list: [
      {
        id: '1156593',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg',
        title: 'Your Fault',
        summary:
          "The love between Noah and Nick seems unwavering despite their parents' attempts to separate them. But his job and her entry into college open up their lives to new relationships that will shake the foundations of both their relationship and the Leister family itself.",
        rating: 7.2
      },
      {
        id: '558449',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6mkkb5XU6ERF7xP9nAjnNq9n7V.jpg',
        title: 'Gladiator II',
        summary:
          'Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.',
        rating: 6.8
      },
      {
        id: '845781',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dpskAcm71w5v8zQ8RmPmJiP31Om.jpg',
        title: 'Red One',
        summary:
          "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous tracker in a globe-trotting, action-packed mission to save Christmas.",
        rating: 7.0
      },
      {
        id: '939243',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mubt4bnVfpJ5lBMq93DidEuMkJr.jpg',
        title: 'Sonic the Hedgehog 3',
        summary:
          'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.',
        rating: 7.7
      },
      {
        id: '912649',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/aosm8NMQ3UyoBVpSxyimorCQykC.jpg',
        title: 'Venom: The Last Dance',
        summary:
          "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        rating: 6.8
      },
      {
        id: '1241982',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg',
        title: 'Moana 2',
        summary:
          "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        rating: 7.0
      },
      {
        id: '762509',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg',
        title: 'Mufasa: The Lion King',
        summary:
          'Told in flashbacks, Mufasa is an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion a journey of misfits searching for their destiny and working together to evade a threatening and deadly foe.',
        rating: 7.3
      },
      {
        id: '1010581',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/w46Vw536HwNnEzOa7J24YH9DPRS.jpg',
        title: 'My Fault',
        summary:
          "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
        rating: 7.9
      },
      {
        id: '1043905',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3O3qSGmjRGc10hMwFul8WDxKE5t.jpg',
        title: 'Dirty Angels',
        summary:
          "During the United States' 2021 withdrawal from Afghanistan, a group of female soldiers posing as medical relief are sent back in to rescue a group of kidnapped teenagers caught between ISIS and the Taliban.",
        rating: 6.9
      },
      {
        id: '402431',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg',
        title: 'Wicked',
        summary:
          "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
        rating: 7.4
      }
    ]
  },
  {
    page: 2,
    list: [
      {
        id: '1035048',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/sLJqbUymYkLvoNt4E7DG2E4ia6y.jpg',
        title: 'Elevation',
        summary:
          'A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.',
        rating: 6.3
      },
      {
        id: '1276945',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8pwdnL3pEISIN1EGmwZzU6hpNVk.jpg',
        title: 'Ferry 2',
        summary:
          "After losing his drug empire, Ferry Bouman has found a measure of peace away from Brabant's criminal underworld — until his past catches up to him.",
        rating: 5.7
      },
      {
        id: '933260',
        imageURL:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lqoMzCcZYEFK729d6qzt349fB4o.jpg',
        title: 'The Substance',
        summary:
          'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',
        rating: 7.2
      }
    ]
  }
];

export default movies;
