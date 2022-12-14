/** @format */

const durationInput = document.querySelector(`#duration`);
const startButton = document.querySelector(`#start`);
const pausetButton = document.querySelector(`#pause`);
const circle = document.querySelector(`circle`);

const perimeter = circle.getAttribute(`r`) * 2 * Math.PI;
circle.setAttribute(`stroke-dasharray`, perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pausetButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            `stroke-dashoffset`,
            (perimeter * timeRemaining) / duration
        );
        currentOffset = currentOffset - 1;
    },
    onComplete() {
        console.log(`timer completed`);
    },
});
