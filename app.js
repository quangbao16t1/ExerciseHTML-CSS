function doA(ms) {
    let startDate = new Date().getTime();
    let endDate = startDate;

    // Await timer
    while(endDate < startDate + ms) {
        endDate = new Date().getTime();
    }
}

function doB(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}

const controller = async () => {
    const timeoutScheduled = Date.now();
    doA(3000);
    await doB(1000);
    console.log(new Date().getTime() - timeoutScheduled);
};

controller();
controller();
controller();