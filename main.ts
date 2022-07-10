const movies2: any = [
    {
      id: 2,
      name: "Pulp Fiction",
      releaseDate: "03-09-1994",
      runningTimeInMinutes: 154,
      wonAnyAwards: true,
      genres: ["action", "fantasy", "sci-fi"],
      poster: {
        name: "pulp",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8.9", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "92", scoreType: "percent" },
        { criticName: "Metacritic", score: "94", scoreType: "percent" }
      ],
      description:
        "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals."
    },
    {
      id: 1,
      name: "Terminator",
      releaseDate: "26-10-1984",
      runningTimeInMinutes: 107,
      wonAnyAwards: true,
      genres: ["drama", "action", "crime"],
      poster: {
        name: "term",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "100", scoreType: "percent" },
        { criticName: "Metacritic", score: "84", scoreType: "percent" }
      ],
      description:
        "The Terminator is a 1984 American science fiction film directed by James Cameron. It stars ... of the time was unable to create the liquid Terminator, and returned to the idea with the T-1000 character in Terminator 2: Judgment Day (1991)"
    },
    {
      id: 4,
      name: "Rambo",
      releaseDate: "22-10-1982",
      runningTimeInMinutes: 99,
      wonAnyAwards: true,
      genres: ["thriller", "action"],
      poster: {
        name: "rambo",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "7", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "46", scoreType: "percent" }
      ],
      description:
        "Rambo enables a missionary and her comrades to enter Burma. Two weeks later, he gets a call requesting help as the missionaries have been held hostage by Burmese soldiers. He sets out to save them."
    },
    {
      id: 3,
      name: "The Shining",
      releaseDate: "23-05-1980",
      runningTimeInMinutes: 146,
      wonAnyAwards: false,
      genres: ["mystery", "psychological", "horror"],
      poster: {
        name: "shining",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8.4", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "85", scoreType: "percent" }
      ],
      description:
        "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members."
    }
  ];


  const more1200: any[] = movies.filter(item => item.runningTimeInMinutes > 120)[0].name

  console.log('Wyfiltowana tablica ',more1200)

  const more1200OnyName: string[] = more1200.map(item => item.name)
