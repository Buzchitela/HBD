
let currentStep = 1;
const totalSteps = 5;

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (currentStep / totalSteps) * 100;
    progressBar.style.width = percentage + '%';
}

function showStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    const newStep = document.getElementById(`step${stepNumber}`);
    if (newStep) {
        newStep.classList.add('active');
        currentStep = stepNumber;
        updateProgress();
    }
}

function throwConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    }, 250);

    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-btn').addEventListener('click', () => showStep(2));
    document.getElementById('next-btn-2').addEventListener('click', () => showStep(3));
    document.getElementById('next-btn-3').addEventListener('click', () => showStep(4));
    document.getElementById('next-btn-4').addEventListener('click', () => showStep(5));
    document.getElementById('confetti-btn').addEventListener('click', throwConfetti);

    updateProgress();
});