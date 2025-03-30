document.addEventListener("DOMContentLoaded", function() {
    const coordinatorsBtn = document.querySelector(".coordinators-btn");
    const coordinatorsModal = document.getElementById("coordinatorsModal");
    const closeCoordinatorsBtn = document.querySelector(".close-coordinators");
    const feedbackSubmitBtn = document.querySelector(".submit-btn");
    const feedbackInput = document.querySelector(".feedback-input");

    // Event Pictures Modal Variables
    const eventPicturesBtn = document.querySelector(".event-pictures-btn");
    const picturesModal = document.getElementById("picturesModal");
    const galleryImage = document.getElementById("galleryImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const closeGalleryBtn = document.getElementById("closeGalleryBtn");

    // Sample event images (replace with actual image paths)
    const eventImages = [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
    ];

    let currentImageIndex = 0;

    // Function to update gallery image
    function updateGalleryImage(index) {
      galleryImage.src = eventImages[index];
    }

    // Automatic slide show
    function startAutoSlide() {
      return setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % eventImages.length;
        updateGalleryImage(currentImageIndex);
      }, 5000);
    }

    let autoSlideInterval;

    // Event Listeners for Gallery
    eventPicturesBtn.addEventListener("click", () => {
      picturesModal.style.display = "flex";
      currentImageIndex = 0;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });

    closeGalleryBtn.addEventListener("click", () => {
      picturesModal.style.display = "none";
      clearInterval(autoSlideInterval);
    });

    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentImageIndex = (currentImageIndex - 1 + eventImages.length) % eventImages.length;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentImageIndex = (currentImageIndex + 1) % eventImages.length;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });

    picturesModal.addEventListener("click", (event) => {
      if (event.target === picturesModal) {
        picturesModal.style.display = "none";
        clearInterval(autoSlideInterval);
      }
    });

    // Existing Coordinators Modal Listeners
    coordinatorsBtn.addEventListener("click", () => {
      coordinatorsModal.style.display = "flex";
    });

    closeCoordinatorsBtn.addEventListener("click", () => {
      coordinatorsModal.style.display = "none";
    });

    coordinatorsModal.addEventListener("click", (event) => {
      if (event.target === coordinatorsModal) {
        coordinatorsModal.style.display = "none";
      }
    });

    // Feedback Submission
    const logoutButton = document.querySelector(".userinfo");

    if (logoutButton) {
        logoutButton.addEventListener("click", async () => {
            try {
                const response = await fetch("/logout", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    window.location.href = data.redirectUrl; // Redirect to login page
                } else {
                    alert("Logout failed. Please try again.");
                }
            } catch (error) {
                console.error("Logout error:", error);
                alert("An error occurred. Please try again.");
            }
        });
    }
  });
