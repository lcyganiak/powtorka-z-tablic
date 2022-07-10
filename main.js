const movies = [
    {
      id: 2,
      actors: [],
      jesiensiredniowiecza: [],
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
      actors: ["Arnold"], 
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
      actors: ["sylwester", "Mariola"], 
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
      actors: ["Jack", "Adam", "Henryk"], 
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

  const onlySzin = movies.find(item => item.name === "The Shining") // pojedyniczy el. z przeszukiwanej tablicy 
  console.log(onlySzin)

  const arr = [5 , 50, 60, 70] 

  const arrMap = arr.filter(item => item > 10) 

// zad 1 zwróć tablicę z samimy tytułami, filmów dłuższych niż 120 minut. Oczewiwany rezultat ['Pulp Fiction', 'The Shining']
//   const more_120 = movies.map(item => item.runningTimeInMinutes > 120)  to błędnę rozwiązanie, od komentuj i sparawdz co zwraca // 
// console.log(more_120)
  const more120 = movies.filter(item => item.runningTimeInMinutes > 120)

  console.log('Wyfiltowana tablica ',more120)

  const more120OnyName = more120.map(item => item.name)
  console.log(more120OnyName)
  const mapAndFilter = movies.filter(item => item.runningTimeInMinutes > 120).map(item => item.name)


  // zad 2 zwróć tablicę z samimy tytułami, filmów w tablicy genres mają action Oczewiwany rezultat ['Pulp Fiction', 'Pulp Fiction', 'Rambo']

  const onlyAct = movies.filter(item => item.genres.includes('action')).map(item => item.name)
console.log(onlyAct)

let count = 0 // sprawdza ile razy robi się pętla, bez wpływu na funkcję 
let arrOnlyAct = []

// altwrnatywa dla rozwiązania  const onlyAct = movies.filter(item => item.genres.includes('action')).map(item => item.name), dużo mniej wydajna 
for(let i = 0; i < movies.length; i++) {
    count += 1 // inaczej zapisane count = count + 1 
    for(let j = 0; j < movies[i].genres.length; j ++) {
        count += 1
        if(movies[i].genres[j] === 'action') {
            arrOnlyAct.push(movies[i].name)
        }
    }
}
console.log(arrOnlyAct)
console.log(count)

const anyAwards = movies.filter(item => item.wonAnyAwards === true)


const xd = movies.filter(item => {

// console.log(item.wonAnyAwards) 
// console.log(item.wonAnyAwards === true)

console.log(!!item.actors)  // dwa !! zminiają dowolną wartość w Boolean , trzeba pamiętać że w przypadku tablic o długość 0 zwróci nam

const parowanieDoBoll = Boolean(item.actors.length)

// w JS 0 to false
// poprawny If w tym wypadku to :
// item.actors.length > 0  - 
// item.actors.length, ponieważ zwraca nam liczę reprezentującą długość tablicy a w JS 0 ( number ) to false 
// 
// działania sporawdzające długość tablicy 
// console.log(parowanieDoBoll)
if(item.actors.length > 0) {
    // console.log("są aktorzy")
} else {
    
    // console.log("nie mam aktorów")
}


// dziłanie na objektach 

console.log(item.jesiensiredniowiecza)
// hasOwn 
const isJesiensiredniowiecza = Object.hasOwn(item, 'jesiensiredniowiecza') // zawsze zwraca true / false

// hasOwnProperty
const isJesiensiredniowiecza2 = item.hasOwnProperty('jesiensiredniowiecza')



    return item
})




// // item.wonAnyAwards === true  to samo co  item.wonAnyAwards

// if( item.wonAnyAwards === true) { // sprawdzam czy mam pieniądze na koncie 
//     //
// }

// if( item.wonAnyAwards) {  // czy sa pieniądze 
//     //
// }

// hasOwnProperty na tablicach 

// const arry = [ 5000, 5, 6, 800]

// arry.hasOwnProperty(5) // false ponieważ nie mam takiego indexu w tablicy 
// arry.hasOwnProperty(2) // zwróci true ponieważ index 2 jest dostepny w tablicy




const obj1 = {a : "1", b: "2"}

const obj2 = {a: '3', c: '5'}

const obj3 = {d: "6", e: "7"}

// jak połączyć objekty 

const laczenieObjektow = {
 ...obj1, ...obj2, ...obj3
} // tak zrywamy referencje 

// const laczenieObjektowElegancki = Object.assign({}, obj1, obj2, obj3)

obj1.a = '1000000000000000'
obj3.d = '55252525'
console.log('spredOperator',laczenieObjektow)
// console.log('assign', laczenieObjektowElegancki)

const kobieta = {
    name: "Gosia",
    age: 40,
    sName: "Kowalska"
}

const dziecko = {
    nameCh: "Janek"
}

const kobietaZminna = {
    children:[{ ...dziecko}],
    ...kobieta,
    sName: 'Nowak',
}
console.log(kobietaZminna)