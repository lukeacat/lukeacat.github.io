
    // get time at https://www.epochconverter.com/
    
    const settings = {
      motd: Math.random() * Number.MAX_SAFE_INTEGER,
      arttime: 1611766875
    };

    [...document.getElementsByClassName("cap")].forEach(e=>e.innerHTML=settings.motd);
    document.getElementById("time").innerHTML = new Date(settings.arttime*1000).toLocaleString();
    document.querySelectorAll("img").forEach(e=>e.src=`https://dogwiththebutteronhim.tk/art/${e.id}.png`);
