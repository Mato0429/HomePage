window.addEventListener("DOMContentLoaded" , e => {
    //要素を選択
    const video = document.querySelector("#video");
    const PlayBtn = document.querySelector("#play");
    const MuteBtn = document.querySelector("#mute");
    const resetBtn = document.querySelector("#reset");

    //再生と一時停止変数
    let PlayAndPause = 0;
    let MuteOn = 0;

    //再生ボタン処理
    PlayBtn.addEventListener("click" , e => {
        //関数の呼び出し
        playfunc();
    })

    //ミュートボタン処理
    MuteBtn.addEventListener("click" ,e => {
        //関数の呼び出し
        mutefunc();
    })
    
    //リセットボタン処理
    resetBtn.addEventListener("click" , e => {
        video.currentTime = 0;
    });

    //updateで処理
    video.addEventListener("timeupdate" , e => {
        //シークバータイム
        const current = Math.floor(video.currentTime)
        const duration = Math.round(video.duration)
        const seektime = document.querySelector("#seek");
        if (!isNaN(duration)) {
            const percent = 
            Math.round((video.currentTime/video.duration)*1000)/10
            document.getElementById('seek').style.backgroundSize = 
            percent + '%'
            seektime.innerHTML = (`${current} / ${duration}`);
        }
    })

    //シークバークリック
    document.getElementById('seek').addEventListener("click", (e) => {
        const duration = Math.round(video.duration);
        if(!isNaN(duration)){
          const mouse = e.pageX;
          const element = document.getElementById('seek');
          const rect = element.getBoundingClientRect();
          const position = rect.left + window.pageXOffset;
          const offset = mouse - position;
          const width = rect.right - rect.left;
          video.currentTime = Math.round(duration * (offset / width));
        }
      })
    
    //再生と一時停止関数
    function playfunc(){
        PlayAndPause ++;
        if ((PlayAndPause %= 2) == 1){
            video.play();
            PlayBtn.innerHTML = (`pause`);
        }
        else{
            video.pause();
            PlayBtn.innerHTML = (`play`);
        }
    }

    //ミュート関数
    function mutefunc(){
        MuteOn ++;
        if ((MuteOn %= 2) == 1){
            video.muted = true;
        }
        else{
            video.muted = false;
        }
    }

})
