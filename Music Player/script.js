$(document).ready(function () {
    var currentIndex = 0;
    const defaultSong = [
        {
            name: "Dhee ft. Arivu - Enjoy Enjaami (Prod. Santhosh Narayanan)",
            path: "./asset/Dhee ft. Arivu - Enjoy Enjaami (Prod. Santhosh Narayanan)_eYq7WapuDLU.mp3"
        },
        {
            name: "Imagine Dragons - Believer",
            path: "./asset/Imagine Dragons - Believer (Lyrics)_W0DM5lcj6mw.mp3"
        },
        {
            name: "Manike Mage Hithe - Official Cover - Yohani & Satheeshan ",
            path: "./asset/Manike Mage Hithe  මැණිකේ මගේ හිතේ  - Official Cover - Yohani & Satheeshan_PgCliOxl41o.mp3"
        }
    ]
    var songs = defaultSong;

    //loadSong() loads the given song to the music player
    function loadSong(song) {
        $("#title").text(song.name)
        $("#song").attr("src", song.path)
        $('#song').get(0).play();
        $("#playpausebtn").removeClass("bx-play-circle")
        $("#playpausebtn").addClass("bx-pause-circle")
        $("#progress").css("width", `0%`)
    }
    loadSong(songs[currentIndex])

    //to change previous song
    $("#prevbtn").click(function () {
        currentIndex = currentIndex - 1
        if (currentIndex === -1)
            currentIndex = songs.length - 1
        loadSong(songs[currentIndex])

    })

    //To change next song
    $("#nextbtn").click(function () {
        currentIndex = ((currentIndex + 1) % songs.length)
        loadSong(songs[currentIndex])
    })

    //Check if you want to add custom files otherwise default song will be play
    $("#customSongs").on('input', function (e) {

        if (e.target.checked) {
            $("#filelabel").removeClass("d-none")
            $("#filelabel").addClass("d-flex")
            $("#song").get(0).pause();
            $("#playpausebtn").removeClass("bx-pause-circle")
            $("#playpausebtn").addClass("bx-play-circle")
        }
        else {
            $("#filelabel").removeClass("d-flex")
            $("#filelabel").addClass("d-none")
            songs = defaultSong;
            currentIndex = 0
            loadSong(songs[currentIndex])
        }
    })

    //Pause and play the song
    $("#playpausebtn").click(function () {
        if ($("#song").attr("src") == undefined)
            alert("please select song")
        else if ($("#playpausebtn").hasClass("bx-pause-circle")) {
            $("#song").get(0).pause();
            $("#playpausebtn").removeClass("bx-pause-circle")
            $("#playpausebtn").addClass("bx-play-circle")
        }
        else {
            $("#song").get(0).play();
            $("#playpausebtn").removeClass("bx-play-circle")
            $("#playpausebtn").addClass("bx-pause-circle")
        }
    })

    //It update the song progress
    $("#song").on('timeupdate', function () {
        $("#progress").css("width", `${(this.currentTime / this.duration) * 100}%`)
        if (((this.currentTime / this.duration) * 100) == 100) {
            $("#progress").css("width", `0%`)
            $("#playpausebtn").removeClass("bx-pause-circle")
            $("#playpausebtn").addClass("bx-play-circle")
        }
    })


    //To upload custom audio file
    $("#file").on('input', function (e) {
        var mysongs=[]
        res = e.target.files;
        for (let i = 0; i < res.length; ++i) {
            var url = URL.createObjectURL(res[i])
            var name = res[i].name
            mysongs.push({ "name": name, "path": url })
        } 
        songs=mysongs
        currentIndex=0
        loadSong(songs[currentIndex])
    })
})