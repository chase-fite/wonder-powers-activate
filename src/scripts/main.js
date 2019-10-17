document.querySelector("#activate-flight").addEventListener("click", () => {
    flightHandlerFunction()
})

const flightHandlerFunction = () => {
    const flightSection = document.querySelector("#flight")
    if (flightSection.classList.contains("disabled")) {
        flightSection.classList.replace("disabled", "enabled")
    } else {
        flightSection.classList.replace("enabled", "disabled")
    }
}

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    mindReadingHandlerFunction()
})

const mindReadingHandlerFunction = () => {
    const mindReadingSeciton = document.querySelector("#mindreading")
    if (mindReadingSeciton.classList.contains("disabled")) {
        mindReadingSeciton.classList.replace("disabled", "enabled")
    } else {
        mindReadingSeciton.classList.replace("enabled", "disabled")
    }
}

document.querySelector("#activate-xray").addEventListener("click", () => {
    visionHandlerFunction()
})

const visionHandlerFunction = () => {
    const xraySection = document.querySelector("#xray")
    if (xraySection.classList.contains("disabled")) {
        xraySection.classList.replace("disabled", "enabled")
    } else {
        xraySection.classList.replace("enabled", "disabled")
    }
}


const activateAll = () => {
    const cList = document.querySelectorAll(".power")
    cList.forEach(element => {
        if (element.className.includes("disabled")) {
            element.classList.replace("disabled", "enabled")
        }
    })
}

const deactivateAll = () => {
    const cList = document.querySelectorAll(".power")
    cList.forEach(element => {
        if (element.className.includes("enabled")) {
            element.classList.replace("enabled", "disabled")
        }
    })
}

document.querySelector("#activate-all").addEventListener("click", () => {
    activateAll()
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
    deactivateAll()
})