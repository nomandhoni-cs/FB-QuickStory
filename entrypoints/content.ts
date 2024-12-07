export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  main() {
    console.log("Facebook Video Story Uploader content script loaded.");

    // Function to handle changes on the page
    const handlePageChange = () => {
      const currentURL = window.location.href;
      console.log("Current URL:", currentURL);

      if (currentURL === "https://www.facebook.com/stories/create") {
        console.log("true");
        setTimeout(() => {
          // Modify the file input to accept video files
          const fileInput = document.querySelector<HTMLInputElement>(
            'input[type="file"][accept="image/*,image/heif,image/heic"]'
          );

          if (fileInput) {
            fileInput.setAttribute(
              "accept",
              "video/*,image/*,image/heif,image/heic"
            );
            console.log("Modified file input to accept video files.");

            // Add event listener to preview the video when selected
            fileInput.addEventListener("change", handleFileSelect);
          } else {
            console.warn("File input not found.");
          }

          // Update the "Create a Photo Story" text
          const photoStoryDiv = document.querySelector<HTMLDivElement>(
            "div.x9f619.x14ctfv.x78zum5.x67ct29.x117nqv4.xl56j7k.x5ib6vp.xc73u3c.x1n2onr6.x2b8uid.xh8yej3"
          );

          if (photoStoryDiv) {
            photoStoryDiv.textContent = "Create a Photo or Video Story";
            console.log('Updated text to include "Video".');
          } else {
            console.warn("Photo story div not found.");
          }

          console.log("false");
          // end of the function
        }, 0);
      }
    };

    // Function to handle file selection and show video preview
    const handleFileSelect = (event: Event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput?.files?.[0];

      if (file && file.type.startsWith("video")) {
        // Use MutationObserver to detect the preview container when available
        const observer = new MutationObserver(() => {
          const previewContainer = document.querySelector<HTMLElement>(
            '[aria-label="Preview"] > div:nth-child(2)'
          );

          if (previewContainer) {
            // Create the video element
            const videoPreview = document.createElement("video");
            videoPreview.controls = true;
            const videoURL = URL.createObjectURL(file);
            videoPreview.src = videoURL;

            // Apply styles to ensure video retains its natural size
            previewContainer.style.display = "flex";
            previewContainer.style.justifyContent = "center";
            previewContainer.style.alignItems = "center";
            previewContainer.style.height = "100%"; // Ensure the container has height to center vertically

            // Clear any previous content and add the video preview
            previewContainer.innerHTML = "";
            previewContainer.appendChild(videoPreview);

            // Add CSS to prevent cropping and maintain video size
            videoPreview.style.maxWidth = "100%";
            videoPreview.style.maxHeight = "100%";
            videoPreview.style.objectFit = "contain"; // Ensure video fits within its container without being cropped

            console.log("Video preview added.");
            observer.disconnect(); // Stop observing once the preview is added
          }
        });

        // Start observing the document for changes
        observer.observe(document.body, { childList: true, subtree: true });
      } else {
        console.warn("Selected file is not a video.");
      }
    };

    // Detect URL changes using MutationObserver and history API
    const observeURLChange = () => {
      let previousURL = window.location.href;

      // Observe DOM changes
      const observer = new MutationObserver(() => {
        const currentURL = window.location.href;
        if (currentURL !== previousURL) {
          previousURL = currentURL;
          handlePageChange();
        }
      });

      // Start observing the document for changes
      observer.observe(document, { childList: true, subtree: true });

      // Initial check
      handlePageChange();
    };

    // Start observing URL changes
    observeURLChange();
  },
});
