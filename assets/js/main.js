
const trails = document.querySelectorAll(".trail");
const smoothPointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};
const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window.addEventListener("mousemove", (e) => {
    gsap.to(smoothPointer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

function updatePath() {
    trails.forEach((path, i) => {
        let points = path.points || [];
        points.unshift({ ...smoothPointer });

        while (points.length > totalPointsArray[i]) {
            points.pop();
        }

        path.points = points;

        if (points.length > 1) {
            let d = `M ${points[0].x} ${points[0].y}`;

            for (let k = 1; k < points.length; k++) {
                d += ` L ${points[k].x} ${points[k].y} `;
            }

            path.setAttribute("d", d);
        }
    });

    requestAnimationFrame(updatePath);
}

updatePath();


















