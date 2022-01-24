function gameObject() {
    return {
         home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
             "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Brook Lopez": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Mason Plumlee": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Jason Terry": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            }
          }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
            "Jeff Adrien": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "DeSagna Diop": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 5,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 12,
                assists: 12,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
          }
        }
    }
}

function numPointsScore(name) {
    const game = gameObject()
        // console.log('game', game)
        for (const gameKey in game) { 
            const teamObj = game[gameKey] 
                const playerObj = teamObj.players
            // console.log('team object', teamObj)
            // console.log('player object', playerObj)
                for (const playerKey in playerObj) {
                // console.log('player key', playerKey)
                // console.log('player name', name)
                    if (playerKey === name) {
                // console.log('if true', playerKey === name)
                        return playerObj[playerKey].points
                    }
                }
        } 
}


numPointsScore("Brendan Haywood")
debugger