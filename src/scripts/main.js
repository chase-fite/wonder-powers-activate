// document.querySelector("#activate-flight").addEventListener("click", () => {
//     flightHandlerFunction()
// })

// const flightHandlerFunction = () => {
//     const flightSection = document.querySelector("#flight")
//     if (flightSection.classList.contains("disabled")) {
//         flightSection.classList.replace("disabled", "enabled")
//     } else {
//         flightSection.classList.replace("enabled", "disabled")
//     }
// }

// document.querySelector("#activate-mindreading").addEventListener("click", () => {
//     mindReadingHandlerFunction()
// })

// const mindReadingHandlerFunction = () => {
//     const mindReadingSeciton = document.querySelector("#mindreading")
//     if (mindReadingSeciton.classList.contains("disabled")) {
//         mindReadingSeciton.classList.replace("disabled", "enabled")
//     } else {
//         mindReadingSeciton.classList.replace("enabled", "disabled")
//     }
// }

// document.querySelector("#activate-xray").addEventListener("click", () => {
//     visionHandlerFunction()
// })

// const visionHandlerFunction = () => {
//     const xraySection = document.querySelector("#xray")
//     if (xraySection.classList.contains("disabled")) {
//         xraySection.classList.replace("disabled", "enabled")
//     } else {
//         xraySection.classList.replace("enabled", "disabled")
//     }
// }


// const activateAll = () => {
//     const cList = document.querySelectorAll(".power")
//     cList.forEach(element => {
//         if (element.className.includes("disabled")) {
//             element.classList.replace("disabled", "enabled")
//         }
//     })
// }

// const deactivateAll = () => {
//     const cList = document.querySelectorAll(".power")
//     cList.forEach(element => {
//         if (element.className.includes("enabled")) {
//             element.classList.replace("enabled", "disabled")
//         }
//     })
// }

// document.querySelector("#activate-all").addEventListener("click", () => {
//     activateAll()
// })

// document.querySelector("#deactivate-all").addEventListener("click", () => {
//     deactivateAll()
// })

// -----------------------------------------------------------------------------------------------

// one function to rule them all

const oneFunction = () => {
    document.querySelector("#activate-flight").addEventListener("click", () => {
        (document.querySelector("#flight").classList.replace("disabled", "enabled") ||
        document.querySelector("#flight").classList.replace("enabled", "disabled")) 
    })
    document.querySelector("#activate-mindreading").addEventListener("click", () => {
        (document.querySelector("#mindreading").classList.replace("disabled", "enabled") ||
        document.querySelector("#mindreading").classList.replace("enabled", "disabled")) 
    })
    document.querySelector("#activate-xray").addEventListener("click", () => {
        (document.querySelector("#xray").classList.replace("disabled", "enabled") ||
        document.querySelector("#xray").classList.replace("enabled", "disabled")) 
    })
    document.querySelector("#activate-all").addEventListener("click", () => {
        const cList = document.querySelectorAll(".power")
        cList.forEach(element => {
            element.classList.replace("disabled", "enabled")
        })
    })
    document.querySelector("#deactivate-all").addEventListener("click", () => {
        const cList = document.querySelectorAll(".power")
        cList.forEach(element => {
            element.classList.replace("enabled", "disabled")
        })
    })
}

oneFunction()