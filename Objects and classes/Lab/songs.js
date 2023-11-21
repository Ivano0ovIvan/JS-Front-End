function songs(arr) {
    let songsArr = []
    let numberOfSongs = arr.shift()
    let typeList = arr.pop()

    class Song {
        constructor (typeListOfSong, name, time) {
            this.typeListOfSong =typeListOfSong;
            this.name = name;
            this.time = time;
        }
    }

    for (let currentSong of arr) {
        const [typeListOfSong, name, time] = currentSong.split("_");
        //let currentSongObj = new Song(typeListOfSong, name, time);
        songsArr.push(new Song(typeListOfSong, name, time));
    }

    for (let currentSong of songsArr) {
        if (typeList === "all") {
            console.log(currentSong.name);
        }else {
            if (typeList === currentSong.typeListOfSong) {
                console.log(currentSong.name)
            }
        }
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
    )