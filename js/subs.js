const subscribeButtons = document.querySelectorAll(".btn-subscribe");
const subscriptionPlanElement = document.getElementById("subscriptionPlan");

subscribeButtons.forEach(button => {
    button.addEventListener("click", function () {
        const plan = button.getAttribute("data-plan");
        subscriptionPlanElement.textContent = plan;
    });
});