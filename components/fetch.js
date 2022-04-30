

let getData = async(url)=>{
    try{

        let res = await fetch(url);
        let data = res.json();
        return data;

    }catch(e){
        console.log("e: ", e);

    }
}

let appendData = (data,container) => {
    data.map(({urls:{small},alt_description})=>{
        let img = document.createElement("img");
        img.src = small;

        container.append(img);
    })
}

export {getData,appendData};