const secondToMinute = (time) => {
    let minutes = "0" + Math.floor(time / 60);
    let seconds = (Math.floor(time) % 60) < 10 ? "0" + (Math.floor(time) % 60) : (Math.floor(time) % 60);

    return minutes + ":" + seconds;
}

export default secondToMinute;